import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBarLogin from "./Components/Uitily/NavBarLogin";
import Footer from './Components/Uitily/Footer';
import HomePage from "./Page/HomePage";
import LoginPage from "./Components/Auth/LoginPage";
import RegisterPage from "./Components/Auth/RegisterPage";
import AllCategoryPage from "./Components/Category/AllCategoryPage";
import AllBrandPage from "./Page/Brand/AllBrandPage";
import ShopProductsPage from "./Page/Products/ShopProductsPage";

function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <Router basename="/Electronic-shop">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="allcategory" element={<AllCategoryPage />} />
          <Route path="allbrand" element={<AllBrandPage />} />
          <Route path="products" element={<ShopProductsPage />} />
        </Routes>
      </Router>
      <Footer /> 
    </div>
  )
}

export default App;

