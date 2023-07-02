import React from 'react'

function LoadingScreen() {
  return (
    <section className='z-20 w-full h-screen bg-white/40 fixed top-0 flex justify-center items-center'>
        <div className="custom-loader"></div>
    </section>
  )
}

export default LoadingScreen