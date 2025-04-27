import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TiSocialYoutube } from "react-icons/ti";
import LogoFooter from "../../assets/Logo/Logo-Full-Light.png";
import { FooterLink2 } from "../../data/footer-links";

export default function Footer() {
  return (
    <div className="border-t-[1px] border-richblack-50  bg-richblack-800  px-[72px] flex flex-col gap-[3rem]">
    {/* Upper section */}
      <div className="text-richblack-50 flex text-sm pt-[70px]  items-start justify-between ">
        {/* Company */}
        <div className="flex flex-col gap-2">
          <img src={LogoFooter} alt="Footer_Logo" />
          <div className="text-base font-semibold">Company</div>
          <div>About</div>
          <div>Careers</div>
          <div>Afiliates</div>
          <div className="flex gap-2 items-center">
            <FaFacebook />
            <FaGoogle />
            <BsTwitterX />
            <TiSocialYoutube />
          </div>
        </div>

        {/* Resourse and Support */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <div  className="text-base font-semibold">{FooterLink2[3].title}</div>
            {FooterLink2[3].links.map((link, index) => {
              return (
                <a key={index} href={link.link}>
                  {link.title}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col gap-2">
            <div  className="text-base font-semibold">{FooterLink2[4].title}</div>
            {FooterLink2[4].links.map((link, index) => {
              return (
                <a key={index} href={link.link}>
                  {link.title}
                </a>
              );
            })}
          </div>
        </div>

        {/* Plans and Community */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <div  className="text-base font-semibold">{FooterLink2[5].title}</div>
            {FooterLink2[5].links.map((link, index) => {
              return (
                <a key={index} href={link.link}>
                  {link.title}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col gap-2">
            <div  className="text-base font-semibold">{FooterLink2[6].title}</div>
            {FooterLink2[6].links.map((link, index) => {
              return (
                <a key={index} href={link.link}>
                  {link.title}
                </a>
              );
            })}
          </div>
        </div>

        <hr className="bg-richblack-300 w-[1px] h-[538px] " />

        {/* Subject */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <div  className="text-base font-semibold">{FooterLink2[0].title}</div>
            {FooterLink2[0].links.map((link, index) => {
              return (
                <a key={index} href={link.link}>
                  {link.title}
                </a>
              );
            })}
          </div>
        </div>

        {/* Languages */}
        <div>
        <div className="flex flex-col gap-2">
            <div  className="text-base font-semibold">{FooterLink2[1].title}</div>
            {FooterLink2[1].links.map((link, index) => {
              return (
                <a key={index} href={link.link}>
                  {link.title}
                </a>
              );
            })}
          </div>
        </div>

        {/* Career Building */}
        <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
            <div  className="text-base font-semibold">{FooterLink2[3].title}</div>
            {FooterLink2[3].links.map((link, index) => {
              return (
                <a key={index} href={link.link}>
                  {link.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <hr className=" bg-richblack-300 h-[2px]"/>
      <div className="flex items-center justify-between text-sm text-richblack-50 pb-11">
        <div  className="flex gap-3">
            <div>Privacy Policy</div>
            <div>Cookie Policy</div>
            <div>Terms</div>
        </div>
        <div>Made with <span className="text-pink-400">♥</span> Satyanarayan Sen © 2025 Studynotion</div>
      </div>
    </div>
  );
}
