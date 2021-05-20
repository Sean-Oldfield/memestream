import React from 'react';
import './Post.css';
import Skeleton from 'react-loading-skeleton';
import {
    TiArrowUpOutline,
    TiArrowDownOutline,
    TiMessage,
} from 'react-icons/ti';


export function PostLoading() {
    return (
        <div className="post-wrapper card">
            <div className="voting-container">
                <TiArrowUpOutline className="voting-arrow" />
                <h3 className="vote-count">
                    <Skeleton className="vote-count" width={30} />
                </h3>
                <TiArrowDownOutline className="voting-arrow" />
            </div>
            <div className="post-container">
                <h2 className="post-title">
                    <Skeleton width={150} />
                </h2>
                <Skeleton height={250} />
                <div className="post-footer-container">
                    <p className="author-name">
                        <Skeleton width={30} />
                    </p>
                    <p>
                        <Skeleton width={30} />
                    </p>
                    <p><TiMessage className="speech-icon" /> 
                        <Skeleton width={30} />
                    </p>
                </div>
            </div>
        </div>
    );
}