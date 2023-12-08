import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProudctCard from '../../Components/Products/ProudctCard'
import SubTitle from '../../Components/Uitily/SubTitle'

import img1 from '../../images/electronic1.jpg'
import img2 from '../../images/electronic2.jpg'
import img3 from '../../images/electronic3.jpg'
import img4 from '../../images/electronic4.jpg'
import img5 from '../../images/electronic5.jpg'
import img6 from '../../images/electronic6.jpg'
import img7 from '../../images/electronic7.jpg'
import img8 from '../../images/electronic8.jpg'


const ProudctsElectronic = ({title, btntitle , pathText}) => {
  return (
    <Container>
    <SubTitle  title={title} btntitle={btntitle} pathText={pathText}/>
    <Row className="my-2 d-flex justify-content-between">
<ProudctCard  img={img1}  title={'اوبو سماعة اير 2'}  price={1599}/>
<ProudctCard  img={img2} title={'ساعة ديجتال ip68'} price={1399}/>
<ProudctCard  img={img3} title={'ipone 15 pro max'} price={74999}/>
<ProudctCard  img={img4}  title={'Mac'} price={100000}/>
<ProudctCard  img={img5}  title={'رينج لايت'} price={599} />
<ProudctCard  img={img6} title={'Hp لاب توب'}  price={18000} />
<ProudctCard  img={img7}  title={'شاشة سمارت'} price={14499} />
<ProudctCard  img={img8}  title={'كاميرا C200'} price={1029} />
    </Row>
  </Container>
  )
}

export default ProudctsElectronic