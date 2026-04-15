import React from 'react'

const Card = () => {
  return (
    <div className='w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2'>
      <div className='image w-[4vw] h-[4vw] rounded-full bg-sky-800 overflow-hidden'>
        <img className='w-full h-full object-cover' src="" alt="" />
      </div>
      <h1 className='mt-1 text-xl font-semibold'>Gojo Satoru</h1>
      <p className='mt-1 text-center text-xs font-semibold leading-none tracking-tight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi fugit ducimus assumenda.</p>
      <button className='px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white mt-4'>Remove It</button>
    </div>
  )
}

export default Card