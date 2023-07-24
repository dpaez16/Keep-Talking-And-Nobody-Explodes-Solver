import MazeCell from '../types/maze_cell';
import Stack from '../types/stack';

const MAZE_1_CIRCLES = [
    [2, 1],
    [3, 6]
];

const MAZE_1 = [
    [new MazeCell(false, false), new MazeCell(false, true), new MazeCell(true, false), new MazeCell(false, false), new MazeCell(false, true), new MazeCell(true, true)],
    [new MazeCell(true, false), new MazeCell(false, false), new MazeCell(true, true), new MazeCell(false, true), new MazeCell(false, true), new MazeCell(true, false)],
    [new MazeCell(true, false), new MazeCell(false, true), new MazeCell(true, false), new MazeCell(false, false), new MazeCell(false, true), new MazeCell(true, false)],
    [new MazeCell(true, false), new MazeCell(false, true), new MazeCell(false, true), new MazeCell(true, true), new MazeCell(false, true), new MazeCell(true, false)],
    [new MazeCell(false, false), new MazeCell(false, true), new MazeCell(true, false), new MazeCell(false, false), new MazeCell(true, true), new MazeCell(true, false)],
    [new MazeCell(false, true), new MazeCell(true, true), new MazeCell(false, true), new MazeCell(true, true), new MazeCell(false, true), new MazeCell(true, true)]
];

const MAZE_2_CIRCLES = [
    [2, 5],
    [4, 2]
];

const MAZE_2 = [
    [new MazeCell(false, true), new MazeCell(false, false), new MazeCell(true, true), new MazeCell(false, false), new MazeCell(false, false), new MazeCell(true, true)],
    [new MazeCell(false, false), new MazeCell(true, true), new MazeCell(false, false), new MazeCell(true, true), new MazeCell(false, true), new MazeCell(true, false)],
    [new MazeCell(true, false), new MazeCell(false, false), new MazeCell(true, true), new MazeCell(false, false), new MazeCell(false, true), new MazeCell(true, false)],
    [new MazeCell(false, false), new MazeCell(true, true), new MazeCell(false, false), new MazeCell(true, true), new MazeCell(true, false), new MazeCell(true, false)],
    [new MazeCell(true, false), new MazeCell(true, false), new MazeCell(true, false), new MazeCell(false, false), new MazeCell(true, true), new MazeCell(true, false)],
    [new MazeCell(true, true), new MazeCell(false, true), new MazeCell(true, true), new MazeCell(false, true), new MazeCell(false, true), new MazeCell(true, true)]
];

const MAZE_3_CIRCLES = [
    [4, 4],
    [4, 6]
];

const MAZE_3 = [
    [new MazeCell(false, false), new MazeCell(false, true), new MazeCell(true, false), new MazeCell(true, false), new MazeCell(false, false), new MazeCell(true, false)],
    [new MazeCell(true, true), new MazeCell(true, false), new MazeCell(true, false), new MazeCell(false, true), new MazeCell(true, true), new MazeCell(true, false)],
    [new MazeCell(false, false), new MazeCell(true, false), new MazeCell(true, false), new MazeCell(false, false), new MazeCell(true, false), new MazeCell(true, false)],
    [new MazeCell(true, false), new MazeCell(true, false), new MazeCell(true, false), new MazeCell(true, false), new MazeCell(true, false), new MazeCell(true, false)],
    [new MazeCell(true, false), new MazeCell(false, true), new MazeCell(true, true), new MazeCell(true, false), new MazeCell(true, false), new MazeCell(true, false)],
    [new MazeCell(false, true), new MazeCell(false, true), new MazeCell(false, true), new MazeCell(true, true), new MazeCell(false, true), new MazeCell(true, true)]
];

const MAZE_4_CIRCLES = [
    [1, 1],
    [4, 1]
];

const MAZE_4 = [
    [new MazeCell(false, false), new MazeCell(true, false), new MazeCell(false, true), new MazeCell(false, true), new MazeCell(false, true), new MazeCell(true, false)],
    [new MazeCell(true, false), new MazeCell(true, false), new MazeCell(false, false), new MazeCell(false, true), new MazeCell(false, true), new MazeCell(true, false)],
    [new MazeCell(true, false), new MazeCell(false, true), new MazeCell(true, true), new MazeCell(false, false), new MazeCell(true, true), new MazeCell(true, false)],
    [new MazeCell(true, false), new MazeCell(false, true), new MazeCell(false, true), new MazeCell(false, true), new MazeCell(false, true), new MazeCell(true, false)],
    [new MazeCell(false, false), new MazeCell(false, true), new MazeCell(false, true), new MazeCell(false, true), new MazeCell(true, false), new MazeCell(true, false)],
    [new MazeCell(false, true), new MazeCell(false, true), new MazeCell(true, true), new MazeCell(false, true), new MazeCell(true, true), new MazeCell(true, true)]
];

const MAZE_LENGTH = MAZE_1.length;

export default class MazesSolver {
    static #insideMaze(coord) {
        return (0 <= coord[0]) && (coord[0] < MAZE_LENGTH) && (0 <= coord[1]) && (coord[1] < MAZE_LENGTH);
    }

    static #checkLeftNeighbor(curr, maze) {
        const neighbor = [curr[0], curr[1] - 1];

        if (!this.#insideMaze(neighbor)) {
            return undefined;
        }

        if (maze[neighbor[0]][neighbor[1]].eastWall) {
            return undefined;
        }

        return neighbor;
    }

    static #checkRightNeighbor(curr, maze) {
        const neighbor = [curr[0], curr[1] + 1];

        if (!this.#insideMaze(neighbor)) {
            return undefined;
        }

        if (maze[curr[0]][curr[1]].eastWall) {
            return undefined;
        }

        return neighbor;
    }

    static #checkNorthNeighbor(curr, maze) {
        const neighbor = [curr[0] - 1, curr[1]];

        if (!this.#insideMaze(neighbor)) {
            return undefined;
        }

        if (maze[neighbor[0]][neighbor[1]].southWall) {
            return undefined;
        }

        return neighbor;
    }

    static #checkSouthNeighbor(curr, maze) {
        const neighbor = [curr[0] + 1, curr[1]];

        if (!this.#insideMaze(neighbor)) {
            return undefined;
        }

        if (maze[curr[0]][curr[1]].southWall) {
            return undefined;
        }

        return neighbor;
    }

    static #getNeighbors(curr, maze) {
        const neighbors = [
            this.#checkLeftNeighbor(curr, maze),
            this.#checkRightNeighbor(curr, maze),
            this.#checkNorthNeighbor(curr, maze),
            this.#checkSouthNeighbor(curr, maze)
        ];

        return neighbors.filter(neighbor => neighbor !== undefined);
    }

    static #solveMaze(maze, start, end) {
        const stack = new Stack();
        const visited = new Set();
        const edgeMap = new Map();

        const UNDEFINED = [-1, -1];
        stack.push([UNDEFINED, start]);

        while (stack.top[1].toString() !== end.toString()) {
            const top = stack.pop();

            const parent = top[0];
            const curr = top[1];

            if (visited.has(curr.toString())) {
                continue;
            }

            visited.add(curr.toString());
            edgeMap.set(curr.toString(), parent);
            const neighbors = this.#getNeighbors(curr, maze);

            for (let neighbor of neighbors) {
                if (visited.has(neighbor.toString())) {
                    continue;
                }

                stack.push([curr, neighbor]);
            }
        }

        edgeMap.set(end.toString(), stack.top[0]);
        let curr = end;
        const path = [];

        while (curr !== UNDEFINED) {
            path.push(curr);
            curr = edgeMap.get(curr.toString());
        }
        
        path.reverse();
        return path;
    }

    static #zero_index_coords(coords) {
        return coords.map(elem => elem - 1);
    }
    
    static getStepsFromPath(path) {
        const steps = [];
        
        const isLeftDir =  (u, v) => [u[0], u[1] - 1].toString() === v.toString();
        const isRightDir = (u, v) => [u[0], u[1] + 1].toString() === v.toString();
        const isNorthDir = (u, v) => [u[0] - 1, u[1]].toString() === v.toString();
        const isSouthDir = (u, v) => [u[0] + 1, u[1]].toString() === v.toString();

        for (let idx = 1; idx < path.length; idx++) {
            const curr = path[idx - 1];
            const next_vertex = path[idx];

            if (isLeftDir(curr, next_vertex)) steps.push("LEFT");
            if (isRightDir(curr, next_vertex)) steps.push("RIGHT");
            if (isNorthDir(curr, next_vertex)) steps.push("UP");
            if (isSouthDir(curr, next_vertex)) steps.push("DOWN");
        }

        return steps.join(", ");
    }

    static solve(circles, red_triangle_coords, white_square_coords) {
        const get_true_idx = (a) => a[0] * MAZE_LENGTH + a[1];
        circles.sort((a, b) => get_true_idx(a) - get_true_idx(b));

        const normalized_triangle = this.#zero_index_coords(red_triangle_coords);
        const normalized_white_square = this.#zero_index_coords(white_square_coords);

        const circles_comp = (a, b) => `${a}` === `${b}`;

        if (circles_comp(circles, MAZE_1_CIRCLES)) {
            return this.#solveMaze(MAZE_1, normalized_white_square, normalized_triangle);
        }

        if (circles_comp(circles, MAZE_2_CIRCLES)) {
            return this.#solveMaze(MAZE_2, normalized_white_square, normalized_triangle);
        }

        if (circles_comp(circles, MAZE_3_CIRCLES)) {
            return this.#solveMaze(MAZE_3, normalized_white_square, normalized_triangle);
        }

        if (circles_comp(circles, MAZE_4_CIRCLES)) {
            return this.#solveMaze(MAZE_4, normalized_white_square, normalized_triangle);
        }

        return undefined;
    }
};