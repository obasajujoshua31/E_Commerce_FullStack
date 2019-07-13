import { createConnection } from 'typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';
const parentDir = join(__dirname, '..');

dotenv.config();
const databaseConnection = async () => {
  const connection = await createConnection({
    type: 'mysql',
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    entities: [`${parentDir}/**/*.entity.js`],
    synchronize: false,
    migrations: ['dist/migration/**/*.js'],
    subscribers: ['dist/subscriber/**/*.js'],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber',
    },
  });

  return connection;
};

export default databaseConnection;
