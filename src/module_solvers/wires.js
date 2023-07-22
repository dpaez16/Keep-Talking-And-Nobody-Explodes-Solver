import WireColor from '../types/wire_color';


export default class WiresSolver {
    static #helper_3_wires(wires) {
        const num_blue_wires = wires.filter(wire => wire === WireColor.BLUE).length;
        const last_blue_wire_pos = wires.lastIndexOf(WireColor.BLUE);

        if (!wires.includes(WireColor.RED)) {
            return 2;
        } else if (wires.slice(-1) === WireColor.WHITE) {
            return 3;
        } else if (num_blue_wires > 1) {
            return last_blue_wire_pos;
        } else {
            return 3;
        }
    }

    static #helper_4_wires(wires, last_serial_number_digit) {
        const num_red_wires = wires.filter(wire => wire === WireColor.RED).length;
        const num_blue_wires = wires.filter(wire => wire === WireColor.BLUE).length;
        const num_yellow_wires = wires.filter(wire => wire === WireColor.YELLOW).length;
        const last_red_wire_pos = wires.lastIndexOf(WireColor.RED);

        if (num_red_wires > 1 && last_serial_number_digit % 2 === 1) {
            return last_red_wire_pos;
        } else if (wires.slice(-1) === WireColor.YELLOW && num_red_wires === 0) {
            return 1;
        } else if (num_blue_wires === 1) {
            return 1;
        } else if (num_yellow_wires > 1) {
            return 4;
        } else {
            return 2;
        }
    }

    static #helper_5_wires(wires, last_serial_number_digit) {
        const num_red_wires = wires.filter(wire => wire === WireColor.RED).length;
        const num_black_wires = wires.filter(wire => wire === WireColor.BLACK).length;
        const num_yellow_wires = wires.filter(wire => wire === WireColor.YELLOW).length;

        if (wires.slice(-1) === WireColor.BLACK && last_serial_number_digit % 2 === 1) {
            return 4;
        } else if (num_red_wires === 1 && num_yellow_wires > 1) {
            return 1;
        } else if (num_black_wires === 0) {
            return 2;
        } else {
            return 1;
        }
    }

    static #helper_6_wires(wires, last_serial_number_digit) {
        const num_red_wires = wires.filter(wire => wire === WireColor.RED).length;
        const num_white_wires = wires.filter(wire => wire === WireColor.WHITE).length;
        const num_yellow_wires = wires.filter(wire => wire === WireColor.YELLOW).length;

        if (num_yellow_wires === 0 && last_serial_number_digit % 2 === 1) {
            return 3;
        } else if (num_yellow_wires === 1 && num_white_wires > 1) {
            return 4;
        } else if (num_red_wires === 0) {
            return 6;
        } else {
            return 4;
        }
    }

    static solve(wires, last_serial_number_digit) {
        const num_wires = wires.length;
        wires = wires.map(wire => WireColor.fromString(wire));

        if (num_wires === 3) {
            return this.#helper_3_wires(wires);
        } else if (num_wires === 4) {
            return this.#helper_4_wires(wires, last_serial_number_digit);
        } else if (num_wires === 5) {
            return this.#helper_5_wires(wires, last_serial_number_digit);
        } else {
            return this.#helper_6_wires(wires, last_serial_number_digit);
        }
    }
};

