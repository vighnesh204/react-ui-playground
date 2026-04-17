import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full px-14 py-3 flex justify-between items-center'>
        <h4 className='text-xl font-semibold'>Anime</h4>
        <div className='flex p-2 px-4 bg-orange-600 rounded-md text-white text-sm font-semibold gap-3'>
            <h3>Favourites</h3>
            <h4>2</h4>
        </div>
    </div>
  )
}

export default Navbar