const { expect, test } = require('@jest/globals');
import { ButtonColor, ButtonLEDColor } from '../types/button_color';
import LitIndicatorText from '../types/lit_indicator_text';
import ButtonText from '../types/button_text';
import ButtonSolver from '../module_solvers/button';
import { getRandomDigit } from './testUtils';

describe('Button Module Tests', () => {
    test('holding button tests', () => {
        expect(ButtonSolver.solve_p2(ButtonLEDColor.BLUE)).toBe(4);
        expect(ButtonSolver.solve_p2(ButtonLEDColor.WHITE)).toBe(1);
        expect(ButtonSolver.solve_p2(ButtonLEDColor.YELLOW)).toBe(5);
        expect(ButtonSolver.solve_p2(ButtonLEDColor.BLACK)).toBe(1);
        expect(ButtonSolver.solve_p2(ButtonLEDColor.RED)).toBe(1);
    });

    test('blue button, abort text', () => {
        const button_color = ButtonColor.BLUE;
        const button_text = ButtonText.ABORT;
        const num_batteries = getRandomDigit();
        const lit_indicator_text = LitIndicatorText.BOB;

        expect(ButtonSolver.solve_p1(button_color, button_text, num_batteries, lit_indicator_text)).toBe(true);
    });

    test('red button, 2 batteries, detonate text', () => {
        const button_color = ButtonColor.RED;
        const button_text = ButtonText.DETONATE;
        const num_batteries = 2;
        const lit_indicator_text = LitIndicatorText.BOB;

        expect(ButtonSolver.solve_p1(button_color, button_text, num_batteries, lit_indicator_text)).toBe(false);
    });

    test('white button, 1 battery, lit indicator with label CAR', () => {
        const button_color = ButtonColor.WHITE;
        const button_text = ButtonText.ABORT;
        const num_batteries = 1;
        const lit_indicator_text = LitIndicatorText.CAR;

        expect(ButtonSolver.solve_p1(button_color, button_text, num_batteries, lit_indicator_text)).toBe(true);
    });

    test('white button, 3 batteries, abort text, lit indicator with label FRK', () => {
        const button_color = ButtonColor.WHITE;
        const button_text = ButtonText.ABORT;
        const num_batteries = 3;
        const lit_indicator_text = LitIndicatorText.FRK;

        expect(ButtonSolver.solve_p1(button_color, button_text, num_batteries, lit_indicator_text)).toBe(false);
    });

    test('yellow button, 0 batteries', () => {
        const button_color = ButtonColor.YELLOW;
        const button_text = ButtonText.ABORT;
        const num_batteries = 0;
        const lit_indicator_text = LitIndicatorText.FRK;

        expect(ButtonSolver.solve_p1(button_color, button_text, num_batteries, lit_indicator_text)).toBe(true);
    });

    test('red button, hold text, 0 batteries', () => {
        const button_color = ButtonColor.RED;
        const button_text = ButtonText.HOLD;
        const num_batteries = 0;
        const lit_indicator_text = LitIndicatorText.FRK;

        expect(ButtonSolver.solve_p1(button_color, button_text, num_batteries, lit_indicator_text)).toBe(false);
    });

    test('blue button, hold text, 0 batteries', () => {
        const button_color = ButtonColor.BLUE;
        const button_text = ButtonText.HOLD;
        const num_batteries = 0;
        const lit_indicator_text = LitIndicatorText.FRK;

        expect(ButtonSolver.solve_p1(button_color, button_text, num_batteries, lit_indicator_text)).toBe(true);
    });
});