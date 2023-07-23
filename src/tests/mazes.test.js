const { expect, test } = require('@jest/globals');
import MazesSolver from '../module_solvers/mazes';

describe('Mazes Module Tests', () => {
    test('Maze 1 test', () => {
        const circles = [
            [3, 6],
            [2, 1]
        ];

        const red_triangle_coords = [1, 1];
        const white_square_coords = [1, 6];

        const path = MazesSolver.solve(circles, red_triangle_coords, white_square_coords);
        const expected = [
            [ 0, 5 ], [ 0, 4 ], [ 0, 3 ],
            [ 1, 3 ], [ 1, 4 ], [ 1, 5 ],
            [ 2, 5 ], [ 2, 4 ], [ 2, 3 ],
            [ 3, 3 ], [ 3, 2 ], [ 2, 2 ],
            [ 2, 1 ], [ 1, 1 ], [ 1, 2 ],
            [ 0, 2 ], [ 0, 1 ], [ 0, 0 ]
        ];

        expect(path).toStrictEqual(expected);
    });

    test('Maze 2 test', () => {
        const circles = [
            [4, 2],
            [2, 5]
        ];

        const red_triangle_coords = [1, 1];
        const white_square_coords = [1, 6];

        const path = MazesSolver.solve(circles, red_triangle_coords, white_square_coords);
        const expected = [
            [ 0, 5 ], [ 0, 4 ],
            [ 0, 3 ], [ 1, 3 ],
            [ 1, 2 ], [ 2, 2 ],
            [ 2, 1 ], [ 3, 1 ],
            [ 3, 0 ], [ 2, 0 ],
            [ 1, 0 ], [ 1, 1 ],
            [ 0, 1 ], [ 0, 0 ]
        ];

        expect(path).toStrictEqual(expected);
    });

    test('Maze 3 test', () => {
        const circles = [
            [4, 6],
            [4, 4]
        ];

        const red_triangle_coords = [1, 1];
        const white_square_coords = [1, 6];

        const path = MazesSolver.solve(circles, red_triangle_coords, white_square_coords);
        const expected = [
            [ 0, 5 ], [ 1, 5 ], [ 2, 5 ],
            [ 3, 5 ], [ 4, 5 ], [ 5, 5 ],
            [ 5, 4 ], [ 4, 4 ], [ 3, 4 ],
            [ 2, 4 ], [ 2, 3 ], [ 3, 3 ],
            [ 4, 3 ], [ 5, 3 ], [ 5, 2 ],
            [ 5, 1 ], [ 5, 0 ], [ 4, 0 ],
            [ 3, 0 ], [ 2, 0 ], [ 2, 1 ],
            [ 3, 1 ], [ 4, 1 ], [ 4, 2 ],
            [ 3, 2 ], [ 2, 2 ], [ 1, 2 ],
            [ 0, 2 ], [ 0, 1 ], [ 0, 0 ]
        ];

        expect(path).toStrictEqual(expected);
    });
});