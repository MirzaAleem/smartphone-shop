import React from 'react';
import { Link } from 'react-router-dom';
const products = require('../../phones.json');

const ProductGrid = ({ onDataFromChild }) => {

  const sendDataToParent = (product) => {
    // Call the callback function with the data as an argument
    onDataFromChild(product);
  };
  return (
    <div className="container mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.mobile.map((product) => (
        <div key={product.id} className="flex flex-col bg-white p-4 rounded shadow">
          <div id="discount" className='bg-green-500 text-white absolute uppercase text-sm px-2'>-{Math.floor(Math.random()*100)}%</div>
          <img className='w-3/4 m-auto justify-center' src={product.img_url} alt="smartphone" />
          <h2 className="text-xl font-semibold">{product.model}</h2>
          <p className="text-gray-700">₹{product.approx_price_EUR}00</p>
          <Link to={`/products/${product.id}`} className="text-blue-500 hover:underline">
            <button onClick={()=>sendDataToParent(product)}>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
