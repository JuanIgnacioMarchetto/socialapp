import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Post from './components/Post/post';
import PostForm from './components/PostForm/PostForm';
import Login from './components/Login/Login';
import './App.css'

const App = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handlePostSubmit = (content) => {
    if (!user) {
      alert('Inicia sesión para publicar.');
      return;
    }

    const newPost = {
      username: user,
      content: content,
      comments: [],
    };

    setPosts([...posts, newPost]);
    localStorage.setItem('posts', JSON.stringify([...posts, newPost]));
  };

  return (
    <div>
      <Navbar />
      {user ? (
        <div>
          <PostForm onPostSubmit={handlePostSubmit} />
          {posts.map((post, index) => (
            <Post
              key={index}
              username={post.username}
              content={post.content}
              comments={post.comments}
            />
          ))}
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
