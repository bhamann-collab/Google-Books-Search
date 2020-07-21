import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap';
import BookDisplay from './BookDisplay'
import axios from 'axios';

const BookDisplayList = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/books`)
        .then(res => {
            console.log(res.data)
            setBooks(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <Row>
                <Col>
                    <div className="bookResultListContainer p-3">
                        <h3>Results</h3>
                        {books.map((v, i) => 
                            <BookDisplay 
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

export default BookDisplayList
