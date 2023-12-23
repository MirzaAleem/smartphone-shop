import React from 'react';

const ProductDetails = ({productDetails}) => {

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-md shadow-lg">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img
              src={productDetails.img_url}
              alt={productDetails.brand}
              className="w-full h-64 object-contain rounded-md mb-4"
            />
          </div>
          <div className="lg:w-1/2 lg:ml-8">
            <h2 className="text-3xl font-semibold mb-4">{productDetails.model}</h2>
            <p className="text-gray-700 mb-2">Price: ₹{productDetails.approx_price_EUR}00</p>
            <p className="text-gray-700 mb-2">Brand: {productDetails.brand}</p>
            <p className="text-gray-700 mb-2">Screen Size: {productDetails.display_size}</p>
            <p className="text-gray-700 mb-2">Storage: {productDetails.internal_memory}</p>
            <p className="text-gray-700 mb-2">Camera: {productDetails.primary_camera}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Product Description</h3>
          <p className="text-gray-700">{productDetails.description}</p>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>
         
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
