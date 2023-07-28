import React, {Component} from 'react';
import {Container, Header, Input, Button, List} from 'semantic-ui-react';
import PasswordsSolver from '../../module_solvers/passwords';
import './passwordsModulePage.css';

export default class PasswordsModulePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: []
        };
    }

    handleChange(event, {name, value}) {
        this.setState({
            [name]: value
        });
    }

    inputValid() {
        const {prefix} = this.state;
        return prefix;
    }

    render() {
        return (
            <Container 
                className="PasswordsModulePage" 
                fluid 
            >
                <Header as='h1'>Passwords</Header>
                <Container fluid>
                    <Input
                        label="Prefix"
                        name="prefix"
                        onChange={this.handleChange.bind(this)}
                    />
                </Container>
                <Container  className="PasswordsModuleButton"
                            fluid
                >
                    <Button
                        disabled={!this.inputValid()}
                        onClick={e => {
                            e.preventDefault();

                            const {prefix} = this.state;
                            const answer = PasswordsSolver.solve(prefix);
                            
                            this.setState({
                                answer: answer
                            });
                        }}
                    >
                        Solve
                    </Button>
                </Container>
                <Header as='h3'>
                    <List>
                    {
                        this.state.answer.map((word, idx) => {
                            return (
                                <List.Item key={idx}>
                                    {word}
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