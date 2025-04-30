import { authEndpoints } from "../apis";
import { resetPasswordEndpoints } from "../apis";
import { apiConnector } from "../apiconnector";
import toast from "react-hot-toast";
import { setLoading, setToken } from "../../slices/slice/authSlice";

const { SENDOTP_API, SIGNUP_API, LOGIN_API, CHANGEPASSWORD_API } =
  authEndpoints;
const { RESETPASSWORDTOKEN_API, RESETPASSWORD_API } = resetPasswordEndpoints;

export const sendOtp = ({ email, navigate }) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading..");
    dispatch(setLoading(true));
    try {
      const sendOtp = await apiConnector("POST", SENDOTP_API, { email });
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
  return async (dispatch) => {
    const toastId = await toast.loading("Loading..");
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

      if (!signUp.data.success) {
        throw new Error(signUp.data.message);
      }
      toast.success("Registration Successfull");
    } catch (error) {
      toast.error("Error while Registration ->", error);
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
};

export const login = ({  email, password, navigate }) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const toastID = toast.loading("Loading..");
    try {
      const loginResponse = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      });

      if (!loginResponse.data.success) {
        throw new Error(loginResponse.data.message);
      }
      toast.success("Login Success");
      dispatch(setToken(loginResponse.data.token));
      navigate("/")
    } catch (error) {
      console.log("Error While connecting with Login API");
      toast.error("Error While Login");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastID);
  };
};

export const changePassword = ({ oldPassword, newPassword, confirmPassword}) => {
  //Page is not created to call this function yet
return async(dispatch) =>{
  const toastId = toast.loading("Loading..");
  dispatch(setLoading(true));
  try {
    const changePassword = await apiConnector("POST", CHANGEPASSWORD_API, {oldPassword, newPassword, confirmPassword});
    if(!changePassword.data.success){
      throw new Error(changePassword.data.message);
    }
    toast.success("Password Changed Successfully");

  } catch (error) {
    console.log("Error While Changing Password ->", error);
    toast.error("Error While Changing Password")
  }
  dispatch(setLoading(false))
  toast.dismiss(toastId)
}
};

export const sendResetPasswordToken = ({ email }) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading..");
    dispatch(setLoading(true));
    try {
      const sendResetPasswordToken = await apiConnector(
        "POST",
        RESETPASSWORDTOKEN_API,
        { email }
      );
      if (!sendResetPasswordToken.data.success) {
        throw new Error(sendResetPasswordToken.data.message);
      }
      toast.success("Check Email for reset link")
    } catch (error) {
      console.log("Error while sending Reset Password Token")
      toast.error("Error while sending Reset Password Token")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  };
};

export const resetPassword = ({password, confirmPassword, navigate}) =>{
   return async(dispatch) =>{
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true))
    try {
      const resetPassword = await apiConnector("POST", RESETPASSWORD_API, {password, confirmPassword});
      if(!resetPassword.data.success){
        throw new Error(resetPassword.data.message);
      }
      toast.success("Password Reset Successfully");
      navigate("/login");
    } catch (error) {
      console.log("Error While Reseting Password ->", error);
      toast.error("Error While Reseting Password")
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));

  }
}
