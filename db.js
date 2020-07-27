import { config } from 'dotenv';
import { Pool } from 'pg';
config();

if (!pool) {
    var pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        idleTimeoutMillis: 0
    });
    pool
        ? console.log('Connected to PostgreSQL')
        : console.log('Failed to connect to database');
}

export async function queryDB(query, params=[]) {
    try {
        var client = await pool.connect(),
            { rows } = await client.query(query, params);
    } catch (e) { console.log(e) }
    finally { client.release() }
    return rows;
}

export async function getCategories() {
    let categories = await queryDB("SELECT * FROM categories WHERE title <> 'Headlines' AND title <> 'Labyrinth' ORDER BY title");

    for (let category of categories) {
        for (let id of category.articles) {
            let hydratedArticle = await queryDB("SELECT * FROM articles WHERE id = $1", [id]);
            category.articles.splice(category.articles.indexOf(id), 1, hydratedArticle[0]);
        }
    }

    return categories.map(category => ({ ...category, articles: category.articles.sort(({publish_date: a}, {publish_date: b}) => b-a) }));
}

export async function insertUser(name, email) {
    await queryDB('INSERT INTO users (name, email, comments, following) VALUES ($1, $2, $3, $4)', [name, email, [], []]);
}

export async function getUser(email) {
   let [user] = await queryDB('SELECT * FROM users WHERE email = $1', [email]);
    return user;
}

export default pool