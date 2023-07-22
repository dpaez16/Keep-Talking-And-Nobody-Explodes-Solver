const { expect, test } = require('@jest/globals');
import WiresSolver from '../module_solvers/wires';
import WireColor from '../types/wire_color';
import { getRandomDigit } from './testUtils';

describe('Wires Module Tests', () => {
    test('3 wires - no red wires', () => {
        const wires = ['BLACK', 'BLUE', 'WHITE'].map(wire => WireColor.fromString(wire));
        const last_serial_number_digit = getRandomDigit();

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(2);
    });

    test('3 wires - red wires, last wire is white', () => {
        const wires = ['RED', 'BLUE', 'WHITE'].map(wire => WireColor.fromString(wire));
        const last_serial_number_digit = getRandomDigit();

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(3);
    });

    test('3 wires - red wires, more than 1 blue wire', () => {
        let wires = ['RED', 'BLUE', 'BLUE'].map(wire => WireColor.fromString(wire));
        let last_serial_number_digit = getRandomDigit();

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(3);

        wires = ['BLUE', 'BLUE', 'RED'].map(wire => WireColor.fromString(wire));
        last_serial_number_digit = getRandomDigit();

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(2);
    });

    test('3 wires - red wires, last wire not white, 0 blue wires', () => {
        const wires = ['RED', 'YELLOW', 'BLACK'].map(wire => WireColor.fromString(wire));
        const last_serial_number_digit = getRandomDigit();

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(3);
    });

    test('4 wires - 2 red wires, odd serial digit', () => {
        let wires = ['RED', 'RED', 'BLACK', 'BLACK'].map(wire => WireColor.fromString(wire));
        const last_serial_number_digit = 1;

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(2);

        wires = ['RED', 'BLACK', 'RED', 'BLACK'].map(wire => WireColor.fromString(wire));
        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(3);

        wires = ['RED', 'BLACK', 'RED', 'RED'].map(wire => WireColor.fromString(wire));
        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(4);
    });

    test('4 wires - 0 red wires, last wire yellow', () => {
        let wires = ['BLUE', 'BLUE', 'BLUE', 'YELLOW'].map(wire => WireColor.fromString(wire));
        const last_serial_number_digit = getRandomDigit();

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(1);
    });

    test('4 wires - 0 red wires, last wire not yellow, 1 blue wire', () => {
        let wires = ['BLUE', 'BLACK', 'YELLOW', 'BLACK'].map(wire => WireColor.fromString(wire));
        const last_serial_number_digit = getRandomDigit();

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(1);
    });

    test('4 wires - 0 red wires, last wire not yellow, 2 blue wires, 2 yellow wires', () => {
        let wires = ['BLUE', 'YELLOW', 'YELLOW', 'BLUE'].map(wire => WireColor.fromString(wire));
        const last_serial_number_digit = getRandomDigit();

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(4);
    });

    test('4 wires - 0 red wires, last wire not yellow, 2 blue wires, 1 yellow wire', () => {
        let wires = ['BLUE', 'YELLOW', 'BLACK', 'BLUE'].map(wire => WireColor.fromString(wire));
        const last_serial_number_digit = getRandomDigit();

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(2);
    });

    test('5 wires - last wire black, odd digit', () => {
        const wires = ['RED', 'BLUE', 'YELLOW', 'BLACK', 'BLACK'].map(wire => WireColor.fromString(wire));
        const last_serial_number_digit = 1;

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(4);
    });

    test('5 wires - last wire not black, 1 red wire, 2 yellow wires', () => {
        const wires = ['BLACK', 'BLUE', 'RED', 'YELLOW', 'YELLOW'].map(wire => WireColor.fromString(wire));
        const last_serial_number_digit = getRandomDigit();

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(1);
    });

    test('5 wires - last wire not black, 0 red wires, 0 black wires', () => {
        const wires = ['BLUE', 'BLUE', 'BLUE', 'YELLOW', 'YELLOW'].map(wire => WireColor.fromString(wire));
        const last_serial_number_digit = getRandomDigit();

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(2);
    });

    test('5 wires - last wire not black, 0 red wires, 1 black wire', () => {
        const wires = ['BLUE', 'BLUE', 'BLACK', 'YELLOW', 'YELLOW'].map(wire => WireColor.fromString(wire));
        const last_serial_number_digit = getRandomDigit();

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(1);
    });

    test('6 wires - no yellow wires, last digit odd', () => {
        const wires = ['BLUE', 'BLUE', 'RED', 'BLACK', 'BLACK', 'BLACK'].map(wire => WireColor.fromString(wire));
        const last_serial_number_digit = 1;

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(3);
    });

    test('6 wires - 1 yellow wire, 2 white wires', () => {
        const wires = ['YELLOW', 'WHITE', 'WHITE', 'BLACK', 'BLACK', 'BLACK'].map(wire => WireColor.fromString(wire));
        const last_serial_number_digit = getRandomDigit();

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(4);
    });

    test('6 wires - 2 yellow wires, 0 red wires', () => {
        const wires = ['YELLOW', 'YELLOW', 'WHITE', 'BLACK', 'BLACK', 'BLACK'].map(wire => WireColor.fromString(wire));
        const last_serial_number_digit = getRandomDigit();

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(6);
    });

    test('6 wires - 2 yellow wires, 1 red wires', () => {
        const wires = ['YELLOW', 'YELLOW', 'RED', 'BLACK', 'BLACK', 'BLACK'].map(wire => WireColor.fromString(wire));
        const last_serial_number_digit = getRandomDigit();

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(4);
    });
});