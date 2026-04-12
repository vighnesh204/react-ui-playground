import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Shimmer from "./components/Shimmer";
import { filterData, apiUrl } from "./utils/data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(filterData[0].name);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setCourses(data.data);
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
   <div className="min-h-screen flex flex-col items-center bg-gray-50">
  <div className="w-full">
    <Navbar />
  </div>

      <div className="w-full">
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
      </div>
     <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-start gap-6 min-h-[50vh] pb-10">
        {loading ? <Shimmer /> : <Cards courses={courses} category={category} />}
      </div>
    </div>
  );
};

export default App;
