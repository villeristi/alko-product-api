import mongoose from 'mongoose'
// import util from 'util';

import {debug, getEnv} from './util';

export default async () => {
  mongoose.Promise = Promise;
  return mongoose.connect(getEnv('DB_CONNECTION'));
}
