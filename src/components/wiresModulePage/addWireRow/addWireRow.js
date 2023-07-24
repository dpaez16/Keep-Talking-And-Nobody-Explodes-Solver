import React, {Component} from 'react';
import {Container, Button} from 'semantic-ui-react';
import WireColor from '../../../types/wire_color';
//import './addWireRow.css';

export default class AddWireRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wireColor: undefined
        };
    }

    render() {
        if (this.state.wireColor === undefined) {
            return (
                <Container fluid>
                    <span> Wire #{this.props.idx + 1} </span>
                    {
                        WireColor.enumValues.map((wire_color, idx) => {
                            return (
                                <Button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.setState({wireColor: wire_color});
                                        this.props.addHandler(wire_color);
                                    }}
                                >
                                    {wire_color.enumKey}
                                </Button>
                            );
                        })
                    }
                </Container>
            );
        }

        return (
            <Container fluid>
                <span> {this.state.wireColor.enumKey} </span>
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({wireColor: undefined});
                    }}
                >
                    Delete
                </Button>
            </Container>
        );
    }
};