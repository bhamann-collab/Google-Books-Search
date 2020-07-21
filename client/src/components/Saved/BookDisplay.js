import React, { useContext } from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import { SocketContext } from '../../App'
import { toast } from 'react-toastify';
import axios from 'axios';

const BookDisplay = (props) => {
    //Socket.io
    const socketContext = useContext(SocketContext)

    const deleteBook = () => {
        axios.delete(`http://localhost:5000/api/books/${props.id}`)
        .then(() => {
            props.updateList()
            toast.error(`${props.title} has been deleted from Saved`)
            socketContext.emit("deleteBook", props.title)
        })
    }

    return (
        <>
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
                                        <Button onClick={deleteBook} className="m-1 btn-lg">Delete</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
        
    )
}

export default BookDisplay
