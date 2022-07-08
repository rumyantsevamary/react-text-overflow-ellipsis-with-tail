# react-text-overflow-ellipsis-with-tail
React component that work as text-overflow: ellipsis style with possibility to display some text on the tail

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
                <TextOverflowElipsisWithTail tailLength={4} className='myClassname'>
                    'Some very very very very very looooong text'
                </TextOverflowElipsisWithTail>
            </div> 
        </React.Fragment>
    )
}

export default Demo;
```

## Props

|        Name        |        Type       |  isRequred |      Default     | 
|--------------------|-------------------|------------|------------------|
|   tailLength       |     number        |   true     |         -        |  
|   title            |     string        |   false    | child text value |         
|   className        |     string        |   false    |         -        |                  
