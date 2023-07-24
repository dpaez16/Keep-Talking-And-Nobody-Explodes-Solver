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
                            <Route  path="/keypads" 
                                    element={<HomePage/>} // TODO
                            />
                            <Route  path="/simonsays" 
                                    element={<HomePage/>} // TODO
                            />
                            <Route  path="/whosonfirst" 
                                    element={<HomePage/>} // TODO
                            />
                            <Route  path="/numbermemory" 
                                    element={<HomePage/>} // TODO
                            />
                            <Route  path="/morsecode" 
                                    element={<HomePage/>} // TODO
                            />
                            <Route  path="/complicatedwires" 
                                    element={<HomePage/>} // TODO
                            />
                            <Route  path="/wiresequences" 
                                    element={<HomePage/>} // TODO
                            />
                            <Route  path="/mazes" 
                                    element={<HomePage/>} // TODO
                            />
                            <Route  path="/passwords" 
                                    element={<HomePage/>} // TODO
                            />
                        </Routes>
                    </Container>
                </React.Fragment>
            </Router>
        );
    }
};
