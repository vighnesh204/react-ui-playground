import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Random = () => {
  const [gif, setGif] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&rating=g`,
      );

      const imageUrl = response?.data?.data?.images?.original?.url;

      if (imageUrl) {
        setGif(imageUrl);
      } else {
        console.log("No GIF received");
      }
    } catch (error) {
      console.error("Error fetching data:", error.response || error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const generateGif = () => {
    alert("Generating a new random GIF...");
    fetchData();
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-xl">
      <div className="w-full aspect-video bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex items-center justify-center shadow-xl shadow-black/40">
        <img
          src={gif}
          alt="random gif"
          className="w-full h-full object-cover"
        />
      </div>

      <button
        onClick={generateGif}
        className="px-6 py-2.5 bg-violet-500 hover:bg-violet-400 active:scale-95 text-white font-mono text-sm uppercase tracking-widest rounded-xl transition-all duration-200 shadow-lg shadow-violet-900/40"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
