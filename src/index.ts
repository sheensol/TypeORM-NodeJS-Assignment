import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { createConnection, Connection } from 'typeorm';

import * as server from './server';

dotenv.config();

async function run() {
  try {
    const connection: Connection = await createConnection();

    const config: server.IConfig = {
      port: process.env.PORT ? Number(process.env.PORT) : 8080,
      deps: { connection },
    };

    server.start(config);
  } catch (error) {
    // tslint:disable-next-line
    console.log(error);
  }
}

run();
