import React from "react";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import HighLightedText from "../components/HighlightedText";
import FoundingStory from "../assets/Images/FoundingStory.png";
import Button from "../components/Button";

export const AboutUs = () => {
  return (
    <div className="bg-richblack-900 text-richblack-50 w-full ">
      <div className="flex flex-col items-center justify-center py-24 gap-10 border-b-[1px] border-richblack-50">
        <div className="text-sm  text-richblack-300">About us</div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="text-[36px] font-semibold text-center">
            Driving Innovation in Online Education for a{" "}
            <HighLightedText text="Brighter Future" />
          </div>
          <div className="text-sm text-richblack-300 text-center px-[15rem]">
            Studynotion is at the forefront of driving innovation in online
            education. We're passionate about creating a brighter future by
            offering cutting-edge courses, leveraging emerging technologies, and
            nurturing a vibrant learning community.
          </div>
        </div>
        <div className="flex items-center gap-6 justify-center">
          <img src={BannerImage1} alt="Banner_Image" />
          <img src={BannerImage2} alt="Banner_Image" />
          <img src={BannerImage3} alt="Banner_Image" />
        </div>
        <div className="text-[36px] flex flex-col items-center justify-center gap-2">
          We are passionate about revolutionizing the way we learn. Our
          <div className="flex gap-2 items-center">
            innovative platform <HighLightedText text="combines technology" />,{" "}
            <span className="text-yellow-200">expertise</span>, and community to
          </div>
          <div className="flex gap-2 items-center">
            create an{" "}
            <span className="text-yellow-100">
              unparalleled educational experience.
            </span>
          </div>
        </div>
      </div>
      <div className="flex py-24 w-full px-[9rem] gap-20">
        <div className="w-[50%] gap-4 flex flex-col ">
          <div className="text-[36px] font-semibold">Our Founding Story </div>
          <div className="text-richblack-300">
            Our e-learning platform was born out of a shared vision and passion
            for transforming education. It all began with a group of educators,
            technologists, and lifelong learners who recognized the need for
            accessible, flexible, and high-quality learning opportunities in a
            rapidly evolving digital world.
          </div>
          <div className="text-richblack-300">
            As experienced educators ourselves, we witnessed firsthand the
            limitations and challenges of traditional education systems. We
            believed that education should not be confined to the walls of a
            classroom or restricted by geographical boundaries. We envisioned a
            platform that could bridge these gaps and empower individuals from
            all walks of life to unlock their full potential.
          </div>
        </div>
        <div>
          <img src={FoundingStory} alt="" />
        </div>
      </div>
      <div className="flex py-24 w-full px-[9rem] gap-20">
        <div className="w-[50%] gap-4 flex flex-col ">
          <div className="text-[36px] font-semibold">Our Vision</div>
          <div className="text-richblack-300">
            With this vision in mind, we set out on a journey to create an
            e-learning platform that would revolutionize the way people learn.
            Our team of dedicated experts worked tirelessly to develop a robust
            and intuitive platform that combines cutting-edge technology with
            engaging content, fostering a dynamic and interactive learning
            experience.
          </div>
        </div>
        <div className="w-[50%] gap-4 flex flex-col ">
          <div className="text-[36px] font-semibold">Our Mission</div>
          <div className="text-richblack-300">
            our mission goes beyond just delivering courses online. We wanted to
            create a vibrant community of learners, where individuals can
            connect, collaborate, and learn from one another. We believe that
            knowledge thrives in an environment of sharing and dialogue, and we
            foster this spirit of collaboration through forums, live sessions,
            and networking opportunities.
          </div>
        </div>
      </div>
      <div className="bg-puregreys-400 flex w-full justify-between items-center px-[9rem] py-[3rem]">
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="text-[36px] font-bold">5K+</div>
          <div>Active Students</div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="text-[36px] font-bold">10+</div>
          <div>Mentors</div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="text-[36px] font-bold">200+</div>
          <div>Courses</div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="text-[36px] font-bold">50+</div>
          <div>Awards</div>
        </div>
      </div>
      <div className="grid grid-cols-[50%_25%_25%] auto-rows-fr w-full gap-x-0 px-[9rem] pt-10">
        <div className="flex flex-col gap-2 items-start  pr-8 bg-gray-200 p-4">
          <div className="text-[36px]">
            World-Class Learning for Anyone, Anywhere
          </div>
          <div>
            Studynotion partners with more than 275+ leading universities and
            companies to bring flexible, affordable, job-relevant online
            learning to individuals and organizations worldwide. This section
            has more content to make it taller.
          </div>
          <div className="text-richblack-800">
            <Button ToLink="/" active={true} className="bg-blue-500 text-white p-2 rounded">
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-3 items-start justify-center bg-richblack-600">
          <div className="text-[20px]">Curriculum Based on Industry Needs</div>
          <div>
            Save time and money! The Belajar curriculum is made to be easier to
            understand and in line with industry needs.
          </div>
        </div>
        <div className="flex flex-col gap-2 px-3 items-start justify-center bg-richblack-800">
          <div className="text-[20px]">Our Learning Methods</div>
          <div>
            The learning process uses the namely online and offline. Less
            content here.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[25%_25%_25%_25%] auto-rows-fr w-full gap-x-0 px-[9rem] pb-10">
        <div className="">
        </div>
        <div className="flex flex-col gap-2 px-3 items-start justify-center bg-richblack-600 py-14">
          <div className="text-[20px]">Curriculum Based on Industry Needs</div>
          <div>
            Save time and money! The Belajar curriculum is made to be easier to
            understand and in line with industry needs.
          </div>
        </div>
        <div className="flex flex-col gap-2 px-3 items-start justify-center bg-richblack-800">
          <div className="text-[20px]">Our Learning Methods</div>
          <div>
            The learning process uses the namely online and offline. Less
            content here.
          </div>
        </div>
        <div className="flex flex-col gap-2 px-3 items-start justify-center bg-richblack-600">
          <div className="text-[20px]">Our Learning Methods</div>
          <div>
            The learning process uses the namely online and offline. Less
            content here.
          </div>
        </div>
      </div>
    </div>
  );
};
