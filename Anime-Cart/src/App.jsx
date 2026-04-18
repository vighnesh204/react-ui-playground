import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {
  const data = [
    {
      image: "https://i.pinimg.com/736x/d1/d7/34/d1d7348f6c74a7d927bf95a46449df7c.jpg",
      name: "Solo Leveling",
      character: "Sung Jin-Woo",
      added: false,
    },
    {
      image: "https://i.pinimg.com/736x/d0/45/94/d04594007943fc7a1a9660381559b39f.jpg",
      name: "Jujutsu Kaisen",
      character: "Megumi Fushiguro",
      added: false,
    },
    {
      image: "https://i.pinimg.com/736x/46/86/22/46862236a2c2ae488ff472a2f657dc7e.jpg",
      name: "Jujutsu Kaisen",
      character: "Satoru Gojo",
      added: false,
    },
    {
      image: "https://i.pinimg.com/736x/53/61/38/5361385c5e9a4e401ed61ae5faa5bc24.jpg",
      name: "Jujutsu Kaisen",
      character: "Sukuna",
      added: false,
    },
    {
      image: "https://i.pinimg.com/1200x/ac/36/16/ac3616a1ff156bb0952042b592818976.jpg",
      name: "Demon Slayer",
      character: "Tanjiro Kamado",
      added: false,
    },
    {
      image: "https://i.pinimg.com/736x/b9/c1/96/b9c1963ad8a5dc83cbd50e9dfa3057f5.jpg",
      name: "Demon Slayer",
      character: "Tomioka Giyu",
      added: false,
    },
    {
      image: "https://i.pinimg.com/736x/3a/21/ac/3a21ac6870a5b78acd7e7b9210604dc0.jpg",
      name: "Jujutsu Kaisen",
      character: "Toji",
      added: false,
    },
    {
      image: "https://i.pinimg.com/736x/31/1d/e0/311de05dbdf3bb799d991ca1e94259b2.jpg",
      name: "Demon Slayer",
      character: "Zenitsu",
      added: false,
    },
  ];

  const [animeData, setAnimeData] = useState(data)

  const handleClick = (index) => {
    setAnimeData((prev) => {
      return prev.map((item, itemIndex) => {
        if(itemIndex === index) return {...item, added: !item.added}
        return item;
      })
    })
  }

  return (
    <div className="w-full h-screen bg-zinc-300">
      <Navbar data={animeData}/>
      <div className="px-14 flex gap-10 mt-10 flex-wrap">
        {
          animeData.map((item, index) => (
            <Card key={index} index={index} data={item} handleClick={handleClick}/>
          ))
        }
      </div>
    </div>
  );
};

export default App;
