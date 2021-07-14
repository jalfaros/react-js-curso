import React from 'react'

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary"
            style = {{ marginRight: '10px' }}
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
