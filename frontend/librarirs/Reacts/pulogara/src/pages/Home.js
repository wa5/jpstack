import React, { Suspense } from 'react'
import { Container ,Row,Col} from 'react-bootstrap'
import { Carousel1 } from '../components/Carousel'


import img2 from '../../src/assets/img/2.jpg'
import img3 from '../../src/assets/img/3.jpg'
import img4 from '../../src/assets/img/4.jpg'
import { Cards } from '../components/Crads'
import { Navbar1,Navbar2 } from '../components/Navbar'

 const Navbaar=React.lazy(()=>import(`${Navbar1}`).catch((err)=>{
     console.log(err)


 return import(`../components/Navbar/Navbar2`);
 }))




function Home() {
    return (
        <>
            <Container>
<Row>
    <Col>

<Suspense fallback={<h1>hello im fall back</h1>}>

<Navbaar/>
</Suspense>
    </Col>
</Row>
<br/>
<Row>
    <Col>
    <Carousel1 />
    </Col>
</Row>
<br/>
<Row>
    <Col>
    <Cards img={img2}/>
    </Col>
    <Col>
    <Cards img={img3}/>
    </Col>
    <Col>
    <Cards img={img4}/>
    </Col>
</Row>
<br/>

            </Container>



        </>
    )
}

export default Home
