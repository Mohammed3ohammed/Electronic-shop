import React from "react";
import HomePage from "./Page/HomePage";
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import NavBarLogin from "./Components/Uitily/NavBarLogin";
import Footer from './Components/Uitily/Footer'
import LoginPage from "./Components/Auth/LoginPage";
import RegisterPage from "./Components/Auth/RegisterPage";
import AllCategoryPage from "./Components/Category/AllCategoryPage";
import AllBrandPage from "./Page/Brand/AllBrandPage"
import ShopProductsPage from "./Page/Products/ShopProductsPage";


function App() {
  return (
    <div className="font">
       <NavBarLogin />
     <BrowserRouter>
     <Routes>
     <Route index element={<HomePage />}  />
     <Route path="/login" element={<LoginPage />} />
     <Route path="/register" element={<RegisterPage />} />
     <Route path="/allcategory" element={<AllCategoryPage />} />
     <Route path="/allbrand" element={<AllBrandPage />} />
     <Route path="/products" element={<ShopProductsPage />} />
     </Routes>
     </BrowserRouter>
     <Footer /> 
    </div>
  )
}

export default App;
