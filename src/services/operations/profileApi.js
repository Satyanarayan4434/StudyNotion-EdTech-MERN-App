import { apiConnector } from "../apiconnector";
import { profileEndPoints } from "../apis";
import toast from "react-hot-toast";
import {setLoading} from "../../slices/slice/profileSlice"

const {UPDATEDISPLAYPICTURE} = profileEndPoints;

export const changeProfilePicture = ({newImageFile, userId, token}) =>{
    
    return async (dispatch)=>{
        const toastID = toast.loading("Loading..");
        dispatch(setLoading(true))  
        try {
        const response = await apiConnector("PUT", UPDATEDISPLAYPICTURE, {displayPicture:newImageFile, userId, token});
        if(!response?.data?.success){
            throw new Error(response.data.message)
        }
        toast.success(response?.data?.message);
    } catch (error) {
       toast.error(error?.response?.data?.message);
       console.log("Error Inside Profile Pic Change Redux Thunk", error.message)
    }
    toast.dismiss(toastID);
    dispatch(setLoading(false))
    }
}

export const updateProfile = () =>{
    
}