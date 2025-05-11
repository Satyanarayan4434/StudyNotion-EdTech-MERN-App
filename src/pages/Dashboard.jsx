import React from 'react';
import { SideBar } from "../components/Dashboard/SideBar"

export const Dashboard = () => {
  return (
    <div className='w-full h-full'>
        <div className='w-[20%]'>
            <SideBar/>
        </div>
        <div className='w-[80%]'>

        </div>
    </div>
  )
}
