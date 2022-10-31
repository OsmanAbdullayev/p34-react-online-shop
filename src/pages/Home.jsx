import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h1 className='text-primary text-center p-5 mt-3 bg-light'> Burger Cho - Our Goal is Your Satisfaction!</h1>
        <h3 className='text-center bg-light p-5'>Please, go to <Link to="/products" className='text-primary'>Product List</Link> for order.</h3>
    </div>
  )
}

export default Home