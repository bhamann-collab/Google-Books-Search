import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';

const BookResult = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className="bookResult">
                        <Container fluid>
                            <Row>
                                <Col xs="3">
                                    <h3>Harry Potter's Bookshelf</h3>
                                    <p>The Great Books behing the Hogwarts Adventures</p>
                                    <p>Written By John Granger</p>
                                </Col>
                                <Col xs="6"></Col>
                                <Col xs="3">
                                    <Button>View</Button>
                                    <Button>Save</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3">
                                    <h1>PHOTO</h1>
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
