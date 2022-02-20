import { RedisOptions } from 'ioredis';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

interface ICacheConfig {
  config: {
    redis: RedisOptions;
  };
  driver: string;
}

export default {
  config: {
    redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASS,
    },
  },
  driver: 'redis',
} as ICacheConfig;
