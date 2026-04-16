
const Form = () => {
  return (
    <div className="mt-10 flex justify-center">
      <form className="flex gap-10 rounded-md">
        <input
          className="w-44 rounded-md font-semibold px-3 py-2 text-base outline-none bg-zinc-100"
          type="text"
          placeholder="name"
        />
        <input
          className="w-44 rounded-md font-semibold px-3 py-2 text-base outline-none bg-zinc-100"
          type="text"
          placeholder="email"
        />
        <input
          className="w-44 rounded-md font-semibold px-3 py-2 text-base outline-none bg-zinc-100"
          type="text"
          placeholder="image url"
        />
        <input className="rounded-md px-5 py-1 bg-blue-500 text-white font-semibold" type="submit" />
      </form>
    </div>
  );
};

export default Form;  