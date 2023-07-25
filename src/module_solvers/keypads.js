import KeypadSymbol from '../types/keypad_symbol';

export default class KeypadSolver {
    static COLUMNS = [
        [KeypadSymbol.BALLOON, KeypadSymbol.AT, KeypadSymbol.LAMBDA, KeypadSymbol.WEIRD_MIRRORED_N, KeypadSymbol.KITTY, KeypadSymbol.LETTER_H, KeypadSymbol.BACKWARD_C_WITH_DOT],
        [KeypadSymbol.BACKWARD_E_WITH_UMLAUT, KeypadSymbol.BALLOON, KeypadSymbol.BACKWARD_C_WITH_DOT, KeypadSymbol.FANCY_Q, KeypadSymbol.HOLLOW_STAR, KeypadSymbol.LETTER_H, KeypadSymbol.UPSIDE_DOWN_QUESTION_MARK],
        [KeypadSymbol.COPYRIGHT, KeypadSymbol.BALLSACK, KeypadSymbol.FANCY_Q, KeypadSymbol.DOUBLE_KS, KeypadSymbol.MELTED_3, KeypadSymbol.LAMBDA, KeypadSymbol.HOLLOW_STAR],
        [KeypadSymbol.WEIRD_6, KeypadSymbol.BACKWARDS_PARAGRAPH, KeypadSymbol.LETTER_B_WITH_CROSS, KeypadSymbol.KITTY, KeypadSymbol.DOUBLE_KS, KeypadSymbol.UPSIDE_DOWN_QUESTION_MARK, KeypadSymbol.SMILEY_FACE],
        [KeypadSymbol.PSI, KeypadSymbol.SMILEY_FACE, KeypadSymbol.LETTER_B_WITH_CROSS, KeypadSymbol.C_WITH_DOT, KeypadSymbol.BACKWARDS_PARAGRAPH, KeypadSymbol.THREE_WITH_TAIL, KeypadSymbol.FULL_STAR],
        [KeypadSymbol.WEIRD_6, KeypadSymbol.BACKWARD_E_WITH_UMLAUT, KeypadSymbol.PUZZLE_PIECE, KeypadSymbol.AE, KeypadSymbol.PSI, KeypadSymbol.FORMAL_MIRRORED_N, KeypadSymbol.OMEGA]
    ];

    static #symbols_in_column(keypad_symbols, column) {
        for (let keypad_symbol of keypad_symbols) {
            if (!column.includes(keypad_symbol)) {
                return false;
            }
        }

        return true;
    }

    static #get_ordered_symbols(keypad_symbols, column) {
        const positions = keypad_symbols.map(keypad_symbol => column.findIndex(columnSymbol => columnSymbol === keypad_symbol));
        positions.sort((a, b) => a - b);

        return positions.map(idx => column[idx]);
    }

    static solve(keypad_symbols) {
        for (let column of this.COLUMNS) {
            if (this.#symbols_in_column(keypad_symbols, column)) {
                return this.#get_ordered_symbols(keypad_symbols, column);
            }
        }

        return undefined;
    }
};