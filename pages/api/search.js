import { queryDB } from '../../db';

export default async function (req, res) {
	try {
		const results = await queryDB(
			`SELECT * FROM
                (SELECT DISTINCT ON
                    (id) id,
                    title,
                    category,
                    subcategory,
                    publish_date,
                    full_thumbnail,
                    mobile_thumbnail,
                    description,
                    content,
                    src_url,
                    author,
                    related,
                    comments,
                    followers
                FROM articles) x
                WHERE
                    LOWER(title) LIKE LOWER('%${req.query.value}%')
                    OR LOWER(description) LIKE LOWER('%${req.query.value}%')
                    OR LOWER(category) LIKE LOWER('%${req.query.value}%')
                    OR LOWER(subcategory) LIKE LOWER('%${req.query.value}%')
                    OR LOWER(content) LIKE LOWER('%${req.query.value}%')`
		);
		const authorArticleIDs = await queryDB(
			`SELECT articles FROM authors WHERE LOWER(name) LIKE LOWER('%${req.body.value}%')`
		);
		const authorResults = await queryDB(
			'SELECT * FROM articles WHERE id = ANY($1)',
			[authorArticleIDs]
		);
		res.json(
			results
				? authorResults
					? [...results, ...authorResults]
					: results
				: authorResults
				? authorResults
				: []
		);
		res.end();
	} catch (e) {
		console.log(e);
	}
}
