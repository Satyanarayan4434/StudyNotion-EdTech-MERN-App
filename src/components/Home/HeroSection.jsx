import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import HighlightedText from "../HighlightedText";
import Button from "../Button";
import videoFile from "../../assets/Images/banner.mp4";
import TypingCode from "../TypingCode";
import { IoPeopleSharp } from "react-icons/io5";
import { PiNetworkFill } from "react-icons/pi";

export default function HeroSection() {
  return (
    <div className="w-full flex flex-col gap-[5rem] items-center justify-center relative bg-richblack-900 pt-24">
      {/* Section-1 */}
      <div className="w-[913px] flex flex-col gap-[38px] items-center justify-center">
        <Link
          to="/signUp"
          className="text-richblack-200 flex gap-1 items-center px-3 py-1  rounded-3xl border-[1px] border-richblack-200 bg-richblack-800"
        >
          Become an Instructor <FaArrowRight />
        </Link>

        <div>
          <div className="flex items-center justify-center">
            <div className="text-richblack-5 font-inter text-[36px] flex gap-2 font-semibold">
              Empower Your Future with <HighlightedText text="Coding Skills" />
            </div>
          </div>
          <div>
            <div className="text-base text-richblack-200 text-center">
              With our online coding courses, you can learn at your own pace,
              from anywhere in the world, and get access to a wealth of
              resources, including hands-on projects, quizzes, and personalized
              feedback from instructors.{" "}
            </div>
          </div>
          <div></div>
        </div>

        <div className="flex gap-4 items-center">
          <Button active={true} ToLink="/signUp">
            Learn More
          </Button>
          <Button active={false} ToLink="/signUp">
            Book a Demo
          </Button>
        </div>
      </div>

      {/* Section-2 */}
      <div className="">
        <video
          muted
          autoPlay
          loop
          playsInline
          src={videoFile}
          className="w-[1035px] h-[515px]"
        ></video>
      </div>

      {/* Section-3 */}
      <div className="flex items-center justify-between gap-10">
        <div className="flex flex-col items-start w-[486px] gap-[4rem]">
          <div className="flex flex-col gap-1">
            <div className="text-richblack-5 text-[36px] font-semibold leading-tight">
              <div className="flex gap-2">
                Unlock your <HighlightedText text="coding potential" />{" "}
              </div>
              with our online courses.
            </div>
            <div className="text-richblack-200">
              Our courses are designed and taught by industry experts who have
              years of experience in coding and are passionate about sharing
              their knowledge with you.
            </div>
          </div>
          <div className="flex items-center gap-7">
            <Button ToLink="signUp" active={true}>
              Try it Yourself <FaArrowRight />
            </Button>
            <Button ToLink="signUp" active={false}>
              Learn More
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <TypingCode />
        </div>
      </div>

      {/* Section-4 */}
      <div className="flex flex-row-reverse items-center justify-between gap-10">
        <div className="flex flex-col items-start w-[486px] gap-[4rem]">
          <div className="flex flex-col gap-1">
            <div className="text-richblack-5 text-[36px] font-semibold leading-tight">
              <div className="flex flex-col gap-2 leading-9">
                <div className="flex gap-2">
                  Start{" "}
                  <HighlightedText
                    text="coding 
              "
                  />
                </div>
                <HighlightedText text="in seconds" />
              </div>
            </div>
            <div className="text-richblack-200">
              Go ahead, give it a try. Our hands-on learning environment means
              you'll be writing real code from your very first lesson.
            </div>
          </div>
          <div className="flex items-center gap-7">
            <Button ToLink="signUp" active={true}>
              Continue Lesson
              <FaArrowRight />
            </Button>
            <Button ToLink="signUp" active={false}>
              Learn More
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <TypingCode />
        </div>
      </div>

      {/* Section-5 */}
      <div className="flex flex-col items-center pb-[20rem]">
        <div className="text-[36px] font-semibold text-richblack-50 flex gap-2">
          Unlock the <HighlightedText text="Power of Code" />
        </div>
        <div className="text-base text-richblack-100">
          Learn to Build Anything You Can Imagine
        </div>
      </div>

      <div className="flex items-center justify-between w-full px-[176px] absolute -bottom-20">
        <div className="w-[280px] p-4 shadow-yellow-50 shadow-[10px_10px_0_0_#000] h-[280px] text-richblack-800 bg-white flex flex-col  justify-between">
          <div className="flex flex-col gap-2 px-7 pt-5">
            <div className="font-semibold text-base">Learn HTML</div>
            <div className="text-sm">
              This course covers the basic concepts of HTML including creating
              and structuring web pages, adding text, links, images, and more.
            </div>
          </div>
          <div className="flex justify-between items-center border-dashed border-t-[1px] px-5 py-2 border-richblack-800">
            <div className="flex gap-2 items-center">
              <IoPeopleSharp />
              Beginner
            </div>
            <div className="flex gap-2 items-center">
              <PiNetworkFill />6 Lessons
            </div>
          </div>
        </div>

        <div className="w-[250px] h-[250px] text-richblack-50 bg-richblack-800 flex flex-col  justify-between">
          <div className="flex flex-col gap-2 px-7 pt-5">
            <div className="font-semibold text-base">Learn HTML</div>
            <div className="text-sm">
              This course covers the basic concepts of HTML including creating
              and structuring web pages, adding text, links, images, and more.
            </div>
          </div>
          <div className="flex justify-between items-center border-dashed border-t-[1px] px-5 py-2 border-richblack-50">
            <div className="flex gap-2 items-center">
              <IoPeopleSharp />
              Beginner
            </div>
            <div className="flex gap-2 items-center">
              <PiNetworkFill />6 Lessons
            </div>
          </div>
        </div>

        <div className="w-[250px] h-[250px] text-richblack-50 bg-richblack-800 flex flex-col  justify-between">
          <div className="flex flex-col gap-2 px-7 pt-5">
            <div className="font-semibold text-base">Learn HTML</div>
            <div className="text-sm">
              This course covers the basic concepts of HTML including creating
              and structuring web pages, adding text, links, images, and more.
            </div>
          </div>
          <div className="flex justify-between items-center border-dashed border-t-[1px] px-5 py-2 border-richblack-50">
            <div className="flex gap-2 items-center">
              <IoPeopleSharp />
              Beginner
            </div>
            <div className="flex gap-2 items-center">
              <PiNetworkFill />6 Lessons
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
