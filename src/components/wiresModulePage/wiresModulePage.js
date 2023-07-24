import React, {Component} from 'react';
import {Container, Header, List, Button, Input} from 'semantic-ui-react';
import AddWireRow from './addWireRow/addWireRow';
import WiresSolver from '../../module_solvers/wires';
//import './wiresModulePage.css';

export default class WiresModulePage extends Component {
    constructor(props) {
        super(props);

        const initialWireColors = [...Array(WiresSolver.MAX_WIRES)];

        this.state = {
            wireColors: initialWireColors,
            lastSerialDigit: undefined,
            answer: undefined
        };
    }

    parseAnswer(answer) {
        const positions = [
            "First",
            "Second",
            "Third",
            "Fourth",
            "Fifth",
            "Sixth"
        ];

        return `Cut the ${positions[answer - 1]} wire.`;
    }

    render() {
        const range = [...Array(WiresSolver.MAX_WIRES)];

        return (
            <Container 
                className="WiresModulePage" 
                fluid 
            >
                <Header as='h1'>Wires</Header>
                <List>
                    {
                        range.map((_, idx) => {
                            return (
                                <List.Item key={idx}>
                                    <AddWireRow
                                        idx={idx}
                                        addHandler={(wireColor) => {
                                            const newWireColors = this.state.wireColors.toSpliced(idx, 1, wireColor);
                                            this.setState({wireColors: newWireColors});
                                        }}

                                        deleteHandler={() => {
                                            const newWireColors = this.state.wireColors.toSpliced(idx, 1, undefined);
                                            this.setState({wireColors: newWireColors});
                                        }}
                                    />
                                </List.Item>
                            );
                        })
                    }
                </List>
                <Input  label='Last Digit of Serial Number' 
                        type="number"
                        onChange={(e) => {
                            e.preventDefault();

                            const lastDigit = Number(e.target.value);
                            this.setState({lastSerialDigit: lastDigit});
                        }}
                />
                <Button
                    onClick={e => {
                        e.preventDefault();

                        const wireColors = this.state.wireColors.filter(wireColor => wireColor !== undefined);
                        const lastSerialDigit = this.state.lastSerialDigit;
                        let newAnswer = WiresSolver.solve(wireColors, lastSerialDigit);
                        newAnswer = this.parseAnswer(newAnswer);

                        this.setState({answer: newAnswer});
                    }}
                >
                    Solve
                </Button>
                {
                    this.state.answer &&
                    <p>
                        <b>
                            {this.state.answer}
                        </b>
                    </p>
                }
            </Container>
        );
    }
};