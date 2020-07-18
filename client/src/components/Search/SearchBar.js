import React from 'react'
import { Container, Row, Col, Form, Label, Input, Button } from 'reactstrap';

const SearchBar = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="searchBarContainer p-3">
                        <h3>Book Search</h3>
                        <br />
                        <Form>
                            <Label for="Book">Book</Label>
                            <Input type="Book" name="Book" placeholder="Search Book" id="bookValue"/>
                            <div className="buttonContainer">
                                <Button className="mt-3">Search</Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBar
