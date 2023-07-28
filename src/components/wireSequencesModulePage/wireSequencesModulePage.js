import React, {Component} from 'react';
import {Container, Header, Button, Dropdown, Label} from 'semantic-ui-react';
import WireSequenceColumn from './wireSequenceColumn/wireSequenceColumn';
import WireSequencesSolver from '../../module_solvers/wire_sequences';
import WireColor from '../../types/wire_color';
import './wireSequencesModulePage.css';

export default class WireSequencesModulePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wireConnections: {
                [WireColor.RED]: [],
                [WireColor.BLUE]: [],
                [WireColor.BLACK]: []
            },
            answer: undefined
        };
    }

    parseAnswer(cutWire) {
        return cutWire ? `Cut the wire.` : `Do NOT cut the wire.`;
    }

    handleChange(event, {name, value}) {
        this.setState({
            [name]: value
        });
    }

    inputValid() {
        const {wireColor, wireConnectionPort} = this.state;
        const wireConnections = this.state.wireConnections[wireColor];
        return wireColor && wireConnectionPort && (wireConnections.length < 9);
    }

    render() {
        const possibleWireColors = [WireColor.RED, WireColor.BLUE, WireColor.BLACK];

        return (
            <Container  className="WireSequencesModulePage" 
                        fluid
            >
                <Header as='h1'>Wire Sequences</Header>
                <Container  className="WireSequencesInput"
                            fluid
                >
                    <Label>Wire Color</Label>
                    <Dropdown
                        className="wireColorDropdown"
                        name="wireColor"
                        placeholder="Wire Color"
                        options={possibleWireColors.map(elem => { return {key: elem.enumKey, value: elem, text: elem.enumKey}; })}
                        onChange={this.handleChange.bind(this)}
                    />
                    <Label>Wire Connection Port</Label>
                    <Dropdown
                        className="wireConnectionPortDropdown"
                        name="wireConnectionPort"
                        placeholder="Wire Connection Port"
                        options={["A", "B", "C"].map(elem => { return {key: elem, value: elem, text: elem}; })}
                        onChange={this.handleChange.bind(this)}
                    />
                </Container>
                <Container  className="WireSequencesAnswer"
                            fluid
                >
                    {
                        this.state.answer &&
                        <Header as='h3'>
                            <b>{this.state.answer}</b>
                        </Header>
                    }
                </Container>
                <Container  className="WireSequencesButtons"
                            fluid
                >
                    <Button
                        positive
                        disabled={!this.inputValid()}
                        onClick={e => {
                            e.preventDefault();

                            const {wireConnections, wireColor, wireConnectionPort} = this.state;
                            let newAnswer = WireSequencesSolver.solve(wireColor, wireConnectionPort, wireConnections);
                            newAnswer = this.parseAnswer(newAnswer);
                            
                            const newWireConnections = {...wireConnections};
                            newWireConnections[wireColor].push(wireConnectionPort);

                            this.setState({
                                wireConnections: newWireConnections,
                                answer: newAnswer
                            });
                        }}
                    >
                        Add Wire Connection
                    </Button>
                    <Button
                        negative
                        onClick={e => {
                            e.preventDefault();

                            this.setState({
                                wireConnections: {
                                    [WireColor.RED]: [],
                                    [WireColor.BLUE]: [],
                                    [WireColor.BLACK]: []
                                },
                                answer: undefined
                            });
                        }}
                    >
                        Clear Sequence
                    </Button>
                </Container>
                <Container  className="WireSequenceColumns"
                            fluid
                >
                    {
                        possibleWireColors.map(color => {
                            return (
                                <WireSequenceColumn
                                    wireColor={color.enumKey}
                                    connections={this.state.wireConnections[color]}
                                />
                            );
                        })
                    }
                </Container>
            </Container>
        );
    }
};