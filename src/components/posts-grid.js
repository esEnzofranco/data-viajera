import React, { useEffect, useState } from "react";
import '../styles/posts-grid.css';
import Post from "./post";

const PostsGrid = () => {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const url = 'http://localhost/data-viajera-blog/wp-json/wp/v2/posts';
        const data = await fetch(url);
        const postsList = await data.json();
        setPosts(postsList)
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div id="post-grid-container">
            <div id="posts-grid">
                {posts.map((post, index) => (
                    <Post key={index} postId={post.id} imageId={post.featured_media} title={post.title.rendered} excerpt={post.excerpt.rendered} />
                ))}
            </div>
        </div>
    )
}

export default PostsGrid;