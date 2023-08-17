import React from 'react'


const Title = ({
    title,
    titleStyle={},
    dark = false
}) => {
    return (
        <div className='title-container '>
            <h1 className='title blue-title'
                style={titleStyle}
            >
               {title}
                {!dark ? (
                    <div className='subline-spell'>
                        <span />
                    </div>
                ) : (
                    <div className='subline-spell'>
                        <span className='negative' />
                    </div>
                )}

            </h1>
        </div>
    )
}

export default Title