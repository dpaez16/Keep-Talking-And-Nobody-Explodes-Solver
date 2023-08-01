import React, {Component} from 'react';
import {Container, Header, List, Button, Input} from 'semantic-ui-react';
import WiresSolver from '../../module_solvers/wires';
import WireColor from '../../types/wire_color';
import './wiresModulePage.css';

export default class WiresModulePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wireColors: [],
            selectedWire: undefined,
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

    handleChange(event, {name, value}) {
        this.setState({
            [name]: value
        });
    }

    addWireDropdownHandler(event, {value}) {
        this.setState({
            selectedWire: value
        });
    }

    inputValid() {
        if (this.state.lastSerialDigit === undefined) return false;
        return this.state.wireColors.length >= 3;
    }

    render() {
        return (
            <Container 
                className="WiresModulePage" 
                fluid 
            >
                <Header as='h1'>Wires</Header>
                <Container fluid>
                    <Input
                        label="Last Digit of Serial Number"
                        type="number"
                        name='lastSerialDigit'
                        onChange={this.handleChange.bind(this)}
                    />
                </Container>
                <Container fluid>
                    {
                        WireColor.enumValues.map((wire_color, idx) => {
                            return (
                                <Button
                                    color={wire_color.enumKey.toLowerCase()}
                                    content={wire_color.enumKey}
                                    onClick={e => {
                                        e.preventDefault();

                                        if (this.state.wireColors.length === WiresSolver.MAX_WIRES) {
                                            return;
                                        }

                                        this.setState({wireColors: [...this.state.wireColors, wire_color]});
                                    }}
                                />
                            );
                        })
                    }
                </Container>
                <Container fluid>
                    <Button
                        negative
                        onClick={e => {
                            e.preventDefault();

                            this.setState({
                                wireColors: [],
                                answer: undefined
                            });
                        }}
                    >
                        Clear Wires
                    </Button>
                    <Button
                        positive
                        disabled={!this.inputValid()}
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
                </Container>
                <List>
                    {
                        this.state.wireColors.map((wireColor, idx) => {
                            return (
                                <List.Item key={idx}>
                                    {wireColor.enumKey}
                                </List.Item>
                            );
                        })
                    }
                </List>
                {
                    this.state.answer &&
                    <Header as='h3'>
                        <b>
                            {this.state.answer}
                        </b>
                    </Header>
                }
            </Container>
        );
    }
};