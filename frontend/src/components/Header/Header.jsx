import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const phrases = [
        'Taste the Difference in Every Bite',
        'Authentic African Cuisine Like No Other',
        'A Culinary Adventure Awaits You'
    ];
    const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);

    // Rotate phrases every 3 seconds
    useEffect(() => {
        let index = 0;
        const phraseInterval = setInterval(() => {
            index = (index + 1) % phrases.length;
            setCurrentPhrase(phrases[index]);
        }, 3000);

        return () => clearInterval(phraseInterval);
    }, [phrases]);

    return (
        <div className='header'>
            <div className='header-overlay'></div>
            <div className='header-contents'>
                <h2>{currentPhrase}</h2>
                <p>
                    From spicy Yassa to hearty Thieboudienne, our menu is a celebration of flavors 
                    that will leave you wanting more. Perfect for foodies who crave the extraordinary!
                </p>
                <Link to="/menu">
                    <button>View Menu</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
