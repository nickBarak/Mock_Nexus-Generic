import Link from 'next/link';

function AboutTheAuthor({ author }) {
    return (
        <div className="about-the-author">
            <img src={author.portrait} alt="author" />
            <div>
                <div><Link href={`/authors/${author.id}`}><a>{author.name}</a></Link></div>
                <div>{author.biography}</div>
            </div>
            <style jsx>{`
                .about-the-author {
                    display: flex;
                    margin: 2rem 0;
                }

                img {
                    width: 6,5rem;
                    height: 6.5rem;
                    margin: 0 1.4rem 0 2.5rem;
                }

                .about-the-author > div {
                    display: flex;
                    flex-direction: column;
                }

                .about-the-author > div > div:nth-child(1) {
                    font-size: 1.2rem;
                    margin-bottom: .5rem;
                }

                .about-the-author > div > div:nth-child(2) {
                    font-size: .95rem;
                }

                a {
                    color: var(--link-hover);
                }
            `}</style>
        </div>
    )
}

export default AboutTheAuthor
