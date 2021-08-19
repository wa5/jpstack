
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
import img4 from '../assets/img/4.jpg'

import { Carousel1, Carousel2 } from '../components/Carousel'
import { Navbar1, Navbar2 } from '../components/Navbar'

//static import
import { Card2, Cards } from '../components/Crads'
//dynamic import
// const Cards=React.lazy(import('../components/Crads/Car').catch((err)=>{
//     return import('../components/Crads/Cards2')
// }))

function Home() {

    return (
        <React.Fragment>
            <Container>
                <Row >
                    <Col >
                        <Navbar2 />
                    </Col>
                </Row>
                <br />
                <Row >
                    <Col >
                        <Carousel1 />
                    </Col>
                </Row>
                <br />
                <Row >
                    <Col >
                    {/* <Suspense fallback={<div>im working</div>}>
                    <Cards  img={img2}/>
                    </Suspense> */}
                     <Cards  img={img2}/>
                        
                    </Col>
                    <Col><Cards img={img3} /></Col>
                    <Col><Cards img={img4}/></Col>

                </Row>
            </Container>
        </React.Fragment>







    )
}

export default Home;