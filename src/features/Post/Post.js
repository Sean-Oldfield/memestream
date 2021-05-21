import React, { useState } from 'react';
import './Post.css';
import {
    TiArrowUpOutline,
    TiArrowDownOutline,
    TiMessage,
} from 'react-icons/ti';
import { formatDate, formatVoteCount } from '../../utils/utils.js';

export function Post(props) {
    const { post } = props;
    const date = formatDate(post.created);

    const [voteValue, setVoteValue] = useState(formatVoteCount(post.score));

    const handleVoteChange = (id, upOrDown) => {
        let voteCount;
        if (upOrDown === 1) {
            voteCount = post.score + 1;
            document.getElementById(`up-arrow-${id}`).style.color = '#4BB543';
            document.getElementById(`vote-count-${id}`).style.color = '#4BB543';
            document.getElementById(`down-arrow-${id}`).style.color = '#717171';
        } else {
            voteCount = post.score - 1;
            document.getElementById(`down-arrow-${id}`).style.color = 'red';
            document.getElementById(`vote-count-${id}`).style.color = 'red';
            document.getElementById(`up-arrow-${id}`).style.color = '#717171';
        }
        setVoteValue(formatVoteCount(voteCount));
    }
    
    return (
        <div className="post-wrapper card">
            <div className="voting-container">
                <TiArrowUpOutline id={`up-arrow-${post.id}`} className="voting-arrow up-arrow" onClick={() => handleVoteChange(post.id, 1)} />
                <h3 id={`vote-count-${post.id}`} className="vote-count">{voteValue}</h3>
                <TiArrowDownOutline id={`down-arrow-${post.id}`} className="voting-arrow down-arrow" onClick={() => handleVoteChange(post.id, -1)}  />
            </div>
            <div className="post-container">
                <h2 className="post-title">{post.title}</h2>
                <img className="post-img" src={post.url} alt="" />
                <div className="post-footer-container">
                    <p className="author-name">{post.author}</p>
                    <p>{date}</p>
                    <div className="post-comments-container">
                        <TiMessage className="speech-icon" /> 
                        <p>{post.num_comments}</p>
                    </div>
                </div>
            </div>
        </div>
    );
    
}