import React from 'react';
import { MdOutlineDeleteForever } from "react-icons/md";    

export const ProfileDelete = () => {

    const deleteHandler = () =>{
        
    }

  return (
    <div className="flex items-start gap-6 text-richblack-50 bg-pink-600 px-4 py-4 rounded-xl">
        <div className=''><MdOutlineDeleteForever size="3em"/></div>
        <div className='flex flex-col gap-2 items-start'>
            <div className='text-xl font-semibold'>Delete Account</div>
            <div>Would you like to delete account?</div>
            <div>This account contains paid courses. Deleting your account will remove all the contain associated with it.</div>
            <button className='text-pink-100 font-semibold' onClick={()=>deleteHandler()}>I want to delete my account</button>
        </div>
    </div>
  )
}
