import { Injectable } from '@nestjs/common';
import { EventRepository } from './repositories/event.repository';
import { CreateEventInput } from './inputs/create-event.input';
import { CreateEventDto } from './dtos/create-event.dto';
import { EventDocument } from './schemas/event.schema';
import * as moment from 'moment-timezone';

@Injectable()
export class EventService {
  constructor(private readonly eventRepository: EventRepository) {}

  async createEvent(createEventInput: CreateEventInput): Promise<EventDocument> {
    // Convert GraphQL input to DTO
    const createEventDto: CreateEventDto = {
      title: createEventInput.title,
      description: createEventInput.description,
      startDate: createEventInput.startDate,
      startTime: createEventInput.startTime,
      endDate: createEventInput.endDate,
      endTime: createEventInput.endTime,
      location: createEventInput.location,
      timeZone: createEventInput.timeZone,
    };

    // Convert date/time strings to UTC Date objects using moment-timezone
    const startDateTime = this.convertToUTC(
      createEventDto.startDate, 
      createEventDto.startTime, 
      createEventDto.timeZone
    );
    
    const endDateTime = this.convertToUTC(
      createEventDto.endDate, 
      createEventDto.endTime, 
      createEventDto.timeZone
    );

    // Prepare data for database
    const eventData = {
      title: createEventDto.title,
      description: createEventDto.description,
      startDate: startDateTime,
      endDate: endDateTime,
      timeZone: createEventDto.timeZone,
      location: createEventDto.location,
    };

    return await this.eventRepository.create(eventData);
  }

  private convertToUTC(dateStr: string, timeStr: string, timeZone: string): Date {
    const [day, month, year] = dateStr.split('/');
    const formattedDate = `${year}-${month}-${day}`;
    
    const dateTimeString = `${formattedDate} ${timeStr}`;
    
    return moment.tz(dateTimeString, "YYYY-MM-DD HH:mm", timeZone).utc().toDate();
  }

  async getAllEvents(): Promise<EventDocument[]> {
    return await this.eventRepository.findAll();
  }

  async getEventsForTimezone(userTimeZone: string): Promise<any[]> {
    const events = await this.eventRepository.findAll();
    
    return events.map(event => {
      const startDateTime = moment.utc(event.startDate).tz(userTimeZone);
      const endDateTime = moment.utc(event.endDate).tz(userTimeZone);
      
      return {
        id: event._id.toString(),
        title: event.title,
        description: event.description,
        startDate: startDateTime.format('DD/MM/YY'),
        startTime: startDateTime.format('h:mmA').toLowerCase(),
        endDate: endDateTime.format('DD/MM/YY'),
        endTime: endDateTime.format('h:mmA').toLowerCase(),
        location: event.location,
        timeZone: userTimeZone,
      };
    });
  }



}
