import { authEndpoints } from "../apis";
import { resetPasswordEndpoints } from "../apis";
import { apiConnector } from "../apiconnector";
import toast from "react-hot-toast";
import { setLoading, setToken } from "../../slices/slice/authSlice";
import { setProfile } from "../../slices/slice/profileSlice";

const { SENDOTP_API, signUp_API, LOGIN_API, CHANGEPASSWORD_API } =
  authEndpoints;
const { RESETPASSWORDTOKEN_API, RESETPASSWORD_API } = resetPasswordEndpoints;

export const sendOtp = ({ email, navigate }) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading..");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SENDOTP_API, { email });
      console.log("Inside SEND OTP API",response?.data?.success);

      if (!response.data.success) {
        throw new Error(response?.data?.message);
      }

      toast.success(response?.data?.message);
      navigate("/verify-email");
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
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
      const response = await apiConnector("POST", signUp_API, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        accountType,
        contactNumber,
        otp,
      });

      if (!response?.data?.success) {
        throw new Error(response?.data?.message);
      }
      toast.success(response?.data?.message || "OTP sent successfully!");
      navigate("/login");
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
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
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      });

      if (!response?.data?.success) {
        throw new Error(response?.data?.message);
      }
      toast.success(response?.data?.message);
      dispatch(setToken(response.data.token));

      const userImage = response?.data?.user?.image
        ? response.data.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`;

      const userPayload = { ...response.data.user, image: userImage };
      dispatch(setProfile(userPayload));

      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user", JSON.stringify(userPayload));

      navigate("/");
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
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
      const response = await apiConnector("POST", CHANGEPASSWORD_API, {
        oldPassword,
        newPassword,
        confirmPassword,
      });
      if (!response?.data?.success) {
        throw new Error(response?.data?.message);
      }
      toast.success(response?.data?.message);
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
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
      const response = await apiConnector(
        "POST",
        RESETPASSWORDTOKEN_API,
        { email }
      );
      if (!response?.data?.success) {
        throw new Error(response?.data?.message);
      }
      toast.success(response?.data?.message);
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
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
    console.log("Token received inside redux thunk ->", token)
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      });
      if (!response?.data?.success) {
        throw new Error(response?.data?.message || "Failed to reset password");
      }
      toast.success(response?.data?.message);
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
