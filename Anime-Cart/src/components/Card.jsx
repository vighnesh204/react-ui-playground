import React from "react";

const Card = ({ data, handleClick, index }) => {
    const { image, name, character, added } = data;
  return (
    <div className="w-64 bg-zinc-100 p-4 rounded-md flex gap-6 pb-8 relative mt-10">
      <div className="w-24 h-24 bg-orange-600 rounded-md overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="">
        <h3 className="text-xl leading-none font-semibold">{name}</h3>
        <h6 className="text-sm text-gray-500 mt-2 whitespace-nowrap">{character}</h6>
      </div>
      <button onClick={()=>handleClick(index)} className={`${added === false ? "bg-orange-600" : "bg-teal-600"} text-white text-xs font-semibold px-4 py-3 rounded-full whitespace-nowrap absolute bottom-0 left-1/2 translate-y-[50%] -translate-x-[50%]`}>
        {
            added === false ? "Add To Favourites" : "Added"
        }
      </button>
    </div>
  );
};

export default Card;
