import React, {Component} from 'react';
import {Container, Header, List} from 'semantic-ui-react';

export default class WireSequenceColumn extends Component {
    render() {
        const {wireColor, connections} = this.props;

        if (connections.length === 0) {
            return (<React.Fragment></React.Fragment>);
        }

        return (
            <Container 
                className="WireSequenceColumn"
                fluid
            >
                <Header as='h1'>{wireColor} Wire Connections</Header>
                <List>
                    {
                        connections.map((connection, idx) => {
                            return (
                                <List.Item key={idx}>
                                    {connection.toString()}
                                </List.Item>
                            );
                        })
                    }
                </List>
            </Container>
        );
    }
};