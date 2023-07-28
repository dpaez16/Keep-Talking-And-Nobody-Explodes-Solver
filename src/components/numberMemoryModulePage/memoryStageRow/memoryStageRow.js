import React, {Component} from 'react';
import {Table} from 'semantic-ui-react';
import './memoryStageRow.css';

export default class MemoryStageRow extends Component {
    parsePosition(position) {
        const positionTextMap = {
            1: "1st",
            2: "2nd",
            3: "3rd",
            4: "4th"
        };

        return positionTextMap[position];
    }

    render() {
        const {stage, position, label} = this.props;

        return (
            <Table.Row key={stage}>
                <Table.Cell className="MemoryStageRow_cell">
                    Stage {stage}
                </Table.Cell>
                <Table.Cell className="MemoryStageRow_cell">
                    {
                        `${this.parsePosition(position)} position`
                    }
                </Table.Cell>
                <Table.Cell className="MemoryStageRow_cell">
                    Label: {label}
                </Table.Cell>
            </Table.Row>
        );
    }
};