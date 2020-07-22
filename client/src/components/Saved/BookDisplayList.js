import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'reactstrap';
import BookDisplay from './BookDisplay'
import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_ENDPOINT || 'http://localhost:5000'

const BookDisplayList = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get(`${API_ENDPOINT}/api/books`)
        .then(res => {
            console.log(res.data)
            setBooks(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const updateList = () => {
        axios.get(`${API_ENDPOINT}/api/books`)
        .then(res => {
            console.log(res.data)
            setBooks(res.data)
        })
        .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div className="bookResultListContainer p-3">
                        <h3>Saved Books</h3>
                        {books.map((v, i) => 
                            <BookDisplay 
                            key={i} 
                            title={v.title}
                            authors={v.authors}
                            description={v.description}
                            image={v.image}
                            link={v.link}
                            id={v._id}
                            updateList={updateList}
                            />
                        )}
                    </div>     
                </Col>
            </Row>
        </Container>
    )
}

export default BookDisplayList
