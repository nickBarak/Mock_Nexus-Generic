import Layout from '../../layouts';
import Link from 'next/link';
import { getCategories } from '../../db';
import About from '../../components/About';

export async function getStaticProps() {
    return { props: JSON.parse(JSON.stringify({ categories: await getCategories() })) }
}

export default ({ categories }) =>
    <Layout categories={categories}>
        <About heading="Donate">
            <Link href="https://giving.ucsb.edu/Funds/Give?id=67"><a style={{ cursor: 'pointer', position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <img src="https://i1.wp.com/dailynexus.com/wp-content/uploads/2016/02/Office-Awards_by-Lorenzo-Basilio-1-1024x681.jpg?resize=800%2C532" alt="donate" />
                <span style={{ position: 'absolute', bottom: '6rem', backgroundColor: 'khaki', color: 'black', border: '3px solid black', fontWeight: 'bold', fontSize: '2rem', padding: '1.25rem .75rem 1.5rem .75rem', fontFamily: 'Times New Roman' }}>CLICK HERE TO DONATE</span>
            </a></Link>
            <div>
                <br />
                The <span style={{ fontStyle: 'italic' }}>Daily Nexus</span>, the historic and direct descendant of UCSB student news enterprises dating back nearly 100 years needs donations of any size in order to keep publishing, in print and on the web.
                <br /><br />
                Like every other college newspaper, the <span style={{ fontStyle: 'italic' }}>Nexus</span> is fighting to survive in the new media era. UCSB student journalists, who spend countless hours digging out stories about the inner workings of the University and the activities and culture of Isla Vista, have recently expanded and upgraded their newsroom’s web site and online reporting working to tell the story of UCSB on multiple platforms. Just last year, we launched the Labyrinth, a new data-journalism section.
                <br /><br />
                The staff won national recognition for its minute-by-minute coverage of the tragedy of the killing spree that struck IV in 2014, just one example of the kind of its award-winning reporting, which connects the entire campus community. Journalists have also worked around the clock over the many natural disasters that plagued the area in recent years.
                <br /><br />
                <span style={{ fontStyle: 'italic' }}>Nexus</span> journalists receive no core funding from the University. Nor do they have the luxury of an academic journalism department to support their efforts. Its staff needs money for student salaries and professional development training, in addition to new equipment to gather, create and distribute its news, feature, opinion and sports content in the varied ways that its audience expects – through web, print, podcast and video presentations.
                <br /><br />
            </div>
            <img src="https://i1.wp.com/dailynexus.com/wp-content/uploads/2015/01/Nexus-Office-9-e1424291680657.jpg?resize=700%2C466" alt="donate" />
            <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '3.5rem 0 1.25rem 0' }}>The <span style={{ fontStyle: 'italic' }}>Daily Nexus</span> is the only independent news organization at UCSB.</div>
            <div>
                Without its presence on campus, the campus and Santa Barbara will lose a major and essential resource for unbiased, agenda-free reporting.
                <br /><br />
                Please give to keep the <span style={{ fontStyle: 'italic' }}>Nexus</span> alive, and always independent.
            </div>
            <article>
                <section key="0">
                    <div>MISSION</div>
                    <div>
                        The <span style={{ fontStyle: 'italic' }}>Daily Nexus</span> is the student-run press of the University of California, Santa Barbara campus, and as such, we, the editors, place the interests and needs of the campus community above all else, and seek to provide meaningful and essential news, editorial and feature coverage to our readers. We feel that it is more than just a privilege to publish a student newspaper, but a duty demanded by a democratic society, thus we carry out our duty to the best of our abilities, following the high standards of professionalism as outlined in the American Society of Newspaper Editors’ Statement of Principles. Additionally, in alignment with the changing technological demands of the 21st century, we strive to produce accurate and engaging online content in a fashion that allows for more reach, engagement, and accessibility to student readers.
                    </div>
                </section>
                <section key="1">
                    <div>HISTORY</div>
                    <div>
                        Since the 1930s, the <span style={{ fontStyle: 'italic' }}>Nexus</span> – under various other names – has been keeping tabs on UC Santa Barbara and the surrounding communities, breaking several noteworthy stories such as the 1986 expose of Chancellor Robert Huttenback for his misappropriation of UC funds, to up-to-date, thorough coverage of the May 23, 2014 Isla Vista shootings, which gained the publication mentions in national and international publications. The <span style={{ fontStyle: 'italic' }}>Daily Nexus</span>‘ name was coined by the paper’s 1970 to 1971 editorial board in the wake of the 1970 Bank of America burning in Isla Vista, attributed from Robert Maynard Hutchins’ quote: “A free press is the nexus of any democracy.”
                    </div>
                </section>
                <section key="2">
                    <div>SERVICES</div>
                    <div>
                        The <span style={{ fontStyle: 'italic' }}>Nexus</span> provides timely, relevant and essential editorial and feature coverage to students as well as readers throughout the UCSB community and Santa Barbara County with fairness and accuracy, whether they are the views of the many or those of the few.
                        <br /><br />
                        We open our editorial pages to all opinions and make our views clear only in the editorial pages, from which editorial decisions are based only on substantiated facts.
                        <br /><br />
                        We defend the rights of any member of the university communities if those rights are abridged, and present all sides of the case. Because publishing a student newspaper is our duty, we carry out that duty following standards of professionalism as outlined in the American Society of Newspaper Editors’ Statement of Principles.
                    </div>
                    <br />
                    <Link href="https://giving.ucsb.edu/Funds/Give?id=67" ><a style={{ color: 'var(--link-hover)', fontWeight: 'bold' }}>Click here to be redirected to the donations page.</a></Link>
                </section>
                <section key="3">
                    <div>CONTACT INFORMATION</div>
                    <ul>
                        <li key="0">Editor-in-chief e-mail: eic@dailynexus.com</li>
                        <li key="0">Website: <Link href="/"><a style={{ color: 'var(--link-hover)' }}>www.dailynexus.com</a></Link></li>
                        <li key="0">Facebook: <Link href="https://www.facebook.com/dailynexus"><a style={{ color: 'var(--link-hover)' }}>https://www.facebook.com/dailynexus</a></Link></li>
                        <li key="0">Twitter: <Link href="https://www.twitter.com/dailynexus"><a style={{ color: 'var(--link-hover)' }}>https://www.twitter.com/dailynexus</a></Link></li>
                        <li key="0">Instagram: <Link href="https://www.instagram.com/dailynexus"><a style={{ color: 'var(--link-hover)' }}>https://www.instagram.com/dailynexus</a></Link></li>
                    </ul>
                </section>
            </article>
            
            <style jsx>{`
                section {
                    margin-top: 1.5rem;
                }

                section div:nth-child(1) {
                    font-weight: 600;
                    font-size: 1.2rem;
                    margin-bottom: 1rem;
                }

                li {
                    margin-bottom: 1rem;
                }
            `}</style>
        </About>
    </Layout>