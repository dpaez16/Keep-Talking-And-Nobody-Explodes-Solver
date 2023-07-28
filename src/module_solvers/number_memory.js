export default class NumberMemorySolver {
    static MAX_STAGES = 5;

    static #solve_stage_1(display_number, previous_inputs) {
        switch (display_number) {
            case 1:
                return {position: 2};
            case 2:
                return {position: 2};
            case 3:
                return {position: 3};
            case 4:
                return {position: 4};
            default:
                return undefined;
        }
    }

    static #solve_stage_2(display_number, previous_inputs) {
        switch (display_number) {
            case 1:
                return {label: 4};
            case 2:
                return {position: previous_inputs[0].position};
            case 3:
                return {position: 1};
            case 4:
                return {position: previous_inputs[0].position};
            default:
                return undefined;
        }
    }

    static #solve_stage_3(display_number, previous_inputs) {
        switch (display_number) {
            case 1:
                return {label: previous_inputs[1].label};
            case 2:
                return {label: previous_inputs[0].label};
            case 3:
                return {position: 3};
            case 4:
                return {label: 4};
            default:
                return undefined;
        }
    }

    static #solve_stage_4(display_number, previous_inputs) {
        switch (display_number) {
            case 1:
                return {position: previous_inputs[0].position};
            case 2:
                return {position: 1};
            case 3:
                return {position: previous_inputs[1].position};
            case 4:
                return {position: previous_inputs[1].position};
            default:
                return undefined;
        }
    }

    static #solve_stage_5(display_number, previous_inputs) {
        switch (display_number) {
            case 1:
                return {label: previous_inputs[0].label};
            case 2:
                return {label: previous_inputs[1].label};
            case 3:
                return {label: previous_inputs[3].label};
            case 4:
                return {label: previous_inputs[2].label};
            default:
                return undefined;
        }
    }

    static solve(stage_number, display_number, previous_inputs) {
        switch (stage_number) {
            case 1:
                return this.#solve_stage_1(display_number, previous_inputs);
            case 2:
                return this.#solve_stage_2(display_number, previous_inputs);
            case 3:
                return this.#solve_stage_3(display_number, previous_inputs);
            case 4:
                return this.#solve_stage_4(display_number, previous_inputs);
            case 5:
                return this.#solve_stage_5(display_number, previous_inputs);
            default:
                return undefined;
        }
    }
};