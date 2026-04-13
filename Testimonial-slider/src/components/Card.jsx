import { FaQuoteLeft, FaQuoteRight, FaGem } from "react-icons/fa"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const Card = ({animeData}) => {
    const { id, name, role, image, text} = animeData;
    return (
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img className="aspect-square rounded-full w-[140px] z-25" src={image} alt="" />
                <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
            </div>

            <div className="text-center mt-6">
                <h5 className="font-bold text-2xl capitalize">{name}</h5>
            </div>

            <div className="text-center mt-1">
                <p className="text-violet-300 uppercase text-sm">{role}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-4">
                <FaQuoteLeft />
            </div>

            <div className="text-center mt-4 text-slate-500">
                {text}
            </div>

            <div className="text-violet-400 mx-auto mt-4">
                <FaQuoteRight />
            </div>

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

export default Card;