import SimonSaysColor from '../types/simon_says_color';

export default class SimonSaysSolver {
    static YES_VOWEL_MAPS = [
        {
            [SimonSaysColor.RED]: SimonSaysColor.BLUE,
            [SimonSaysColor.BLUE]: SimonSaysColor.RED,
            [SimonSaysColor.GREEN]: SimonSaysColor.YELLOW,
            [SimonSaysColor.YELLOW]: SimonSaysColor.GREEN
        },
        {
            [SimonSaysColor.RED]: SimonSaysColor.YELLOW,
            [SimonSaysColor.BLUE]: SimonSaysColor.GREEN,
            [SimonSaysColor.GREEN]: SimonSaysColor.BLUE,
            [SimonSaysColor.YELLOW]: SimonSaysColor.RED
        },
        {
            [SimonSaysColor.RED]: SimonSaysColor.GREEN,
            [SimonSaysColor.BLUE]: SimonSaysColor.RED,
            [SimonSaysColor.GREEN]: SimonSaysColor.YELLOW,
            [SimonSaysColor.YELLOW]: SimonSaysColor.BLUE
        }
    ];

    static NO_VOWEL_MAPS = [
        {
            [SimonSaysColor.RED]: SimonSaysColor.BLUE,
            [SimonSaysColor.BLUE]: SimonSaysColor.YELLOW,
            [SimonSaysColor.GREEN]: SimonSaysColor.GREEN,
            [SimonSaysColor.YELLOW]: SimonSaysColor.RED
        },
        {
            [SimonSaysColor.RED]: SimonSaysColor.RED,
            [SimonSaysColor.BLUE]: SimonSaysColor.BLUE,
            [SimonSaysColor.GREEN]: SimonSaysColor.YELLOW,
            [SimonSaysColor.YELLOW]: SimonSaysColor.GREEN
        },
        {
            [SimonSaysColor.RED]: SimonSaysColor.YELLOW,
            [SimonSaysColor.BLUE]: SimonSaysColor.GREEN,
            [SimonSaysColor.GREEN]: SimonSaysColor.BLUE,
            [SimonSaysColor.YELLOW]: SimonSaysColor.RED
        }
    ];

    static solve(serial_number_has_vowel, number_of_strikes, color_sequence) {
        if (serial_number_has_vowel) {
            return color_sequence.map(simon_says_color => this.YES_VOWEL_MAPS[number_of_strikes][simon_says_color]);
        } else {
            return color_sequence.map(simon_says_color => this.NO_VOWEL_MAPS[number_of_strikes][simon_says_color]);
        }
    }
}