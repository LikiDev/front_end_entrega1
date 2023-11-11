// Post.jsx
import React from 'react';
import './Post.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Post = ({ author, date, image, description, likes, commentsNumber }) => {
    return (
        <div className="card post">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{author}</h5>
                <p className="card-text">{description}</p>
                <div className="post-footer">
                    <small className="text-muted">{date}</small>
                    <div className="interactions">
                        <i className="bi bi-heart"></i> {likes}
                        <i className="bi bi-chat"></i> {commentsNumber}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
