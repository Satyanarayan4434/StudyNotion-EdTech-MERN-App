import React from 'react'
// import {ProfilePictureChange} from "./ProfilePictureChange";
// import {ProfileInfoChange} from "./ProfileInfoChange";
// import {PasswordChange} from "./PasswordChange";
import {ProfileDelete} from "./ProfileDelete";

export const Settings = () => {
  return (
    <div className='bg-richblack-900  px-4 pt-4 pb-[10rem] flex flex-col gap-6'>
        {/* <ProfilePictureChange/> */}
        {/* <ProfileInfoChange/> */}
        {/* <PasswordChange/> */}
        <ProfileDelete/>
    </div>
  )
}
