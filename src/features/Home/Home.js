import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';
import { fetchPosts, selectFilteredPosts, setSearchTerm, fetchComments } from '../../store/redditSlice';
import { Post } from '../Post/Post.js';
import { PostLoading } from '../Post/PostLoading.js';
import { AnimatedList } from 'react-animated-list';

export function Home() {
    const reddit = useSelector((state) => state.reddit);
    const { selectedSubreddit, isLoading, error, searchTerm } = reddit;

    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]); // eslint-disable-line react-hooks/exhaustive-deps


    const onToggleComments = (index) => {
        const getComments = (permalink) => {
        dispatch(fetchComments(index, permalink));
        };
        return getComments;
    };

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

    if(error) {
        return (
            <div className="posts-list-container">
                 <h2>Oops. There was an error. Please try again.</h2>
                <button className="go-back-button" type="button" onClick={() => dispatch(setSearchTerm(''))}>
                    Go Back
                </button>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="posts-list-container">
                <h2>No posts matching "{searchTerm}". Try a different term.</h2>
                <button className="go-back-button" type="button" onClick={() => dispatch(setSearchTerm(''))}>
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="posts-list-container">
            {
            posts.map((post, index) => <Post key={post.id} post={post} onToggleComments={onToggleComments(index)} />)
            }
        </div>
    );
}