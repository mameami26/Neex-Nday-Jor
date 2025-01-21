import React from 'react';
import './Header.css';

const Header = () => {
    const handleViewMenu = () => {
        console.log('Redirecting to the menu...');
       
    };

    return (
        <div className='header'>
            <div className='header-overlay'></div>
            <div className='header-contents'>
                <h2>Taste the Difference in Every Bite</h2>
                <p>
                From spicy Yassa to hearty Thieboudienne, our menu is a celebration of flavors that will leave you wanting more.
                 Perfect for foodies who crave the extraordinary!
                </p>
                <button onClick={handleViewMenu}>View Menu</button>
            </div>
        </div>
    );
};

export default Header;
