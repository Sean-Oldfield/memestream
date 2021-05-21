import React from 'react';
import { formatDate } from '../../utils/utils';
import './Comment.css';

export function Comment(props) {
    const { comment } = props;

    return (
        <div className="comment-container">
            <div className="comment-header">
                <h4 className="comment-author">{comment.author}</h4>
                <p className="comment-time">{formatDate(comment.created)}</p>
            </div>
            <p className="comment-body">{comment.body}</p>
        </div>
    );
}