import React from 'react';
import { PostBody } from './PostBody';
import { PostFooter } from './PostFooter.js';
import { Voting} from './Voting.js';

export function Post() {
    return (
        <div className="post-container">
            <Voting />
            <PostBody />
            <PostFooter />
        </div>
    );
}