import React from 'react';
import { Link, useLocation, matchPath   } from 'react-router-dom';
import * as Icons from "react-icons/vsc";


export const SiderLinks = ({name, path, type, icon}) => {
    const Icon  = Icons[icon];
    const location = useLocation();
    const isActive = matchPath(
        { path: path, end: path === "/" ? true : false }, // Pattern to match
        location.pathname             // Current URL pathname
    );

  return (
    <div>
        
       <Link to={path} className={`flex items-center gap-2 ${isActive?"bg-yellow-100 text-richblack-800":"bg-transparent"}`}>
            {<Icon/>}{name}
       </Link>
    </div>
  )
}
