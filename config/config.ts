import type { IEnvironment } from '@/types/common/env';

const config: IEnvironment = {
  APP_ENV: process.env.APP_ENV || 'development',
  API_URL: process.env.API_URL || 'http://localhost:5000',
};

export default config;
