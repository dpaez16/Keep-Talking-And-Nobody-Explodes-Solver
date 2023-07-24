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
                    <List.Item href="/keypads">Keypads</List.Item>
                    <List.Item href="/simonsays">Simon Says</List.Item>
                    <List.Item href="/whosonfirst">Who's On First?</List.Item>
                    <List.Item href="/numbermemory">(Number) Memory</List.Item>
                    <List.Item href="/morsecode">Morse Code</List.Item>
                    <List.Item href="/complicatedwires">Complicated Wires</List.Item>
                    <List.Item href="/wiresequences">Wire Sequences</List.Item>
                    <List.Item href="/mazes">Mazes</List.Item>
                    <List.Item href="/passwords">Passwords</List.Item>
                </List>
            </Container>
        );
    }
};