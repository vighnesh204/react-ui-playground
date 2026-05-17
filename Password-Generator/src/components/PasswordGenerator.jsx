import { useEffect, useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeCharacters, setIncludeCharacters] = useState(true);

  const generatePassword = () => {
    // Logic to generate password based on selected options
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += "0123456789";
    if (includeCharacters) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(generatedPassword);

  };

  useEffect(()=> {
    generatePassword();

  }, [length, includeNumbers, includeCharacters])


  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-[#111827] border border-white/10 rounded-3xl shadow-2xl p-8">
        
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">
            Password Generator
          </h1>
          <p className="text-gray-400 text-sm">
            Generate strong and secure passwords instantly
          </p>
        </div>

        {/* Password Display */}
        <div className="bg-[#1f2937] border border-white/10 rounded-2xl p-5 flex items-center justify-between mb-8">
          <h2 className="text-lg text-green-400 font-mono break-all">
            {password}
          </h2>

          <button className="bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-semibold px-4 py-2 rounded-xl">
            Copy
          </button>
        </div>

        {/* Length Slider */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <label className="text-white font-medium">
              Password Length
            </label>

            <span className="text-green-400 font-bold text-lg">
              {length}
            </span>
          </div>

          <input
            type="range"
            min={5}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full accent-green-500 cursor-pointer"
          />
        </div>

        {/* Options */}
        <div className="space-y-5 mb-8">

          {/* Numbers */}
          <div className="flex items-center justify-between bg-[#1f2937] p-4 rounded-2xl border border-white/5">
            <label className="text-white font-medium">
              Include Numbers
            </label>

            <input
              type="checkbox"
              className="w-5 h-5 accent-green-500 cursor-pointer"
              defaultChecked={includeNumbers}
              onChange={()=> setIncludeNumbers(!includeNumbers)}
            />
          </div>

          {/* Characters */}
          <div className="flex items-center justify-between bg-[#1f2937] p-4 rounded-2xl border border-white/5">
            <label className="text-white font-medium">
              Include Characters
            </label>

            <input
              type="checkbox"
              className="w-5 h-5 accent-green-500 cursor-pointer"
                defaultChecked={includeCharacters}
                onChange={()=> setIncludeCharacters(!includeCharacters)}
            />
          </div>

          {/* Uppercase */}
          {/* <div className="flex items-center justify-between bg-[#1f2937] p-4 rounded-2xl border border-white/5">
            <label className="text-white font-medium">
              Include Uppercase Letters
            </label>

            <input
              type="checkbox"
              className="w-5 h-5 accent-green-500 cursor-pointer"
            />
          </div> */}
        </div>

        {/* Generate Button */}
        <button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-green-500/30">
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;