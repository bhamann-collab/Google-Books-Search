import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BookContext } from './Search'
import BookResult from './BookResult';

const BookResultList = () => {
    const bookContext = useContext(BookContext)

    return (
        <Container>
            <Row>
                <Col>
                    <div className="bookResultListContainer p-3">
                        <h3 onClick={() => bookContext.booksDispatch('test')}>Results</h3>
                        <BookResult /> 
                        <p>{bookContext.booksState}</p>
                    </div>     
                </Col>
            </Row>
        </Container>
    )
}

export default BookResultList
