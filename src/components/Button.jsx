import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({children, ToLink, active}) {
  return (
    <div>
        <Link to={ToLink} className={active===true?("bg-yellow-50 rounded-md px-[24px] py-[12px] flex gap-2 items-center"):("bg-richblack-800 border-[1px] border-richblack-200 text-richblack-200 rounded-md px-[24px] py-[12px]")} >{children}</Link>
    </div>
  )
}
