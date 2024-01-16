import React from 'react';

const Post = ({ username, content, comments }) => {
  return (
    <div>
      <h3>{username}</h3>
      <p>{content}</p>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
