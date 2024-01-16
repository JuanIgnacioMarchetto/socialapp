import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Post from './components/Post/post';
import PostForm from './components/PostForm/PostForm';
import Login from './components/Login/Login';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  const handleLogin = ({ username, password, email }) => {
    setUser(username);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const email = e.target.elements.email.value;

    if (!username || !password || !email) {
      alert('Todos los campos son obligatorios');
      return;
    }

    handleLogin({ username, password, email });
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
