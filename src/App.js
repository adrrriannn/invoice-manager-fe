import React, { Component } from 'react';
import './App.css';
import InvoiceSearch from './components/InvoiceSearch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact={true} component={InvoiceSearch}/>
                </Switch>
            </Router>
        )
    }
}

export default App;
