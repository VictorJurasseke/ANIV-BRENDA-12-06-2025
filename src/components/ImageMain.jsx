import React from 'react'

function ImageMain({ img, text }) {



    return (

        <div className='col-10 col-sm-12 col-lg-4 col-md-6 mb-5 text-center z-5'>
            <img
                src={img}
                className='h-100 w-100 rounded'
            />
            <h1 style={{fontFamily:"fantasy"}} className='fs-1 fw-bold text-danger'>{text}</h1>
        </div >

    )
}

export default ImageMain