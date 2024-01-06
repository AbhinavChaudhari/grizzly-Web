import React from 'react'
import './serving.css'

import Gallery from '../ServingGallery/Gallery'

const Serving = () => {
    return (
        <div className='my-[52px] lg:my-[6.25rem]'>
            <div className='container mx-auto' id='backgroundImage'>
                <p className='uppercase text-md leading-5 text-center' style={{ letterSpacing: "2px" }}>WE ARE SERVING IN</p>
                <p className='text-center text-large font-bold leading-xlarge mt-6 lg:mt-5' style={{ letterSpacing: "-1px" }}><span className='text-secondary'>Industries</span> We Are Working with</p>
            </div>
            <Gallery />
        </div>
    )
}

export default Serving