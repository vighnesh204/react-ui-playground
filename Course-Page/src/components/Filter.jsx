const Filter = ({ filterData, category, setCategory }) => {
  return (
       <div className="w-full flex gap-3 justify-center my-6 flex-wrap px-4">
      {filterData.map((item) => {
        return (
          <button
            className={`text-sm font-medium px-5 py-1.5 rounded-full border border-gray-300 
                       text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 
                       transition-all duration-200 cursor-pointer ${category === item.name ? 'bg-blue-500 text-white' : ''}`}
            key={item.id}
            onClick={() => setCategory(item.name)}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
