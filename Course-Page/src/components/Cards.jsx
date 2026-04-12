import { useState } from 'react';
import Card from './Card'

const Cards = ({ courses, category }) => {

    let allCourses = [];
    const [likedCourses, setLikedCourses] = useState([]);

    const getCourses = () => {
        if(category === "ALL") {
            let allCourses = [];
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourses.push(course);
                    // console.log(course);
                })  
            })
            return allCourses;
        }
        else {
            return courses[category];
        }
    }
  return (
  <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center gap-6 mb-8'>
      {getCourses()?.map((course) => {
  return (
    <Card
      key={course.id}
      course={course}
      likedCourses={likedCourses}
      setLikedCourses={setLikedCourses}
    />
  );
})}
    </div>
  )
}

export default Cards