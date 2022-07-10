import React from 'react';
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react';
import { TextOverflowElipsisWithTail } from '../src';

const ELLIPSIS_TEXT = 'My very very long testStri';
const TAIL_TEXT = 'ng';
const TEXT = `${ELLIPSIS_TEXT}${TAIL_TEXT}`
const TAIL_LENGTH = TAIL_TEXT.length;


describe('TextOverflowElipsisWithTail with correct types of props', () => {
    it('renders correctly', () => {
        const Component = render(
            <TextOverflowElipsisWithTail tailLength={TAIL_LENGTH}>{TEXT}</TextOverflowElipsisWithTail>,
        );
        expect(Component).toMatchSnapshot();
    });

    it('separates string on right parts, first part without tail', () => {
        render(
            <TextOverflowElipsisWithTail tailLength={TAIL_LENGTH}>{TEXT}</TextOverflowElipsisWithTail>,
        );
        expect(screen.queryByText(ELLIPSIS_TEXT)).toBeInTheDocument();
    });

    it('separates string on right parts, second part is tail', () => {
        render(
            <TextOverflowElipsisWithTail tailLength={TAIL_LENGTH}>{TEXT}</TextOverflowElipsisWithTail>,
        );
        expect(screen.queryByText(TAIL_TEXT)).toBeInTheDocument();
    });
    it('does not contain whole string', () => {
        render(
            <TextOverflowElipsisWithTail tailLength={TAIL_LENGTH}>{TEXT}</TextOverflowElipsisWithTail>,
        );
        expect(screen.queryByText(TEXT)).toBeNull();
    });
});

describe('TextOverflowElipsisWithTail with edge cases for props', () => {
    it('separates string on right parts, if tailLength passed as \'string\'', () => {
        render(
            <TextOverflowElipsisWithTail tailLength={TAIL_LENGTH.toString()}>{TEXT}</TextOverflowElipsisWithTail>,
        );
        expect(screen.queryByText(TAIL_TEXT)).toBeInTheDocument();
    });

    it('does not separate text, if tailLength = 0', () => {
        render(
            <TextOverflowElipsisWithTail tailLength={0}>{TEXT}</TextOverflowElipsisWithTail>,
        );
        expect(screen.queryByText(TEXT)).toBeInTheDocument();
    });

    it('renders only tail span, if tailLength > text length', () => {
        render(
            <TextOverflowElipsisWithTail tailLength={TEXT.length + 5}>{TEXT}</TextOverflowElipsisWithTail>,
        );
        expect(screen.queryByTestId('tailWrapper')).toBeInTheDocument();
    });

    it('does not render only ellipsis span, if tailLength > text length', () => {
        render(
            <TextOverflowElipsisWithTail tailLength={TEXT.length + 5}>{TEXT}</TextOverflowElipsisWithTail>,
        );
        expect(screen.queryByTestId('ellipsisWrapper')).toBeNull();
    });

    it('does not render tail span, if tailLength = 0', () => {
        render(
            <TextOverflowElipsisWithTail tailLength={0}>{TEXT}</TextOverflowElipsisWithTail>,
        );
        expect(screen.queryByTestId('tailWrapper')).toBeNull();
    });

    it('does not render anything if text is not string', () => {
        render(
            <TextOverflowElipsisWithTail tailLength={TAIL_LENGTH}>{[1, 2, 3]}</TextOverflowElipsisWithTail>,
        );

        expect(screen.queryByTestId('textWrapper')).toBeNull();
    });
});