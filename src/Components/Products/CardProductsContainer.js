import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProudctCard from './ProudctCard'
import SubTitle from '../Uitily/SubTitle'

import img1 from '../../images/clothe.png'
import img2 from '../../images/cat2.png'
import img3 from '../../images/labtop.png'
 import img4 from '../../images/pic.png'

const CardProductsContainer = ({title , btntitle , pathText}) => {
  return (
    <Container>
      <SubTitle  title={title} btntitle={btntitle} pathText={pathText}/>
      <Row className="my-2 d-flex justify-content-between">

<ProudctCard  img={img1}  title={'ملابس'}  price={400}/>
<ProudctCard  img= {img2}  title={'العناية الشخصية'} price={250}/>
<ProudctCard  img={img3}  title={'الالكترونيات'} price={20000}/>
<ProudctCard  img= {img4}  title={'اجهزه منزلية'} price={999}/>
      </Row>
    </Container>
  )
}
export default CardProductsContainer
