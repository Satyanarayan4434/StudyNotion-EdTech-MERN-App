import { authEndpoints } from "../apis/authEndpoints";
import { resetPasswordEndpoints } from "../apis/resetPasswordEndpoints";
import { apiConnector } from "../apiconnector";
import toast from "react-hot-toast";
import { setLoading } from "../../slices/slice/authSlice";
import { set } from "mongoose";

const { SENDOTP_API, SIGNUP_API, LOGIN_API, CHANGEPASSWORD_API } =
  authEndpoints;
const { RESETPASSWORDTOKEN_API, RESETPASSWORD_API } = resetPasswordEndpoints;

export const sendOtp = ({ email, navigate }) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading..");
    dispatch(setLoading(true));
    try {
      const sendOtp = apiConnector("POST", SENDOTP_API, { email });
      console.log(sendOtp.data.success);

      if (!sendOtp.data.success) {
        throw new Error(sendOtp.data.message);
      }

      toast.success("OTP sent successfully");
      navigate("/verify-email");
    } catch (error) {
      console.log("Error while sending OTP", error);
      toast.error("Error while sending OTP");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
};

export const signUp = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  accountType,
  contactNumber,
  otp,
}) => {
  return (dispatch) => {
    const toastId = toast.loading("Loading..");
    dispatch(setLoading(true));
    try {
      const signUp = apiConnector("POST", SIGNUP_API, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        accountType,
        contactNumber,
        otp,
      });

      if(!signUp.data.success){
        throw new Error(signUp.data.message)
      }
      toast.success("")
    } catch (error) {}
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
};
