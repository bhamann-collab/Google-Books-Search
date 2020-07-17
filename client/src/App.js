import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Search from './components/Search/Search';
import Saved from './components/Saved/Saved';

const App = () => (
    <Router>
        <Route path='/' exact component={Search} />
        <Route path='/Saved' component={Saved} />
    </Router>
)


export default App