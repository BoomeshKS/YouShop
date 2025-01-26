import React, { useState, useEffect } from 'react';
import './Deals.css';
import { ShoppingCart, TrendingUp, Home } from 'lucide-react';
import {useNavigate} from 'react-router-dom';


const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: "$199.99",
    discount: "30% OFF",
    description: "Experience crystal-clear sound with our premium noise-cancelling headphones. Features include 40-hour battery life, premium leather cushions, and adaptive sound control.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: "$149.99",
    discount: "25% OFF",
    description: "Track your fitness goals with precision. Features include heart rate monitoring, sleep tracking, and 20+ sport modes. Water-resistant up to 50m.",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80"
  },
  {
    id: 3,
    name: "Ultra-Slim Laptop",
    price: "$899.99",
    discount: "20% OFF",
    description: "Powerful performance meets sleek design. Features 16GB RAM, 512GB SSD, and a stunning 4K display in an ultra-portable package.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80"
  },
  {
    id: 4,
    name: "Professional Camera",
    price: "$799.99",
    discount: "15% OFF",
    description: "Capture life's moments in stunning detail. Features 24.2MP sensor, 4K video recording, and advanced autofocus system.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80"
  },
  {
    id: 5,
    name: "Wireless Gaming Mouse",
    price: "$79.99",
    discount: "40% OFF",
    description: "Dominate your games with precision. Features include 25K DPI sensor, wireless charging, programmable buttons, and RGB lighting effects.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80"
  },
  {
    id: 6,
    name: "4K Gaming Monitor",
    price: "$499.99",
    discount: "35% OFF",
    description: "Immerse yourself in stunning visuals with this 32-inch 4K gaming monitor. Features 144Hz refresh rate, 1ms response time, HDR support, and AMD FreeSync Premium Pro.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80"
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    price: "$129.99",
    discount: "45% OFF",
    description: "Experience premium typing with our RGB mechanical keyboard. Features hot-swappable switches, PBT keycaps, wireless/wired modes, and customizable backlighting.",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&q=80"
  }
];

function Deals() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const nextIndex = (current + direction) % products.length;
        return nextIndex < 0 ? products.length - 1 : nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [direction]);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    setDirection(index > activeIndex ? 1 : -1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const startX = touch.clientX;

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const diff = touch.clientX - startX;

      if (Math.abs(diff) > 50) {
        setDirection(diff > 0 ? -1 : 1);
        setActiveIndex((current) => {
          const nextIndex = (current + (diff > 0 ? -1 : 1)) % products.length;
          return nextIndex < 0 ? products.length - 1 : nextIndex;
        });
        document.removeEventListener('touchmove', handleTouchMove);
      }
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', () => {
      document.removeEventListener('touchmove', handleTouchMove);
    }, { once: true });
  };
  const navigate = useNavigate();


  return (
    <div className="app-2">
      <header>
        <nav className='nav-1'>
          <div className="nav-left">
            <a href="/" className="home-link">
              <Home size={24} onClick={()=>navigate("/")}/>
            </a>
            <div className="logo-2">
              <TrendingUp size={24} className='log-2'/>
              <span>YSProduct</span>
            </div>
          </div>
          <div className="cart-icon">
            <ShoppingCart size={24} />
          </div>
        </nav>
      </header>
      
      <main className="main-content-2">
        <h1>Featured Deals</h1>
        <div className="content-container">
          <div 
            className="carousel-container"
            onTouchStart={handleTouchStart}
          >
            {products.map((product, index) => {
              let position = index - activeIndex;
              
              if (position > products.length / 2) {
                position -= products.length;
              } else if (position < -products.length / 2) {
                position += products.length;
              }
              
              const angle = (position * (isMobile ? 40 : 35)) % 360;
              const radius = isMobile ? 350 : 450;
              
              return (
                <div
                  key={product.id}
                  className={`product-card-2 ${index === activeIndex ? 'active' : ''}`}
                  style={{
                    transform: `
                      rotateY(${angle}deg)
                      translateZ(${radius}px)
                      ${index === activeIndex ? 'scale(1.1)' : 'scale(0.8)'}
                    `,
                    opacity: Math.abs(position) > (isMobile ? 2 : 3) ? 0 : 1,
                    zIndex: products.length - Math.abs(position)
                  } as React.CSSProperties}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="card-content">
                    <img src={product.image} alt={product.name} />
                    <div className="discount-badge">{product.discount}</div>
                    <h3>{product.name}</h3>
                    <p className="price">{product.price}</p>
                    <div className="stock-status">In Stock</div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="product-details-2">
            <h2>{products[activeIndex].name}</h2>
            <div className="price-container">
              <span className="current-price">{products[activeIndex].price}</span>
              <span className="discount">{products[activeIndex].discount}</span>
            </div>
            <p className="description">{products[activeIndex].description}</p>
            <div className="action-buttons">
              <button className="buy-button">Add to Cart</button>
              <button className="wishlist-button">Add to Wishlist</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Deals;