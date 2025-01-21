import React, { useContext, useState } from 'react';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>

      {/* Scrollable Menu List */}
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className={`explore-menu-list-item ${category === item.menu_name ? 'active' : ''} ${
              hoveredItem === index ? 'hovered' : ''
            }`}
            onClick={() => setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <img src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
            {hoveredItem === index && <span className="menu-tooltip">Click to explore {item.menu_name}</span>}
          </div>
        ))}
      </div>

      {/* Scroll Arrows */}
      <div
        className="explore-menu-scroll-indicator explore-menu-scroll-indicator-left"
        onClick={() =>
          document.querySelector('.explore-menu-list').scrollBy({ left: -200, behavior: 'smooth' })
        }
      >
        &#8249;
      </div>
      <div
        className="explore-menu-scroll-indicator explore-menu-scroll-indicator-right"
        onClick={() =>
          document.querySelector('.explore-menu-list').scrollBy({ left: 200, behavior: 'smooth' })
        }
      >
        &#8250;
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;
