// import React, { useState } from "react";
// import { useParams, Link, Navigate } from "react-router-dom";
// import { productData } from "../productdata.js";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const product = productData.find((p) => p.id === parseInt(id));

//   const [qty, setQty] = useState(1);

//   if (!product) {
//     return <Navigate to="/" />;
//   }

//   const handleDecrement = () => {
//     if (qty > 1) setQty(qty - 1);
//   };

//   const handleIncrement = () => {
//     setQty(qty + 1);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 font-sans relative">
//       {/* Back Button */}
//       <Link
//         to="/"
//         className="self-start m-4 md:m-8 flex items-center text-gray-700 font-semibold hover:text-gray-900 transition"
//       >
//         ← Back to all products
//       </Link>

//       <div className="bg-white rounded-lg shadow-xl max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden mt-0 md:mt-4">
//         {/* Left: Image */}
//         <div className="bg-[#fcfbf7] p-8 flex items-center justify-center min-h-[400px]">
//           <img
//             src={product.image}
//             alt={product.title}
//             className="max-w-full h-auto object-contain"
//           />
//         </div>

//         {/* Right: Details - START */}
//         <div className="p-8 md:p-12 flex flex-col justify-center">
//           <h1 className="text-3xl font-semibold text-gray-900 leading-tight mb-2">
//             {product.title}
//           </h1>

//           {/* Rating & Reviews */}
//           <div className="flex items-center mb-6">
//             <div className="flex text-yellow-400 text-lg mr-3">
//               {[...Array(product.rating)].map((_, i) => (
//                 <span key={i}>★</span>
//               ))}
//               {[...Array(5 - product.rating)].map((_, i) => (
//                 <span key={i} className="text-gray-300">
//                   ★
//                 </span>
//               ))}
//             </div>
//             <span className="text-sm text-gray-500">
//               ({product.reviewCount} Reviews)
//             </span>
//           </div>

//           {/* Price Section */}
//           <div className="flex items-center gap-4 mb-8">
//             <span className="text-4xl font-bold text-gray-900">
//               ${product.price.toFixed(2)}
//             </span>
//             {product.oldPrice && (
//               <span className="text-xl text-gray-400 line-through decoration-1">
//                 ${product.oldPrice.toFixed(2)}
//               </span>
//             )}
//             {product.bundleTag && (
//               <span className="bg-[#6e9e54] text-white text-sm font-semibold px-3 py-1 rounded-sm">
//                 {product.bundleTag}
//               </span>
//             )}
//           </div>

//           {/* FULL META DATA MAPPING */}
//           <div className="grid grid-cols-[140px_1fr] gap-y-3 text-sm mb-8">
//             {Object.entries(product.meta).map(([key, value]) => (
//               <React.Fragment key={key}>
//                 <span className="font-bold text-gray-700 text-xs tracking-wide uppercase">
//                   {key}:
//                 </span>
//                 <span className="text-gray-600">{value}</span>
//               </React.Fragment>
//             ))}
//           </div>

//           {/* Actions Row: Quantity Selector and Buttons */}
//           <div className="flex flex-wrap items-center gap-4 mb-8">
//             {/* Quantity Selector */}
//             <div className="flex items-center border border-gray-300 bg-gray-50 h-11 w-32">
//               <button
//                 onClick={handleDecrement}
//                 className="w-10 h-full hover:bg-gray-200 text-gray-600 transition"
//               >
//                 -
//               </button>
//               <input
//                 type="text"
//                 readOnly
//                 value={qty}
//                 className="w-full h-full text-center bg-transparent font-semibold text-gray-700 focus:outline-none"
//               />
//               <button
//                 onClick={handleIncrement}
//                 className="w-10 h-full hover:bg-gray-200 text-gray-600 transition"
//               >
//                 +
//               </button>
//             </div>
//             {/* Buttons */}
//             <button className="h-11 px-8 bg-[#6e9e54] hover:bg-[#5c8546] text-white font-semibold rounded-sm transition flex items-center gap-2">
//               Add to Cart →
//             </button>
//             <button className="h-11 px-8 bg-white border border-gray-800 hover:bg-gray-50 text-gray-900 font-semibold rounded-sm transition flex items-center gap-2">
//               Buy Now →
//             </button>
//           </div>

//           {/* FEATURES LIST MAPPING */}
//           <ul className="space-y-2 text-sm text-gray-700 mb-8 list-disc pl-4 marker:text-gray-400">
//             {product.features.map((feature, index) => (
//               <li key={index}>{feature}</li>
//             ))}
//           </ul>

//           {/* PAYMENT METHODS MAPPING */}
//           <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 opacity-75">
//             {product.paymentMethods.map((method, index) => (
//               <span
//                 key={index}
//                 className="border border-gray-200 bg-white px-2 py-1 rounded text-[10px] font-bold text-gray-600"
//               >
//                 {method}
//               </span>
//             ))}
//           </div>

//           {/* Right: Details - END */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
// import React, { useState } from "react";
// import { useParams, Link, Navigate } from "react-router-dom";
// import { productData } from "../productdata.js";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const product = productData.find((p) => p.id === parseInt(id));

//   const [qty, setQty] = useState(1);

//   if (!product) {
//     return <Navigate to="/" />;
//   }

//   const handleDecrement = () => {
//     if (qty > 1) setQty(qty - 1);
//   };

//   const handleIncrement = () => {
//     setQty(qty + 1);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 font-sans relative">
//       {/* Back Button */}
//       <Link
//         to="/"
//         className="self-start m-4 md:m-8 flex items-center text-gray-700 font-semibold hover:text-gray-900 transition"
//       >
//         ← Back to all products
//       </Link>

//       <div className="bg-white rounded-lg shadow-xl max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden mt-0 md:mt-4">
//         {/* Left: Image Container - MODIFIED FOR PURE ASPECT RATIO (1:1) CONSISTENCY */}
//         <div
//           // Removed all fixed/responsive h-XX classes
//           className="bg-[#fcfbf7] p-8 flex items-center justify-center relative overflow-hidden"
//         >
//           {/* This inner div ensures the image container is ALWAYS a square
//               and its height scales responsively with the column width. */}
//           <div className="w-full aspect-square flex items-center justify-center">
//             <img
//               src={product.image}
//               alt={product.title}
//               // Image scales to fit inside the square container
//               className="max-w-full max-h-full object-contain p-4"
//             />
//           </div>
//         </div>

//         {/* Right: Details - START */}
//         <div className="p-8 md:p-12 flex flex-col justify-center">
//           <h1 className="text-3xl font-semibold text-gray-900 leading-tight mb-2">
//             {product.title}
//           </h1>

//           {/* Rating & Reviews */}
//           <div className="flex items-center mb-6">
//             <div className="flex text-yellow-400 text-lg mr-3">
//               {[...Array(product.rating)].map((_, i) => (
//                 <span key={i}>★</span>
//               ))}
//               {[...Array(5 - product.rating)].map((_, i) => (
//                 <span key={i} className="text-gray-300">
//                   ★
//                 </span>
//               ))}
//             </div>
//             <span className="text-sm text-gray-500">
//               ({product.reviewCount} Reviews)
//             </span>
//           </div>

//           {/* Price Section */}
//           <div className="flex items-center gap-4 mb-8">
//             <span className="text-4xl font-bold text-gray-900">
//               ${product.price.toFixed(2)}
//             </span>
//             {product.oldPrice && (
//               <span className="text-xl text-gray-400 line-through decoration-1">
//                 ${product.oldPrice.toFixed(2)}
//               </span>
//             )}
//             {product.bundleTag && (
//               <span className="bg-[#6e9e54] text-white text-sm font-semibold px-3 py-1 rounded-sm">
//                 {product.bundleTag}
//               </span>
//             )}
//           </div>

//           {/* FULL META DATA MAPPING */}
//           <div className="grid grid-cols-[140px_1fr] gap-y-3 text-sm mb-8">
//             {Object.entries(product.meta).map(([key, value]) => (
//               <React.Fragment key={key}>
//                 <span className="font-bold text-gray-700 text-xs tracking-wide uppercase">
//                   {key}:
//                 </span>
//                 <span className="text-gray-600">{value}</span>
//               </React.Fragment>
//             ))}
//           </div>

//           {/* Actions Row: Quantity Selector and Buttons */}
//           <div className="flex flex-wrap items-center gap-4 mb-8">
//             {/* Quantity Selector */}
//             <div className="flex items-center border border-gray-300 bg-gray-50 h-11 w-32">
//               <button
//                 onClick={handleDecrement}
//                 className="w-10 h-full hover:bg-gray-200 text-gray-600 transition"
//               >
//                 -
//               </button>
//               <input
//                 type="text"
//                 readOnly
//                 value={qty}
//                 className="w-full h-full text-center bg-transparent font-semibold text-gray-700 focus:outline-none"
//               />
//               <button
//                 onClick={handleIncrement}
//                 className="w-10 h-full hover:bg-gray-200 text-gray-600 transition"
//               >
//                 +
//               </button>
//             </div>
//             {/* Buttons */}
//             <button className="h-11 px-8 bg-[#6e9e54] hover:bg-[#5c8546] text-white font-semibold rounded-sm transition flex items-center gap-2">
//               Add to Cart →
//             </button>
//             <button className="h-11 px-8 bg-white border border-gray-800 hover:bg-gray-50 text-gray-900 font-semibold rounded-sm transition flex items-center gap-2">
//               Buy Now →
//             </button>
//           </div>

//           {/* FEATURES LIST MAPPING */}
//           <ul className="space-y-2 text-sm text-gray-700 mb-8 list-disc pl-4 marker:text-gray-400">
//             {product.features.map((feature, index) => (
//               <li key={index}>{feature}</li>
//             ))}
//           </ul>

//           {/* PAYMENT METHODS MAPPING */}
//           <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 opacity-75">
//             {product.paymentMethods.map((method, index) => (
//               <span
//                 key={index}
//                 className="border border-gray-200 bg-white px-2 py-1 rounded text-[10px] font-bold text-gray-600"
//               >
//                 {method}
//               </span>
//             ))}
//           </div>

//           {/* Right: Details - END */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { productData } from "../productdata.js";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === parseInt(id));

  const [qty, setQty] = useState(1);

  if (!product) {
    return <Navigate to="/" />;
  }

  const handleDecrement = () => {
    if (qty > 1) setQty(qty - 1);
  };

  const handleIncrement = () => {
    setQty(qty + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 font-sans relative">
      {/* Back Button */}
      <Link
        to="/"
        className="self-start m-4 md:m-8 flex items-center text-gray-700 font-semibold hover:text-gray-900 transition"
      >
        ← Back to all products
      </Link>

      <div className="bg-white rounded-lg shadow-xl max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden mt-0 md:mt-4">
        {/* Left: Image Container - MODIFIED FOR PURE ASPECT RATIO (1:1) CONSISTENCY */}
        <div
          // This container is currently responsive via aspect ratio
          className="bg-[#fcfbf7] p-8 flex items-center justify-center relative overflow-hidden"
        >
          {/* This inner div ensures the image container is ALWAYS a square 
              and its height scales responsively with the column width. */}
          <div className="w-full aspect-square flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              // Image scales to fit inside the square container
              className="max-w-full max-h-full object-contain p-4"
            />
          </div>
        </div>

        {/* Right: Details - START */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          {/* H1 Title: KEY MODIFICATION HERE */}
          <h1
            className="text-3xl font-semibold text-gray-900 leading-tight mb-2 
                       line-clamp-2 md:line-clamp-none" // line-clamp-2 for mobile, md:line-clamp-none for desktop
          >
            {product.title}
          </h1>

          {/* Rating & Reviews */}
          <div className="flex items-center mb-6">
            <div className="flex text-yellow-400 text-lg mr-3">
              {[...Array(product.rating)].map((_, i) => (
                <span key={i}>★</span>
              ))}
              {[...Array(5 - product.rating)].map((_, i) => (
                <span key={i} className="text-gray-300">
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500">
              ({product.reviewCount} Reviews)
            </span>
          </div>

          {/* Price Section */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-xl text-gray-400 line-through decoration-1">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
            {product.bundleTag && (
              <span className="bg-[#6e9e54] text-white text-sm font-semibold px-3 py-1 rounded-sm">
                {product.bundleTag}
              </span>
            )}
          </div>

          {/* FULL META DATA MAPPING */}
          <div className="grid grid-cols-[140px_1fr] gap-y-3 text-sm mb-8">
            {Object.entries(product.meta).map(([key, value]) => (
              <React.Fragment key={key}>
                <span className="font-bold text-gray-700 text-xs tracking-wide uppercase">
                  {key}:
                </span>
                <span className="text-gray-600">{value}</span>
              </React.Fragment>
            ))}
          </div>

          {/* Actions Row: Quantity Selector and Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-300 bg-gray-50 h-11 w-auto">
              <button
                onClick={handleDecrement}
                className="w-8  h-full hover:bg-gray-200 text-gray-600 transition"
              >
                -
              </button>
              <input
                type="text"
                readOnly
                value={qty}
                className="w-10 h-full text-center bg-transparent font-semibold text-gray-700 focus:outline-none"
              />
              <button
                onClick={handleIncrement}
                className="w-8 h-full hover:bg-gray-200 text-gray-600 transition"
              >
                +
              </button>
            </div>
            {/* Buttons */}
            <button className="h-11 px-5 bg-[#6e9e54] hover:bg-[#5c8546] text-white font-semibold rounded-sm transition flex items-center gap-2">
              Add to Cart →
            </button>
            <button className="h-11 px-5 bg-white border border-gray-800 hover:bg-gray-50 text-gray-900 font-semibold rounded-sm transition flex items-center gap-2">
              Buy Now →
            </button>
          </div>

          {/* FEATURES LIST MAPPING */}
          <ul className="space-y-2 text-sm text-gray-700 mb-8 list-disc pl-4 marker:text-gray-400">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          {/* PAYMENT METHODS MAPPING */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 opacity-75">
            {product.paymentMethods.map((method, index) => (
              <span
                key={index}
                className="border border-gray-200 bg-white px-2 py-1 rounded text-[10px] font-bold text-gray-600"
              >
                {method}
              </span>
            ))}
          </div>

          {/* Right: Details - END */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
