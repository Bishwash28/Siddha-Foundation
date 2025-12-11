import React, { useState } from "react";
import { productData } from "../productdata.js"; // Importing from File 1

// --- 1. The Reusable Card Component ---
const ProductCard = ({ product }) => {
  const [qty, setQty] = useState(1);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-2 mb-10">
      {/* Left: Image */}
      <div className="bg-[#fcfbf7] p-8 flex items-center justify-center min-h-[350px]">
        <img
          src={product.image}
          alt={product.title}
          className="max-w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right: Details */}
      <div className="p-8 md:p-10 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight mb-3">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center mb-5">
          <div className="flex text-yellow-400 text-lg mr-2">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={
                  i < product.rating ? "text-yellow-400" : "text-gray-300"
                }
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500">
            ({product.reviewCount} Reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-lg text-gray-400 line-through decoration-1">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
          {product.bundleTag && (
            <span className="bg-[#6e9e54] text-white text-xs font-bold px-2 py-1 rounded-sm uppercase">
              {product.bundleTag}
            </span>
          )}
        </div>

        {/* Dynamic Meta Data Table */}
        <div className="grid grid-cols-[130px_1fr] gap-y-2 text-sm mb-6">
          {Object.entries(product.meta).map(([key, value]) => (
            <React.Fragment key={key}>
              <span className="font-bold text-gray-800 text-xs tracking-wide uppercase">
                {key}:
              </span>
              <span className="text-gray-600">{value}</span>
            </React.Fragment>
          ))}
        </div>

        {/* Buttons & Quantity */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center border border-gray-300 bg-gray-50 h-10 w-28">
            <button
              onClick={() => qty > 1 && setQty(qty - 1)}
              className="w-8 h-full hover:bg-gray-200 text-gray-600"
            >
              -
            </button>
            <input
              type="text"
              readOnly
              value={qty}
              className="w-full h-full text-center bg-transparent font-bold text-gray-700 focus:outline-none"
            />
            <button
              onClick={() => setQty(qty + 1)}
              className="w-8 h-full hover:bg-gray-200 text-gray-600"
            >
              +
            </button>
          </div>
          <button className="h-10 px-6 bg-[#6e9e54] hover:bg-[#5c8546] text-white font-semibold rounded-sm transition">
            Add to Cart →
          </button>
          <button className="h-10 px-6 bg-white border border-gray-800 hover:bg-gray-50 text-gray-900 font-semibold rounded-sm transition">
            Buy Now →
          </button>
        </div>

        {/* Features List */}
        <ul className="space-y-1 text-sm text-gray-700 mb-6 list-disc pl-4">
          {product.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        {/* Footer Icons */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 opacity-75">
          {product.paymentMethods.map((pm, idx) => (
            <span
              key={idx}
              className="border border-gray-200 bg-white px-2 py-1 rounded text-[10px] font-bold text-gray-600"
            >
              {pm}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 2. The Main App Component (Mapping happens here) ---
const ProductsDtl = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Featured Products
        </h1>

        {/* Mapping the data array to the component */}
        <div className="flex flex-col gap-8">
          {productData.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsDtl;
