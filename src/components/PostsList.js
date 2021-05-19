import React from 'react';
import { Post } from './Post.js';

export function PostsList() {
    return (
        <div class="posts-list-container">
            <Post />
            <Post />
        </div>
    );
}