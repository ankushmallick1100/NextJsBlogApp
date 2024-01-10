import React from 'react'

const Dummy = () => {
    return (
        <>
            <style jsx global>
                {`
            .dummy {
                background-color: yellow
            }
            `}
            </style>
            <div className='dummy'>I am dummy</div>
        </>

    )
}

export default Dummy