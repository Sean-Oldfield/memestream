import React from 'react';
import cheetah from '../cheetah.JPG';


export function Post() {
    return (
        <div>
            <h2>A Buddhist Monk praying and holding the hand of a man who died sitting at a train station in China</h2>
            <img className="post-img" src={cheetah} alt="cheetah" />
        </div>
    );
}