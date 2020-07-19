import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';

const BookResult = (props) => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className="bookResult">
                        <Container fluid>
                            <Row>
                                <Col xs="12">
                                    <h3 className="text-center">{props.title}</h3>
                                    <p className="text-center">Written By {props.authors}</p>
                                </Col>
                                {/* <Col xs="6"></Col> */}
                                <Col xs="12">
                                    <Button>View</Button>
                                    <Button>Save</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3">
                                    <img src={props.image} alt="book photo"/>
                                </Col>
                                <Col xs="9">
                                    <h1>TEXT</h1>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default BookResult
