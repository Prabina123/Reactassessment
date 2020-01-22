import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>React Redux Tasks</h1>
          <p className='lead'>
            Create a react redux form, perform posts and get data from forms
          </p>
          <div className='buttons'>
            <Link to='/contact-form' className='btn btn-primary'>
             Form
            </Link>
            <Link to='/contact-data' className='btn btn-light'>
             Data
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
