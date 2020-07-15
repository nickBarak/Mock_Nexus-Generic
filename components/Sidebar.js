import Link from 'next/link';

const newsletterURL = 'https://dailynexus.us19.list-manage.com/subscribe?u=c7afb6c46dbbdcd7bb0bd8919&id=7220084bdc';

const twitterURLs = {
    main: 'https://twitter.com/dailynexus?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Eprofile%3Adailynexus&ref_url=https%3A%2F%2Fdailynexus.com%2F',

    embed: 'https://publish.twitter.com/?url=https%3A%2F%2Ftwitter.com%2Fdailynexus&ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Eprofile%3Adailynexus&ref_url=https%3A%2F%2Fdailynexus.com%2F#'
};

const facebookURL = 'https://www.facebook.com/dailynexus/';

const archivesURL = 'https://dailynexus.com/archives/';

function Sidebar() {
    return (
        <ul className="sidebar">
            <li key="0">Ad Space</li>
            <li key="1">Total Confirmed COVID-19 Cases in Santa Barbara County by Day</li>
            <li key="2">
                <div>Comic of the Week</div>
                <img src="../img/comic-of-the-week.jpg" alt="comic" />
            </li>
            <li key="3"> <Link to={newsletterURL}><button>Subscribe to our Newsletter</button></Link> </li>
            <li key="4">
                <div>Tweets by <Link to={twitterURLs.main}>@dailynexus</Link></div>
                <div>Interactive Twitter Preview</div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to={twitterURLs.main}>Embed</Link>
                    <Link to={twitterURLs.embed}>View on Twitter</Link>
                </div>
            </li>
            <li key="5"> <Link to={facebookURL}><button>Like us on Facebook</button></Link> </li>
            <li key="6"> <Link to={archivesURL}><img src="../img/archives.png" alt="archives" /></Link> </li>
            <li key="7">
                <div>WEEKLY HOROSCOPES</div>
                <div>by <Link to="https://twitter.com/dailynexopinion">@dailynexopinion</Link></div>
                <div>How the Signs Study</div>
                <ul>
                    <li key="0">horoscopes...</li>
                </ul>
            </li>
        </ul>
    )
}

export default Sidebar
