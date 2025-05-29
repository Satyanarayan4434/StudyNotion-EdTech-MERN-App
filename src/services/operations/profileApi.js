import { apiConnector } from "../apiconnector";
import { profileEndPoints } from "../apis";
import { authEndpoints } from "../apis";
import toast from "react-hot-toast";
import { setLoading } from "../../slices/slice/profileSlice";
import { logout } from "../operations/authApi";
import { setProfile } from "../../slices/slice/profileSlice";

const {UPDATEDISPLAYPICTURE, UPDATEPROFILE_API, DELETEACCOUNT_API } = profileEndPoints;
const { CHANGEPASSWORD_API } = authEndpoints;

export const changeProfilePicture = ({ newImageFile, userId, token }) => {
    return async (dispatch) => {
        const toastID = toast.loading("Uploading..."); 
        dispatch(setLoading(true));
        try {
            const formData = new FormData();
            formData.append("displayPicture", newImageFile);
            formData.append("userId", userId); 

            console.log("Token being sent to API:", token); 
            console.log("User ID being sent in FormData:", userId);
            console.log("File being sent:", newImageFile.name);

            const response = await apiConnector(
                "PUT",
                UPDATEDISPLAYPICTURE,
                formData,
                {
                    Authorization: `Bearer ${token}`,
                }
            );

            if (!response?.data?.success) {
                throw new Error(response.data.message || "Could not update profile picture.");
            }
            toast.success(response?.data?.message || "Profile picture updated successfully!");
            setProfile(response.data.data); 


        } catch (error) {
            const errorMessage = error?.response?.data?.message || error.message || "An unknown error occurred during upload.";
            toast.error(errorMessage);
            console.error("Error Inside Profile Pic Change Redux Thunk:", error); // Log the full error
        }
        toast.dismiss(toastID);
        dispatch(setLoading(false));
    };
};

export const updateProfile = ({firstName, lastName, dateOfBirth, gender, contactNumber, about, token, navigate }) =>{
  return async (dispatch) =>{
    const toastID = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("PUT", UPDATEPROFILE_API,{firstName, lastName, dateOfBirth, gender, contactNumber, about }, {
          Authorization: `Bearer ${token}`,
        });
        if(!response?.data?.success){
          throw new Error(response?.data?.message)
        }
        console.log("Printing Response->",response)
        toast.success(response?.data?.message || "Profile Updated Successfully!");
        dispatch(setProfile(response?.data?.data));
        localStorage.setItem("user", JSON.stringify(response.data.data));
        navigate("/dashboard/my-profile")
    } catch (error) {
      toast.error(error?.response?.message);
      console.log("Error while updating Profile info", error)
    }
    toast.dismiss(toastID);
    dispatch(setLoading(false));
  }
}


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
