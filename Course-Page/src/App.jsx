import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import Shimmer from "./components/Shimmer"
import { filterData, apiUrl } from "./utils/data"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const App = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async() =>{
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setCourses(data.data);
    } catch (error) {
      toast.error("Something went wrong")
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  }, [])


  return (
    <div>
      <Navbar />

      <Filter filterData={filterData} />
      {
        loading ? <Shimmer /> : <Cards courses={courses} />
      }
      

    </div>
  )
}

export default App