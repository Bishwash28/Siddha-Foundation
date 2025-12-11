// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProductList from "./productlist.jsx";
// import ProductDetail from "./productdetail.jsx";

// // This component handles the routing structure for your multi-page experience.
// const RouteNav = () => {
//   return (
//     <BrowserRouter>
//       <div className="bg-gray-50 min-h-screen">
//         <Routes>
//           {/* Route for the List Page (Home URL: /) */}
//           <Route path="/" element={<ProductList />} />

//           {/* Route for the Detail Page (Product URL: /product/1, /product/2, etc.) */}
//           <Route path="/product/:id" element={<ProductDetail />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default RouteNav;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./productlist.jsx";
import ProductDetail from "./productdetail.jsx";

// This component handles the routing structure for your multi-page experience.
const RouterContainer = () => {
  return (
    // BrowserRouter handles the URL changes
    <BrowserRouter>
      <div className="bg-gray-50 min-h-screen">
        {/* Routes defines the relationship between URL and component */}
        <Routes>
          {/* Home URL (/) renders the list of all products */}
          <Route path="/" element={<ProductList />} />

          {/* Dynamic URL (/product/1, /product/2, etc.) renders the detail page */}
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RouterContainer;
