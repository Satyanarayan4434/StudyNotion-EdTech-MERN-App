// import React, {  useState } from "react";
// import { useForm } from "react-hook-form";
// import { useSelector } from "react-redux";
// import countrycode from "../../../data/countrycode.json";
// import { useNavigate } from "react-router-dom";

// export const ProfileInfoChange = () => {
//   const { user } = useSelector((state) => state.profile);
//   const navigate = useNavigate()

//   const genders = [
//     "Male",
//     "Female",
//     "Non-Binary",
//     "Prefer not to say",
//     "Other",
//   ];
//   const {
//     register,
//     reset,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [profileData, setprofileData] = useState(null)
//   const profileEdit = (data) =>{
//     const contactNumber = `${data.countryCode}-${data.phoneNumber}`
//     const completeProfileData = {
//       ...data, contactNumber:contactNumber
//     }
//     setprofileData(completeProfileData);
//     reset();
//   }

//   console.log(profileData);

//   const cancelHandler = () =>{
//     reset();
//     setprofileData(null);
//     navigate("/dashboard/my-profile");
//   }


//   return (
//     <div className="flex flex-col items-start gap-6 text-richblack-50 bg-richblack-800 px-4 py-4 rounded-xl">
//       <div className="text-lg font-semibold">Profile Information</div>
//       <div>
//         <form className="flex flex-col gap-6 w-[40rem]" onSubmit={handleSubmit(profileEdit)}>

//           <div className="flex w-full gap-3 justify-between">
//             {/* First Name */}
//             <div className="flex flex-col gap-2 w-[100%]">
//               <label htmlFor="firstName" className="text-richblack-300 ">
//                 First Name :
//               </label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 placeholder="Enter First Name"
//                 {...register("firstName", { required: true })}
//                 defaultValue={user?.firstName}
//                 className="bg-richblack-900  text-richblack-50 px-4 py-3 rounded-xl outline-none  flex w-[100%] "
//               />
//               {errors.firstName && <span className="text-pink-300 text-sm ">First Name is Required</span>}
//             </div>

//             {/* Last Name */}
//             <div className="flex flex-col gap-2 w-[100%]">
//               <label htmlFor="lastName" className="text-richblack-300 ">
//                 Last Name :
//               </label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 placeholder="Enter Last Name"
//                 {...register("lastName", { required: true })}
//                 defaultValue={user?.lastName}
//                 className="bg-richblack-900 text-richblack-50 px-4 py-3 rounded-xl outline-none flex w-[100%]"
//               />
//               {errors.lastName && <span  className="text-pink-300 text-sm ">First Name is Required</span>}
//             </div>
//           </div>

//           <div className="flex w-full justify-between gap-3">
//             {/* DateOfBirth */}
//             <div className="flex flex-col gap-2 w-[30%]">
//               <label htmlFor="dateOfBirth" className="text-richblack-300 ">
//                 Date of Birth :
//               </label>
//               <input
//                 type="date"
//                 name="dateOfBirth"
//                 id="dateOfBirth"
//                 {...register(
//                   "dateOfBirth",
//                   {
//                     required: {
//                       value: true,
//                       message: "Date of Birth is Required",
//                     },
//                   },
//                   {
//                     max: {
//                       value: new Date().toISOString().split("T")[0],
//                       message: "Date of Birth cannot be in the future.",
//                     },
//                   }
//                 )}
//                 defaultValue={user?.additionalDetails?.dateOfBirth}
//                 className="bg-richblack-900 text-richblack-50 px-4 py-3 rounded-xl outline-none flex w-[100%]"
//               />
//               {errors.dateOfBirth && (
//                 <span  className="text-pink-300 text-sm ">
//                   {errors?.dateOfBirth?.message || "Date of Birth Required"}
//                 </span>
//               )}
//             </div>

//             {/* Gender */}
//             <div className="flex flex-col gap-2 w-[100%]">
//               <label htmlFor="gender" className="text-richblack-300 ">
//                 Gender :
//               </label>
//               <select
//                 name="gender"
//                 id="gender"
//                 {...register("gender", { required: true })}
//                 defaultValue={user?.additionalDetails?.gender}
//                 className="bg-richblack-900 text-richblack-50 px-4 py-3 rounded-xl outline-none flex w-[100%]"
//               >
//                 {genders.map((gender, i) => {
//                   return (
//                     <option key={i} value={gender}>
//                       {gender}
//                     </option>
//                   );
//                 })}
//               </select>
//               {errors.gender && <span  className="text-pink-300 text-sm ">Gender is Required</span>}
//             </div>
//           </div>

//           {/* Contact Number */}
//           <div className="flex flex-col gap-2 w-[100%]">
//             <label htmlFor="contactNumber" className="text-richblack-300 ">Contact Number</label>

//             <div className="flex w-full gap-4">
//               <select
//                 name="countryCode"
//                 id="countryCode"
//                 {...register("countryCode", { required: true })}
//                 className="bg-richblack-900 text-richblack-50 px-4 py-3 rounded-xl outline-none flex w-[20%]"
//               >
//                 {countrycode.map((code, i) => {
//                   return (
//                     <option key={i} value={code.code}>
//                       {code.code} {code.country}
//                     </option>
//                   );
//                 })}
//               </select>

//               <div className="flex w-[100%]">
//                 <input
//                   type="tel"
//                   name="phoneNumber"
//                   id="phoneNumber"
//                   defaultValue={user?.additionalDetails?.contactNumber}
//                   {...register("phoneNumber", {
//                     required: {
//                       value: true,
//                       message: "Please enter your Contact Number.",
//                     },
//                     maxLength: { value: 12, message: "Invalid Contact Number" },
//                     minLength: { value: 10, message: "Invalid Contact Number" },
//                   })}
//                   className="bg-richblack-900 text-richblack-50 px-4 py-3 rounded-xl outline-none flex w-[100%]"
//                 />
//                 {errors.phoneNumber && <span  className="text-pink-300 text-sm ">Phone Number is Required</span>}
//               </div>
//             </div>
//           </div>

//           {/* About */}
//           <div  className="flex flex-col gap-2 w-[100%]">
//             <label htmlFor="about">About :</label>
//             <textarea
//               type=""
//               name="about"
//               id="about"
//               {...register("about", { required: true })}
//               defaultValue={user?.additionalDetails?.about}
//               className="bg-richblack-900 text-richblack-50 px-4 py-3 rounded-xl outline-none flex w-[100%]"
//             />
//             {errors.about && <span  className="text-pink-300 text-sm ">About Is Required</span>}
//           </div>
//           <div className="flex items-center gap-6">
//             <button className="bg-richblack-900 px-4 py-2 rounded-xl" onClick={()=>cancelHandler()}>Cancel</button>
//             <button type="submit" className="bg-yellow-100 text-richblack-900 px-10 py-2 rounded-xl">Save</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
