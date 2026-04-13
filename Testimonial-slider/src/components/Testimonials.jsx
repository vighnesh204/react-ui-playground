import Card from "./Card"

const Testimonials = ({ animeData }) => {
  return (
    <div>
        <Card animeData={animeData} />

          <div className="flex gap-4 mt-5 text-3xl text-violet-400 font-bold justify-center">
                <button className="cursor-pointer hover:text-violet-500">
                    <FiChevronLeft />
                </button>
                <button className="cursor-pointer hover:text-violet-500">
                    <FiChevronRight />
                </button>
            </div>

            <div>
                <button className="cursor-pointer px-6 py-2 rounded-xl bg-violet-400 text-white hover:bg-violet-500 transition-all font-semibold duration-300 mt-5">
                    Anime
                </button>
            </div>
    </div>
  )
}

export default Testimonials