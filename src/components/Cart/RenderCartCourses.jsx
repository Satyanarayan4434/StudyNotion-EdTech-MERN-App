import React from 'react'
import courseImage from '../../assets/Images/Instructor.png'
import ReactStars from "react-rating-stars-component";

export const RenderCartCourses = () => {
  return (
    <div>
      <div>
        <img src={courseImage} alt="" />
      </div>
      <div>
        <div>The complete python from zero to hero</div>
        <div>Instructor name</div>
        <div>
          <ReactStars
            count={5}
            size={24}
            value={4.5}
            edit={false}
            isHalf={true}
            activeColor="#ffd700"
          />  
        </div>
        <div>
          <div>Total Courses</div>
          <div>Lesson</div>
          <div>Beginner</div>
        </div>
      </div>
      <div>
        <button>Remove</button>
        <div>Rs.4000/-</div>
        <div></div>
      </div>
    </div>
  )
}
