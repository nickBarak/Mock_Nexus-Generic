function AboutTheAuthor({ author }) {
    return (
        <div className="about-the-author">
            <img src={author.portrait} alt="author" />
            <div>{author.name}</div>
            <div>{author.biography}</div>
        </div>
    )
}

export default AboutTheAuthor
