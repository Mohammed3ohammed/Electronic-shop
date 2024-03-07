import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BrandCard from './BrandCard'


import brand6 from '../../images/adidas.png'


const BrandContainer = () => {
  return (
    <Container>
        <div className='admin-content-text mt-2'>كل الماركات</div>
    <Row className="my-1 d-flex justify-content-between">
                    
                    <BrandCard img={brand6}/>
                    <BrandCard img={brand6}/>
                    <BrandCard img={brand6}/>
                    <BrandCard img={brand6}/>
                    <BrandCard img={brand6}/>
                    <BrandCard img={brand6}/>
                    <BrandCard img={brand6}/>
                    <BrandCard img={brand6}/>
                    <BrandCard img={brand6}/>
                    <BrandCard img={brand6}/>
      </Row>
    </Container>
  )
}

export default BrandContainer
