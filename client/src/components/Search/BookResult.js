import React, { useContext, useEffect } from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import { SocketContext } from '../../App'
import { toast } from 'react-toastify';
import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_ENDPOINT || 'http://localhost:5000'

const BookResult = (props) => {
    //Socket.io
    const socketContext = useContext(SocketContext)

    const postBook = () => {
        axios.post(`${API_ENDPOINT}/api/books`, props)
        .then(res => {
            toast.success(`${props.title} has been added to Saved`)
            socketContext.emit("savedBook", props.title)
        })
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className="bookResult">
                        <Container fluid>
                            <Row>
                                <Col xs="12">
                                    <h3 className="text-center textBold">{props.title}</h3>
                                    <p className="text-center textBold">Written By {props.authors}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3">
                                    <div className="centerImg">
                                        <img src={props.image} alt="book photo"/>
                                    </div>
                                </Col>
                                <Col xs="9">
                                    <p>{props.description ? props.description : "description unavaliable"}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <div className="viewSaveContainer">
                                        <Button href={props.link} className="m-1 btn-lg">View</Button>
                                        <Button onClick={postBook} className="m-1 btn-lg">Save</Button>
                                    </div>
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
