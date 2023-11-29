import React, { useEffect, useState } from "react";
import '../styles/post-page.css';
import LoadingComponent from './loading-component.js';
import Comments from "./comments.js";
import { useParams } from "react-router-dom";

const PostPage = () => {

    const {id} = useParams()

    const [post, setPost] = useState();
    const [title, setTitle] = useState();
    const [subtitle, setSubtitle] = useState();
    const [imageId, setImageId] = useState();
    const [image, setImage] = useState();
    const [postId, setPostId] = useState();

    const getPost = async () => {
        const request = await fetch(`http://localhost/data-viajera-blog/wp-json/wp/v2/posts/${id}`);
        const post = await request.json();
        setPost(post);
        setTitle(post.title.rendered);
        setSubtitle(post.excerpt.rendered);
        setImageId(post.featured_media);
        setPostId(post.id);
    }

    const getImage = async () => {
        if (imageId) {
            try {
            const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2RhdGEtdmlhamVyYS1ibG9nIiwiaWF0IjoxNzAxMDk2NDM0LCJuYmYiOjE3MDEwOTY0MzQsImV4cCI6MTcwMTcwMTIzNCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.45pAb7VJtXi_89wYTkGDMAWzUKkd31UVg1Ly77JpnIU";
            const headers = {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            };
            const img = await fetch(`http://localhost/data-viajera-blog/wp-json/wp/v2/media/${imageId}`, {
                method: "GET",
                headers: headers,
            });
            const image = await img.json();
            setImage(image.guid.rendered);
        } catch (error) {
        }
    };
        }
        

    function decodeHtmlEntities(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    useEffect(()=>{
        getPost();
        getImage();
    },[imageId])

    return(
        <div id="post-page-container">
            <div id="image-container">
                {image?<img id="post-page-image" src={image} alt="image" />:<LoadingComponent />}
            </div>
            <h1 id="post-title">{title}</h1>
            {subtitle?<div id="subtitle-container" dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(subtitle) }} />:<LoadingComponent />}
            <Comments postId={id} />
        </div>
    )
}

export default PostPage;