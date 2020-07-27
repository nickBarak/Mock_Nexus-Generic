import 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import Comment from './Comment';
import CommentInputs from './CommentInputs';
import { postComment } from '../Functions';

function CommentSection({ comments, articleID, followers }) {
    const [commentMessage, setCommentMessage] = useState(null);
    const [following, setFollowing] = useState(false);
    
    useEffect(_=> {
        setFollowing(followers.includes(sessionStorage.getItem('email')))
    }, []);
    
    return (<>
        <div className="comment-section">
            <div>
                <span>{comments.length}</span>
                <span>Leave a Reply</span>
            </div>
            <strong style={{ color: commentMessage === 'New user created' ? 'green' : 'red', fontSize: '1.15rem' }}>{commentMessage}</strong>
            <CommentInputs setMessage={setCommentMessage} articleID={articleID} following={following} />
            <div style={{ display: 'flex', marginTop: '3rem', justifyContent: 'space-between', maxWidth: '55rem' }}>
                <ul className="icons">
                    <li key="0" style={{ marginBottom: '.15rem', marginRight: 0 }}>
                        <i className="fas fa-align-left" ></i>
                        <span style={{ marginLeft: '.5rem', marginRight: '.2rem', fontSize: '1rem' }}>{comments.length}</span>
                    </li>
                    <li key="1">
                        <i className="far fa-comments" ></i>
                        <span style={{ marginBottom: '.15rem', marginLeft: '.5rem', fontSize: '1rem' }}>{(_=> {
                            let commentCount = 0;
                            let count = level => {
                                level.forEach(({replies}) => commentCount++ < 0 || (replies.length && count(replies)))
                            }
                            return commentCount;
                        })()}</span>
                    </li>
                    <li style={{ marginLeft: '.2rem', marginBottom: '.15rem' }} key="2">
                        <i className="fas fa-rss" ></i>
                        <span style={{ marginLeft: '.5rem', fontSize: '1rem' }}>{followers.length}</span>
                    </li>
                    <li key="3" style={{ marginLeft: '.65rem' }}><i className="fas fa-bolt" style={{ cursor: 'pointer' }}></i></li>
                    <li key="4" style={{ marginLeft: '.65rem' }}><i className="fab fa-hotjar" style={{ cursor: 'pointer' }}></i></li>
                </ul>
                <span className="comment-authors">
                    <i className="fas fa-user-circle"></i>
                    <span style={{ color: '#666' }}>{(_=> {
                        let checked = [];
                        let count = level => {
                            level.forEach(({email, replies}) => checked.push(email) || count(replies));
                        }
                        return new Set(checked).size;
                    })()}</span>
                </span>
            </div>
            <ul className="comments">
                {comments.map((comment, i) => <li key={i}><Comment comment={comment} followers={followers} /></li>)}
            </ul>
        </div>

        <style jsx>{`
            .comment-section > div:nth-child(1) {
                position: relative;
                display: flex;
                margin-bottom: 4rem;
            }

            .comment-section > div:nth-child(1)::after {
                position: absolute;
                content: '';
                background-color: lightgray;
                width: 100%;
                bottom: -1.25rem;
                height: 1px;
                left: 0;
            }

            .comment-section > div:nth-child(1) > span {
                margin-right: .9rem;
                font-size: 1.3rem;
            }

            .comment-section > div:nth-child(1) > span:nth-child(1) {
                background-color: #666;
                padding: .325rem 1rem;
                font-size: 1rem;
                color: white;
            }

            li {
                margin: 0 .5rem;
                display: flex;
                align-items: center;
            }

            .comment-section > div:nth-child(2)::after {
                content: '';
                background-color: lightgray;
                width: 100%;
                height: 1px;
                position: absolute;
                bottom: -.95rem;
            }

            .icons {
                display: flex;
                position: relative;
                width: 9.5rem;
            }

            .icons li {
                margin: 0 .75rem;
                color: #666;
                font-size: 1.05rem;
            }

            .icons li:nth-child(1) i {
                transform: rotateZ(3.15rad);
            }
            
            .icons li::before {
                border-radius: 8px;
                background-color: #555;
                text-align: center;
                font-size: .75rem;
                padding: .65rem 0;
                width: 14rem;
                left: 2%;
                top: -160%;
                color: white;
                position: absolute;
                display: none;
            }

            .icons li:hover::before {
                display: block;
            }

            .icons li:nth-child(4) i { color: #ffba20; }
            .icons li:nth-child(4) i:hover { color: #ffa600; }

            .icons li:nth-child(5) i { color: #ff785b; }
            .icons li:nth-child(5) i:hover { color: #fc5844; }

            .icons li:nth-child(1)::before { content: 'Comment threads'; }
            .icons li:nth-child(2)::before { content: 'Thread replies'; }
            .icons li:nth-child(3)::before { content: 'Followers'; }
            .icons li:nth-child(4)::before { content: 'Most reacted comment'; }
            .icons li:nth-child(5)::before { content: 'Hottest comment thread'; }

            .fa-user-circle {
                color: #999;
                font-size: 1.75rem;
                margin-right: .6rem;
            }

            .comment-authors {
                display: flex;
                align-items: center;
                position: relative;
            }

            .comment-authors::before {
                border-radius: 8px;
                background-color: #555;
                text-align: center;
                font-size: .75rem;
                padding: .65rem 0;
                width: 14rem;
                left: -10.8rem;
                top: -160%;
                color: white;
                position: absolute;
                display: none;
                content: 'Comment authors';
            }

            .comment-authors:hover::before {
                display: block;
            }

            .comments {
                position: relative;
                margin-top: 3rem;
            }

            .comments::before {
                background-color: #f7f7f7;
                height: 1.25rem;
                width: 100%;
                content: '';
                position: absolute;
                top: -2rem;
            }
        `}</style>
    </>)
}

export default CommentSection