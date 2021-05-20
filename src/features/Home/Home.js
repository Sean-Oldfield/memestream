import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';
import { fetchPosts, selectFilteredPosts } from '../../store/redditSlice';
import { Post } from '../Post/Post.js';
import { PostLoading } from '../Post/PostLoading.js';
import { AnimatedList } from 'react-animated-list';

export function Home() {
    const reddit = useSelector((state) => state.reddit);
    const { selectedSubreddit, isLoading } = reddit;

    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]); // eslint-disable-line react-hooks/exhaustive-deps

    if(isLoading) {
        let index = 0;
        return (
            <div className="posts-list-container">
                <AnimatedList animation="zoom">
                    {Array(5).fill(<PostLoading key={index++} />)}
                </AnimatedList>
            </div>
        );
    }

    return (
        <div className="posts-list-container">
            {
            posts.map((post, index) => <Post key={post.id} post={post} />)
            }
        </div>
    );
}