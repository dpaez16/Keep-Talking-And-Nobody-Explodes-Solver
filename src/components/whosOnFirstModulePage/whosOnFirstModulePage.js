import React, {Component} from 'react';
import {Container, Header, Button, Dropdown, Label} from 'semantic-ui-react';
import WhosOnFirstSolver from '../../module_solvers/whos_on_first';
import WhosOnFirstDisplayWord from '../../types/whos_on_first_display_word';
import WhosOnFirstButtonLabelText from '../../types/whos_on_first_button_label_text';
import './whosOnFirstModulePage.css';

export default class WhosOnFirstModulePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayWord: undefined,
            buttonWordRead: undefined,
            part1Answer: undefined,
            part2Answer: undefined
        };
    }

    parsePart1Answer(rawAnswer) {
        const answer = rawAnswer.enumKey.replaceAll("_", " ");
        return `Read the ${answer} button.`;
    }

    parsePart2Answer(rawAnswer) {
        return rawAnswer.map(word => word.toString());
    }

    handleChange(event, {name, value}) {
        this.setState({
            [name]: value
        });
    }

    getPart2AnswerComponent() {
        const {part2Answer} = this.state;

        return (
            <React.Fragment>
                <Header as='h3'>
                    <b>
                        Sequence: {part2Answer.join(", ")}
                    </b>
                </Header>
            </React.Fragment>
        );
    }

    render() {
        return (
            <Container 
                className="WhosOnFirstModulePage" 
                fluid 
            >
                <Header as='h1'>Who's on First?</Header>
                <Container fluid>
                    <Label>Word on main display?</Label>
                    <Dropdown
                        className="displayWordDropdown"
                        name="displayWord"
                        placeholder="Main Display Word"
                        selection
                        search
                        options={WhosOnFirstDisplayWord.enumValues.map(word => { return {key: word.enumKey, value: word, text: word.toString()}; })}
                        onChange={this.handleChange.bind(this)}
                    />
                </Container>
                <Container fluid>
                    <Label>Button word read on panel?</Label>
                    <Dropdown
                        className="buttonWordReadDropdown"
                        name="buttonWordRead"
                        placeholder="Button Word Read"
                        selection
                        search
                        options={WhosOnFirstButtonLabelText.enumValues.map(word => { return {key: word.enumKey, value: word, text: word.toString()}; })}
                        onChange={this.handleChange.bind(this)}
                    />
                </Container>
                <Container fluid>
                    <Button
                        positive
                        disabled={!this.state.displayWord}
                        onClick={e => {
                            e.preventDefault();

                            const {displayWord} = this.state;
                            const part1Answer = WhosOnFirstSolver.solve_p1(displayWord);

                            this.setState({
                                part1Answer: this.parsePart1Answer(part1Answer)
                            });
                        }}
                    >
                        Solve Part 1
                    </Button>
                    <Button
                        positive
                        disabled={!this.state.buttonWordRead}
                        onClick={e => {
                            e.preventDefault();

                            const {buttonWordRead} = this.state;
                            const part2Answer = WhosOnFirstSolver.solve_p2(buttonWordRead);

                            this.setState({
                                part2Answer: this.parsePart2Answer(part2Answer)
                            });
                        }}
                    >
                        Solve Part 2
                    </Button>
                </Container>
                {
                    this.state.part1Answer &&
                    <Header as='h3'>
                        <b>
                            {this.state.part1Answer}
                        </b>
                    </Header>
                }
                {
                    this.state.part2Answer && this.getPart2AnswerComponent()
                }
            </Container>
        );
    }
};