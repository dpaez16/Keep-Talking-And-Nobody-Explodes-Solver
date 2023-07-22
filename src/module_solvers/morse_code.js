import MorseCodeWord from '../types/morse_code_word';

export default class MorseCodeSolver {
    static #FREQUENCY_FROM_WORD_MAP = {
        [MorseCodeWord.SHELL]: "3.505 MHz",
        [MorseCodeWord.HALLS]: "3.515 MHz",
        [MorseCodeWord.SLICK]: "3.522 MHz",
        [MorseCodeWord.TRICK]: "3.532 MHz",
        [MorseCodeWord.BOXES]: "3.535 MHz",
        [MorseCodeWord.LEAKS]: "3.542 MHz",
        [MorseCodeWord.STROBE]: "3.545 MHz",
        [MorseCodeWord.BISTRO]: "3.552 MHz",
        [MorseCodeWord.FLICK]: "3.555 MHz",
        [MorseCodeWord.BOMBS]: "3.565 MHz",
        [MorseCodeWord.BREAK]: "3.572 MHz",
        [MorseCodeWord.BRICK]: "3.575 MHz",
        [MorseCodeWord.STEAK]: "3.582 MHz",
        [MorseCodeWord.STING]: "3.592 MHz",
        [MorseCodeWord.VECTOR]: "3.595 MHz",
        [MorseCodeWord.BEATS]: "3.600 MHz"
    };

    static #LETTER_FROM_SEQUENCE_MAP = {
        ".-": "A",
        "-...": "B",
        "-.-.": "C",
        "-..": "D",
        ".": "E",
        "..-.": "F",
        "--.": "G",
        "....": "H",
        "..": "I",
        ".---": "J",
        "-.-": "K",
        ".-..": "L",
        "--": "M",
        "-.": "N",
        "---": "O",
        ".--.": "P",
        "--.-": "Q",
        ".-.": "R",
        "...": "S",
        "-": "T",
        "..-": "U",
        "...-": "V",
        ".--": "W",
        "-..-": "X",
        "-.--": "Y",
        "--..": "Z"
    };

    static get_chars_from_sequence(morse_chars) {
        return morse_chars.map(morse_char => this.#LETTER_FROM_SEQUENCE_MAP[morse_char]);
    }

    static solve(morse_chars) {
        const chars = this.get_chars_from_sequence(morse_chars);
        const regex = new RegExp(".*" + chars.join(".*") + ".*");
        
        const possible_words = MorseCodeWord.enumKeys.filter(word => regex.test(word)).map(word => MorseCodeWord.fromString(word));
        return possible_words.map(word => [word, this.#FREQUENCY_FROM_WORD_MAP[word]]);
    }
};