
import React from 'react'
import {Card,Button} from 'react-bootstrap'

//import img from '../../assets/img/3.jpg'
function Cards(props) {
    return (
        <React.Fragment>
            <Cards style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.img}/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Cards>
        </React.Fragment>
    )
}

export default Cards

