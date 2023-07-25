import React, {Component} from 'react';
import {Container, Header, Button, Input, Dropdown, Label, Image} from 'semantic-ui-react';
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
                            <Image src={require(`./keypad_symbols/${symbol.enumKey.toLowerCase()}.png`)} />
                        );
                    })
                }
            </Header>
        );
    }

    render() {
        const options = KeypadSymbol.enumValues.map((symbol) => {
            return {
                key: symbol.enumKey, 
                value: symbol, 
                text: '',
                image: { avatar: false, src: require(`./keypad_symbols/${symbol.enumKey.toLowerCase()}.png`) }
            };
        });

        return (
            <Container 
                className="KeypadsModulePage" 
                fluid 
            >
                <Header as='h1'>Keypads</Header>
                <Container fluid>
                    <Label>Keypad Symbols</Label>
                    <Dropdown
                        className="keypadSymbolsDropdown"
                        placeholder="Keypad Symbol"
                        name="keypadSymbols"
                        multiple
                        selection
                        options={options}
                        onChange={this.handleChange.bind(this)}
                    />
                </Container>
                <Container fluid>
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