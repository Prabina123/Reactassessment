import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='/'>
                <i className='fas fa-home' /> Home
                </Link>
            </h1>
            <h1>
                <Link to='/contact-form'>
                    <i className='fas fa-user' />{' '}
                    <span className='hide-sm'>Form</span>
                </Link>
            </h1>
            <h1>
                <Link to='/contact-data'>
                    <i className='fas fa-table' />{' '}
                    <span className='hide-sm'>Data</span>
                </Link>
            </h1>
        </nav>
      );

}

export default Navbar;