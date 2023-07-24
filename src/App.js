import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Container} from 'semantic-ui-react';
import HomePage from './components/homePage/homePage';
import WiresModulePage from './components/wiresModulePage/wiresModulePage';
import ButtonModulePage from './components/buttonModulePage/buttonModulePage';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Container fluid className="main-content">
                        <Routes>
                            <Route  path="/" 
                                    element={<HomePage/>}
                            />
                            <Route  path="/wires" 
                                    element={<WiresModulePage/>}
                            />
                            <Route  path="/button" 
                                    element={<ButtonModulePage/>}
                            />
                        </Routes>
                    </Container>
                </React.Fragment>
            </Router>
        );
    }
};
