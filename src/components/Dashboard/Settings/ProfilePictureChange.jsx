import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { changeProfilePicture } from '../../../services/operations/profileApi';




  export const ProfilePictureChange = () => {
    const [imageFile, setImageFile] = useState(null); 
    const [previewSource, setPreviewSource] = useState(null);

    const { user, loading } = useSelector((state) => state.profile);
    const { token } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (user?.image && !previewSource) { 
            setImageFile(null);
            setPreviewSource(null)
        }
    }, [user?.image, previewSource]);


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file); 
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setPreviewSource(reader.result);
            };
        } else {
            setImageFile(null);
            setPreviewSource(null);
        }
    };

    const handleSelectImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileUpload = () => {
        if (!imageFile) {
            toast.error("Please select an image first.");
            return;
        }
        if (!user?._id || !token) {
            toast.error("User information is missing. Cannot upload.");
            console.error("User ID or Token is missing:", { userId: user?._id, token });
            return;
        }

        dispatch(changeProfilePicture({ newImageFile: imageFile, userId: user._id, token }))
            .then(() => {

                setImageFile(null);
                setPreviewSource(null);
            })
            .catch((error) => {
                console.error("Error dispatching profile picture change:", error);
                toast.error("Could not start upload process.");
            });
    };

    const handleRemoveImage = () => {
        setImageFile(null);
        setPreviewSource(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = ""; 
        }
    };

    const displayImageSrc = previewSource || user?.image || 'https://placehold.co/96x96/2D3748/718096?text=User';


    return (
        <div className="flex flex-col sm:flex-row items-center gap-x-6 gap-y-4 text-richblack-5 bg-richblack-800 px-4 py-4 rounded-xl">
            <div>
                <img
                    className="w-24 h-24 rounded-full object-cover" 
                    src={displayImageSrc}
                    alt={`Profile-${user?.firstName || 'User'}${user?.lastName || ''}`}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://placehold.co/96x96/2D3748/718096?text=Error'; 
                    }}
                />
            </div>
            <div className="flex flex-col gap-3 w-full sm:w-auto">
                <div className="text-lg sm:text-xl font-semibold">Change Profile Picture</div>
                <div className="flex flex-col sm:flex-row gap-3">
                    {/* Hidden file input */}
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept="image/png, image/jpeg, image/gif" // Be more specific with accept types
                    />

                    {/* Buttons */}
                    {!previewSource ? (
                        <button
                            onClick={handleSelectImageClick}
                            disabled={loading}
                            className="bg-yellow-100 text-richblack-800 rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 disabled:opacity-50 transition-colors duration-150"
                        >
                            Select Image
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={handleFileUpload}
                                disabled={loading}
                                className="bg-yellow-50 text-richblack-900 rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-200 disabled:opacity-50 transition-colors duration-150 flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-richblack-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Uploading...
                                    </>
                                ) : (
                                    "Upload Image"
                                )}
                            </button>
                            <button
                                onClick={handleRemoveImage}
                                disabled={loading}
                                className="bg-richblack-700 hover:bg-richblack-600 text-richblack-50 rounded-lg px-5 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-richblack-500 disabled:opacity-50 transition-colors duration-150"
                            >
                                Remove
                            </button>
                        </>
                    )}
                </div>
                 {previewSource && imageFile && (
                     <p className="text-xs text-richblack-300 mt-2">
                        Selected: {imageFile.name} ({(imageFile.size / 1024).toFixed(1)} KB)
                     </p>
                 )}
            </div>
        </div>
    );
};
