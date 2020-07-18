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
                book = res.data.items.map(obj => ({
                    title: obj.volumeInfo.title, 
                    authors: obj.volumeInfo.authors,
                    description: obj.volumeInfo.description,
                    image: obj.volumeInfo.imageLinks,
                    link: obj.volumeInfo.previewLink
                }))
                setOptions(book)
            })
            .catch(error => {
                console.log(error)
            })
        } else {
            setOptions([])
            setDisplay(false)
        }
    }, [search])

    const inputChange = (e) => {
        setSearch(e.currentTarget.value);
    }

    const setBook = book => {
        setSearch(book)
        setDisplay(false)
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
                            <Input type="Book" onClick={() => setDisplay(!display)} name="Book" onChange={inputChange} placeholder="Search Book" id="bookValue" value={search}/>
                            {display && (
                                <div className="autoContainer">
                                    {options.map((v, i) => {
                                        return <div onClick={() => setBook(v.title)} className="option" key={i}>
                                            <span>{v.title}</span>
                                        </div>
                                    })}
                                </div>
                            )}
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
