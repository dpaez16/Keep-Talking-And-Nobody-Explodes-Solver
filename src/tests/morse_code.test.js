const { expect, test } = require('@jest/globals');
import MorseCodeWord from '../types/morse_code_word';
import MorseCodeSolver from '../module_solvers/morse_code';

describe('Morse Code Module Tests', () => {
    test('Converting morse code to characters', () => {
        const morse_chars = ['...', '....', '.', '.-..', '.-..'];
        expect(MorseCodeSolver.get_chars_from_sequence(morse_chars)).toStrictEqual(['S', 'H', 'E', 'L', 'L']);
    });

    test('Getting words from partial string', () => {
        const morse_chars = ['-...', '-.-'];
        const expected = [
            [MorseCodeWord.BREAK, "3.572 MHz"],
            [MorseCodeWord.BRICK, "3.575 MHz"]
        ];

        expect(MorseCodeSolver.solve(morse_chars)).toStrictEqual(expected);
    });
});