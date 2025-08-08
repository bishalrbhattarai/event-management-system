import { Model } from 'mongoose';
import { Event, EventDocument } from '../schemas/event.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { DatabaseRepository } from 'src/shared/database/database.repository';

@Injectable()
export class EventRepository extends DatabaseRepository<EventDocument> {
  constructor(@InjectModel(Event.name) private readonly eventModel: Model<EventDocument>) {
    super(eventModel);
  }

  async findByEmail(email: string): Promise<EventDocument | null> {
    // Not applicable for events, but required by base class
    return null;
  }

  async createUser(data: Partial<EventDocument>): Promise<EventDocument> {
    // Not applicable for events, but required by base class
    return this.eventModel.create(data);
  }

  async findAll(): Promise<EventDocument[]> {
    return this.eventModel.find().exec();
  }

  async findById(id: string): Promise<EventDocument | null> {
    return this.eventModel.findById(id).exec();
  }

  async update(id: string, data: Partial<EventDocument>): Promise<EventDocument | null> {
    return this.eventModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<EventDocument | null> {
    return this.eventModel.findByIdAndDelete(id).exec();
  }

  async findByTitle(title: string): Promise<EventDocument | null> {
    return this.eventModel.findOne({ title }).exec();
  }

  async findByDateRange(startDate: Date, endDate: Date): Promise<EventDocument[]> {
    return this.eventModel.find({
      startDate: { $gte: startDate },
      endDate: { $lte: endDate }
    }).exec();
  }

  async findUpcomingEvents(): Promise<EventDocument[]> {
    const now = new Date();
    return this.eventModel.find({
      startDate: { $gte: now }
    }).sort({ startDate: 1 }).exec();
  }
}
