const { expect, test } = require('@jest/globals');
import PasswordsSolver from '../module_solvers/passwords';

describe('Passwords Module Tests', () => {
    test('Bad prefix', () => {
        const possiblePasswords = PasswordsSolver.solve("X");
        expect(possiblePasswords.length).toBe(0);
    });

    test('Good prefix yields 1 possible password', () => {
        const possiblePasswords = PasswordsSolver.solve("AB");
        const expected = ["ABOUT"];
        expect(possiblePasswords).toStrictEqual(expected);
    });

    test('Good prefix yields a few possible passwords', () => {
        const possiblePasswords = PasswordsSolver.solve("PL");
        const expected = ["PLACE", "PLANT"];
        expect(possiblePasswords).toStrictEqual(expected);
    });
});