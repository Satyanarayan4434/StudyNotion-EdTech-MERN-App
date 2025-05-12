import React from 'react';
import { Link, useLocation, matchPath   } from 'react-router-dom';
import * as Icons from "react-icons/vsc";


export const SiderLinks = ({name, path, icon}) => {
    const Icon  = Icons[icon];
    const location = useLocation();
    const isActive = matchPath(
        { path: path, end: path === "/" ? true : false }, 
        location.pathname             
    );

  return (
    <div className='flex flex-col gap-3'>
        
       <Link to={path} className={`pl-4 flex items-center gap-2 ${isActive?"bg-yellow-100 text-richblack-800":"bg-transparent text-richblack-50"}`}>
            {<Icon/>}{name}
       </Link>
    </div>
  )
}
