import WireColor from '../types/wire_color';

export default class WireSequencesSolver {
    static #RED_WIRE_OCCURENCES_MAP = [
        ["C"],
        ["B"],
        ["A"],
        ["A", "C"],
        ["B"],
        ["A", "C"],
        ["A", "B", "C"],
        ["A", "B"],
        ["B"]
    ];

    static #BLUE_WIRE_OCCURENCES_MAP = [
        ["B"],
        ["A", "C"],
        ["B"],
        ["A"],
        ["B"],
        ["B", "C"],
        ["C"],
        ["A", "C"],
        ["A"]
    ];

    static #BLACK_WIRE_OCCURENCES_MAP = [
        ["A", "B", "C"],
        ["A", "C"],
        ["B"],
        ["A", "C"],
        ["B"],
        ["B", "C"],
        ["A", "B"],
        ["C"],
        ["C"]
    ];

    static solve(wire_color, wire_position, wire_connections) {
        const idx = wire_connections[wire_color].length;
        
        switch (wire_color) {
            case WireColor.RED:
                return this.#RED_WIRE_OCCURENCES_MAP[idx].includes(wire_position);
            case WireColor.BLUE:
                return this.#BLUE_WIRE_OCCURENCES_MAP[idx].includes(wire_position);
            case WireColor.BLACK:
                return this.#BLACK_WIRE_OCCURENCES_MAP[idx].includes(wire_position);
            default:
                return undefined;
        }
    }
};