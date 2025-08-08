import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Job } from 'bullmq';
import { QueueNames } from '../queue.constants';
import { SendEmailJob } from '../jobs/email.job';

@Injectable()
@Processor(QueueNames.EMAIL)
export class EmailWorker extends WorkerHost {
  async process(job: Job<SendEmailJob>): Promise<void> {
    const { to, subject, body } = job.data;
    console.log(`Sending email to ${to}: ${subject}`);
  }

  @OnWorkerEvent('completed')
  onCompleted(job: Job) {
    console.log(`✅ Email job completed: ${job.id}`);
  }

  @OnWorkerEvent('failed')
  onFailed(job: Job, err: Error) {
    console.error(`❌ Email job failed: ${job.id}`, err.message);
  }
}
