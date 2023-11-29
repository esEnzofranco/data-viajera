import React, { useEffect, useState } from "react";
import '../styles/post.css';
import LoadingComponent from './loading-component.js';
import { Link } from "react-router-dom";

const Post = ({ imageId, title, excerpt, postId }) => {

    const [thumbnail, setThumbnail] = useState('');

    const getImage = async () => {
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

            if (!img.ok) {
                throw new Error(`Error al obtener la imagen: ${img.status}`);
            }

            const image = await img.json();

            setThumbnail(image.guid.rendered);
        } catch (error) {
        }
    };


    const hover = () => {
        const posts = document.querySelectorAll('.post');
        posts.forEach((post) => {
            const titleContainer = post.querySelector('.title-container');
            const excerptContainer = post.querySelector('.excerpt-container');

            post.addEventListener('mouseover', () => {
                titleContainer.classList.add('open');
                excerptContainer.classList.add('excerpt-open')
            });
            post.addEventListener('mouseout', () => {
                titleContainer.classList.remove('open');
                titleContainer.classList.add('collapse');
                excerptContainer.classList.remove('excerpt-open')
            });
        })
    }

    function decodeHtmlEntities(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    useEffect(() => {
        getImage();
        hover();
    }, [])

    return (

        <div className="post">
            <a className="post-link" href={`/post/${postId}`}>
                {thumbnail ? <img className="thumbnail" src={thumbnail} alt="post-image" /> : <LoadingComponent />}
                <div className="title-container">
                    <div className="post-title">{title}</div>
                    <div className="excerpt-container" dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(excerpt) }} />
                </div>
            </a>
        </div>

    )
}

export default Post;