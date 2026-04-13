import Testimonials from './components/Testimonials'
import animeData from './utils/data'


const App = () => {

  return (
 <div className='w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Anime Testimonials</h1>
         <div className='bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto'></div>

        <Testimonials animeData={animeData} />
      </div>
    </div>
  )
}

export default App