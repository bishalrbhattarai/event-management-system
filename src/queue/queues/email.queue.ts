import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { Injectable } from '@nestjs/common';
import { QueueNames } from '../queue.constants';
import { SendEmailJob } from '../jobs/email.job';

@Injectable()
export class EmailQueueService {
  constructor(
    @InjectQueue(QueueNames.EMAIL)
    private readonly emailQueue: Queue
  ) {}

  async sendEmail(job: SendEmailJob) {
    await this.emailQueue.add('send-email', job);
  }
}
