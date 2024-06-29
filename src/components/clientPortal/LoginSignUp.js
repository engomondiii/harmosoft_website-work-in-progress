// src/components/clientPortal/LoginSignUp.js
import React, { useState } from 'react';
import './LoginSignUp.css';

function LoginSignUp() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
    });
    setSubmitted(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic here
      console.log('Login form submitted:', formData);
    } else {
      // Handle sign-up logic here
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      console.log('Sign-up form submitted:', formData);
    }
    setSubmitted(true);
  };

  return (
    <section className="login-signup">
      <div className="container">
        <h2 className="form-headline">{isLogin ? 'Login' : 'Sign Up'}</h2>
        {submitted ? (
          <p className="thank-you-message">{isLogin ? 'Login Successful!' : 'Sign-Up Successful!'}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <button type="submit" className="submit-button">{isLogin ? 'Login' : 'Sign Up'}</button>
          </form>
        )}
        <button onClick={toggleForm} className="toggle-button">
          {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
        </button>
      </div>
    </section>
  );
}

export default LoginSignUp;
