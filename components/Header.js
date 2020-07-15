import Nav from './Nav';
import Link from 'next/link';

function Header() {
    return (
        <div className="header">
            <div>Ad Space</div>
            <img src="nexus-logo.png" alt="logo" />
            <div>
                <span>{Date()}</span>
                <span>University of California, Santa Barbara</span>
                <span>
                    <Link to="facebook.com/dailynexus"><icon src="fa-facebook" /></Link>
                    <Link to="twitter.com/dailynexus"><icon src="fa-twitter" /></Link>
                    <Link to="instagram.com/dailynexus"><icon src="fa-instagram" /></Link>
                </span>
            </div>
            <Nav />
            <Link to="">{'LIVE: Updates on Coronavirus ...' /* manage in DB */ }</Link>
        </div>
    )
}

export default Header