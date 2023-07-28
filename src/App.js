import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Container} from 'semantic-ui-react';
import HomePage from './components/homePage/homePage';
import WiresModulePage from './components/wiresModulePage/wiresModulePage';
import ButtonModulePage from './components/buttonModulePage/buttonModulePage';
import ComplicatedWiresModulePage from './components/complicatedWiresModulePage/complicatedWiresModulePage';
import KeypadsModulePage from './components/keypadsModulePage/keypadsModulePage';
import SimonSaysModulePage from './components/simonSaysModulePage/simonSaysModulePage';
import WhosOnFirstModulePage from './components/whosOnFirstModulePage/whosOnFirstModulePage';
import NumberMemoryModulePage from './components/numberMemoryModulePage/numberMemoryModulePage';
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
                                    element={<KeypadsModulePage/>}
                            />
                            <Route  path="/simonsays" 
                                    element={<SimonSaysModulePage/>}
                            />
                            <Route  path="/whosonfirst" 
                                    element={<WhosOnFirstModulePage/>}
                            />
                            <Route  path="/numbermemory" 
                                    element={<NumberMemoryModulePage/>}
                            />
                            <Route  path="/morsecode" 
                                    element={<HomePage/>} // TODO
                            />
                            <Route  path="/complicatedwires"
                                    element={<ComplicatedWiresModulePage/>}
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
