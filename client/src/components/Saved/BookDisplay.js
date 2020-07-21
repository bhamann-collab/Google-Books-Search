import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import axios from 'axios';

const BookDisplay = (props) => {

    const deleteBook = () => {
        console.log(props.id)
        axios.delete(`http://localhost:5000/api/books/${props.id}`)
    }

    return (
<Container fluid>
            <Row>
                <Col>
                    <div className="bookResult">
                        <Container fluid>
                            <Row>
                                <Col xs="12">
                                    <h3 className="text-center textBold">{props.title}</h3>
                                    <p className="text-center textBold">Written By {props.authors}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3">
                                    <div className="centerImg">
                                        <img src={props.image} alt="book photo"/>
                                    </div>
                                </Col>
                                <Col xs="9">
                                    <p>{props.description ? props.description : "description unavaliable"}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <div className="viewSaveContainer">
                                        <Button href={props.link} className="m-1 btn-lg">View</Button>
                                        <Button onClick={deleteBook} className="m-1 btn-lg">Delete</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default BookDisplay