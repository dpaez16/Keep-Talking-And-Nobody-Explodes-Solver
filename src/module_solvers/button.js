import { ButtonColor, ButtonLEDColor } from '../types/button_color';
import LitIndicatorText from '../types/lit_indicator_text';
import ButtonText from '../types/button_text';

export default class ButtonSolver {
    /**
     * Solves the (potentially) first portion of the button module.
     * If `true` is returned, then you should call `ButtonSolver.solve_p2(...)`.
     * 
     * @param {ButtonColor} button_color Color of the button.
     * @param {ButtonText} button_text The text on the button.
     * @param {number} num_batteries The number of batteries on the bomb.
     * @param {LitIndicatorText} lit_indicator_text The text that accompanies the lit indicator on the bomb.
     * @returns A boolean flag indicating if you need to press and hold the bomb.
     */
    static solve_p1(button_color, button_text, num_batteries, lit_indicator_text) {
        if (button_color === ButtonColor.BLUE && button_text === ButtonText.ABORT) {
            return true;
        } else if (num_batteries > 1 && button_text === ButtonText.DETONATE) {
            return false;
        } else if (button_color === ButtonColor.WHITE && lit_indicator_text === LitIndicatorText.CAR) {
            return true;
        } else if (num_batteries > 2 && lit_indicator_text === LitIndicatorText.FRK) {
            return false;
        } else if (button_color === ButtonColor.YELLOW) {
            return true;
        } else if (button_color === ButtonColor.RED && button_text === ButtonText.HOLD) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * Solves the second portion of the button module.
     * 
     * @param {ButtonLEDColor} button_led_color Color of the LED strip that lights up when the button is held down.
     * @returns The number that should appear in the countdown timer (in any position) when releasing the button.
     */
    static solve_p2(button_led_color) {
        switch (button_led_color) {
            case ButtonLEDColor.BLUE:
                return 4;
            case ButtonLEDColor.WHITE:
                return 1;
            case ButtonLEDColor.YELLOW:
                return 5;
            default:
                return 1;
        }
    }
};