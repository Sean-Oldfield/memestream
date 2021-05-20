import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits, selectSubreddits } from '../../store/subRedditSlice.js';
import './Subreddits.css';
import { AnimatedList } from 'react-animated-list';
import Skeleton from 'react-loading-skeleton';

export function Subreddits() {

    const subreddits = useSelector(selectSubreddits);
    const { isLoading } = useSelector((state) => state.subreddits);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

    // console.log(isLoading);
    if(isLoading) {
        let index = 0;
        return (
            <div className="subreddits-container card">
                <h2 className="subreddits-title">SUBREDDITS</h2>
                <ul className="subreddits-list">
                <AnimatedList animation="zoom">
                        {Array(10).fill(<li key={index++}><Skeleton className="subreddit-icon" circle={true} height={26} width={26} /> <Skeleton width={150} /></li>)}
                </AnimatedList>
                </ul>
            </div>
        );
    }

    return (
        <div className="subreddits-container card">
            <h2 className="subreddits-title">SUBREDDITS</h2>
            <ul className="subreddits-list">
                {
                    subreddits.map((subreddit, index) => (
                        <li key={subreddit.id}>
                            <img className="subreddit-icon" src={subreddit.icon_img} alt="" /> {subreddit.display_name}
                        </li>
                        )
                    )
                }
            </ul>
        </div>
    );
}