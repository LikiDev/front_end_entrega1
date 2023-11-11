// PostList.jsx
import React from 'react';
import Post from '../Post/Post';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './PostList.css';

// Datos de ejemplo para los posts
const postData = [
    {
        id: 1,
        author: '@autor1',
        date: '1 de Enero, 2023',
        image: '/imgs/img1.jpg',
        description: 'Descripción del post 1',
        likes: 150,
        commentsNumber: 30
    },
    {
        id: 2,
        author: '@autor2',
        date: '2 de Febrero, 2023',
        image: '/imgs/img2.jpg',
        description: 'Descripción del post 2',
        likes: 250,
        commentsNumber: 50
    },
    {
        id: 3,
        author: '@autor3',
        date: '3 de Marzo, 2023',
        image: '/imgs/img3.jpg',
        description: 'Descripción del post 3',
        likes: 350,
        commentsNumber: 70
    }
];

const PostList = () => {
    return (
        <div className="post-list">
            {postData.map(post => (
                <Post
                    key={post.id}
                    author={post.author}
                    date={post.date}
                    image={post.image}
                    description={post.description}
                    likes={post.likes}
                    commentsNumber={post.commentsNumber}
                />
            ))}
        </div>
    );
};

export default PostList;
