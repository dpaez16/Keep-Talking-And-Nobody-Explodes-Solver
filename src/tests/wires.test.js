const { expect, test } = require('@jest/globals');
import WiresSolver from '../module_solvers/wires';
import WireColor from '../types/wire_color';

describe('Wires Module Tests', () => {
    test('3 wires - no red wires', () => {
        const wires = ['BLACK', 'BLUE', 'WHITE'].map(wire => WireColor.fromString(wire))
        const last_serial_number_digit = 2;

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(2);
    });

    test('3 wires - red wires, last wire is white', () => {
        const wires = ['RED', 'BLUE', 'WHITE'].map(wire => WireColor.fromString(wire))
        const last_serial_number_digit = 2;

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(3);
    });

    test('3 wires - red wires, more than 1 blue wire', () => {
        let wires = ['RED', 'BLUE', 'BLUE'].map(wire => WireColor.fromString(wire))
        let last_serial_number_digit = 9;

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(3);

        wires = ['BLUE', 'BLUE', 'RED'].map(wire => WireColor.fromString(wire))
        last_serial_number_digit = 9;

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(2);
    });

    test('3 wires - default case', () => {
        const wires = ['RED', 'YELLOW', 'BLACK'].map(wire => WireColor.fromString(wire))
        const last_serial_number_digit = 2;

        expect(WiresSolver.solve(wires, last_serial_number_digit)).toBe(3);
    });
});