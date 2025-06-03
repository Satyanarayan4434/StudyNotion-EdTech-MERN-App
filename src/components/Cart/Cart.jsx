import React from 'react'
import { useSelector } from 'react-redux';
import { RenderCartCourses } from './RenderCartCourses';
import { RenderTotalAmount } from './RenderTotalAmount';

export const Cart = () => {
  const {totalItems} = useSelector((state) => state.cart)
  return (
    <div className='bg-richblack-900 text-richblack-50 h-screen'>
      <div>My Cart</div>
      <div>Total {totalItems} Courses in the Cart</div>
      <div>
        <RenderCartCourses />
        <RenderTotalAmount />
      </div>
    </div>
  )
}
