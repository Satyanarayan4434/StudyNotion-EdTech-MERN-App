import React from "react";
import { useForm } from "react-hook-form";
import countryCode from "../../data/countrycode.json";

export const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      countryCode: "+91",
      number: "",
    },
  });

  const subMitHandler = (data) => {
    const finalNumber = `${data.countryCode}${data.number}`;
    console.log(data, finalNumber);
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-20">
      <div className="flex flex-col items-center justify-center">
        <div className="text-[36px]">Get in Touch</div>
        <div>We’d love to here for you, Please fill out this form.</div>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(subMitHandler)}
          className="flex flex-col gap-3"
        >
          <div className="flex w-full justify-between">
            <div className="flex flex-col items-start">
              <label htmlFor="firstName">First Name :</label>
              <input
                className="bg-richblack-800 text-richblack-50 p-2 rounded-xl outline-none"
                type="text"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && <span>REQUIRED*</span>}
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="lastName">Last Name :</label>
              <input
                className="bg-richblack-800 text-richblack-50 p-2 rounded-xl outline-none"
                type="text"
                {...register("lastName", { required: true })}
              />
            </div>
            {errors.lastName && <span>REQUIRED*</span>}
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="email">Email :</label>
            <input
              className="bg-richblack-800 text-richblack-50 p-2 rounded-xl outline-none flex w-full"
              type="text"
              {...register("email", { required: "Email is required" })}
              
            />
            {errors.email && <span>{errors.emai.message}</span>}
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col items-start w-[40%]">
              <label htmlFor="coutryCode">Country Code :</label>
              <select
                className="bg-richblack-800 text-richblack-50 p-2  rounded-xl outline-none w-[70%]"
                {...register("countryCode")}
              >
                {countryCode.map((code, index) => {
                  return (
                    <option id="countryCode" key={index}>
                      {code.code}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col w-full ">
              <label htmlFor="number">Phone Number :</label>
              <input
                className="bg-richblack-800 text-richblack-50 p-2 rounded-xl outline-none"
                type="tel"
                {...register("number", {
                  required: "Phone number is required.",
                  minLength: {
                    value: 7, // Example: Minimum 7 digits
                    message: "Phone number is too short.",
                  },
                  maxLength: {
                    value: 15, // Example: Maximum 15 digits
                    message: "Phone number is too long.",
                  },
                  pattern: {
                    value: /^[0-9]+$/, // Ensures only digits are entered
                    message: "Please enter a valid phone number (digits only).",
                  },
                })}
              />
              {errors.number && <span>{errors.number.message}</span>}
            </div>
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="message">Message :</label>
            <textarea
            className="bg-richblack-800 text-richblack-50 p-2 rounded-xl outline-none flex w-full"
              {...register("message")}
            ></textarea>
          </div>
          <button className="bg-yellow-100 text-richblack-900 py-2 rounded-xl" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
