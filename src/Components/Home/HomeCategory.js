import React from 'react'

import { Container, Row } from 'react-bootstrap';
import SubTitle from '../Uitily/SubTitle';
import CategoryCard from '../Category/CategoryCard';
import clothe from "../../images/clothe.png"
import cart2 from "../../images/cat2.png"
import labtop from "../../images/labtop.png"
import sale from "../../images/sale.png"
import pic from "../../images/pic.png"

const HomeCategory = () => {
  return (
    <Container>
      <SubTitle  title="التصنيفات" btntitle="المزيد" pathText="/allcategory"/>
      <Row className="my-2 d-flex justify-content-between">
      <CategoryCard title="ملابس" img={ clothe } background="#F4DBA4" />
      <CategoryCard title="العناية الشخصية" img={ cart2 } background="#F4DBA4" />
      <CategoryCard title="الإلكترونيات" img={ labtop } background="#0034FF" />
      <CategoryCard title="كوبنات" img={ sale } background="#FF6262" />
      <CategoryCard title="أجهزه منزلية" img={ pic } background="#F4DBA4" />
      </Row>
    </Container>
  )
}

export default HomeCategory
