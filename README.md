# react-text-overflow-ellipsis-with-tail
React component for shortening single-line text. 
The maximum width of the text is limited by the width of the container. 
The text that does not fitis reduced to an ellipsis (...), 
but the last N characters should always be output.

Source code at https://github.com/rumyantsevamary/react-text-overflow-ellipsis-with-tail

## Installation

    npm install --save react-text-overflow-ellipsis-with-tail

## Usage

``` 
import React from 'react';
import { TextOverflowElipsisWithTail } from 'react-text-overflow-ellipsis-with-tail';

function Demo(){
    return(
        <React.Fragment>
            <div>
                <TextOverflowElipsisWithTail tailLength={4} className='myClassname' title='My custom title'>
                    'Some very very very very very looooong text'
                </TextOverflowElipsisWithTail>
            </div> 
        </React.Fragment>
    )
}

export default Demo;
```

## Props

|        Name        |         Description           |       Type         |  isRequred |      Default     | 
|--------------------|-------------------------------|--------------------|------------|------------------|
|   tailLength       | number of characters visible  |      number        |   true     |         0        |  
|                    | in the end of passed string   |                    |            |                  | 
|   title            | tooltip text that shown when  |      string        |   false    |         -        |
|                    | mouse moves over the element  |                    |            |                  |         
|   className        | additional className          |      string        |   false    |         -        |                  
