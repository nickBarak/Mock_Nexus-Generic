// import uuid from 'uuidv4';
import { testEmail } from '../../Functions';
import { queryDB, getUser, insertUser } from '../../db';
import { uuid } from 'uuidv4';

export default async function (req, res) {
	let newUser,
		{ name, email, content, article_id, parent, post_date } = req.body;
	if (!testEmail(email)) {
		res.json(1);
		res.end();
		return;
	}
	let hydratedComment = {
		article_id,
		content,
		post_date,
		parent,
		replies: [],
		id: uuid()
	};
	try {
		let user = await getUser(email);
		if (user) {
			if (user.name !== name) {
				res.json(2);
				res.end();
				return;
			}
			await queryDB(
				'UPDATE users SET comments = array_append(comments, $1) WHERE email = $2',
				[hydratedComment, email]
			);
		} else {
			newUser = true;
			await insertUser(name, email);
		}
		if (parent) {
			let [
				comments,
			] = await queryDB('SELECT comments FROM articles WHERE id = $1', [
				article_id,
			]);
			function addReply(level) {
				return level.map(comment => {
					let { replies } = comment;
					return comment.id === parent
						? replies.push({ name, email, ...hydratedComment })
						: replies.find(({ id }) => id === parent)
							? replies
									.find(({ id }) => id === parent)
									.replies.push({
										name,
										email,
										...hydratedComment,
									})
							: replies.length
								? addReply(replies)
								: 0;
				});
			}
			addReply(comments.comments);
			await queryDB('UPDATE articles SET comments = $1 WHERE id = $2', [
				comments.comments,
				article_id,
			]);
		} else
			await queryDB(
				'UPDATE articles SET comments = array_append(comments, $1) WHERE id = $2',
				[{ name, email, ...hydratedComment }, article_id]
			);
		if (newUser) {
			res.json(3);
			res.end();
			return;
		}
		res.json(0);
		res.end();
	} catch (e) {
		console.log(e);
	}
}
