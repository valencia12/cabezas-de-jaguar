import React from 'react'


const Title2 = ({
    title,
    titleStyle={},
    dark = false
}) => {
    return (
        <div className='title-container '>
            <h1 className='title2 blue-title2'
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

export default Title2