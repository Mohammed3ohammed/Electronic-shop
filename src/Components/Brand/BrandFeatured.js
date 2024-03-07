import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../Uitily/SubTitle'
import BrandCard from './BrandCard'

import brand1 from '../../images/Appel.jpg'
import brand2 from '../../images/HP.png'
import brand3 from '../../images/adidas.png'
import brand4 from '../../images/brand1.png'
import brand5 from '../../images/brand2.png'
import brand6 from '../../images/brand3.png'

const BrandFeatured = ({title , btntitle }) => {
  return (
    <Container>
      <SubTitle  title={title} btntitle={btntitle} pathText="/allbrand" />
      <Row className="my-1 d-flex justify-content-between">
                    <BrandCard img={brand1}/>
                    <BrandCard img={brand2}/>
                    <BrandCard img={brand3}/>
                    <BrandCard img={brand4}/>
                    <BrandCard img={brand5}/>
                    <BrandCard img={brand6}/>
      </Row>
    </Container>
  )
}

export default BrandFeatured