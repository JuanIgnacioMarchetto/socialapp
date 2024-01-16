import React from 'react';

const Post = ({ username, content, comments }) => {
    return (
        <div className='conteinerpost'>
            <h3>{username}</h3>
            <br></br>
            <p>{content}</p>
            <ul className="Post-comments">
                {comments.map((comment, index) => (
                    <li key={index} className="Post-comment">
                        <p className="Post-comment-text">{comment}</p>
                    </li>

                ))}
                <br></br>

            </ul>
        </div>
    );
};

export default Post;