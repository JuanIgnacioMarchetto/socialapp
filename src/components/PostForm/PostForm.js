import React, { useState } from 'react';

const PostForm = ({ onPostSubmit }) => {
  const [content, setContent] = useState('');

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPostSubmit(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={content} onChange={handleContentChange} />
      <button type="submit">Publicar</button>
    </form>
  );
};

export default PostForm;
