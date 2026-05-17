import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-950 px-12 py-6">
      <header className="mb-4 border-b border-zinc-800 pb-4 flex items-center justify-between w-full max-w-4xl mx-auto">
        <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse mb-2" />
        <h1 className="text-4xl font-bold text-white tracking-tight">
          Random <span className="text-violet-400">GIFs</span>
        </h1>
        <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse mb-2" />
      </header>

      <main className="flex flex-col items-center gap-10 w-full">
        <Random />
        <Tag />
      </main>
    </div>
  );
};

export default App;
