import React, { useState } from 'react';
import { ShoppingBag, Mail, Lock, Github, User, Phone } from 'lucide-react';
import './Login.css'
import {useNavigate} from 'react-router-dom'

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const togglePage = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <div className="background-decoration">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
      </div>

      <div className="card">
        <div className={`page ${isLogin ? 'active' : ''}`}>
          <div className="header">
            <div className="logo-container">
              <ShoppingBag className="logo floating" />
            </div>
            <h2 className="title">Welcome Back</h2>
            <p className="subtitle">Sign in to continue shopping</p>
          </div>

          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label className="label" htmlFor="login-email">Email Address</label>
              <div className="input-container">
                <Mail className="input-icon" />
                <input
                  id="login-email"
                  type="email"
                  className="input"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="label" htmlFor="login-password">Password</label>
              <div className="input-container">
                <Lock className="input-icon" />
                <input
                  id="login-password"
                  type="password"
                  className="input"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="checkbox-container">
              <input type="checkbox" id="remember" className="checkbox" />
              <label htmlFor="remember" className="label">Remember me</label>
            </div>

            <button type="submit" className="button">Sign In</button>
          </form>

          <div className="divider">
            <div className="divider-line"></div>
            <span className="divider-text">Or continue with</span>
            <div className="divider-line"></div>
          </div>

          <button className="social-button">
            <Github />
            <span>Continue with GitHub</span>
          </button>

          <p className="footer-text">
            Don't have an account?{' '}
            <a href="#" className="footer-link" onClick={togglePage}>
              Sign up now
            </a>
          </p>
          <p className='bth' onClick={()=>navigate("/")}>
            Back to Home
          </p>
        </div>

        <div className={`page ${!isLogin ? 'active' : ''}`}>
          <div className="header">
            <div className="logo-container">
              <ShoppingBag className="logo floating" />
            </div>
            <h2 className="title">Create Account</h2>
            <p className="subtitle">Join our shopping community</p>
          </div>

          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label className="label" htmlFor="signup-name">Full Name</label>
              <div className="input-container">
                <User className="input-icon" />
                <input
                  id="signup-name"
                  type="text"
                  className="input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="label" htmlFor="signup-email">Email Address</label>
              <div className="input-container">
                <Mail className="input-icon" />
                <input
                  id="signup-email"
                  type="email"
                  className="input"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="label" htmlFor="signup-phone">Phone Number</label>
              <div className="input-container">
                <Phone className="input-icon" />
                <input
                  id="signup-phone"
                  type="tel"
                  className="input"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="label" htmlFor="signup-password">Password</label>
              <div className="input-container">
                <Lock className="input-icon" />
                <input
                  id="signup-password"
                  type="password"
                  className="input"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>
            </div>

            <button type="submit" className="button">Create Account</button>
          </form>

          <p className="footer-text">
            Already have an account?{' '}
            <a href="#" className="footer-link" onClick={togglePage}>
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;