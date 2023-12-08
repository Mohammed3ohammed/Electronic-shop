import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProudctCard from '../../Components/Products/ProudctCard'
import SubTitle from '../../Components/Uitily/SubTitle'

import img1 from '../../images/clothe.png'
import img2 from '../../images/clothing1.jpg'
import img3 from '../../images/clothing2.jpg'
import img4 from '../../images/clothing3.jpg'
import img5 from '../../images/clothing4.jpg'
import img6 from '../../images/clothing5.jpg'
import img7 from '../../images/clothing6.jpg'
import img8 from '../../images/clothing7.jpg'


const ProductsClothing = ({title, btntitle , pathText}) => {
  return (
    <Container>
    <SubTitle  title={title} btntitle={btntitle} pathText={pathText}/>
    <Row className="my-2 d-flex justify-content-between">

<ProudctCard  img={img1}  title={' سويت شيرت قطن أزرق'}  price={449}/>
<ProudctCard  img={img2} title={'سويت شيرت قطن أسود'}  price={399}  />
<ProudctCard  img={img3} title={'سويت شيرت قطن أسود كحلى'}  price={399} />
<ProudctCard  img={img4}  title={'جاكيت سويت تيشرت'} price={949} />
<ProudctCard  img={img5}  title={'تيشرت شتوي رجالى'} price={229} />
<ProudctCard  img={img6} title={'جاكيت مبطن'}  price={299} />
<ProudctCard  img={img7}  title={'تيشرت شتوي رجالى'} price={320} />
<ProudctCard  img={img8}  title={'تيرنج شتوى رجالى'} price={450} />
    </Row>
  </Container>
  )
}

export default ProductsClothing