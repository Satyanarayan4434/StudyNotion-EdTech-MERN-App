import React from "react";
import Instructor from "../../assets/Images/Instructor.png";
import HighlightedText from "../HighlightedText";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa6";

export default function InstructorWelcomeSection() {
  return (
    <div className="flex justify-between items-center bg-richblack-900 px-[76px] py-[5rem]">
      <div className="shadow-white shadow-[10px_10px_0px_0px_#000]">
        <img src={Instructor} alt="Instructor_Image" />
      </div>
      <div className="flex flex-col w-[30rem] gap-10">
        <div>
          <div className="flex flex-col items-start text-[36px] font-semibold text-richblack-50 leading-10">
            Become an <HighlightedText text="instructor" />
          </div>
          <div className="text-richblack-100 text-base">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </div>
        </div>
        <div className="flex">
            <Button ToLink="/signUp" active={true}>Start Teaching Today<FaArrowRight/></Button>
        </div>
      </div>
    </div>
  );
}
