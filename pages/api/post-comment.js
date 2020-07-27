import { queryDB, getUser, insertUser } from '../../db';
// import uuid from 'uuidv4';
import { testEmail } from '../../Functions';

export default async function(req, res) {
    let newUser,
        { name, email, content, article_id, parent, post_date } = req.body;
    if (!testEmail(email)) { res.json(1); res.end(); return }
    let hydratedComment = { article_id, content, post_date, parent, replies: [], id: Math.random() };
    try {
        let user = await getUser(email);
        if (user) {
            if (user.name !== name) { res.json(2); res.end(); return }
            await queryDB('UPDATE users SET comments = array_append(comments, $1) WHERE email = $2', [hydratedComment, email]);
        } else {
            newUser = true;
            await insertUser(name, email);
        }
        if (parent) {
            let comments = await queryDB('SELECT comments FROM articles WHERE id = $1', [article_id]);
            function editReplies(level) {
                return level.map((comment, {replies}) =>
                    replies.find(({id}) => id === parent)
                        ? ({ ...comment, replies: [...replies.filter(({id}) => id !== parent), hydratedComment] })
                        : replies.length
                            ? editReplies(level)
                            : comment);
            }
            await queryDB('UPDATE articles SET comments = $1 WHERE id = $2', [editReplies(comments), article_id]);
        } else await queryDB('UPDATE articles SET comments = array_append(comments, $1) WHERE id = $2', [{name, email, ...hydratedComment}, article_id]);
        if (newUser) { res.json(3); res.end(); return }
        res.json(0);
        res.end();
    } catch (e) { console.log(e) }
}