import { convertDate } from "../Functions";
import CommentInputs from './CommentInputs';
import { useState, useEffect } from 'react';

function Comment({ comment: { picture, name, email, content, post_date, id, parent, replies }, articleID, followers }) {
    const [replyMessage, setReplyMessage] = useState(null);
    const [following, setFollowing] = useState(false);
    
    useEffect(_=> {
        setFollowing(followers.includes(sessionStorage.getItem('email')))
    }, []);

    return (<>
        <div className="comment">
            <span style={{ marginRight: '1rem', fontSize: '.775rem' }}>
                <img src={picture || 'https://secure.gravatar.com/avatar/004ce453a2b46792c3e04146555a35b3?s=64&d=mm&r=g'} alt="user" />
                <div style={{ color: '#00B38F', textAlign: 'center' }}>{name}</div>
            </span>
            <div>
                <div className="row">
                    <span>{name}</span>
                    <span><i className="fas fa-link"></i></span>
                </div>
                <div>{content}</div>
                <div className="row">
                    <button onClick={e => { e.target.parentElement.parentElement.children[3].style.transform = 'scaleY(1)' }}>{!parent ? <i className="far fa-comments" ></i> : ''} Reply</button>
                    <span>
                        <span style={{ color: '#999', fontSize: '.75rem' }}>
                            <i className="far fa-clock" style={{ marginRight: '.325rem' }}></i>
                            {convertDate(post_date)}
                            {replies.length ? <i style={{ color: '#00B37F', marginLeft: '.325rem' }} className="fas fa-chevron-up"></i> : ''}
                        </span>
                    </span>
                </div>
                <strong style={{ color: replyMessage === 'New user created' ? 'green' : 'red' }}>{replyMessage}</strong>
                <div style={{ transform: 'scaleY(0)', transformOrigin: 'top', transition: 'transform 150ms ease-out' }}><CommentInputs following={following} setMessage={setReplyMessage} articleID={articleID} parent={parent}/></div>
            </div>
        </div>

        <style jsx>{`
            .comment {
                display: flex;
            }

            img {
                object-fit: fill;
                height: 5rem;
                width: 5rem;
                box-shadow: 0 0 2px 2px #d8d8d8;
                margin-bottom: .5rem;
            }

            i {
                color: #999;
            }

            .row {
                display: flex;
                justify-content: space-between;
            }

            .comment > div {
                ${parent ? 'background-color: #f7f7f7;' : ''}
                padding: .75rem;
                margin-left: .5rem;
                font-size: .85rem;
                width: 100%;
            }

            .comment > div > div:nth-child(1) span {
                color: #00B38F;
                font-size: 1.1rem;
            }

            .comment > div >div:nth-child(2) {
                margin-top: 2rem;
                margin-bottom: 1rem;
            }

            button {
                margin-left: .75rem;
                color: #00B38F;
                border: 1px solid #00B38F;
                padding: .3rem .55rem;
                font-size: .75rem;
                cursor: pointer;
            }

            button i {
                color: #00B38F;
                margin-right: .175rem;
            }

            button:hover,
            button:hover i {
                color: white;
                background-color: #00B38F;
            }

            .comment > div > div:nth-child(1) > span:nth-child(2) {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 1.5rem;
                height: 1.5rem;
                cursor: pointer;
                font-size: .9rem;
            }

            .comment > div > div:nth-child(1) > span:nth-child(2):hover,
            .comment > div > div:nth-child(1) > span:nth-child(2):hover i {
                background-color: #00B38F;
                color: white;
            }

            .post-comment-button {
                background-color: #555;
                color: white;
                font-size: .925rem;
                padding: .5rem 1.25rem;
                cursor: pointer;
                border: none;
            }

            .post-comment-button:hover,
            .post-comment-button:focus {
                background-color: #404040;
    }   
        `}</style>
    </>)
}

export default Comment
