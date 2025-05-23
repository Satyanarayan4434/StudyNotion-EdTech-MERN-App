import { apiConnector } from "../apiconnector";
import { profileEndPoints } from "../apis";
import { authEndpoints } from "../apis";
import toast from "react-hot-toast";
import { setLoading } from "../../slices/slice/profileSlice";
import { logout } from "../operations/authApi";

const { DELETEACCOUNT_API } = profileEndPoints;
const { CHANGEPASSWORD_API } = authEndpoints;

// export const changeProfilePicture = ({newImageFile, userId, token}) =>{

//     return async (dispatch)=>{
//         const toastID = toast.loading("Loading..");
//         dispatch(setLoading(true))
//         try {
//         const response = await apiConnector("PUT", UPDATEPROFILE_API, {displayPicture:newImageFile, userId, token});
//         if(!response?.data?.success){
//             throw new Error(response.data.message)
//         }
//         toast.success(response?.data?.message);
//     } catch (error) {
//        toast.error(error?.response?.data?.message);
//        console.log("Error Inside Profile Pic Change Redux Thunk", error.message)
//     }
//     toast.dismiss(toastID);
//     dispatch(setLoading(false))
//     }
// }

// export const updateProfile = () =>{

// }

export const passwordChange = ({
  oldPassword,
  newPassword,
  confirmPassword,
  token,
  navigate,
}) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector(
        "PUT",
        CHANGEPASSWORD_API,
        { oldPassword, newPassword, confirmPassword, token },
        {
          Authorization: `Bearer ${token}`,
        }
      );

      if (!response?.data?.success) {
        throw new Error(response?.data?.message);
      }

      toast.success(response?.data?.message);
      navigate("/dashboard/my-profile");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
};

export const deleteProfile = ({ token, navigate }) => {
  return async (dispatch) => {
    const toastID = toast.loading("Loading..");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("DELETE", DELETEACCOUNT_API, null, {
        Authorization: `Bearer ${token}`,
      });

      if (!response?.data?.success) {
        throw new Error(response?.data?.message);
      }

      toast.success(response?.data?.message || "Account Delete succefully!");
      dispatch(logout(navigate));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error While Deleting Account->", error);
    }
    toast.dismiss(toastID);
    dispatch(setLoading(false));
  };
};
