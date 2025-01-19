/* eslint-disable react/prop-types */
import React from 'react';
import { ShoppingCart, Star, TrendingUp, Heart, Home } from 'lucide-react';
import './Product.css';
import {useNavigate} from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';


const products = {
  topProducts: [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$299.99",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      rating: 4.8,
      liked: false
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      rating: 4.7,
      liked: false
    },
    {
      id: 3,
      name: "4K Action Camera",
      price: "$249.99",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80",
      rating: 4.9,
      liked: false
    },
    {
      id: 4,
      name: "Gaming Console Elite",
      price: "$499.99",
      image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=800&q=80",
      rating: 4.9,
      liked: false
    }
  ],
  mobiles: [
    {
      id: 5,
      name: "Ultra Pro Max Phone",
      price: "$999.99",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
      rating: 4.8,
      liked: false
    },
    {
      id: 6,
      name: "Lite Phone 5G",
      price: "$699.99",
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&q=80",
      rating: 4.6,
      liked: false
    },
    {
      id: 7,
      name: "Foldable Smartphone",
      price: "$1299.99",
      image: "https://images.unsplash.com/photo-1578345218746-50a229b3d0f9?w=800&q=80",
      rating: 4.7,
      liked: false
    },
    {
      id: 8,
      name: "Budget King Phone",
      price: "$299.99",
      image: "https://images.unsplash.com/photo-1533228100845-08145b01de14?w=800&q=80",
      rating: 4.5,
      liked: false
    }
  ],
  laptops: [
    {
      id: 9,
      name: "Pro Book Ultra",
      price: "$1499.99",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
      rating: 4.9,
      liked: false
    },
    {
      id: 10,
      name: "Gaming Laptop Beast",
      price: "$1999.99",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80",
      rating: 4.8,
      liked: false
    },
    {
      id: 11,
      name: "Ultrabook Slim",
      price: "$899.99",
      image: "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=800&q=80",
      rating: 4.7,
      liked: false
    },
    {
      id: 12,
      name: "Business Laptop Pro",
      price: "$1299.99",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80",
      rating: 4.6,
      liked: false
    }
  ],
  stationery: [
    {
      id: 13,
      name: "Premium Notebook Set",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
      rating: 4.7,
      liked: false
    },
    {
      id: 14,
      name: "Luxury Pen Collection",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&q=80",
      rating: 4.8,
      liked: false
    },
    {
      id: 15,
      name: "Artist Sketch Kit",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?w=800&q=80",
      rating: 4.6,
      liked: false
    },
    {
      id: 16,
      name: "Office Essentials Bundle",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=800&q=80",
      rating: 4.5,
      liked: false
    }
  ]
};

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = React.useState(product.liked);

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <button 
          className={`like-button ${isLiked ? 'liked' : ''}`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart size={20} fill={isLiked ? "#ff4b6e" : "none"} stroke={isLiked ? "#ff4b6e" : "#fff"} />
        </button>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="product-details">
          <span className="price">{product.price}</span>
          <div className="rating">
            <Star size={16} fill="#ffd700" stroke="#ffd700" />
            <span>{product.rating}</span>
          </div>
        </div>
        <button className="add-to-cart">
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ProductSection = ({ title, items }) => (
  <section className="product-section">
    <h2>{title}</h2>
    <div className="products-scroll">
      <div className="products-grid">
        {items.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

function Product() {
  const navigate = useNavigate();
  return (
    <div className="app">
      <header>
        <nav className='nav-1'>
          <div className="nav-left">
            <a href="/" className="home-link">
              <Home size={24} onClick={()=>navigate("/")}/>
            </a>
            <div className="logo">
              <TrendingUp size={24} />
              <span>YSProduct</span>
            </div>
          </div>
          <div className="cart-icon">
            <ShoppingCart size={24} />
          </div>
        </nav>
      </header>

      <main>
        <ProductSection title="Top Products" items={products.topProducts} />
        <ProductSection title="Mobile Phones" items={products.mobiles} />
        <ProductSection title="Laptops" items={products.laptops} />
        <ProductSection title="Stationery" items={products.stationery} />
      </main>

      <footer className="hp-footer-1">
        <div className="hp-footer-content-1">
          <div className="hp-footer-section-1">
            <h3 className="hp-footer-title-1">About YouShop</h3>
            <ul className="hp-footer-links-1">
              <li className="hp-footer-link-1"><a href="#">Our Story</a></li>
              <li className="hp-footer-link-1"><a href="#">Sustainability</a></li>
              <li className="hp-footer-link-1"><a href="#">Blog</a></li>
              <li className="hp-footer-link-1"><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="hp-footer-section-1">
            <h3 className="hp-footer-title-1">Customer Service</h3>
            <ul className="hp-footer-links-1">
              <li className="hp-footer-link-1"><a href="#">Contact Us</a></li>
              <li className="hp-footer-link-1"><a href="#">FAQs</a></li>
              <li className="hp-footer-link-1"><a href="#">Shipping</a></li>
              <li className="hp-footer-link-1"><a href="#">Returns</a></li>
            </ul>
          </div>
          <div className="hp-footer-section-1">
            <h3 className="hp-footer-title-1">Connect With Us</h3>
            <ul className="hp-footer-links-1">
              <li className="hp-footer-link-1">
                <a href="#"><Mail size={16} style={{ marginRight: '8px' }} /> info@YouShop.com</a>
              </li>
              <li className="hp-footer-link-1">
                <a href="#"><Phone size={16} style={{ marginRight: '8px' }} /> +91 12345-67891</a>
              </li>
              <li className="hp-footer-link-1">
                <a href="#"><MapPin size={16} style={{ marginRight: '8px' }} /> 123, ABC Street, Tamilnadu</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hp-footer-bottom-1">
          <p>&copy; 2024 YouShop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Product;