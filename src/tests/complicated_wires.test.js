const { expect, test } = require('@jest/globals');
import ComplicatedWiresSolver from '../module_solvers/complicated_wires';
import WireColor from '../types/wire_color';
import { getRandomDigit } from './testUtils';

describe('Complicated Wires Tests', () => {
    test('white wire, no star, led off', () => {
        const wire_colors = [WireColor.WHITE];
        const has_star = false;
        const led_is_on = false;
        const has_parallel_port = false;
        const num_batteries = getRandomDigit();
        const last_digit_of_serial_number = getRandomDigit();

        expect(ComplicatedWiresSolver.solve(wire_colors, has_star, led_is_on, last_digit_of_serial_number, has_parallel_port, num_batteries)).toBe(true);
    });

    test('white wire, no star, led on', () => {
        const wire_colors = [WireColor.WHITE];
        const has_star = false;
        const led_is_on = true;
        const has_parallel_port = false;
        const num_batteries = getRandomDigit();
        const last_digit_of_serial_number = getRandomDigit();

        expect(ComplicatedWiresSolver.solve(wire_colors, has_star, led_is_on, last_digit_of_serial_number, has_parallel_port, num_batteries)).toBe(false);
    });

    test('white wire, star, led off', () => {
        const wire_colors = [WireColor.WHITE];
        const has_star = true;
        const led_is_on = false;
        const has_parallel_port = false;
        const num_batteries = getRandomDigit();
        const last_digit_of_serial_number = getRandomDigit();

        expect(ComplicatedWiresSolver.solve(wire_colors, has_star, led_is_on, last_digit_of_serial_number, has_parallel_port, num_batteries)).toBe(true);
    });

    test('white wire, star, led on', () => {
        const wire_colors = [WireColor.WHITE];
        const has_star = true;
        const led_is_on = true;
        const has_parallel_port = false;
        const num_batteries = 2;
        const last_digit_of_serial_number = getRandomDigit();

        expect(ComplicatedWiresSolver.solve(wire_colors, has_star, led_is_on, last_digit_of_serial_number, has_parallel_port, num_batteries)).toBe(true);
    });

    test('blue wire, no star, led off', () => {
        const wire_colors = [WireColor.BLUE];
        const has_star = false;
        const led_is_on = false;
        const has_parallel_port = false;
        const num_batteries = getRandomDigit();
        const last_digit_of_serial_number = 2;

        expect(ComplicatedWiresSolver.solve(wire_colors, has_star, led_is_on, last_digit_of_serial_number, has_parallel_port, num_batteries)).toBe(true);
    });

    test('blue wire, no star, led on', () => {
        const wire_colors = [WireColor.BLUE];
        const has_star = false;
        const led_is_on = true;
        const has_parallel_port = true;
        const num_batteries = getRandomDigit();
        const last_digit_of_serial_number = 2;

        expect(ComplicatedWiresSolver.solve(wire_colors, has_star, led_is_on, last_digit_of_serial_number, has_parallel_port, num_batteries)).toBe(has_parallel_port);
    });

    test('blue wire, star, led off', () => {
        const wire_colors = [WireColor.BLUE];
        const has_star = true;
        const led_is_on = false;
        const has_parallel_port = true;
        const num_batteries = getRandomDigit();
        const last_digit_of_serial_number = getRandomDigit();

        expect(ComplicatedWiresSolver.solve(wire_colors, has_star, led_is_on, last_digit_of_serial_number, has_parallel_port, num_batteries)).toBe(false);
    });

    test('blue wire, star, led on', () => {
        const wire_colors = [WireColor.BLUE];
        const has_star = true;
        const led_is_on = true;
        const has_parallel_port = true;
        const num_batteries = getRandomDigit();
        const last_digit_of_serial_number = getRandomDigit();

        expect(ComplicatedWiresSolver.solve(wire_colors, has_star, led_is_on, last_digit_of_serial_number, has_parallel_port, num_batteries)).toBe(has_parallel_port);
    });

    test('red wire, no star, led off', () => {
        const wire_colors = [WireColor.RED];
        const has_star = false;
        const led_is_on = false;
        const has_parallel_port = true;
        const num_batteries = getRandomDigit();
        const last_digit_of_serial_number = 2;

        expect(ComplicatedWiresSolver.solve(wire_colors, has_star, led_is_on, last_digit_of_serial_number, has_parallel_port, num_batteries)).toBe(true);
    });

    test('red wire, no star, led on', () => {
        const wire_colors = [WireColor.RED];
        const has_star = false;
        const led_is_on = true;
        const has_parallel_port = true;
        const num_batteries = 2;
        const last_digit_of_serial_number = getRandomDigit();

        expect(ComplicatedWiresSolver.solve(wire_colors, has_star, led_is_on, last_digit_of_serial_number, has_parallel_port, num_batteries)).toBe(true);
    });

    test('red wire, star, led off', () => {
        const wire_colors = [WireColor.RED];
        const has_star = true;
        const led_is_on = false;
        const has_parallel_port = true;
        const num_batteries = getRandomDigit();
        const last_digit_of_serial_number = getRandomDigit();

        expect(ComplicatedWiresSolver.solve(wire_colors, has_star, led_is_on, last_digit_of_serial_number, has_parallel_port, num_batteries)).toBe(true);
    });

    test('red wire, star, led on', () => {
        const wire_colors = [WireColor.RED];
        const has_star = true;
        const led_is_on = true;
        const has_parallel_port = true;
        const num_batteries = 2;
        const last_digit_of_serial_number = getRandomDigit();

        expect(ComplicatedWiresSolver.solve(wire_colors, has_star, led_is_on, last_digit_of_serial_number, has_parallel_port, num_batteries)).toBe(true);
    });

    test('red + blue wire, no star, led off', () => {
        const wire_colors = [WireColor.RED, WireColor.BLUE];
        const has_star = false;
        const led_is_on = false;
        const has_parallel_port = true;
        const num_batteries = getRandomDigit();
        const last_digit_of_serial_number = 2;

        expect(ComplicatedWiresSolver.solve(wire_colors, has_star, led_is_on, last_digit_of_serial_number, has_parallel_port, num_batteries)).toBe(true);
    });

    test('red + blue wire, no star, led on', () => {
        const wire_colors = [WireColor.RED, WireColor.BLUE];
        const has_star = false;
        const led_is_on = true;
        const has_parallel_port = true;
        const num_batteries = getRandomDigit();
        const last_digit_of_serial_number = 2;

        expect(ComplicatedWiresSolver.solve(wire_colors, has_star, led_is_on, last_digit_of_serial_number, has_parallel_port, num_batteries)).toBe(true);
    });

    test('red + blue wire, star, led off', () => {
        const wire_colors = [WireColor.RED, WireColor.BLUE];
        const has_star = true;
        const led_is_on = false;
        const has_parallel_port = true;
        const num_batteries = getRandomDigit();
        const last_digit_of_serial_number = getRandomDigit();

        expect(ComplicatedWiresSolver.solve(wire_colors, has_star, led_is_on, last_digit_of_serial_number, has_parallel_port, num_batteries)).toBe(has_parallel_port);
    });

    test('red + blue wire, star, led on', () => {
        const wire_colors = [WireColor.RED, WireColor.BLUE];
        const has_star = true;
        const led_is_on = true;
        const has_parallel_port = true;
        const num_batteries = getRandomDigit();
        const last_digit_of_serial_number = getRandomDigit();

        expect(ComplicatedWiresSolver.solve(wire_colors, has_star, led_is_on, last_digit_of_serial_number, has_parallel_port, num_batteries)).toBe(false);
    });
});