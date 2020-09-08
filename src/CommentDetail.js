import React from 'react';
// import faker from 'faker';

export const CommentDetail =({author, timeAgo, image, comment })=>{
    console.log(author)
    console.log(timeAgo);
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={image}/>
        </a>
        <div className="content">
            <a href="/" className="author">
                {author}
            </a>
            <div className="metadata">
                <span className="date">{timeAgo}</span>
            </div>
    <div className="text">{comment}</div>
        </div>
    </div>
    )
}
