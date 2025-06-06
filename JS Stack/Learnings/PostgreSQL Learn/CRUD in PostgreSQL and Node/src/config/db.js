import Knex from 'knex';
import dotenv from 'dotenv';
import { Model } from 'objection';

dotenv.config();

const knex = Knex({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    },
    pool: {
        min: 2,
        max: 10
    }
});

// Bind Objection models to this knex instance
Model.knex(knex);

// Check if the database is connected properly
knex.raw('select 1+1 as result')
    .then(() => {
        console.log('Database connection has been established');
    })
    .catch(err => {
        console.error('Failed to connect to the database:', err);
    });

export default knex;
