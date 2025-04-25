import React from "react";
import HighlightedText from "../HighlightedText";
import Button from "../Button";
import icon1 from "../../assets/TimeLineLogo/Logo1.svg";
import icon2 from "../../assets/TimeLineLogo/Logo2.svg";
import icon3 from "../../assets/TimeLineLogo/Logo3.svg";
import icon4 from "../../assets/TimeLineLogo/Logo4.svg";
import TimeLineImage from "../../assets/Images/TimelineImage.png";
import plan_your_lessons from "../../assets/Images/Plan_your_lessons.svg";
import know_your_progress from "../../assets/Images/Know_your_progress.svg";
import compare_with_others from "../../assets/Images/Compare_with_others.svg";

export default function TimeLineSection() {
  const datas = [
    {
      icon: icon1,
      title: "Leadership",
      description: "Fully committed to the success company",
      active: true,
    },
    {
      icon: icon2,
      title: "Responsibility",
      description: "Students will always be our top priority",
      active: true,
    },
    {
      icon: icon3,
      title: "Flexibility",
      description: "The ability to switch is an important skills",
      active: true,
    },
    {
      icon: icon4,
      title: "Solve the problem",
      description: "Code your way to a solution",
      active: false,
    },
  ];

  return (
    <div className="bg-[#F9F9F9]">
      <div className="flex justify-between w-full px-[76px] py-[5rem]">
        <div className="text-[36px] font-semibold flex flex-col gap-2 leading-9">
          <div className="flex gap-2">
            Get the skills you need for a <HighlightedText text="job" />
          </div>{" "}
          <HighlightedText text="that is in demand." />
        </div>
        <div className="flex flex-col w-[30rem] gap-10">
          <div>
            The modern StudyNotion is the dictates its own terms. Today, to be a
            competitive specialist requires more than professional skills.
          </div>
          <div className="flex">
            <Button ToLink="/" active={true}>
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full px-[76px] py-[5rem]">
        <div>
          <div className="flex flex-col ">
            {datas.map((data, index) => {
              return (
                <div key={index} className="flex items-start gap-10 ">
                  <div className="flex flex-col items-center">
                    <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
                      <img src={data.icon} alt="TimeLine_icon" />
                    </div>
                    {data.active && (
                      <div
                        className={`bg-richblack-400 w-[1px] h-[2rem] my-[1px]`}
                      ></div>
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-base text-richblack-800">
                      {data.title}
                    </div>
                    <div className="text-sm text-richblack-500">
                      {data.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="w-[714px] h-[545px]">
            <img src={TimeLineImage} alt="TimeLine_Image" />
          </div>
          <div className="flex w-[511px] h-[128px] py-[1rem] px-[3rem] bg-[#014A32] items-center justify-between absolute -bottom-16">
            <div className="flex items-center gap-3 ">
              <div className="font-extrabold text-5xl text-white">10</div>
              <div className="w-[3rem] text-sm text-[#05A77B]">
                YEARS EXPERIENCE
              </div>
            </div>
            <hr className="w-[1px] h-full bg-white" />
            <div className="flex items-center gap-3 ">
              <div className="font-extrabold text-5xl text-white">250</div>
              <div className="w-[4rem] text-sm text-[#05A77B]">
                TYPES OF COURSES
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-[17rem] pt-10 pb-[8rem] relative">
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="text-[36px] text-richblack-5000 font-bold flex gap-2">
            Your swiss knife for{" "}
            <HighlightedText text="learning any language" />
          </div>
          <div className="text-sm text-richblack-300 px-[20rem] text-center">
            Using spin making learning multiple languages easy. with 20+
            languages realistic voice-over, progress tracking, custom schedule
            and more.
          </div>
        </div>
        <div className="flex items-center justify-center  ">
          <img className="absolute left-[10rem] top-52" src={know_your_progress} alt="know_your_progress" />
          <img className="absolute top-32" src={compare_with_others} alt="compare_with_others" />
          <img className="absolute right-[7rem] top-52" src={plan_your_lessons} alt="plan_your_lessons" />
        </div>
        <div>
          <Button ToLink="/" active={true}>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
