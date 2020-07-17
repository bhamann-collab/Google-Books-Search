import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import './Search.css'

const SearchTitle = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="searchContainer">
                        <h1 className="text-center">(React) Google Books Search</h1>
                        <h3 className="text-center">Search for and Save Books of Interest</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchTitle
