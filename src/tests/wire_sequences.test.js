const { expect, test } = require('@jest/globals');
import WireColor from '../types/wire_color';
import WireSequencesSolver from '../module_solvers/wire_sequences';

describe('Wire Sequences Tests', () => {
    test('Example from game', () => {
        const wire_sequence = [
            [WireColor.BLUE, "A"],
            [WireColor.RED, "A"],
            [WireColor.RED, "B"],
            [WireColor.RED, "C"],
            [WireColor.BLUE, "B"],
            [WireColor.BLACK, "B"],
            [WireColor.BLACK, "B"],
            [WireColor.BLACK, "C"],
        ];

        const expected = [
            false,
            false,
            true,
            false,
            false,
            true,
            false,
            false
        ];

        const connections = {
            [WireColor.RED]: [],
            [WireColor.BLUE]: [],
            [WireColor.BLACK]: []
        };

        for (let idx = 0; idx < expected.length; idx++) {
            const wire_color = wire_sequence[idx][0];
            const wire_position = wire_sequence[idx][1];

            expect(WireSequencesSolver.solve(wire_color, wire_position, connections)).toBe(expected[idx]);

            connections[wire_color].push(wire_position);
        }
    });
});