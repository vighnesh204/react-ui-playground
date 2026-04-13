import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

const Testimonials = ({ animeData }) => {
  const [index, setIndex] = useState(0);

  const leftShiftHandler = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? animeData.length - 1 : prevIndex - 1,
    );
    // if (index - 1 < 0) {
    //   setIndex(animeData.length - 1);
    // } else {
    //   setIndex(index - 1);
    // }
  };

  const rightShiftHandler = () => {

    setIndex((prevIndex) => (prevIndex + 1) % animeData.length);

    // if (index + 1 >= animeData.length) {
    //   setIndex(0);
    // } else {
    //   setIndex(index + 1);
    // }
  };

  const animeHandler = () => {
    const randomIndex = Math.floor(Math.random() * animeData.length);
    setIndex(randomIndex);
  };
  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center rounded-xl p-6 mt-10 transition-all duration-700 hover:shadow-lg">
      <Card animeData={animeData[index]} />

      <div className="flex gap-4 mt-5 text-3xl text-violet-400 font-bold justify-center">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight />
        </button>
      </div>

      <div>
        <button
          onClick={animeHandler}
          className="cursor-pointer px-6 py-2 rounded-xl bg-violet-400 text-white hover:bg-violet-500 transition-all font-semibold duration-300 mt-5"
        >
          Anime
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
