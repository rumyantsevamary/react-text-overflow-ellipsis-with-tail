import React from 'react';
import styled from 'styled-components';
import { TextOverflowElipsisWithTail } from 'react-text-overflow-ellipsis-with-tail';
import { LOREM_IPSUM } from './mock';

const RowWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    padding: 5px;
    justify-content: space-between;

`;

const Cell = styled.div`
    width: 45%
`;

const Table = styled.div`
    display: flex;
    flex-direction: column;
`;

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
            <RowWrapper key={i}>
                <Cell>
                    <TextOverflowElipsisWithTail tailLength={TAIL_LENGTH} className='myClassname'>
                        {LOREM_IPSUM}
                    </TextOverflowElipsisWithTail>
                </Cell>
                <Cell>
                    <TextOverflowElipsisWithTail tailLength={TAIL_LENGTH} className='myClassname'>
                        {LOREM_IPSUM}
                    </TextOverflowElipsisWithTail>
                </Cell>
            </RowWrapper>
        ))
    }
    return (
        <>
            <h2>Test Table</h2>
            <Table>{array2000}</Table>
        </>
    );
}
