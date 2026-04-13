import { FaQuoteLeft, FaQuoteRight, FaGem } from "react-icons/fa";

const Card = ({ animeData }) => {
  const { id, name, role, image, text } = animeData;
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-[10] mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] z-25"
          src={image}
          alt=""
        />
        <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
      </div>

      <div className="text-center mt-6">
        <h5 className="font-bold text-2xl capitalize tracking-wide text-zinc-800">{name}</h5>
        <p className="text-violet-300 uppercase text-sm">{role}</p>
      </div>

      <div className="text-violet-400 mx-auto mt-4">
        <FaQuoteLeft />
      </div>

      <div className="text-center mt-4 text-slate-500">{text}</div>

      <div className="text-violet-400 mx-auto mt-4">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Card;
