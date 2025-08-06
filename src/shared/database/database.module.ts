import { DynamicModule, Module } from '@nestjs/common';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
export const MONGO_URI = 'mongodb://localhost/event-management';
@Module({
  imports: [MongooseModule.forRoot(MONGO_URI)],
})
export class DatabaseModule {
  static forFeature(models: ModelDefinition[]): DynamicModule {
    return MongooseModule.forFeature(models);
  }
}
