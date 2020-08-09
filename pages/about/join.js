import Layout from '../../layouts';
import Link from 'next/link';
import About from '../../components/About';

function Join() {
    return (
    <Layout>
        <About heading="Join Us">
            <div>
                The <span style={{ fontStyle: 'italic' }}>Daily Nexus</span> is constantly seeking ambitious students who are interested in joining our staff. After attending a brief training session, students may be hired for paid positions as staff writers, photographers, artists, copy editors, web developers and more. For information, email the relevant section on <Link href="/about/staff-contact"><a style={{ color: 'var(--link-hover)' }}>our contact</a></Link> page at any time.
            </div>
        </About>
    </Layout>
    )
}

export default Join