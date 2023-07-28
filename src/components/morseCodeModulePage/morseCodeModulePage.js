import React, {Component} from 'react';
import {Container, Header, Input, Button, List} from 'semantic-ui-react';
import MorseCodeSolver from '../../module_solvers/morse_code';
import './morseCodeModulePage.css';

export default class MorseCodeModulePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            morseCodeSequence: [],
            morseCodeLetter: undefined,
            possibleWords: []
        };
    }

    handleChange(event, {name, value}) {
        this.setState({
            [name]: value
        });
    }

    translateMorseCodeChar(morseLetter) {
        const chars = MorseCodeSolver.get_chars_from_sequence([morseLetter]);
        return chars[0];
    }

    morseCodeLetterInputValid() {
        const {morseCodeLetter} = this.state;
        const regex = RegExp(/^[\.\-]+$/);

        const char = this.translateMorseCodeChar(morseCodeLetter);
        return regex.test(morseCodeLetter) && char !== undefined;
    }

    render() {
        return (
            <Container 
                className="MorseCodeModulePage" 
                fluid 
            >
                <Header as='h1'>Morse Code</Header>
                <Container fluid>
                    <Input
                        label="Morse Code Letter Input"
                        name="morseCodeLetter"
                        onChange={this.handleChange.bind(this)}
                    />
                    <Button
                        positive
                        disabled={!this.morseCodeLetterInputValid()}
                        onClick={e => {
                            e.preventDefault();

                            const {morseCodeLetter} = this.state;
                            this.setState({
                                morseCodeSequence: [...this.state.morseCodeSequence, morseCodeLetter]
                            });
                        }}
                    >
                        Add character
                    </Button>
                </Container>
                <Header as='h3'>
                    <List>
                        {
                            this.state.morseCodeSequence.map((morseLetter, idx) => {
                                return (
                                    <List.Item key={idx}>
                                        {this.translateMorseCodeChar(morseLetter)}: {morseLetter}
                                    </List.Item>
                                );
                            })
                        }
                    </List>
                </Header>
                <Container fluid>
                    <Button
                        positive
                        onClick={e => {
                            e.preventDefault();

                            const {morseCodeSequence} = this.state;
                            const possibleWords = MorseCodeSolver.solve(morseCodeSequence);
                            this.setState({
                                possibleWords: possibleWords
                            });
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        positive
                        onClick={e => {
                            e.preventDefault();

                            this.setState({
                                morseCodeSequence: []
                            });
                        }}
                    >
                        Clear Sequence
                    </Button>
                    <Button
                        positive
                        onClick={e => {
                            e.preventDefault();

                            this.setState({
                                possibleWords: []
                            });
                        }}
                    >
                        Clear Search Results
                    </Button>
                </Container>
                <Header as='h3'>
                    <List>
                        {
                            this.state.possibleWords.map((arr, idx) => {
                                const word = arr[0];
                                const frequency = arr[1];
                                return (
                                    <List.Item key={idx}>
                                        {word.enumKey}: {frequency}
                                    </List.Item>
                                );
                            })
                        }
                    </List>
                </Header>
            </Container>
        );
    }
};