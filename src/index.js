import 'babel-polyfill';
import dotenv from 'dotenv';

import connectToMongoDB from './config/db';

// Configure dotenv
dotenv.config();

import configureApp from './config/app';
import {getEnv, debug} from './config/util';

const PORT = getEnv('PORT') || 3000;
const app = configureApp();

connectToMongoDB();

app.listen(PORT, () => debug(`Alko product API is running @ http://127.0.0.1:${PORT}`));
