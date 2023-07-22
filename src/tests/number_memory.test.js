const { expect, test } = require('@jest/globals');
import NumberMemorySolver from '../module_solvers/number_memory';
import { getRandomDigit } from './testUtils';

describe('Number Memory Module Tests', () => {
    test('Bad inputs', () => {
        expect(NumberMemorySolver.solve(1, 0, [])).toBeUndefined();
        expect(NumberMemorySolver.solve(2, 0, [])).toBeUndefined();
        expect(NumberMemorySolver.solve(3, 0, [])).toBeUndefined();
        expect(NumberMemorySolver.solve(4, 0, [])).toBeUndefined();
        expect(NumberMemorySolver.solve(5, 0, [])).toBeUndefined();
    });

    test('Stage 1 tests', () => {
        expect(NumberMemorySolver.solve(1, 1, [])).toStrictEqual({position: 2});
        expect(NumberMemorySolver.solve(1, 2, [])).toStrictEqual({position: 2});
        expect(NumberMemorySolver.solve(1, 3, [])).toStrictEqual({position: 3});
        expect(NumberMemorySolver.solve(1, 4, [])).toStrictEqual({position: 4});
    });

    test('Stage 2 tests', () => {
        const previous_inputs = [{position: getRandomDigit(), label: getRandomDigit()}];

        expect(NumberMemorySolver.solve(2, 1, previous_inputs)).toStrictEqual({label: 4});
        expect(NumberMemorySolver.solve(2, 2, previous_inputs)).toStrictEqual({position: previous_inputs[0].position});
        expect(NumberMemorySolver.solve(2, 3, previous_inputs)).toStrictEqual({position: 1});
        expect(NumberMemorySolver.solve(2, 4, previous_inputs)).toStrictEqual({position: previous_inputs[0].position});
    });

    test('Stage 3 tests', () => {
        const previous_inputs = [
            {position: getRandomDigit(), label: getRandomDigit()},
            {position: getRandomDigit(), label: getRandomDigit()}
        ];

        expect(NumberMemorySolver.solve(3, 1, previous_inputs)).toStrictEqual({label: previous_inputs[1].label});
        expect(NumberMemorySolver.solve(3, 2, previous_inputs)).toStrictEqual({label: previous_inputs[0].label});
        expect(NumberMemorySolver.solve(3, 3, previous_inputs)).toStrictEqual({position: 3});
        expect(NumberMemorySolver.solve(3, 4, previous_inputs)).toStrictEqual({label: 4});
    });

    test('Stage 4 tests', () => {
        const previous_inputs = [
            {position: getRandomDigit(), label: getRandomDigit()},
            {position: getRandomDigit(), label: getRandomDigit()},
            {position: getRandomDigit(), label: getRandomDigit()}
        ];

        expect(NumberMemorySolver.solve(4, 1, previous_inputs)).toStrictEqual({position: previous_inputs[0].position});
        expect(NumberMemorySolver.solve(4, 2, previous_inputs)).toStrictEqual({position: 1});
        expect(NumberMemorySolver.solve(4, 3, previous_inputs)).toStrictEqual({position: previous_inputs[1].position});
        expect(NumberMemorySolver.solve(4, 4, previous_inputs)).toStrictEqual({position: previous_inputs[1].position});
    });

    test('Stage 5 tests', () => {
        const previous_inputs = [
            {position: getRandomDigit(), label: getRandomDigit()},
            {position: getRandomDigit(), label: getRandomDigit()},
            {position: getRandomDigit(), label: getRandomDigit()},
            {position: getRandomDigit(), label: getRandomDigit()}
        ];

        expect(NumberMemorySolver.solve(5, 1, previous_inputs)).toStrictEqual({label: previous_inputs[0].label});
        expect(NumberMemorySolver.solve(5, 2, previous_inputs)).toStrictEqual({label: previous_inputs[1].label});
        expect(NumberMemorySolver.solve(5, 3, previous_inputs)).toStrictEqual({label: previous_inputs[3].label});
        expect(NumberMemorySolver.solve(5, 4, previous_inputs)).toStrictEqual({label: previous_inputs[2].label});
    });
});