import { testEmail } from '../../Functions';
import { queryDB, insertUser, getUser } from '../../db';
import nodemailer from 'nodemailer';
import { config } from 'dotenv';
config();

export default async function (req, res) {
	let newUser,
		{
			name,
			email,
			articleID,
			following,
			articleTitle,
			articleURL,
		} = req.body;
	if (!testEmail(email)) {
		res.json(1);
		return
	}
	try {
		console.log(1);
		let user = await getUser(email);
		if (user) {
			if (user.name !== name) {
				res.json(2);
				return
			}
		} else {
			newUser = true;
			await insertUser(name, email);
		}
		const [
			followers,
		] = await queryDB(`SELECT followers FROM articles WHERE id = $1`, [
			articleID,
		]);
		if (
			(following && !followers.followers.includes(email)) ||
			(!following && followers.followers.includes(email))
		) {
			res.json(4);
			return
		}

		await queryDB(
			`UPDATE users SET following = array_${
				!following ? 'append' : 'remove'
			}(following, $1) WHERE email = $2`,
			[articleID, email]
		);
		await queryDB(
			`UPDATE articles SET followers = array_${
				!following ? 'append' : 'remove'
			}(followers, $1) WHERE id = $2`,
			[email, articleID]
		);

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL_ADDRESS,
				pass: process.env.EMAIL_PASSWORD,
			},
		});

		const mailOptions = {
			from: process.env.EMAIL_ADDRESS,
			to: email,
			subject: 'Mock Nexus Following Update',
			text: `You are ${
				!following ? 'now' : 'no longer'
			} following "${articleTitle}" at ${articleURL}`,
		};

		transporter.sendMail(mailOptions, (e, info) =>
			e ? console.log(e) : console.log('Email sent:', info.response)
		);

		if (newUser) {
			res.json(3);
			return;
		}
		res.json(0);
	} catch (e) {
		console.log(e);
	}
}
