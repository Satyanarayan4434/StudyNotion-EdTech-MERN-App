import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../services/operations/authApi';


export const UpdatePassword = () => {
const [data, setData] = useState({
    password:"",
    confirmPassword:""
})
const dispatch = useDispatch();
const navigate = useNavigate();
const [watchPassword, setWatchPassword] = useState(false)
const { token } = useParams();
console.log("Token Passed from frontend ->",token)
const {password, confirmPassword} = data



const handleChange = (event) =>{
    const {name, value} = event.target;
    setData((prevData)=>({
        ...prevData, [name]:value
    }));
    
}

if(!token){
    toast.error("token is Invalid");
    return
}

const handleSubmit = (event) =>{
    event.preventDefault();
    if(!password || !confirmPassword){
        toast.error("Fill all the details correctly!");
        return;
    }

    if (password !== confirmPassword) {
        setWatchPassword(true);
        toast.error("Passwords do not match.");
        return;
    }
    dispatch(resetPassword({password, confirmPassword, token, navigate}))
}


  return (
    <div>
        <div>
            <div>Choose  new password</div>
            <div>Almost done. Enter your new password and youre all set.</div>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="password">New Password: <span>*</span></label>
                    <input type="password" name='password' value={data.password} id='password' className='' onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm New Password: <span>*</span></label>
                    <input type="password" name='confirmPassword' value={data.confirmPassword} id='confirmPassword' className='' onChange={handleChange}/>
                    <div className={`${watchPassword === true?`flex`:`hidden`}`}>*Confirm password is not matched with password</div>
                </div>
                <button type="submit">Reset Password</button>
            </form>
        </div>
        <Link to="/login">Back to Login</Link>
    </div>
  )
}
