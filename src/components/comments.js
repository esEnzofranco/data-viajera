import React, { useEffect, useState } from "react";
import '../styles/comments.css';
import locationPin from '../images/location-pin.png';
import womanIcon from '../images/woman.png';
import manIcon from '../images/man.png';

const Comments = ({ postId }) => {

    const [commentsList, setCommentsList] = useState([]);
    const [commentContent, setCommentContent] = useState('');
    const [authorName, setAuthorName] = useState('');

    const getComments = async () => {
        if (postId) {
            const request = await fetch(`http://localhost/data-viajera-blog/wp-json/wp/v2/comments?post=${postId}`);
            const data = await request.json();
            setCommentsList(data)
            console.log(data)
        }
    }

    function decodeHtmlEntities(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    const handleContentChange = (e) => {
        setCommentContent(e.target.value);
    };

    const handleAuthorNameChange = (e) => {
        setAuthorName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiUrl = 'http://localhost/data-viajera-blog/wp-json/wp/v2/comments';
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2RhdGEtdmlhamVyYS1ibG9nIiwiaWF0IjoxNzAxMDk2NDM0LCJuYmYiOjE3MDEwOTY0MzQsImV4cCI6MTcwMTcwMTIzNCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.45pAb7VJtXi_89wYTkGDMAWzUKkd31UVg1Ly77JpnIU";
        const newCommentContent = document.getElementById('comment-input').value;
        const newAuthorName = document.getElementById('author-name-input').value;

        const comment = {
            post: postId,
            content: newCommentContent,
            author_name: newAuthorName
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(comment),
            });

            if (response.ok) {
                setCommentContent("");
                setAuthorName("");
                getComments();
            } else {
                console.error('Error al enviar el comentario.');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    }

    useEffect(() => {
        getComments();
    }, [postId])

    return (
        <div id="comments-section">
            <div id="comments">
                {commentsList.map(comment => (
                    <div className="comment-container" key={comment.id}>
                        <div className="comment-div" dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(comment.content.rendered) }} />
                        <div className="author-data">
                            <div className="autor-name-container">
                                <img className="comment-icon" src={comment.sex == 'man' ? manIcon : womanIcon} />
                                <p className="author-name">{comment.author_name}</p>
                            </div>
                            <div className="autor-country-container">
                                <img className="comment-icon" src={locationPin} />
                                <p className="author-country">autor_country</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <form id="comment-form" onSubmit={handleSubmit}>
                <input type="text" value={authorName} onChange={handleAuthorNameChange} placeholder="Tu nombre" id="author-name-input" />
                <input type="text" value={commentContent} onChange={handleContentChange} placeholder="Escribí un comentario..." id="comment-input" />
                <button type="submit" id="send-comment-button">Enviar Comentario</button>
            </form>
        </div>
    )
}

export default Comments;