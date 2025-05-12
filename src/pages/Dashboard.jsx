import React from 'react';
import { SideBar } from "../components/Dashboard/SideBar"
import { Outlet } from 'react-router-dom';


export const Dashboard = () => {
  return (
    <div className='w-full h-full flex relative'>
        
        <div className='w-[20%] '>
            <SideBar/>
        </div>
        <div className='w-[100%]'>
           <Outlet />
        </div>
    </div>
  )
}
