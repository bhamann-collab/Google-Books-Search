import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BookContext } from './Search'
import BookResult from './BookResult';

const BookResultList = () => {
    const bookContext = useContext(BookContext)

    let displayBooks = bookContext.booksState

    useEffect(() => {
        console.log(displayBooks)
    }, [displayBooks])
    
    return (
        <Container>
            <Row>
                <Col>
                    <div className="bookResultListContainer p-3">
                        <h3>Results</h3>
                        {displayBooks.map((v, i) => 
                            <BookResult 
                            key={i} 
                            title={v.title}
                            authors={v.authors}
                            description={v.description}
                            image={v.image}
                            link={v.link}
                            />
                        )}
                    </div>     
                </Col>
            </Row>
        </Container>
    )
}

export default BookResultList
