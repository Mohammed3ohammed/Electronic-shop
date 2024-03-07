import React from 'react'
import { Container, Row } from 'react-bootstrap'
import clothe from "../../images/clothe.png"
import cart2 from "../../images/cat2.png"
import labtop from "../../images/labtop.png"
import sale from "../../images/sale.png"
import CategoryCard from './CategoryCard'

const CategoryContainer = () => {
  return (
    <Container>
      <div className="admin-content-text mt-2">كل التصنيفات</div>
      <Row className="my-2 d-flex justify-content-between">
      <CategoryCard title="ملابس" img={ clothe } background="#F4DBA4" />
      <CategoryCard title="العناية الشخصية" img={ cart2 } background="#F4DBA4" />
      <CategoryCard title="الإلكترونيات" img={ labtop } background="#0034FF" />
      <CategoryCard title="كوبنات" img={ sale } background="#FF6262" />
      <CategoryCard title="ملابس" img={ clothe } background="#F4DBA4" />
      <CategoryCard title="العناية الشخصية" img={ cart2 } background="#F4DBA4" />
      <CategoryCard title="الإلكترونيات" img={ labtop } background="#0034FF" />
      <CategoryCard title="كوبنات" img={ sale } background="#FF6262" />
      <CategoryCard title="ملابس" img={ clothe } background="#F4DBA4" />
      <CategoryCard title="العناية الشخصية" img={ cart2 } background="#F4DBA4" />
      <CategoryCard title="الإلكترونيات" img={ labtop } background="#0034FF" />
      <CategoryCard title="كوبنات" img={ sale } background="#FF6262" />
      <CategoryCard title="ملابس" img={ clothe } background="#F4DBA4" />
      <CategoryCard title="العناية الشخصية" img={ cart2 } background="#F4DBA4" />
      <CategoryCard title="الإلكترونيات" img={ labtop } background="#0034FF" />
      <CategoryCard title="كوبنات" img={ sale } background="#FF6262" />
      </Row>
    </Container>
  )
}

export default CategoryContainer
