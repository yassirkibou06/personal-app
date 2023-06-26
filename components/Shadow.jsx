import React from 'react'

const Shadow = () => {
    return (
        <>
            <div className="w-72 sm:w-64 lg:w-72 h-96 sm:h-80 lg:h-96 relative sm:fixed lg:fixed top-36 left-10 border-8 border-white">
                {/*Put your image (to found images folder go to public/assets/images)*/}
                <img src="/assets/images/first.jpg" className="w-full h-full" alt="you" />
            </div>
            <div className="bg-shadow"></div>
        </>
    )
}

export default Shadow