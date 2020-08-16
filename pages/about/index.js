import Layout from '../../layouts';
import About from '../../components/About';

function AboutPage() {
	return (
		<Layout>
			<About heading="About">
				<div>
					The <span style={{ fontStyle: 'italic' }}>Daily Nexus</span>{' '}
					had its start in the 1930s. Back then, the newspaper was
					called the{' '}
					<span style={{ fontStyle: 'italic' }}>Eagle</span>, and UC
					Santa Barbara was known as Santa Barbara State College.
					After the college joined the University of California
					system, its newspaper changed names various times, existing
					in former editions as the{' '}
					<span style={{ fontStyle: 'italic' }}>Roadrunner</span>,{' '}
					<span style={{ fontStyle: 'italic' }}>El Gaucho</span>, the{' '}
					<span style={{ fontStyle: 'italic' }}>University Post</span>
					, and the{' '}
					<span style={{ fontStyle: 'italic' }}>Daily Gaucho</span>.
					The <span style={{ fontStyle: 'italic' }}>Daily Nexus</span>{' '}
					received its name in 1970, following the infamous Bank of
					America burning that occurred in Isla Vista.
					<br />
					<br />
					The editorial board took the name from a Robert Maynard
					Hutchins quote: “A free press is the nexus of any
					democracy.”
					<br />
					<br />
					The <span style={{ fontStyle: 'italic' }}>Nexus</span>{' '}
					continues to be the go-to source to stay up-to-date on all
					things involving UCSB’s campus and Isla Vista. We offer
					positions for writers, photographers, artists and any
					creative souls interested in immersing themselves in culture
					and information. The{' '}
					<span style={{ fontStyle: 'italic' }}>Nexus</span> provides
					a fast-paced environment for aspiring journalists, as well
					as learning opportunities for students who want to explore
					the stories that define our community.
					<br />
					<br />
					The <span style={{ fontStyle: 'italic' }}>
						Daily Nexus
					</span>{' '}
					is also an award-winning media source, ranked in the top-10
					best college newspapers by the Princeton Review two out of
					the last three years and has received four California
					Collegiate Media Awards in 2018 alone. The{' '}
					<span style={{ fontStyle: 'italic' }}>Nexus</span> also
					received seven awards at the California Collegiate Media
					Awards in 2019.
				</div>
				<div style={{ marginTop: '2rem', marginLeft: '.5rem' }}>
					<img
						src="https://i1.wp.com/dailynexus.com/wp-content/uploads/2016/02/Office-Awards_by-Lorenzo-Basilio-1-1024x681.jpg?resize=800%2C532"
						alt="about"
					/>
					<div style={{ fontSize: '.85rem', marginTop: '3px' }}>
						The{' '}
						<span style={{ fontStyle: 'italic' }}>Daily Nexus</span>{' '}
						newsroom, located underneath Storke Tower.
						<label style={{ fontStyle: 'italic' }}>
							{' '}
							Lorenzo Basilio/Daily Nexus
						</label>
					</div>
				</div>
				<div style={{ marginTop: '2rem' }}>
					<div
						style={{
							fontSize: '2rem',
							fontWeight: 'bold',
							marginBottom: '1.25rem',
						}}>
						Comment Policy
					</div>
					<div>
						Here at the{' '}
						<span style={{ fontStyle: 'italic' }}>Daily Nexus</span>{' '}
						we recognize the importance of free speech and encourage
						all those willing to participate to do so. However, we
						ask that our readers do this respectfully and engage in
						positive discourse about the subject material of the
						article.
						<br />
						<br />
						Comments may be removed if these guidelines are not met
						and after repeated violations of the comment policy in
						an article, the comment section may be removed for that
						article altogether.
						<br />
						<br />
						Comments may be removed or turned off for an article if
						there are concerns regarding an individual’s safety.
						<br />
						<br />
						As of May 2020, readers must include their name and
						email address in order to post a comment.
						<br />
						<br />A comment will be removed if it:
						<ol style={{ marginLeft: '2rem', marginTop: '1rem' }}>
							<li key="1" style={{ listStyleType: 'decimal' }}>
								attacks a named or identified person or group
								unreasonably.
							</li>
							<li key="2" style={{ listStyleType: 'decimal' }}>
								attacks or demeans one’s race, gender, religion,
								disability, ethnicity, sexual orientation or
								otherwise.
							</li>
							<li key="3" style={{ listStyleType: 'decimal' }}>
								threatens or encourages violence and/or illegal
								behavior.
							</li>
							<li key="4" style={{ listStyleType: 'decimal' }}>
								contains racial epithets, sexual explicitness or
								excessive obscenities.
							</li>
							<li key="5" style={{ listStyleType: 'decimal' }}>
								contains personal information.
							</li>
							<li key="6" style={{ listStyleType: 'decimal' }}>
								is completely off-topic or determined to be
								spam.
							</li>
						</ol>
					</div>
				</div>
				<div style={{ marginTop: '2rem' }}>
					<div
						style={{
							fontSize: '2rem',
							fontWeight: 'bold',
							marginBottom: '1.25rem',
						}}>
						Editorial Board
					</div>
					<div>
						In articles written by "Daily Nexus Editorial Board,"
						the board comprises the current Editor in Chief as well
						as the News team.
					</div>
				</div>
			</About>
		</Layout>
	);
}

export default AboutPage;
