import React, {Component} from 'react';
import {Container, Header, Button, Input, Dropdown, Label} from 'semantic-ui-react';
import ComplictedWiresSolver from '../../module_solvers/complicated_wires';
import WireColor from '../../types/wire_color';
import './complicatedWiresModulePage.css';

export default class ComplicatedWiresModulePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wireColors: [],
            hasStar: undefined,
            ledIsOn: undefined,
            lastSerialDigit: undefined,
            hasParallelPort: undefined,
            numberOfBatteries: undefined,
            answer: undefined
        };
    }

    parseAnswer(cutWire) {
        return cutWire ? "Cut the wire." : "Do NOT cut the wire.";
    }

    handleChange(event, {name, value}) {
        this.setState({
            [name]: value
        });
    }

    dropdownHandler(event, {name, value}) {
        this.setState({
            [name]: value
        });
    }

    inputValid() {
        const {wireColors, hasStar, ledIsOn, lastSerialDigit, hasParallelPort, numberOfBatteries} = this.state;
        return (wireColors.length > 0) && hasStar !== undefined && ledIsOn !== undefined && lastSerialDigit !== undefined && hasParallelPort !== undefined && numberOfBatteries !== undefined;
    }

    render() {
        return (
            <Container 
                className="ComplicatedWiresModulePage" 
                fluid 
            >
                <Header as='h1'>Complicated Wires</Header>
                <Container fluid>
                    <Label>Wire Colors</Label>
                    <Dropdown
                        className="buttonColorDropdown"
                        placeholder="Wire Color"
                        name="wireColors"
                        multiple
                        selection
                        options={WireColor.enumValues.map((wire_color, idx) => { return {key: wire_color.enumKey, value: wire_color, text: wire_color.enumKey}; })}
                        onChange={this.dropdownHandler.bind(this)}
                    />
                </Container>
                <Container fluid>
                    <Label>Has Star?</Label>
                    <Dropdown
                        className="hasStarDropdown"
                        placeholder="Button Text"
                        name="hasStar"
                        selection
                        options={[[true, "Yes"], [false, "No"]].map(option => { return {key: option[1], value: option[0], text: option[1]}; })}
                        onChange={this.dropdownHandler.bind(this)}
                    />
                </Container>
                <Container fluid>
                    <Label>LED is on?</Label>
                    <Dropdown
                        className="ledIsOnDropdown"
                        placeholder="LED is on?"
                        name="ledIsOn"
                        selection
                        options={[[true, "Yes"], [false, "No"]].map(option => { return {key: option[1], value: option[0], text: option[1]}; })}
                        onChange={this.dropdownHandler.bind(this)}
                    />
                </Container>
                <Container fluid>
                    <Input
                        label="Last Digit of Serial Number"
                        type="number"
                        name='lastSerialDigit'
                        onChange={this.handleChange.bind(this)}
                    />
                </Container>
                <Container fluid>
                    <Label>Has parallel port?</Label>
                    <Dropdown
                        className="hasParallelPortDropdown"
                        placeholder="Has parallel port?"
                        name="hasParallelPort"
                        selection
                        options={[[true, "Yes"], [false, "No"]].map(option => { return {key: option[1], value: option[0], text: option[1]}; })}
                        onChange={this.dropdownHandler.bind(this)}
                    />
                </Container>
                <Container fluid>
                    <Input
                        label="Number of Batteries"
                        type="number"
                        name='numberOfBatteries'
                        onChange={this.handleChange.bind(this)}
                    />
                </Container>
                <Container fluid>
                <Button
                        positive
                        disabled={!this.inputValid()}
                        onClick={e => {
                            e.preventDefault();

                            const {wireColors, hasStar, ledIsOn, lastSerialDigit, hasParallelPort, numberOfBatteries} = this.state;
                            let newAnswer = ComplictedWiresSolver.solve(wireColors, hasStar, ledIsOn, lastSerialDigit, hasParallelPort, numberOfBatteries);
                            newAnswer = this.parseAnswer(newAnswer);

                            this.setState({answer: newAnswer});
                        }}
                    >
                        Solve
                    </Button>
                </Container>
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