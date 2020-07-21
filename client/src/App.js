import React, { useEffect, useContext } from 'react';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import socketIOClient from "socket.io-client";

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Search from './components/Search/Search';
import Saved from './components/Saved/Saved';
import BookNav from './components/BookNav/BookNav';
import SearchTitle from './components/Search/SearchTitle'
import 'react-toastify/dist/ReactToastify.css';

//useContext() with socket.io
export const SocketContext = React.createContext()

const App = () => {
    const socket = socketIOClient("http://localhost:5000")

        //When one client saves a book in the Search list
        socket.on("alertSavedBook", (bookName) => {
            toast.success(`${bookName} has been added to Saved`)
        })

        //When one client deletes a book in the Saved list
        socket.on("alertDeletedBook", (bookName) => {
            toast.error(`${bookName} has been deleted from Saved`)
        })

    useEffect(() => {
        socket.on("FromAPI", data => {
            console.log(data);
        })
    }, [])

    return (
    <Router>
        <BookNav />
        <SocketContext.Provider
            value={socket}
        >
            <SearchTitle />
            <br />
            <Route path='/' exact component={Search} />
            <Route path='/Saved' component={Saved} />
            {/* Easy way to show toast notification on site */}
            <ToastContainer />
        </SocketContext.Provider>
    </Router>
    )
}


export default App