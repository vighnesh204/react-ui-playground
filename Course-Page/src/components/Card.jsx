import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, likedCourses, setLikedCourses }) => {

  const clickHandler = () => {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((id) => id !== course.id));
      toast.warning("Like removed");
    }
    else if (likedCourses.length === 0) {
      setLikedCourses([course.id]); 
    toast.success("Liked Successfully");
    }
    else {
      setLikedCourses((prev) => [...prev, course.id]);
    toast.success("Liked Successfully");

    }
  }

  return (
      <div className="w-[300px] bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
         <div className="relative">
        <img src={course.image.url} alt={course.title} />

        <div>
            <button onClick={clickHandler} className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow-md hover:scale-110 transition-transform duration-150">
                {likedCourses.includes(course.id) ? <FcLike size={24} /> : <FcLikePlaceholder size={24} />}
            </button>
        </div>
          <div className="p-4 space-y-2">
            <p className="text-gray-900 font-medium text-base leading-snug line-clamp-2">
          {course.title}
        </p>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
          {course.description}
        </p>
        </div>
    </div>
    </div>
  
  )
}

export default Card