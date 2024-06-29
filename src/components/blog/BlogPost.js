// src/components/blog/BlogPost.js
import React, { useState } from 'react';
import './BlogPost.css';

const initialPosts = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    date: '2024-06-15',
    content: 'React Hooks provide a way to use state and other React features without writing a class. In this post, we will explore the basics of React Hooks and how to use them in your projects.',
  },
  {
    id: 2,
    title: 'Introduction to Node.js',
    date: '2024-06-12',
    content: 'Node.js is a powerful JavaScript runtime built on Chrome\'s V8 engine. This post covers the fundamentals of Node.js and how to get started with building server-side applications.',
  },
];

function BlogPost() {
  const [posts, setPosts] = useState(initialPosts);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    content: '',
  });
  const [editingPost, setEditingPost] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPost) {
      setPosts(posts.map(post => (post.id === editingPost.id ? { ...editingPost, ...formData } : post)));
      setEditingPost(null);
    } else {
      setPosts([...posts, { ...formData, id: Date.now() }]);
    }
    setFormData({
      title: '',
      date: '',
      content: '',
    });
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData(post);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <section className="blog-post">
      <div className="container">
        <h2 className="blog-headline">Blog Posts</h2>
        <div className="post-list">
          {posts.map((post) => (
            <div className="post-item" key={post.id}>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-date">{post.date}</p>
              <p className="post-content">{post.content}</p>
              <div className="post-actions">
                <button onClick={() => handleEdit(post)} className="edit-button">Edit</button>
                <button onClick={() => handleDelete(post.id)} className="delete-button">Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div className="post-form">
          <h3 className="form-headline">{editingPost ? 'Edit Post' : 'New Post'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">{editingPost ? 'Update Post' : 'Publish Post'}</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BlogPost;
