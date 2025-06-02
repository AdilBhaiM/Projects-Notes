import pkg from 'pg';
import dotenv from 'dotenv'
const { Pool } = pkg;

dotenv.config()

const db_pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})




db_pool.on("connect", () => {
    console.log(`Database connection has been established`);
})

export default db_pool;


