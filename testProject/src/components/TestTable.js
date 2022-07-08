import React from 'react';
//import { TextOverflowElipsisWithTail } from './TextOverflowElipsisWithTail';
import { TextOverflowElipsisWithTail } from 'react-text-overflow-ellipsis-with-tail';
import { LOREM_IPSUM } from '../mock';

/**
 * Length of tail in cutted strings.
 */
const TAIL_LENGTH = 5;

/**
 * Big Table component.
 * 
 * @return {JSX.Element}.
 */
export const TestTable = () => {
    let array2000 = [];

    for (let i = 0; i < 2000; i++) {
        array2000.push((
            <tr key={i}>
                <td>
                    <div style={{ width: "150px" }}>
                        <TextOverflowElipsisWithTail
                            tailLength={TAIL_LENGTH}
                            className='myClassname'>
                            {LOREM_IPSUM}
                        </TextOverflowElipsisWithTail>
                    </div>
                </td>
                <td>
                    <div style={{ width: "150px" }}>
                        <TextOverflowElipsisWithTail
                            tailLength={TAIL_LENGTH}
                            className='myClassname'>
                            {LOREM_IPSUM}
                        </TextOverflowElipsisWithTail>
                    </div>
                </td>
            </tr>
        ))
    }
    return (
        <table style={{ width: "600px" }}>
            <thead>
                <tr>
                    <th>Test Table</th>
                </tr>
            </thead>
            <tbody>
                {array2000}
            </tbody>
        </table>
    );
}
