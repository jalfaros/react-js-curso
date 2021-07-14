import React from 'react'

export const SmallCounter = React.memo(( {value} ) => {

    console.log('Me llamé :D');


    return (
        <small>
            { value }
        </small>
    )
});
