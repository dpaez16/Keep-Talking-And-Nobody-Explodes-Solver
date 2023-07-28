import React, {Component} from 'react';
import {Container, Header, Table, Input, Button, Dropdown, Label} from 'semantic-ui-react';
import MemoryStageRow from './memoryStageRow/memoryStageRow';
import NumberMemorySolver from '../../module_solvers/number_memory';
import './numberMemoryModulePage.css';

export default class NumberMemoryModulePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stageInputs: [],
            displayNumber: undefined,
            numberLabelPressed: undefined,
            positionPressed: undefined,
            stageAnswer: undefined
        };
    }

    handleChange(event, {name, value}) {
        this.setState({
            [name]: value
        });
    }

    solveStageInputValid() {
        const {displayNumber} = this.state;
        return displayNumber;
    }

    inputStepInputValid() {
        const {numberLabelPressed, positionPressed} = this.state;
        const stageNum = this.state.stageInputs.length + 1
        return numberLabelPressed && positionPressed && (stageNum <= NumberMemorySolver.MAX_STAGES);
    }

    parseStageAnswer(stageAnswerObj) {
        if (stageAnswerObj.hasOwnProperty("position")) {
            const positions = ["1st", "2nd", "3rd", "4th"];
            let position = stageAnswerObj.position;
            position = positions[position - 1];
            return `Press the button in the ${position} position.`;
        } else {
            const label = stageAnswerObj.label;
            return `Press the button labelled ${label}.`;
        }
    }

    parsePositionPressed(positionPressed) {
        const positionsMap = {
            "1st": 1,
            "2nd": 2,
            "3rd": 3,
            "4th": 4
        };

        return positionsMap[positionPressed];
    }

    render() {
        const labelNumbers = [1, 2, 3, 4];
        const positions = ["1st", "2nd", "3rd", "4th"];
        const stageNum = this.state.stageInputs.length + 1;

        return (
            <Container 
                className="NumberMemoryModulePage" 
                fluid 
            >
                <Header as='h1'>Memory</Header>
                <Container fluid>
                    <Input
                        label="Display Number?"
                        name="displayNumber"
                        onChange={this.handleChange.bind(this)}
                    />
                    <Button
                        positive
                        disabled={!this.solveStageInputValid()}
                        onClick={e => {
                            e.preventDefault();

                            const displayNumber = Number(this.state.displayNumber);
                            let stageAnswer = NumberMemorySolver.solve(stageNum, displayNumber, this.state.stageInputs);
                            stageAnswer = this.parseStageAnswer(stageAnswer);

                            this.setState({
                                stageAnswer: `Stage ${stageNum}: ${stageAnswer}`
                            });
                        }}
                    >
                        Solve Stage {stageNum}
                    </Button>
                </Container>
                {
                    this.state.stageAnswer &&
                    <Header as='h4'>
                        <b>{this.state.stageAnswer}</b>
                    </Header>
                }
                <Header as='h3'>Input Step:</Header>
                <Container fluid>
                    <Label>Position pressed?</Label>
                    <Dropdown
                        name="positionPressed"
                        placeholder="Position"
                        selection
                        options={positions.map(elem => { return {key: elem, value: elem, text: elem}; })}
                        onChange={this.handleChange.bind(this)}
                    />
                    <Label>Label of number pressed?</Label>
                    <Dropdown
                        name="numberLabelPressed"
                        placeholder="Label of number"
                        selection
                        options={labelNumbers.map(elem => { return {key: elem, value: elem, text: elem}; })}
                        onChange={this.handleChange.bind(this)}
                    />
                    <Button
                        positive
                        disabled={!this.inputStepInputValid()}
                        onClick={e => {
                            e.preventDefault();

                            let {numberLabelPressed, positionPressed} = this.state;
                            numberLabelPressed = Number(numberLabelPressed);
                            positionPressed = this.parsePositionPressed(positionPressed);

                            this.setState({
                                stageInputs: [...this.state.stageInputs, {position: positionPressed, label: numberLabelPressed}]
                            });
                        }}
                    >
                        Input Step
                    </Button>
                    <Button
                        negative
                        onClick={e => {
                            e.preventDefault();

                            this.setState({
                                stageInputs: []
                            });
                        }}
                    >
                        Clear Inputted Steps
                    </Button>
                </Container>
                <Table celled className="NumberMemoryModulePage_table">
                    <Table.Body>
                        {
                            this.state.stageInputs.map((inputMetadata, idx) => {
                                const {position, label} = inputMetadata;
                                return (
                                    <MemoryStageRow
                                        stage={idx + 1}
                                        position={position}
                                        label={label}
                                    />
                                );
                            })
                        }
                    </Table.Body>
                </Table>
            </Container>
        );
    }
};