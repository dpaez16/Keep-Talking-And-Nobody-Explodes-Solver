import React, {Component} from 'react';
import {Container, Header, Button, Input, Dropdown, Label} from 'semantic-ui-react';
import ButtonSolver from '../../module_solvers/button';
import {ButtonColor, ButtonLEDColor} from '../../types/button_color';
import ButtonText from '../../types/button_text';
import LitIndicatorText from '../../types/lit_indicator_text';
import './buttonModulePage.css';

export default class ButtonModulePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonColor: undefined,
            buttonText: undefined,
            numberOfBatteries: undefined,
            litIndicatorText: undefined,
            buttonLEDColor: undefined,
            part1Answer: undefined,
            part2Answer: undefined
        };
    }

    parsePart1Answer(holdButton) {
        const answer = holdButton ? "Hold the button." : "Press and release the button immediately.";
        return `Part 1: ${answer}`;
    }

    parsePart2Answer(digit) {
        const answer = `Release the button when there is a ${digit} in the timer.`;
        return `Part 2: ${answer}`;
    }

    handleChange(event, {name, value}) {
        this.setState({
            [name]: value
        });
    }

    dropdownHandler(event, {name, value}) {
        this.setState({
            [name]: value
        });
    }

    inputValid() {
        const {buttonColor, buttonText, numberOfBatteries, litIndicatorText} = this.state;
        return buttonColor && buttonText && numberOfBatteries && litIndicatorText;
    }

    render() {
        return (
            <Container 
                className="ButtonModulePage" 
                fluid 
            >
                <Header as='h1'>The Button</Header>
                <Container fluid>
                    <Label>Button Color</Label>
                    <Dropdown
                        label="Button Color"
                        className="buttonColorDropdown"
                        placeholder="Button Color"
                        name="buttonColor"
                        selection
                        options={ButtonColor.enumValues.map((button_color, idx) => { return {key: button_color.enumKey, value: button_color, text: button_color.enumKey}; })}
                        onChange={this.dropdownHandler.bind(this)}
                    />
                </Container>
                <Container fluid>
                    <Label>Button Text</Label>
                    <Dropdown
                        className="buttonTextDropdown"
                        placeholder="Button Text"
                        name="buttonText"
                        selection
                        options={ButtonText.enumValues.map((button_text, idx) => { return {key: button_text.enumKey, value: button_text, text: button_text.enumKey}; })}
                        onChange={this.dropdownHandler.bind(this)}
                    />
                </Container>
                <Container fluid>
                    <Label>Lit Indicator Text</Label>
                    <Dropdown
                        className="litIndicatorTextDropdown"
                        placeholder="Lit Indicator Text"
                        name="litIndicatorText"
                        selection
                        options={LitIndicatorText.enumValues.map((lit_indicator_text, idx) => { return {key: lit_indicator_text.enumKey, value: lit_indicator_text, text: lit_indicator_text.enumKey.replaceAll("_", " ")}; })}
                        onChange={this.dropdownHandler.bind(this)}
                    />
                </Container>
                <Container fluid>
                    <Input
                        label="Number of Batteries"
                        type="number"
                        name='numberOfBatteries'
                        onChange={this.handleChange.bind(this)}
                    />
                </Container>
                <Container fluid>
                    <Label>Button LED Color</Label>
                    <Dropdown
                        className="buttonLEDDropdown"
                        placeholder="Button LED Color"
                        name="buttonLEDColor"
                        selection
                        options={ButtonLEDColor.enumValues.map((button_led_color, idx) => { return {key: button_led_color.enumKey, value: button_led_color, text: button_led_color.enumKey}; })}
                        onChange={this.dropdownHandler.bind(this)}
                    />
                </Container>
                <Container fluid>
                <Button
                        positive
                        disabled={!this.inputValid()}
                        onClick={e => {
                            e.preventDefault();

                            const {buttonColor, buttonText, numberOfBatteries, litIndicatorText} = this.state;
                            let newAnswer = ButtonSolver.solve_p1(buttonColor, buttonText, numberOfBatteries, litIndicatorText);
                            newAnswer = this.parsePart1Answer(newAnswer);

                            this.setState({part1Answer: newAnswer});
                        }}
                    >
                        Solve Part 1
                    </Button>
                    <Button
                        positive
                        disabled={this.state.buttonLEDColor === undefined}
                        onClick={e => {
                            e.preventDefault();

                            const {buttonLEDColor} = this.state;
                            let newAnswer = ButtonSolver.solve_p2(buttonLEDColor);
                            newAnswer = this.parsePart2Answer(newAnswer);

                            this.setState({part2Answer: newAnswer});
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
                    this.state.part2Answer &&
                    <Header as='h3'>
                        <b>
                            {this.state.part2Answer}
                        </b>
                    </Header>
                }
            </Container>
        );
    }
};
