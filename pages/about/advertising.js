import Layout from '../../layouts';
import Link from 'next/link';
import About from '../../components/About';

function Advertising() {
    return (
    <Layout>
        <About heading="Advertising">
            <div>
                Thank you for your interest in advertising with the <span style={{ fontStyle: 'italic' }}>Daily Nexus</span>. As you’ll see, it  pays to reach out to UCSB students, and no matter your budget, our student sales representatives can put together an effective advertising strategy for you.
                <br /><br />
                Every day, the <span style={{ fontStyle: 'italic' }}>Daily Nexus</span> reaches UCSB’s 22,218 students — plus more than 6,000 full-time faculty and staff. Our competitive advertising rates make the <span style={{ fontStyle: 'italic' }}>Nexus</span> your best value to reach the Central Coast’s most desirable consumer audience.
                <br /><br />
                Did you know that a 2008 survey of <span style={{ fontStyle: 'italic' }}>Nexus</span> readers shows that 60 percent of undergraduates have personal expense incomes of at least $300 a month — and UCSB students spend their disposable funds in ways that will benefit your business:
                <ul style={{ margin: '1rem 0 1rem 2rem' }}>
                    <li key="0" style={{ listStyleType: 'disc' }}>
                        94% go out to a restaurant at least once a month, and two-thirds spend at least $300 a year dining out.
                    </li>
                    <li key="1" style={{ listStyleType: 'disc' }}>
                        85% plan to buy a computer, digital camera, stereo system, iPod, MP3 player, or other electronic item in the next 12 months.
                    </li>
                    <li key="2" style={{ listStyleType: 'disc' }}>
                        79% spend money on spas, beauty treatments or other personal care each month.
                    </li>
                    <li key="3" style={{ listStyleType: 'disc' }}>
                        75% buy clothes at least once a month.
                    </li>
                    <li key="4" style={{ listStyleType: 'disc' }}>
                        63% spend money in bars or night clubs in a typical month.
                    </li>
                </ul>
            </div>
            <div>
                No artwork? No problem. Our designers are happy to work with you to create custom print and online advertisements. For all advertising inquiries, call (805) 893-3828.
                <br /><br />
                Please see our “Rates and Services” and “Classified Ads” pages for more information, or click <Link href=""><a style={{ color: 'var(--link-hover)' }}>here</a></Link> to download a printable PDF of our  Rate Card.
                <br /><br />
            </div>
            <img src="https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/10/Rate-Card-2019-2020-1_Page_1-792x1024.jpg?resize=792%2C1024" alt="advertising" />
            <img src="https://i1.wp.com/dailynexus.com/wp-content/uploads/2019/10/Rate-Card-2019-2020-1_Page_2-792x1024.jpg?resize=792%2C1024" alt="advertising" />
            <img src="https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/10/Rate-Card-2019-2020-1_Page_3-792x1024.jpg?resize=792%2C1024" alt="advertising" />
            <img src="https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/10/Rate-Card-2019-2020-1_Page_4-792x1024.jpg?resize=792%2C1024" alt="advertising" />
            <ul>
                <li>
                    <div style={{ fontWeight: 'bold', textDecoration: 'underline', fontSize: '1.05rem' }}>LOCAL RATE:</div>
                    <div>
                        $13.65 per column inch — Available to advertisers
                        <br />
                        with a business located in Santa Barbara County.
                    </div>
                </li>
                <li>
                    <div style={{ fontWeight: 'bold', textDecoration: 'underline', fontSize: '1.05rem' }}>CAMPUS RATE:</div>
                    <div>
                        $12.60 per column inch — Available to UCSB
                        <br />
                        departments, clubs, organizations and individuals.
                    </div>
                </li>
                <li>
                    <div style={{ fontWeight: 'bold', textDecoration: 'underline', fontSize: '1.05rem' }}>NATIONAL AND AGENCY RATE RATE:</div>
                    <div>
                        $14.45 per column inch —
                        <br />
                        Available to all national
                        <br />
                        (non-local) advertisers.
                        <br />
                        $24.70 per column inch — Available to all agency
                        <br />
                        advertisers.
                    </div>
                </li>
                <li>
                    <div style={{ fontWeight: 'bold', textDecoration: 'underline', fontSize: '1.05rem' }}>CAMPUS RATE:</div>
                    <div>
                        $12.60 per column inch — Available to UCSB
                        <br />
                        departments, clubs, organizations and individuals.
                    </div>
                </li>
                <li>
                    <div style={{ fontWeight: 'bold', textDecoration: 'underline', fontSize: '1.05rem' }}>NONPROFIT RATE:</div>
                    <div>
                        $12.70 per column inch.
                    </div>
                </li>
                <li>
                    <div style={{ fontWeight: 'bold', textDecoration: 'underline', fontSize: '1.05rem' }}>COLOR PRICES:</div>
                    <div>
                        Spot Color — $110 per color
                        <br />
                        Full-Process Color — $440
                    </div>
                </li>
            </ul>

            <style jsx>{`
                li {
                    margin-top: 1.5rem;
                }
            `}</style>
        </About>
    </Layout>
    )
}

export default Advertising