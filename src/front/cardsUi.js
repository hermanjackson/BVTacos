import React from 'react'
import { Container, Row , Col } from 'react-bootstrap';
import "../styles/newcard.css"


const Cards = props =>{
    return(
    <Container className="container-fluid d-flex justify-content-center">
    <Row className="row">
        <Col className="col-sm-4">    
 <Row className="card text-center">
    <div className="overflow">
        <img src= {props.imgsrc} alt="" className="card-img-top" />
        <div className="card-body text-dark">
            <h4 className="card-title">card title</h4>
            <p className="card-text text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sed sit tenetur, doloribus eius maiores assumenda ipsa adipisci ea mollitia.
            </p>
            <a href="#"  className="btn btn-outline-success">go anjywhere</a>
        </div>
    </div>

</Row>
</Col>

</Row>

</Container>

        
    );

    

}



export default Cards