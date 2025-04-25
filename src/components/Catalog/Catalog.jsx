import React from 'react';
import Button from '../Button';
import { FaArrowRight } from "react-icons/fa6";

export default function Catalog() {
  return (
    <div className="homepage_img bg-white h-[320px] w-full flex items-center justify-center gap-10">
        <Button ToLink="/" active={true}>Explore Full Catalog <FaArrowRight /></Button>
        <Button ToLink="/" active={false}>Learn More</Button>
    </div>
  )
}
