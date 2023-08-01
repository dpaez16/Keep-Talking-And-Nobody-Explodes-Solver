import React, {Component} from 'react';
import {Container, Header, Button, Image, Divider} from 'semantic-ui-react';
import KeypadsSolver from '../../module_solvers/keypads';
import KeypadSymbol from '../../types/keypad_symbol';
import './keypadsModulePage.css';

export default class KeypadsModulePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keypadSymbols: [],
            answer: undefined
        };
    }

    handleChange(event, {name, value}) {
        this.setState({
            [name]: value
        });
    }

    inputValid() {
        return this.state.keypadSymbols.length === 4;
    }

    getAnswerComponent() {
        const answer = this.state.answer;
        if (answer.constructor.name === 'String') {
            return (
                <Header as='h3'>
                    <b>
                        {this.state.answer}
                    </b>
                </Header>
            );
        }

        return (
            <Header as='h3'>
                {
                    this.state.answer.map((symbol, idx) => {
                        return (
                            <Image 
                                src={require(`./keypad_symbols/${symbol.enumKey.toLowerCase()}.png`)} 
                                bordered
                            />
                        );
                    })
                }
            </Header>
        );
    }

    render() {
        return (
            <Container 
                className="KeypadsModulePage" 
                fluid 
            >
                <Header as='h1'>Keypads</Header>
                <Container 
                    className="KeypadsModulePage_symbols"
                    fluid
                >
                    {
                        KeypadSymbol.enumValues.map((keypad_symbol, idx) => {
                            return (
                                <Image  src={require(`./keypad_symbols/${keypad_symbol.enumKey.toLowerCase()}.png`)}
                                        size="tiny"
                                        bordered
                                        key={idx}
                                        wrapped={true}
                                        onClick={e => {
                                            e.preventDefault();

                                            if (this.state.keypadSymbols.length === 4) {
                                                return;
                                            }

                                            this.setState({
                                                keypadSymbols: [...this.state.keypadSymbols, keypad_symbol]
                                            });
                                        }}
                                />
                            );
                        })
                    }
                </Container>
                <Divider />
                <Container fluid>
                    <Header as='h3'>
                        {this.state.keypadSymbols.length > 0 && "Selected:"}
                    </Header>
                    {
                        this.state.keypadSymbols.map((keypad_symbol, idx) => {
                            return (
                                <Image  src={require(`./keypad_symbols/${keypad_symbol.enumKey.toLowerCase()}.png`)}
                                        size="tiny"
                                        key={idx}
                                        wrapped={true}
                                        bordered
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
                            keypadSymbols: [],
                            answer: undefined
                        });
                    }}
                >
                    Clear Symbols
                </Button>
                <Button
                        positive
                        disabled={!this.inputValid()}
                        onClick={e => {
                            e.preventDefault();

                            const {keypadSymbols} = this.state;
                            let newAnswer = KeypadsSolver.solve(keypadSymbols);
                            if (newAnswer === undefined) {
                                newAnswer = "Solution does not exist.";
                            }

                            this.setState({answer: newAnswer});
                        }}
                    >
                        Solve
                    </Button>
                </Container>
                {
                    this.state.answer && this.getAnswerComponent()
                }
            </Container>
        );
    }
};