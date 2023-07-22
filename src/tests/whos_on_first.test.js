const { expect, test } = require('@jest/globals');
import WhosOnFirstDisplayWord from '../types/whos_on_first_display_word';
import WhosOnFirstButtonLabelText from '../types/whos_on_first_button_label_text';
import WhosOnFirstButtonLabelPosition from '../types/whos_on_first_button_label_pos';
import WhosOnFirstSolver from '../module_solvers/whos_on_first';

describe("Who's On First Module Tests", () => {
    test('Part 1 tests', () => {
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.YES)).toBe(WhosOnFirstButtonLabelPosition.MIDDLE_LEFT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.FIRST)).toBe(WhosOnFirstButtonLabelPosition.TOP_RIGHT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.DISPLAY)).toBe(WhosOnFirstButtonLabelPosition.BOTTOM_RIGHT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.OKAY)).toBe(WhosOnFirstButtonLabelPosition.TOP_RIGHT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.SAYS)).toBe(WhosOnFirstButtonLabelPosition.BOTTOM_RIGHT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.NOTHING)).toBe(WhosOnFirstButtonLabelPosition.MIDDLE_LEFT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.EMPTY_DISPLAY)).toBe(WhosOnFirstButtonLabelPosition.BOTTOM_LEFT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.BLANK)).toBe(WhosOnFirstButtonLabelPosition.MIDDLE_RIGHT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.NO)).toBe(WhosOnFirstButtonLabelPosition.BOTTOM_RIGHT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.LED)).toBe(WhosOnFirstButtonLabelPosition.MIDDLE_LEFT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.LEAD)).toBe(WhosOnFirstButtonLabelPosition.BOTTOM_RIGHT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.READ)).toBe(WhosOnFirstButtonLabelPosition.MIDDLE_RIGHT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.RED)).toBe(WhosOnFirstButtonLabelPosition.MIDDLE_RIGHT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.REED)).toBe(WhosOnFirstButtonLabelPosition.BOTTOM_LEFT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.LEED)).toBe(WhosOnFirstButtonLabelPosition.BOTTOM_LEFT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.HOLD_ON)).toBe(WhosOnFirstButtonLabelPosition.BOTTOM_RIGHT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.YOU)).toBe(WhosOnFirstButtonLabelPosition.MIDDLE_RIGHT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.YOU_ARE)).toBe(WhosOnFirstButtonLabelPosition.BOTTOM_RIGHT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.YOUR)).toBe(WhosOnFirstButtonLabelPosition.MIDDLE_RIGHT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.YOU__RE)).toBe(WhosOnFirstButtonLabelPosition.MIDDLE_RIGHT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.UR)).toBe(WhosOnFirstButtonLabelPosition.TOP_LEFT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.THERE)).toBe(WhosOnFirstButtonLabelPosition.BOTTOM_RIGHT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.THEY__RE)).toBe(WhosOnFirstButtonLabelPosition.BOTTOM_LEFT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.THEIR)).toBe(WhosOnFirstButtonLabelPosition.MIDDLE_RIGHT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.THEY_ARE)).toBe(WhosOnFirstButtonLabelPosition.MIDDLE_LEFT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.SEE)).toBe(WhosOnFirstButtonLabelPosition.BOTTOM_RIGHT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.C)).toBe(WhosOnFirstButtonLabelPosition.TOP_RIGHT);
        expect(WhosOnFirstSolver.solve_p1(WhosOnFirstDisplayWord.CEE)).toBe(WhosOnFirstButtonLabelPosition.BOTTOM_RIGHT);
    });

    test('Part 2 test', () => {
        expect(WhosOnFirstSolver.solve_p2(WhosOnFirstButtonLabelText.READY).length).toBeGreaterThan(0);
    });
});