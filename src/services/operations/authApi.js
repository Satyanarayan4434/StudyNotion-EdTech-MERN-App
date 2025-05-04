import { authEndpoints } from "../apis";
import { resetPasswordEndpoints } from "../apis";
import { apiConnector } from "../apiconnector";
import toast from "react-hot-toast";
import { setLoading, setToken } from "../../slices/slice/authSlice";
import { setProfile } from "../../slices/slice/profileSlice";

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
  navigate,
}) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading..");
    dispatch(setLoading(true));
    try {
      const signUp = await apiConnector("POST", SIGNUP_API, {
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
      navigate("/login");
    } catch (error) {
      console.log(error.message);
      toast.error("Error while Registration");
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
};

export const login = ({ email, password, navigate }) => {
  return async (dispatch) => {
    const toastID = toast.loading("Loading..");
    dispatch(setLoading(true));
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

      const userImage = loginResponse.data?.user?.image
        ? loginResponse.data.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${loginResponse.data.user.firstName} ${loginResponse.data.user.lastName}`;

      const userPayload = { ...loginResponse.data.user, image: userImage };
      dispatch(setProfile(userPayload));

      localStorage.setItem("token", JSON.stringify(loginResponse.data.token));
      localStorage.setItem("user", JSON.stringify(userPayload));

      navigate("/");
    } catch (error) {
      console.log("Error While connecting with Login API");
      toast.error("Error While Login");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastID);
  };
};

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setProfile(null));

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logged Out");
    navigate("/");
  };
}

export const changePassword = ({
  oldPassword,
  newPassword,
  confirmPassword,
}) => {
  //Page is not created to call this function yet
  return async (dispatch) => {
    const toastId = toast.loading("Loading..");
    dispatch(setLoading(true));
    try {
      const changePassword = await apiConnector("POST", CHANGEPASSWORD_API, {
        oldPassword,
        newPassword,
        confirmPassword,
      });
      if (!changePassword.data.success) {
        throw new Error(changePassword.data.message);
      }
      toast.success("Password Changed Successfully");
    } catch (error) {
      console.log("Error While Changing Password ->", error);
      toast.error("Error While Changing Password");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
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
      toast.success("Check Email for reset link");
    } catch (error) {
      console.log("Error while sending Reset Password Token");
      toast.error("Error while sending Reset Password Token");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
};

export const resetPassword = ({
  password,
  confirmPassword,
  token,
  navigate,
}) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      });
      if (!resetPassword?.data?.success) {
        throw new Error(response?.data?.message || "Failed to reset password");
      }
      toast.success("Password Reset Successfully");
      navigate("/login");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "An error occurred. Please try again.";
      toast.error(errorMessage);
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
};
