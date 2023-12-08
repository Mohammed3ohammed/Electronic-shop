import React from 'react'
// import NavBarLogin from '../Components/Uitily/NavBarLogin';
import Slider from '../Components/Home/Slider';
import HomeCategory from '../Components/Home/HomeCategory';
import CardProductsContainer from '../Components/Products/CardProductsContainer';
import DiscountSection from '../Components/Home/DiscountSection';
import BrandFeatured from '../Components/Brand/BrandFeatured';

function HomePage() {
  return (
    <div className='font' style={{minHeight: "676px"}}>
     
     <Slider />
    <HomeCategory /> 
    <CardProductsContainer title="ألأكثر مبيعا" btntitle="المزيد"  pathText="/products" />
<DiscountSection />


  

<BrandFeatured title="أشهر المركات" btntitle="المذيد" />

    </div>
  )
}

export default HomePage;
