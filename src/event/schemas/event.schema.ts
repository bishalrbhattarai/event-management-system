import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from 'mongoose';

@Schema({
  timestamps: true,
})
export class Event {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ required: true })
  timeZone: string;

  @Prop({ required: true })
  location: string;
}

export type EventDocument = Event & Document & { _id: mongoose.Types.ObjectId };
export const EventSchema = SchemaFactory.createForClass(Event);