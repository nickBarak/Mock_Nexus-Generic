require('dotenv').config();

export const pool = require('pg').Pool({
    connectionString: process.env.DATABASE_URL,
    idleTimeoutMillis: 0
});
pool
    ? console.log('Connected to PostgreSQL')
    : console.log('Failed to connect to database');

export async function queryDB(res, query, params=[]) {
    try {
        const client = await pool.connect();
        const { rows } = await client.query(query, params);
        res.json(rows);
    } catch (e) { console.log(e) }
    finally { client.release() }
}

export default pool;