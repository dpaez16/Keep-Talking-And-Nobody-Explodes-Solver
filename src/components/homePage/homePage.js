import React, {Component} from 'react';
import {Container, Header, List} from 'semantic-ui-react';
import './homePage.css';

export default class HomePage extends Component {
    render() {
        return (
            <Container 
                className="HomePage" 
                textAlign='center'
                fluid 
            >
                <Header as='h1'>Keep Talking and Nobody Explodes Bomb Defusal Assistance Tool</Header>
                <List bulleted>
                    <List.Item href="/wires">(Simple) Wires</List.Item>
                    <List.Item href="/button">The Button</List.Item>
                </List>
            </Container>
        );
    }
};