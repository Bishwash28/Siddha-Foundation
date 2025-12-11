import React, { useState } from "react";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-lg shadow-sm max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Column: Image Section */}
        <div className="bg-[#fcfbf7] p-8 flex items-center justify-center min-h-[400px]">
          {/* Placeholder Image - Replace src with your actual image import */}
          <img
            src="/_MG_9757.png"
            alt="Milk Thistle Bottle"
            className="max-w-full h-auto object-contain drop-shadow-md"
          />
        </div>

        {/* Right Column: Details Section */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold text-gray-900 leading-tight mb-2">
            Controls Blood Sugar Levels, Lowers Bad Cholesterol
          </h1>

          {/* Rating */}
          <div className="flex items-center mb-6">
            <div className="flex text-yellow-400 text-lg mr-3">
              {[...Array(4)].map((_, i) => (
                <span key={i}>★</span>
              ))}
              <span className="text-gray-300">★</span>
            </div>
            <span className="text-sm text-gray-500">81 Reviews</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl font-bold text-gray-900">$22.00</span>
            <span className="text-xl text-gray-400 line-through decoration-1">
              $32.00
            </span>
            <span className="bg-[#6e9e54] text-white text-sm font-semibold px-3 py-1 rounded-sm">
              Bundle 200ml
            </span>
          </div>

          {/* Meta Data Grid */}
          <div className="grid grid-cols-[140px_1fr] gap-y-3 text-sm mb-8">
            <span className="font-bold text-gray-700 text-xs tracking-wide uppercase">
              Availability:
            </span>
            <span className="text-gray-600">Available</span>

            <span className="font-bold text-gray-700 text-xs tracking-wide uppercase">
              Product Type:
            </span>
            <span className="text-gray-600">
              Ayurvedic Oil / Thailam / Kuzhampu
            </span>

            <span className="font-bold text-gray-700 text-xs tracking-wide uppercase">
              Product Vendor:
            </span>
            <span className="text-gray-600">Kottakkal Arya Vaidya Sala</span>

            <span className="font-bold text-gray-700 text-xs tracking-wide uppercase">
              Product SKU:
            </span>
            <span className="text-gray-600">AK-A404A</span>
          </div>

          {/* Actions Row */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-300 bg-gray-50 h-11 w-32">
              <button
                onClick={handleDecrement}
                className="w-10 h-full hover:bg-gray-200 flex items-center justify-center text-gray-600 transition"
              >
                -
              </button>
              <input
                type="text"
                readOnly
                value={quantity}
                className="w-full h-full text-center bg-transparent font-semibold text-gray-700 focus:outline-none"
              />
              <button
                onClick={handleIncrement}
                className="w-10 h-full hover:bg-gray-200 flex items-center justify-center text-gray-600 transition"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className="h-11 px-8 bg-[#6e9e54] hover:bg-[#5c8546] text-white font-semibold rounded-sm transition flex items-center gap-2">
              Add to Cart <span>→</span>
            </button>

            {/* Buy Now Button */}
            <button className="h-11 px-8 bg-white border border-gray-800 hover:bg-gray-50 text-gray-900 font-semibold rounded-sm transition flex items-center gap-2">
              Buy Now <span>→</span>
            </button>
          </div>

          {/* Info List */}
          <ul className="space-y-2 text-sm text-gray-700 mb-8 list-disc pl-4 marker:text-gray-400">
            <li>Ayurvedic Medicine</li>
            <li>Exchange Or Return Within 7 Days Of A Delivery</li>
            <li className="font-semibold pt-1 list-none -ml-4">
              • For Shipping Other Than India Please Contact: +91 96292 97111
            </li>
          </ul>

          {/* Payment Icons Footer */}
          <div className="flex flex-wrap items-center gap-3 opacity-80 pt-4 border-t border-gray-100">
            {/* Creating simple text badges to represent payment logos */}
            <Badge>
              BANK
              <br />
              TRANSFER
            </Badge>
            <Badge className="text-[#1a1f71]">VISA</Badge>
            <Badge>UPI</Badge>
            <Badge>RuPay</Badge>
            <Badge className="text-[#eb001b]">mastercard</Badge>
            <Badge className="text-gray-600">G Pay</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple helper component for the payment badges
const Badge = ({ children, className = "text-gray-600" }) => (
  <div
    className={`border border-gray-200 bg-white px-2 py-1 rounded text-[10px] font-bold leading-tight ${className}`}
  >
    {children}
  </div>
);

export default ProductPage;
