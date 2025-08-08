import { QueueOptions, WorkerOptions } from 'bullmq';

const connection = {
  host: 'localhost',
  port: 6379,
};

export const defaultQueueOptions: QueueOptions = {
  connection,
  defaultJobOptions: {
    attempts: 3,
    removeOnComplete: true,
  },
};

export const defaultWorkerOptions: WorkerOptions = {
  connection,
  concurrency: 5,
  lockDuration: 30000,
};
