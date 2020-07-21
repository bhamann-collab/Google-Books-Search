import React from 'react';
import './App.css'
import { ToastContainer } from 'react-toastify';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Search from './components/Search/Search';
import Saved from './components/Saved/Saved';
import BookNav from './components/BookNav/BookNav';
import SearchTitle from './components/Search/SearchTitle'
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
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


export default App