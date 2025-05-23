const BASE_URL = process.env.REACT_APP_BASE_URL;

//****************************************************************** */
//                             Auth API's                            */
//****************************************************************** */
export const authEndpoints ={
    SENDOTP_API: BASE_URL + "/auth/sendOtp",
    signUp_API: BASE_URL +"/auth/signUp",
    LOGIN_API: BASE_URL +"/auth/login",
    CHANGEPASSWORD_API: BASE_URL +"/auth/changePassword",
}

//****************************************************************** */
//                             Reset Password API's                  */
//****************************************************************** */
export const resetPasswordEndpoints = {
    RESETPASSWORDTOKEN_API: BASE_URL +"/auth/resetpasswordtoken",
    RESETPASSWORD_API: BASE_URL +"/auth/resetpassword"
}

//****************************************************************** */
//                             Reset Password API's                  */
//****************************************************************** */
export const profileEndPoints = {
    UPDATEPROFILE_API: BASE_URL + "/profile/updateprofile",
    DELETEACCOUNT_API: BASE_URL + "/profile/deleteaccount",
    GETALLUSERDETAILS: BASE_URL + "/profile/getUserdetails",
    UPDATEDISPLAYPICTURE: BASE_URL +"/profile/updatedisplayPicture",
    GETENROLLEDCOURSES: BASE_URL +"/profile/getenrolledcourses"
}

//****************************************************************** */
//                             Payment API's                         */
//****************************************************************** */
export const paymentEndpoints = {
    CAPTUREPAYMENT_API: BASE_URL + "/payment/caturepayment",
    VERIFYSIGNATURE_API: BASE_URL + "/payment/verifysignature"
}

//****************************************************************** */
//                             course API's                          */
//****************************************************************** */
export const courseEndpoints = {
    CREATECOURSE_API: BASE_URL + "/course/createCourse",
    GETALLCOURSE_API: BASE_URL + "/course/getAllCourse",
    GETCOURSEDETAILS_API: BASE_URL + "/course/getCourseDetails",
}

//****************************************************************** */
//                             category API's                        */
//****************************************************************** */
export const categoryEndpoints = {
    CREATECATEGORY_API: BASE_URL + "/course/createCategory",
    SHOWALLCATEGORIES_API: BASE_URL + "/course/showAllCategories",
    CATEGORYPAGEDETAILS_API: BASE_URL + "/course/getCategoryPageDetails"
}

//****************************************************************** */
//                             Rating API's                          */
//****************************************************************** */
export const ratingEndpoints = {
    CREATERATING_API: BASE_URL + "/course/createRating",
    GETAVERAGERATING_API: BASE_URL + "/course/getAverageRating",
    GETALLRATING_API: BASE_URL + "/course/getAllReviews"
}

//****************************************************************** */
//                             Section API's                         */
//****************************************************************** */
export const sectionEndpoints = {
    CREATESECTION_API: BASE_URL +"/course/addSection",
    UPDATESECTION_API: BASE_URL +"/course/updateSection",
    DELETESECTION_API: BASE_URL +"/course/deleteSection",
}

//****************************************************************** */
//                             Sub-Section API's                     */
//****************************************************************** */
export const subSection = {
    CREATESUBSECTION_API: BASE_URL +"/course/addSubSection",
    UPDATESUBSECTION_API: BASE_URL +"/course/updateSubSection",
    DELETESUBSECTION_API: BASE_URL +"/course/deleteSubSection",
}

