import WhosOnFirstDisplayWord from '../types/whos_on_first_display_word';
import WhosOnFirstButtonLabelPosition from '../types/whos_on_first_button_label_pos';
import WhosOnFirstButtonLabelText from '../types/whos_on_first_button_label_text';

export default class WhosOnFirstSolver {
    static #PART_1_MAP = {
        [WhosOnFirstDisplayWord.YES]: WhosOnFirstButtonLabelPosition.MIDDLE_LEFT,
        [WhosOnFirstDisplayWord.FIRST]: WhosOnFirstButtonLabelPosition.TOP_RIGHT,
        [WhosOnFirstDisplayWord.DISPLAY]: WhosOnFirstButtonLabelPosition.BOTTOM_RIGHT,
        [WhosOnFirstDisplayWord.OKAY]: WhosOnFirstButtonLabelPosition.TOP_RIGHT,
        [WhosOnFirstDisplayWord.SAYS]: WhosOnFirstButtonLabelPosition.BOTTOM_RIGHT,
        [WhosOnFirstDisplayWord.NOTHING]: WhosOnFirstButtonLabelPosition.MIDDLE_LEFT,
        [WhosOnFirstDisplayWord.EMPTY_DISPLAY]: WhosOnFirstButtonLabelPosition.BOTTOM_LEFT,
        [WhosOnFirstDisplayWord.BLANK]: WhosOnFirstButtonLabelPosition.MIDDLE_RIGHT,
        [WhosOnFirstDisplayWord.NO]: WhosOnFirstButtonLabelPosition.BOTTOM_RIGHT,
        [WhosOnFirstDisplayWord.LED]: WhosOnFirstButtonLabelPosition.MIDDLE_LEFT,
        [WhosOnFirstDisplayWord.LEAD]: WhosOnFirstButtonLabelPosition.BOTTOM_RIGHT,
        [WhosOnFirstDisplayWord.READ]: WhosOnFirstButtonLabelPosition.MIDDLE_RIGHT,
        [WhosOnFirstDisplayWord.RED]: WhosOnFirstButtonLabelPosition.MIDDLE_RIGHT,
        [WhosOnFirstDisplayWord.REED]: WhosOnFirstButtonLabelPosition.BOTTOM_LEFT,
        [WhosOnFirstDisplayWord.LEED]: WhosOnFirstButtonLabelPosition.BOTTOM_LEFT,
        [WhosOnFirstDisplayWord.HOLD_ON]: WhosOnFirstButtonLabelPosition.BOTTOM_RIGHT,
        [WhosOnFirstDisplayWord.YOU]: WhosOnFirstButtonLabelPosition.MIDDLE_RIGHT,
        [WhosOnFirstDisplayWord.YOU_ARE]: WhosOnFirstButtonLabelPosition.BOTTOM_RIGHT,
        [WhosOnFirstDisplayWord.YOUR]: WhosOnFirstButtonLabelPosition.MIDDLE_RIGHT,
        [WhosOnFirstDisplayWord.YOU__RE]: WhosOnFirstButtonLabelPosition.MIDDLE_RIGHT,
        [WhosOnFirstDisplayWord.UR]: WhosOnFirstButtonLabelPosition.TOP_LEFT,
        [WhosOnFirstDisplayWord.THERE]: WhosOnFirstButtonLabelPosition.BOTTOM_RIGHT,
        [WhosOnFirstDisplayWord.THEY__RE]: WhosOnFirstButtonLabelPosition.BOTTOM_LEFT,
        [WhosOnFirstDisplayWord.THEIR]: WhosOnFirstButtonLabelPosition.MIDDLE_RIGHT,
        [WhosOnFirstDisplayWord.THEY_ARE]: WhosOnFirstButtonLabelPosition.MIDDLE_LEFT,
        [WhosOnFirstDisplayWord.SEE]: WhosOnFirstButtonLabelPosition.BOTTOM_RIGHT,
        [WhosOnFirstDisplayWord.C]: WhosOnFirstButtonLabelPosition.TOP_RIGHT,
        [WhosOnFirstDisplayWord.CEE]: WhosOnFirstButtonLabelPosition.BOTTOM_RIGHT
    };

    static #PART_2_RAW_MAP = [
        `"READY": YES, OKAY, WHAT, MIDDLE, LEFT, PRESS, RIGHT, BLANK, READY, NO, FIRST, UHHH, NOTHING, WAIT`,
        `"FIRST": LEFT, OKAY, YES, MIDDLE, NO, RIGHT, NOTHING, UHHH, WAIT, READY, BLANK, WHAT, PRESS, FIRST`,
        `"NO": BLANK, UHHH, WAIT, FIRST, WHAT, READY, RIGHT, YES, NOTHING, LEFT, PRESS, OKAY, NO, MIDDLE`,
        `"BLANK": WAIT, RIGHT, OKAY, MIDDLE, BLANK, PRESS, READY, NOTHING, NO, WHAT, LEFT, UHHH, YES, FIRST`,
        `"NOTHING": UHHH, RIGHT, OKAY, MIDDLE, YES, BLANK, NO, PRESS, LEFT, WHAT, WAIT, FIRST, NOTHING, READY`,
        `"YES": OKAY, RIGHT, UHHH, MIDDLE, FIRST, WHAT, PRESS, READY, NOTHING, YES, LEFT, BLANK, NO, WAIT`,
        `"WHAT": UHHH, WHAT, LEFT, NOTHING, READY, BLANK, MIDDLE, NO, OKAY, FIRST, WAIT, YES, PRESS, RIGHT`,
        `"UHHH": READY, NOTHING, LEFT, WHAT, OKAY, YES, RIGHT, NO, PRESS, BLANK, UHHH, MIDDLE, WAIT, FIRST`,
        `"LEFT": RIGHT, LEFT, FIRST, NO, MIDDLE, YES, BLANK, WHAT, UHHH, WAIT, PRESS, READY, OKAY, NOTHING`,
        `"RIGHT": YES, NOTHING, READY, PRESS, NO, WAIT, WHAT, RIGHT, MIDDLE, LEFT, UHHH, BLANK, OKAY, FIRST`,
        `"MIDDLE": BLANK, READY, OKAY, WHAT, NOTHING, PRESS, NO, WAIT, LEFT, MIDDLE, RIGHT, FIRST, UHHH, YES`,
        `"OKAY": MIDDLE, NO, FIRST, YES, UHHH, NOTHING, WAIT, OKAY, LEFT, READY, BLANK, PRESS, WHAT, RIGHT`,
        `"WAIT": UHHH, NO, BLANK, OKAY, YES, LEFT, FIRST, PRESS, WHAT, WAIT, NOTHING, READY, RIGHT, MIDDLE`,
        `"PRESS": RIGHT, MIDDLE, YES, READY, PRESS, OKAY, NOTHING, UHHH, BLANK, LEFT, FIRST, WHAT, NO, WAIT`,
        `"YOU": SURE, YOU ARE, YOUR, YOU'RE, NEXT, UH HUH, UR, HOLD, WHAT?, YOU, UH UH, LIKE, DONE, U`,
        `"YOU ARE": YOUR, NEXT, LIKE, UH HUH, WHAT?, DONE, UH UH, HOLD, YOU, U, YOU'RE, SURE, UR, YOU ARE`,
        `"YOUR": UH UH, YOU ARE, UH HUH, YOUR, NEXT, UR, SURE, U, YOU'RE, YOU, WHAT?, HOLD, LIKE, DONE`,
        `"YOU'RE": YOU, YOU'RE, UR, NEXT, UH UH, YOU ARE, U, YOUR, WHAT?, UH HUH, SURE, DONE, LIKE, HOLD`,
        `"UR": DONE, U, UR, UH HUH, WHAT?, SURE, YOUR, HOLD, YOU'RE, LIKE, NEXT, UH UH, YOU ARE, YOU`,
        `"U": UH HUH, SURE, NEXT, WHAT?, YOU'RE, UR, UH UH, DONE, U, YOU, LIKE, HOLD, YOU ARE, YOUR`,
        `"UH HUH": UH HUH, YOUR, YOU ARE, YOU, DONE, HOLD, UH UH, NEXT, SURE, LIKE, YOU'RE, UR, U, WHAT?`,
        `"UH UH": UR, U, YOU ARE, YOU'RE, NEXT, UH UH, DONE, YOU, UH HUH, LIKE, YOUR, SURE, HOLD, WHAT?`,
        `"WHAT?": YOU, HOLD, YOU'RE, YOUR, U, DONE, UH UH, LIKE, YOU ARE, UH HUH, UR, NEXT, WHAT?, SURE`,
        `"DONE": SURE, UH HUH, NEXT, WHAT?, YOUR, UR, YOU'RE, HOLD, LIKE, YOU, U, YOU ARE, UH UH, DONE`,
        `"NEXT": WHAT?, UH HUH, UH UH, YOUR, HOLD, SURE, NEXT, LIKE, DONE, YOU ARE, UR, YOU'RE, U, YOU`,
        `"HOLD": YOU ARE, U, DONE, UH UH, YOU, UR, SURE, WHAT?, YOU'RE, NEXT, HOLD, UH HUH, YOUR, LIKE`,
        `"SURE": YOU ARE, DONE, LIKE, YOU'RE, YOU, HOLD, UH HUH, UR, SURE, U, WHAT?, NEXT, YOUR, UH UH`,
        `"LIKE": YOU'RE, NEXT, U, UR, HOLD, DONE, UH UH, WHAT?, UH HUH, YOU, LIKE, SURE, YOU ARE, YOUR`
    ];

    static solve_p1(display_word) {
        return this.#PART_1_MAP[display_word];
    }

    static solve_p2(button_label_text) {
        const part_2_map = {};
        for (let raw_line of this.#PART_2_RAW_MAP) {
            const split_line = raw_line.split(':');
            const button_label_text_from_line = WhosOnFirstButtonLabelText.fromString(split_line[0].replaceAll(`"`, ''));

            if (button_label_text_from_line !== button_label_text) {
                continue;
            }

            return split_line[1].split(',').map(raw_word => WhosOnFirstButtonLabelText.fromString(raw_word.trim()));
        }

        return undefined;
    }
};