import { Module } from '@nestjs/common';
import { EmailQueueService } from './queues/email.queue';
import { EmailWorker } from './workers/email.worker';
import { QueueNames } from './queue.constants';
import { defaultQueueOptions } from './queue.config';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    BullModule.registerQueue({
      name: QueueNames.EMAIL,
      ...defaultQueueOptions,
    }),
  ],
  providers: [EmailQueueService, EmailWorker],
  exports: [EmailQueueService],
})
export class QueueModule {}
