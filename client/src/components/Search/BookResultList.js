import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BookResult from './BookResult';

const BookResultList = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="bookResultListContainer p-3">
                        <h3>Results</h3>
                        <BookResult />   
                    </div>     
                </Col>
            </Row>
        </Container>
    )
}

export default BookResultList
