import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCountResult from '../../Components/Uitily/SearchCountResult'
import { Col, Container, Row } from 'react-bootstrap'
import SideFilter from '../../Components/Uitily/SideFilter'
// import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import Pagination from '../../Components/Uitily/Pagination'

const ShopProductsPage = () => {
  return (
    <div style={{minHeight: "676px"}}>
      <CategoryHeader />
      <Container>
      <SearchCountResult  title="Search......."/>

        <Row className='d-flex flex-row'>
            <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
            </Col>
            <Col sm="10" xs="10" md="11">
                
            </Col>
        </Row>
        <Pagination />
      </Container>
    </div> 
  )
}

export default ShopProductsPage
