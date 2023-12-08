import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProudctCard from '../../Components/Products/ProudctCard'
import SubTitle from '../../Components/Uitily/SubTitle'

import img1 from '../../images/cat2.png'
import img2 from '../../images/personalcare 1.jpg'
import img3 from '../../images/personalcare 2.jpg'
import img4 from '../../images/personalcare 3.jpg'
import img5 from '../../images/personalcare 4.jpg'
import img6 from '../../images/personalcare 5.jpg'
import img7 from '../../images/personalcare 6.jpg'
import img8 from '../../images/personalcare 7.jpg'


const PersonalCare = ({title, btntitle , pathText}) => {
  return (
    <Container>
      <SubTitle  title={title} btntitle={btntitle} pathText={pathText}/>
      <Row className="my-2 d-flex justify-content-between">
<ProudctCard  img={img1}  title={'كريم للبشره'}  price={195}/>
<ProudctCard  img= {img2}  title={'ماكوة شعر'} price={890}/>
<ProudctCard  img={img3}  title={'استشوار للشعر'} price={1499}/>
<ProudctCard  img= {img4}  title={'برفان للرجال'} price={499}/>
<ProudctCard  img={img5}  title={'نيفيا كريم للرجال'} price={300}/>
<ProudctCard  img= {img6} title={'برفان للرجال والنساء'} price={620}/>
<ProudctCard  img={img7} title={'برفان للرجال والنساء'} price={449}/>
<ProudctCard  img= {img8}  title={'مزيل بخاخ'} price={180}/>


      </Row>
    </Container>
  )
}

export default PersonalCare

