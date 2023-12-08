import React from 'react'
// import NavBarLogin from '../Components/Uitily/NavBarLogin';
import Slider from '../Components/Home/Slider';
import HomeCategory from '../Components/Home/HomeCategory';
import CardProductsContainer from '../Components/Products/CardProductsContainer';
import DiscountSection from '../Components/Home/DiscountSection';
import BrandFeatured from '../Components/Brand/BrandFeatured';
import ProductsClothing from '../Components/Products/Products Clothing';
import ProudctsElectronic from '../Components/Products/ProudctsElectronic';
import PersonalCare from '../Components/Products/ProductPersonal care';
import ProductsAppliances from '../Components/Products/ProductsAppliances';

function HomePage() {
  return (
    <div className='font' style={{minHeight: "676px"}}>
     
     <Slider />
    <HomeCategory /> 
    <CardProductsContainer title="ألأكثر مبيعا" btntitle="المزيد"  pathText="/products" />
<DiscountSection />
<ProductsClothing title="الملابس"btntitle="المذيد"  pathText="/products" /> 
<ProudctsElectronic title="الالكترونيات"btntitle="المذيد"  pathText="/products" /> 
<PersonalCare title="الرعاية الشخصية" btntitle="المذيد"  pathText="/products" /> 
<ProductsAppliances title="الاجهزة المنزلية"btntitle="المذيد"  pathText="/products" /> 

<BrandFeatured title="أشهر المركات" btntitle="المذيد" />

    </div>
  )
}

export default HomePage;
