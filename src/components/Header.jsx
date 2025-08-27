import React from 'react';
import NavBar from './NavBar';

const Header = () => {
    return (
        <div className='sticky top-0 z-50 border-b border-black/5 bg-[color:rgb(255_255_255_/_.75)] backdrop-blur supports-[backdrop-filter]:bg-[color:rgb(255_255_255_/_.55)]'>
            <NavBar></NavBar>
        </div>
    );
};

export default Header;