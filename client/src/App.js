import React, { useState, useEffect } from 'react';
import './App.css'
import { ToastContainer } from 'react-toastify';
import socketIOClient from "socket.io-client";

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Search from './components/Search/Search';
import Saved from './components/Saved/Saved';
import BookNav from './components/BookNav/BookNav';
import SearchTitle from './components/Search/SearchTitle'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [response, setResponse] = useState("");

    useEffect(() => {
        const socket = socketIOClient("http://localhost:5000")
        socket.on("FromAPI", data => {
            setResponse(data);
        })
    }, [])

    return (
    <Router>
        <BookNav />
        <SearchTitle />
        <br />
        <Route path='/' exact component={Search} />
        <Route path='/Saved' component={Saved} />
        {/* Easy way to show toast notification on site */}
        <ToastContainer />
    </Router>
    )
}


export default App