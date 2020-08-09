// const fs = require('fs');
// const { Pool } = require('pg');

// async function getCategories() {
//     try {
//         const pool = new Pool({ connectionString: 'postgresql://postgres:Malone21@localhost:5432/Mock_Nexus', idleTimeoutMillis: 0 });
//         let client = await pool.connect();
//         var { rows } = await client.query("SELECT title, articles FROM categories WHERE title <> 'Headlines' AND title <> 'Labyrinth' ORDER BY title", []);
//         client.release();
//         for (let category of rows) {
//             for (let id of category.articles) {
//                 let client = await pool.connect();
//                 let { rows } = await client.query("SELECT * FROM articles WHERE id = $1", [id]);
//                 client.release();
//                 await category.articles.splice(category.articles.indexOf(id), 1, rows[0]);
//             }
//         }   
//     } catch (e) { console.log(e) }
//     return rows.map(row => ({ ...row, articles: row.articles.sort(({publish_date: a}, {publish_date: b}) => b-a).slice(0, 3)}));
// }

// (async _=> {
//     try {
//         fs.writeFileSync(__dirname + '\\data\\index.js', 'export default ' + JSON.stringify(await getCategories()));
//     } catch (e) { console.log(e) }
//     finally { console.log('finished') }
// })();

// console.log(Math.ceil(809/15))

let ary = [];
console.log(ary.push(11));