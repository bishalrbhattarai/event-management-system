import { Model, Document } from 'mongoose';
import { IDatabaseInterface } from './database.interface';

export abstract class DatabaseRepository<T extends Document> implements IDatabaseInterface<T> {
  constructor(protected readonly model: Model<T>) {}

  abstract findByEmail(email: string): Promise<T | null>;
  abstract createUser(data: Partial<T>): Promise<T>;

  async create(data: Partial<T>): Promise<T> {
    return this.model.create(data);
  }
}
