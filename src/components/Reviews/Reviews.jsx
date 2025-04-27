import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; 

const StarRating = ({rating}) =>{
  const totalStar = 5;
  const fullStar = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStar = totalStar - fullStar - (halfStar? 1:0);

  return(
    <div className="flex gap-2 items-center text-yellow-100">
          {
            [...Array(fullStar)].map(((_, i)=><FaStar key={`Full-${i}`}/>))
          }
          {
            halfStar&&<FaStarHalfAlt key={`Half`}/>
          }
          {
            [...Array(emptyStar)].map((_, i) => <FaRegStar  key={`Empty-${i}`}/>)
          }
    </div>
  )
}

export default function Reviews() {
  const ReviewData = [
    {
      id: 1,
      Name: "Satyanarayan Sen",
      Course: "Trading",
      Review: "One and Only course which need to learn trading in real world.",
      Rating: 4.5,
    },
    {
      id: 2,
      Name: "Satyanarayan Sen",
      Course: "Trading",
      Review: "One and Only course which need to learn trading in real world.",
      Rating: 4.5,
    },
    {
      id: 3,
      Name: "Satyanarayan Sen",
      Course: "Trading",
      Review: "One and Only course which need to learn trading in real world.",
      Rating: 4.5,
    },
    {
      id: 4,
      Name: "Satyanarayan Sen",
      Course: "Trading",
      Review: "One and Only course which need to learn trading in real world.",
      Rating: 4.5,
    },
    // {
    //   id: 5,
    //   Name: "Satyanarayan Sen",
    //   Course: "Trading",
    //   Review: "One and Only course which need to learn trading in real world.",
    //   Rating: 4.5,
    // },
    // {
    //   id: 6,
    //   Name: "Satyanarayan Sen",
    //   Course: "Trading",
    //   Review: "One and Only course which need to learn trading in real world.",
    //   Rating: 4.5,
    // },
    // {
    //   id: 1,
    //   Name: "Satyanarayan Sen",
    //   Course: "Trading",
    //   Review: "One and Only course which need to learn trading in real world.",
    //   Rating: 4.5,
    // },
    // {
    //   id: 1,
    //   Name: "Satyanarayan Sen",
    //   Course: "Trading",
    //   Review: "One and Only course which need to learn trading in real world.",
    //   Rating: 4.5,
    // },
  ];
  
  return (
    <div className="bg-richblack-900 flex  flex-col items-center justify-center w-full px-16 gap-[2rem] py-[2rem]">
      <div className="text-richblue-50 text-[36px]">Reviews From Other Learners</div>
     <div className="flex gap-5 items-center ">
     {ReviewData.map((data, index) => {
        return (
          <div className="flex flex-col items-start bg-richblack-800 text-richblack-50 p-6 gap-3  " key={index}>
            <div className="flex items-center gap-6 ">
              <div>
                <img src={`https://ui-avatars.com/api/?name=${data.Name}&background=random&color=fff&rounded=true`} alt="User_Profile_Image" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-lg font-bold">{data.Name}</div>
                <div className="text-richblack-300 text-sm ">{data.Course}</div>
              </div>
            </div>
            <div>{data.Review}</div>
            <div className="flex items-center gap-5 text-yellow-100">
              <div>({data.Rating})</div>
              <div><StarRating rating={data.Rating}/></div>
            </div>
          </div>
        );
      })}
     </div>
    </div>
  );
}
