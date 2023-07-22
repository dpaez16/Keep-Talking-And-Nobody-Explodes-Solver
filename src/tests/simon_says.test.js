const { expect, test } = require('@jest/globals');
import SimonSaysSolver from '../module_solvers/simon_says';
import SimonSaysColor from '../types/simon_says_color';

describe('Simon Says Module Tests', () => {
    test('has vowels, 0 strikes', () => {
        const has_vowel = true;
        const num_strikes = 0;
        const color_sequence = [SimonSaysColor.BLUE, SimonSaysColor.GREEN, SimonSaysColor.RED, SimonSaysColor.YELLOW];
        const expected = [SimonSaysColor.RED, SimonSaysColor.YELLOW, SimonSaysColor.BLUE, SimonSaysColor.GREEN];

        expect(SimonSaysSolver.solve(has_vowel, num_strikes, color_sequence)).toStrictEqual(expected);
    });

    test('has vowels, 1 strike', () => {
        const has_vowel = true;
        const num_strikes = 1;
        const color_sequence = [SimonSaysColor.BLUE, SimonSaysColor.GREEN, SimonSaysColor.RED, SimonSaysColor.YELLOW];
        const expected = [SimonSaysColor.GREEN, SimonSaysColor.BLUE, SimonSaysColor.YELLOW, SimonSaysColor.RED];

        expect(SimonSaysSolver.solve(has_vowel, num_strikes, color_sequence)).toStrictEqual(expected);
    });

    test('has vowels, 2 strikes', () => {
        const has_vowel = true;
        const num_strikes = 2;
        const color_sequence = [SimonSaysColor.BLUE, SimonSaysColor.GREEN, SimonSaysColor.RED, SimonSaysColor.YELLOW];
        const expected = [SimonSaysColor.RED, SimonSaysColor.YELLOW, SimonSaysColor.GREEN, SimonSaysColor.BLUE];

        expect(SimonSaysSolver.solve(has_vowel, num_strikes, color_sequence)).toStrictEqual(expected);
    });

    test('no vowels, 0 strikes', () => {
        const has_vowel = false;
        const num_strikes = 0;
        const color_sequence = [SimonSaysColor.BLUE, SimonSaysColor.GREEN, SimonSaysColor.RED, SimonSaysColor.YELLOW];
        const expected = [SimonSaysColor.YELLOW, SimonSaysColor.GREEN, SimonSaysColor.BLUE, SimonSaysColor.RED];

        expect(SimonSaysSolver.solve(has_vowel, num_strikes, color_sequence)).toStrictEqual(expected);
    });

    test('no vowels, 1 strike', () => {
        const has_vowel = false;
        const num_strikes = 1;
        const color_sequence = [SimonSaysColor.BLUE, SimonSaysColor.GREEN, SimonSaysColor.RED, SimonSaysColor.YELLOW];
        const expected = [SimonSaysColor.BLUE, SimonSaysColor.YELLOW, SimonSaysColor.RED, SimonSaysColor.GREEN];

        expect(SimonSaysSolver.solve(has_vowel, num_strikes, color_sequence)).toStrictEqual(expected);
    });

    test('no vowels, 2 strikes', () => {
        const has_vowel = false;
        const num_strikes = 2;
        const color_sequence = [SimonSaysColor.BLUE, SimonSaysColor.GREEN, SimonSaysColor.RED, SimonSaysColor.YELLOW];
        const expected = [SimonSaysColor.GREEN, SimonSaysColor.BLUE, SimonSaysColor.YELLOW, SimonSaysColor.RED];

        expect(SimonSaysSolver.solve(has_vowel, num_strikes, color_sequence)).toStrictEqual(expected);
    });
});