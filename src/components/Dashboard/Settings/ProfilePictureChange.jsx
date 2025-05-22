    import { useState } from "react";
    import {  useSelector } from "react-redux"



    export const ProfilePictureChange = () => {
        const {user} = useSelector((state)=>state.profile);
        const [newImageFile, setNewImageFile] = useState("");

        const localImageHandler = (newImageFile) => {
            setNewImageFile(newImageFile);
        }
            
    return (
        <div className="flex items-center gap-6 text-richblack-50 bg-richblack-800 px-4 py-4 rounded-xl">
            <div>
                <img  className="w-[6rem] h-[6rem] rounded-full" src={newImageFile ? URL.createObjectURL(newImageFile) : user?.image} alt={`Profile-${user.firstName}${user.lastName}`} />
            </div>
            <div className="flex flex-col gap-3">
                <div className="text-xl font-semibold">Change Profile Picture</div>
                <div className="flex gap-3">
                    <form >
                        <input onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        localImageHandler(e.target.files[0]);
                                    }
                                }} type="file" accept="image/*" className="hidden"/>
                        <button  className="bg-yellow-100 text-richblack-800 rounded-xl px-4 py-2">Change</button>
                    </form>
                    <button className="bg-richblack-500 rounded-xl px-4 py-2">Remove</button>
                </div>
            </div>
        </div>
    )
    }
