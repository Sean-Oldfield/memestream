import React from 'react';
import './Post.css';
import {
    TiArrowUpOutline,
    TiArrowDownOutline,
    TiMessage,
} from 'react-icons/ti';
import { formatDate } from '../../utils/utils.js';

export function Post(props) {
    const { post } = props;
    const date = formatDate(post.created);

    return (
        <div className="post-wrapper card">
            <div className="voting-container">
                <TiArrowUpOutline className="voting-arrow" />
                <h3 className="vote-count">{post.score}</h3>
                <TiArrowDownOutline className="voting-arrow" />
            </div>
            <div className="post-container">
                <h2 className="post-title">{post.title}</h2>
                <img className="post-img" src={post.url} alt="" />
                <div className="post-footer-container">
                    <p className="author-name">{post.author}</p>
                    <p>{date}</p>
                    <p><TiMessage className="speech-icon" /> {post.num_comments}</p>
                </div>
            </div>
        </div>
    );
}