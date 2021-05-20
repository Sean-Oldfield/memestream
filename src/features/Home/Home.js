import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';
import { fetchPosts, selectFilteredPosts } from '../../store/redditSlice';
import { Post } from '../Post/Post.js';

export function Home() {
    const reddit = useSelector((state) => state.reddit);
    const { selectedSubreddit } = reddit;

    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="posts-list-container">
            {
            posts.map((post, index) => <Post key={post.id} post={post} />)
            }
        </div>
    );
}