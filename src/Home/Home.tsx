import React, { useEffect,useState, useRef } from 'react';
import { ShoppingBag, Truck, Heart, Search, ShoppingCart, User, Mail, Phone, MapPin } from 'lucide-react';
import {
  Home,
  Menu,
  X,
  Package,
  Tags
} from 'lucide-react';
import './Home.css';
import {useNavigate} from 'react-router-dom';


function App() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const nv = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

    const [isOpen, setIsOpen] = useState(false);
  
    const navItems = [
      { name: 'Home', icon: <Home size={24} strokeWidth={1.5} /> },
      { name: 'Products', icon: <Package size={24} strokeWidth={1.5} /> },
      { name: 'Deals', icon: <Tags size={24} strokeWidth={1.5} /> },
      { name: 'Wishlist', icon: <Heart size={24} strokeWidth={1.5} /> },
      { name: 'Cart', icon: <ShoppingCart size={24} strokeWidth={1.5} /> },
    ];

  return (
    <>
      <div className="hp-animated-bg">
        <div className="hp-spiral"></div>
        <div className="hp-spiral"></div>
        <div className="hp-spiral"></div>
        <div className="hp-spiral"></div>
      </div>

      <nav className="hp-navbar">
        <div className="hp-container">
          <div className="hp-nav-content">
            {/* Logo */}
            <div className="hp-logo">
              <ShoppingCart className="text-[#00ff88]" size={32} strokeWidth={1.5} />
              <span className="hp-logo-text">YouShop</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hp-desktop-nav">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="hp-nav-item"
                  onClick={() => {
                    if (item.name === 'Products') {
                      nv('/product');
                    }
                  }}
                >
                  <span className="flex items-center gap-2">
                    {React.cloneElement(item.icon, { 
                      className: "text-[#00ff88]",
                      strokeWidth: 1.5 
                    })}
                    <span>{item.name}</span>
                  </span>
                </a>
              ))}
            </div>

            {/* Auth */}
            <div className="hidden md:block">
              <button className="hp-login-btn" onClick={()=>nv("/login")}>
                <User size={20} strokeWidth={1.5} />
                <span>Login</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hp-mobile-menu"
            >
              {isOpen ? (
                <X size={24} strokeWidth={1.5} />
              ) : (
                <Menu size={24} strokeWidth={1.5} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="hp-mobile-nav">
              <div>
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href="#"
                    className="hp-mobile-nav-item"
                    onClick={() => {
                      if (item.name === 'Products') {
                        nv('/product');
                      }
                    }}
                  >
                    {React.cloneElement(item.icon, { 
                      className: "text-[#00ff88]",
                      strokeWidth: 1.5 
                    })}
                    <span>{item.name}</span>
                  </a>
                ))}
                <button className="hp-mobile-login-btn" onClick={()=>nv("/login")}>
                  <User size={20} strokeWidth={1.5} />
                  <span>Login</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="hp-hero" >
        <div className="hp-hero-content">
          <h1 className="hp-hero-title">Welcome to YouShop</h1>
          <p className="hp-hero-subtitle">Discover Sustainable Shopping Experience</p>
        </div>
      </section>

      <section className="hp-section" ref={el => sectionsRef.current[0] = el}>
        <h2 className="hp-section-title">Featured Collections</h2>
        <div className="hp-cards-container">
          <div className="hp-card">
            <img 
              src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="Eco-Friendly Fashion" 
              className="hp-card-image"
            />
            <div className="hp-card-content">
              <h3 className="hp-card-title">Eco-Friendly Fashion</h3>
              <p className="hp-card-description">
                Discover our sustainable clothing line made from recycled materials.
              </p>
            </div>
          </div>
          <div className="hp-card">
            <img 
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="Organic Beauty" 
              className="hp-card-image"
            />
            <div className="hp-card-content">
              <h3 className="hp-card-title">Organic Beauty</h3>
              <p className="hp-card-description">
                Natural and cruelty-free beauty products for conscious consumers.
              </p>
            </div>
          </div>
          <div className="hp-card">
            <img 
              src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2087&q=80" 
              alt="Green Home" 
              className="hp-card-image"
            />
            <div className="hp-card-content">
              <h3 className="hp-card-title">Green Home</h3>
              <p className="hp-card-description">
                Sustainable home goods that make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hp-section" ref={el => sectionsRef.current[1] = el}>
        <h2 className="hp-section-title">Why Choose Us</h2>
        <div className="hp-cards-container">
          <div className="hp-card">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="Sustainable Products" 
              className="hp-card-image"
            />
            <div className="hp-card-content">
              <h3 className="hp-card-title">Sustainable Products</h3>
              <p className="hp-card-description">
                All our products are carefully selected to meet eco-friendly standards.
              </p>
            </div>
          </div>
          <div className="hp-card">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="Fast Delivery" 
              className="hp-card-image"
            />
            <div className="hp-card-content">
              <h3 className="hp-card-title">Fast Delivery</h3>
              <p className="hp-card-description">
                Free shipping on orders over $50 with carbon-neutral delivery.
              </p>
            </div>
          </div>
          <div className="hp-card">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" 
              alt="24/7 Support" 
              className="hp-card-image"
            />
            <div className="hp-card-content">
              <h3 className="hp-card-title">24/7 Support</h3>
              <p className="hp-card-description">
                Our dedicated team is here to help you anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hp-section" ref={el => sectionsRef.current[2] = el}>
        <h2 className="hp-section-title">New Arrivals</h2>
        <div className="hp-cards-container">
          <div className="hp-card">
            <img 
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="Summer Collection" 
              className="hp-card-image"
            />
            <div className="hp-card-content">
              <h3 className="hp-card-title">Summer Collection</h3>
              <p className="hp-card-description">
                Explore our latest sustainable summer fashion collection.
              </p>
            </div>
          </div>
          <div className="hp-card">
            <img 
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="Eco Accessories" 
              className="hp-card-image"
            />
            <div className="hp-card-content">
              <h3 className="hp-card-title">Eco Accessories</h3>
              <p className="hp-card-description">
                Complete your look with our sustainable accessories.
              </p>
            </div>
          </div>
          <div className="hp-card">
            <img 
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="Wellness Products" 
              className="hp-card-image"
            />
            <div className="hp-card-content">
              <h3 className="hp-card-title">Wellness Products</h3>
              <p className="hp-card-description">
                Natural wellness products for a healthy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="hp-footer">
        <div className="hp-footer-content">
          <div className="hp-footer-section">
            <h3 className="hp-footer-title">About YouShop</h3>
            <ul className="hp-footer-links">
              <li className="hp-footer-link"><a href="#">Our Story</a></li>
              <li className="hp-footer-link"><a href="#">Sustainability</a></li>
              <li className="hp-footer-link"><a href="#">Blog</a></li>
              <li className="hp-footer-link"><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="hp-footer-section">
            <h3 className="hp-footer-title">Customer Service</h3>
            <ul className="hp-footer-links">
              <li className="hp-footer-link"><a href="#">Contact Us</a></li>
              <li className="hp-footer-link"><a href="#">FAQs</a></li>
              <li className="hp-footer-link"><a href="#">Shipping</a></li>
              <li className="hp-footer-link"><a href="#">Returns</a></li>
            </ul>
          </div>
          <div className="hp-footer-section">
            <h3 className="hp-footer-title">Connect With Us</h3>
            <ul className="hp-footer-links">
              <li className="hp-footer-link">
                <a href="#"><Mail size={16} style={{ marginRight: '8px' }} /> info@YouShop.com</a>
              </li>
              <li className="hp-footer-link">
                <a href="#"><Phone size={16} style={{ marginRight: '8px' }} /> +91 12345-67891</a>
              </li>
              <li className="hp-footer-link">
                <a href="#"><MapPin size={16} style={{ marginRight: '8px' }} /> 123, ABC Street, Tamilnadu</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hp-footer-bottom">
          <p>&copy; 2024 YouShop. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;