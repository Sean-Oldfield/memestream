import React from 'react';
import './Home.css';
import { Post } from '../Post/Post.js';

export function Home() {
    return (
        <div class="posts-list-container">
            <Post />
        </div>
    );
}