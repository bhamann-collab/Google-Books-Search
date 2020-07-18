import React, { useEffect, useState, useRef } from 'react'
import { Container, Row, Col, Form, Label, Input, Button } from 'reactstrap';
import axios from 'axios'

const SearchBar = () => {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
        if (search) {
            let book = [];
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
            .then(res => {
                book = res.data.items.map(x => x.volumeInfo.title)
                //book.push(...res.data.items)
                console.log(book)
            })
        }
    }, [search])

    const inputChange = (e) => {
        setSearch(e.currentTarget.value);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div className="searchBarContainer p-3">
                        <h3>Book Search</h3>
                        <br />
                        <Form>
                            <Label for="Book">Book</Label>
                            <Input type="Book" name="Book" onChange={inputChange} placeholder="Search Book" id="bookValue"/>
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
