import React from 'react';
import logo from '../reddit-logo-orange.png';

export function Subreddits() {
    return (
        <div className="subreddits-container">
            <h2 className="subreddits-title">SUBREDDITS</h2>
            <ul className="subreddits-list">
                <li><img src={logo} alt="subreddit logo" className="subreddit-logo"/> Subreddit 1</li>
                <li><img src={logo} alt="subreddit logo" className="subreddit-logo"/> Subreddit 2</li>
                <li><img src={logo} alt="subreddit logo" className="subreddit-logo"/> Subreddit 3</li>
                <li><img src={logo} alt="subreddit logo" className="subreddit-logo"/> Subreddit 4</li>
                <li><img src={logo} alt="subreddit logo" className="subreddit-logo"/> Subreddit 5</li>
                <li><img src={logo} alt="subreddit logo" className="subreddit-logo"/> Subreddit 6</li>
                <li><img src={logo} alt="subreddit logo" className="subreddit-logo"/> Subreddit 7</li>
                <li><img src={logo} alt="subreddit logo" className="subreddit-logo"/> Subreddit 8</li>
            </ul>
        </div>
    );
}