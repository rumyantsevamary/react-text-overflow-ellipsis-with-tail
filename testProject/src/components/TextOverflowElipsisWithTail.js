import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextWrapper = styled.div.attrs(props => ({
    className: props.className,
}))`
    display: flex;
    min-width: 0;
`;

const EllipsisWrapper = styled.span`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const TailText = styled.span`
    flex-shrink: 0;
`;

/**
 * TextOverflowElipsisWithTail component.
 * 
 * @return {JSX.Element}
 */
export const TextOverflowElipsisWithTail = ({ children: text, tailLength, title = text, className }) => {
    if (typeof(text) !== 'string') {
        console.error('Invalid type of passed children. Only \'string\' allowed');
        return null;
    }

    const handleCopy = (event) => {
        navigator.clipboard.readText().then((copiedText) => {
            navigator.clipboard.writeText(copiedText.replace(/\n/g, ' '));
        });
    }

    return (
        <TextWrapper onCopy={handleCopy} title={title} className={className}>
            <EllipsisWrapper>
                {text.substring(0, text.length - tailLength)}
            </EllipsisWrapper>
            <TailText>
                {text.substring(text.length - tailLength)}
            </TailText>
        </TextWrapper>
    );
}

/**
 * Props of the TextOverflowElipsisWithTail component.
 * 
 * @prop {string} children Passed text.
 * @prop {number} tailLength Length of the tail part in passes text.
 * @prop {string} title Text for the tooltip.
 * @prop {string} className Additional className for the container.
 */
TextOverflowElipsisWithTail.propTypes = {
    children: PropTypes.string.isRequired,
    tailLength: PropTypes.number.isRequired,
    title: PropTypes.string,
    className: PropTypes.string,
};