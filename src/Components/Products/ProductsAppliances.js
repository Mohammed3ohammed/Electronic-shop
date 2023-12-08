import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProudctCard from '../../Components/Products/ProudctCard'
import SubTitle from '../../Components/Uitily/SubTitle'

import img1 from '../../images/pic.png'
import img2 from '../../images/appliances1.jpg'
import img3 from '../../images/appliances2.jpg'
import img4 from '../../images/appliances3.jpg'
import img5 from '../../images/appliances4.jpg'
import img6 from '../../images/appliances5.jpg'
import img7 from '../../images/appliances6.jpg'
import img8 from '../../images/appliances7.jpg'


const ProductsAppliances = ({title, btntitle , pathText}) => {
  return (
    <Container>
    <SubTitle  title={title} btntitle={btntitle} pathText={pathText}/>
    <Row className="my-2 d-flex justify-content-between">

<ProudctCard  img={img1}  title={'حلة '}  price={149}/>
<ProudctCard  img={img2}  title={'بوتاج'}  price={7399}  />
<ProudctCard  img={img3}  title={'مكاوة'}  price={1199} />
<ProudctCard  img={img4}  title={'ماكينة تحضير قهوة'}  price={25949} />
<ProudctCard  img={img5}  title={'مقلاة'}  price={2229} />
<ProudctCard  img={img6}  title={'مج حرارى'}  price={199} />
<ProudctCard  img={img7}  title={'غسالة اوتوماتك'}  price={11120} />
<ProudctCard  img={img8}  title={'غلاي كهربائى'}  price={450} />
    </Row>
  </Container>
  )
}

export default ProductsAppliances