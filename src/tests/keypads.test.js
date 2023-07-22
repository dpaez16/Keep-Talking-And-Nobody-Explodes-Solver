const { expect, test } = require('@jest/globals');
import KeypadsSolver from '../module_solvers/keypads';
import KeypadSymbol from '../types/keypad_symbol';
import { getRange, shuffleArray } from './testUtils';

describe('Keypads Module Tests', () => {
    test('Bad input', () => {
        const keypad_symbols = [KeypadSymbol.MIRROR, KeypadSymbol.AE, KeypadSymbol.BACKWARD_E_WITH_UMLAUT, KeypadSymbol.COPYRIGHT];
        expect(KeypadsSolver.solve(keypad_symbols)).toBeUndefined();
    });

    test('Good input', () => {
        for (let column of KeypadsSolver.COLUMNS) {
            let idxs = getRange(column.length);
            idxs = shuffleArray(idxs);

            const selected_idxs = getRange(4).map(i => idxs[i]);
            const keypad_symbols = selected_idxs.map(idx => column[idx]);

            selected_idxs.sort((a, b) => a - b);
            const expected = selected_idxs.map(idx => column[idx]);

            expect(KeypadsSolver.solve(keypad_symbols)).toStrictEqual(expected);
        }
    });
});