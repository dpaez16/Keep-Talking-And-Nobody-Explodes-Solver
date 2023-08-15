import React, {Component} from 'react';
import {Container, Header, List, Button, Input, Dropdown, Label} from 'semantic-ui-react';
import SimonSaysSolver from '../../module_solvers/simon_says';
import SimonSaysColor from '../../types/simon_says_color';
import './simonSaysModulePage.css';

export default class SimonSaysModulePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colorsPressed: [],
            selectedColor: undefined,
            serialNumberHasVowel: undefined,
            numberOfStrikes: undefined,
            answer: undefined
        };
    }

    parseAnswer(answer) {
        const mappedSequence = answer.map((elem) => elem.enumKey).join(", ");
        return `Sequence: ${mappedSequence}`;
    }

    handleChange(event, {name, value}) {
        this.setState({
            [name]: value
        });
    }

    addColorToSequence(color) {
        this.setState({
            colorsPressed: [...this.state.colorsPressed, color]
        });
    }

    inputValid() {
        const {colorsPressed, serialNumberHasVowel, numberOfStrikes} = this.state
        return (colorsPressed.length > 0) && serialNumberHasVowel !== undefined && numberOfStrikes !== undefined;
    }

    render() {
        return (
            <Container 
                className="SimonSaysModulePage" 
                fluid 
            >
                <Header as='h1'>Simon Says</Header>
                <Container fluid>
                    <Label>Serial Number has Vowel?</Label>
                    <Dropdown
                        className="serialNumberHasVowelDropdown"
                        name="serialNumberHasVowel"
                        placeholder="Yes/No"
                        selection
                        options={[[true, "Yes"], [false, "No"]].map(elem => { return {key: elem[1], value: elem[0], text: elem[1]}; })}
                        onChange={this.handleChange.bind(this)}
                    />
                </Container>
                <Container fluid>
                    <Input
                        label="Number of Strikes"
                        type="number"
                        name='numberOfStrikes'
                        onChange={this.handleChange.bind(this)}
                    />
                </Container>
                <Container fluid>
                    {
                        SimonSaysColor.enumValues.map((color) => {
                            return (
                                <Button
                                    color={color.enumKey.toLowerCase()}
                                    content={color.enumKey}
                                    onClick={e => {
                                        e.preventDefault();
                                        this.addColorToSequence(color);
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
                                colorsPressed: [],
                                answer: undefined
                            });
                        }}
                    >
                        Clear Color Sequence
                    </Button>
                    <Button
                        positive
                        disabled={!this.inputValid()}
                        onClick={e => {
                            e.preventDefault();

                            const {colorsPressed, serialNumberHasVowel, numberOfStrikes} = this.state
                            let newAnswer = SimonSaysSolver.solve(serialNumberHasVowel, numberOfStrikes, colorsPressed);
                            newAnswer = this.parseAnswer(newAnswer);

                            this.setState({answer: newAnswer});
                        }}
                    >
                        Solve
                    </Button>
                </Container>
                <List>
                    {
                        this.state.colorsPressed.map((color, idx) => {
                            return (
                                <List.Item key={idx}>
                                    {color.enumKey}
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