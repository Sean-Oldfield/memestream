import React from 'react';
import cheetah from '../cheetah.JPG';

export function PostBody() {
    return (
        <div className="post-body-container">
            <h2 className="post-title">A Buddhist Monk praying and holding the hand of a man who died sitting at a train station in China</h2>
            <img className="post-img" src={cheetah} alt="cheetah" />
        </div>
    );
}