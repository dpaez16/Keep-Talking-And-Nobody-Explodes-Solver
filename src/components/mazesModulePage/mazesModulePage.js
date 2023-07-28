import React, {Component} from 'react';
import {Container, Header, Button, Input} from 'semantic-ui-react';
import MazesSolver from '../../module_solvers/mazes';
import './mazesModulePage.css';

export default class MazesModulePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: undefined
        };
    }

    parseAnswer(rawAnswer) {
        return rawAnswer.toString();
    }

    handleChange(event, {name, value}) {
        this.setState({
            [name]: value
        });
    }

    inputValid() {
        const {circle1RowCoord, circle2RowCoord, circle1ColCoord, circle2ColCoord} = this.state;
        return false;
    }

    render() {
        return (
            <Container 
                className="MazesModulePage" 
                fluid 
            >
                <Header as='h1'>Mazes</Header>
                <p>Note: Coordinates should be 1-indexed!</p>
                
                <Header as='h3'>Circle 1</Header>
                <Container fluid>
                    <Input
                        label="Row Coordinate"
                        name="circle1RowCoord"
                        onChange={this.handleChange.bind(this)}
                    />
                    <Input
                        label="Column Coordinate"
                        name="circle1ColCoord"
                        onChange={this.handleChange.bind(this)}
                    />
                </Container>

                <Header as='h3'>Circle 2</Header>
                <Container fluid>
                    <Input
                        label="Row Coordinate"
                        name="circle2RowCoord"
                        onChange={this.handleChange.bind(this)}
                    />
                    <Input
                        label="Column Coordinate"
                        name="circle2ColCoord"
                        onChange={this.handleChange.bind(this)}
                    />
                </Container>

                <Header as='h3'>Red Triangle</Header>
                <Container fluid>
                    <Input
                        label="Row Coordinate"
                        name="triangleRowCoord"
                        onChange={this.handleChange.bind(this)}
                    />
                    <Input
                        label="Column Coordinate"
                        name="triangleColCoord"
                        onChange={this.handleChange.bind(this)}
                    />
                </Container>

                <Header as='h3'>White Square</Header>
                <Container fluid>
                    <Input
                        label="Row Coordinate"
                        name="whiteSquareRowCoord"
                        onChange={this.handleChange.bind(this)}
                    />
                    <Input
                        label="Column Coordinate"
                        name="whiteSquareColCoord"
                        onChange={this.handleChange.bind(this)}
                    />
                </Container>

                <Container  className="MazesSolverButton"
                            fluid
                >
                    <Button
                        disabled={false}
                        onClick={e => {
                            e.preventDefault();

                            const circles = [
                                [Number(this.state.circle1RowCoord), Number(this.state.circle1ColCoord)],
                                [Number(this.state.circle2RowCoord), Number(this.state.circle2ColCoord)]
                            ];

                            const triangleCoords = [
                                Number(this.state.triangleRowCoord), 
                                Number(this.state.triangleColCoord)
                            ];

                            const whiteSquareCoords = [
                                Number(this.state.whiteSquareRowCoord), 
                                Number(this.state.whiteSquareColCoord)
                            ];

                            const path = MazesSolver.solve(circles, triangleCoords, whiteSquareCoords);
                            const answer = MazesSolver.getStepsFromPath(path);
                            
                            this.setState({
                                answer: answer
                            });
                        }}
                    >
                        Solve
                    </Button>
                </Container>
                {
                    this.state.answer &&
                    <Header as='h3'>
                        <b>{this.state.answer}</b>
                    </Header>
                }
            </Container>
        );
    }
};