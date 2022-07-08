import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

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
        <div onCopy={handleCopy} title={title} className={`${styles.textWrapper} ${className}`}>
            <span className={styles.ellipsisWrapper}>
                {text.substring(0, text.length - tailLength)}
            </span>
            <span className={styles.tailText}>
                {text.substring(text.length - tailLength)}
            </span>
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