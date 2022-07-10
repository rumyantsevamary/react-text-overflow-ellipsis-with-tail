import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

/**
 * TextOverflowElipsisWithTail component.
 * 
 * @return {JSX.Element}
 */
export const TextOverflowElipsisWithTail = ({ children: text, tailLength: passedTailLength = 0, title, className }) => {
    // Hanlde incorrect type of children.
    if (typeof (text) !== 'string') {
        console.error('Invalid type of passed child. Only \'string\' allowed');
        return null;
    }

    // Covert tailLength passed as string to number if possible.
    let tailLength = passedTailLength;
    if (typeof passedTailLength == 'string' && !Number.isNaN(+passedTailLength)) {
        tailLength = +passedTailLength;
    }

    //Calculate content of ellipsis and tail blocks.
    const textLength = text.length;
    let tailText = null;
    let ellipsisText = text;

    if (typeof tailLength == 'number' && tailLength > 0) {
        if (textLength > tailLength) {
            tailText = text.substring(textLength - tailLength);
            ellipsisText = text.substring(0, textLength - tailLength);
        } else {
            tailText = text;
            ellipsisText = null;
        }
    }

    // Copy the whole string including hidden part.
    const handleCopy = (event) => {
        navigator.clipboard.readText().then((copiedText) => {
            navigator.clipboard.writeText(copiedText.replace(/\n/g, ' '));
        });
    }

    return (
        <div onCopy={handleCopy} title={title} className={`${styles.textWrapper} ${className}`} data-testid={'textWrapper'}>
            {ellipsisText && (
                <span className={styles.ellipsisWrapper} data-testid={'ellipsisWrapper'}>
                    {ellipsisText}
                </span>
            )}
            {tailText && (
                <span className={styles.tailWrapper} data-testid={'tailWrapper'}>
                    {tailText}
                </span>
            )}
        </div>
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