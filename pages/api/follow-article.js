import { testEmail } from '../../Functions';
import { queryDB, insertUser, getUser } from '../../db';

export default async function(req, res) {
    let newUser,
        { name, email, articleID, following } = req.body;
    if (!testEmail(email)) { res.json(1); res.end(); return }
    try {
        let user = await getUser(email);
        if (user) {
            if (user.name !== name) { res.json(2); res.end(); return }
        } else {
            newUser = true;
            await insertUser(name, email);
        }
        await queryDB(`UPDATE users SET following = array_${!following ? 'append' : 'remove'}(following, $1) WHERE email = $2`, [articleID, email]);
        await queryDB(`UPDATE articles SET followers = array_${!following ? 'append' : 'remove'}(followers, $1) WHERE id = $2`, [email, articleID]);
        if (newUser) { res.json(3); res.end(); return }
        res.json(0);
        res.end();
    } catch (e) { console.log(e) }
}