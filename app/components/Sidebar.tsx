"use client";
import React, { useEffect, useState } from "react";
import { delay, motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { SlSettings } from "react-icons/sl";
import SubMenu from "./SubMenu";
import { RiBuilding3Fill } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";

const Sidebar = () => {
  const currentPath = usePathname();
  const pathname = usePathname()
  let isTab = useMediaQuery({ query: "(max-width: 768px)" });

  const [isOpen, setisOpen] = useState(isTab ? false : true);

  const subMenuList = [
    {
      name: "build",
      icon: RiBuilding3Fill,
      menus: ["auth", "settings", "storage", "hosting"],
    },
    {
      name: "analytics",
      icon: TbReportAnalytics,
      menus: ["dashboard", "realtime", "events"],
    },
  ];
  const Sidebar_animation = isTab
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: "4rem",
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };
      useEffect(() => {
        if(isTab){
          setisOpen(false)
        } else{
          setisOpen(true)
        }
      }, [isTab])
      useEffect(() =>{
        isTab && setisOpen(false)
      }, [isTab, pathname])
  return (
    <div>
      <div onClick={() => setisOpen(false)} className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${isOpen ? 'block' : 'hidden'}`}></div>
      <motion.div
        variants={Sidebar_animation}
        initial={{x: isTab ? -250 : 0}}
        animate={isOpen ? "open" : "closed"}
        className="bg-white text-gray shadow-xl z-[999] w-64 max-w-64 h-screen overflow-hidden md:relative fixed "
      >
        {/* Logo */}
        <Logo />

        {/* menu */}
        {/* <MenuItems /> */}
        <div className="flex flex-col h-full">
          {/* first */}
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 h-[70%] md:h-[68%]">
            <li className="">
              <Link
                href="/"
                className={`${currentPath === "/" ? "active" : ""} link`}
              >
                <AiOutlineAppstore size={23} className="min-w-max" />
                All Apps
              </Link>
            </li>
            <li className="">
              <Link
                href="/authentication"
                className={`${
                  currentPath === "/authentication" ? "active" : ""
                } link`}
              >
                <BsPerson size={23} className="min-w-max" />
                Authentication
              </Link>
            </li>
            <li className="">
              <Link
                href="/storage"
                className={`${currentPath === "/storage" ? "active" : ""} link`}
              >
                <HiOutlineDatabase size={23} className="min-w-max" />
                Storage
              </Link>
            </li>
            {isOpen && (
              <div className="border-y py-5 border-slate-300 ">
                <small className="pl-3 text-slate-500 inline-block mb-2 capitalize">
                  Product categories
                </small>
                {subMenuList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
            <li className="">
              <Link
                href="/settings"
                className={`${
                  currentPath === "/settings" ? "active" : ""
                } link`}
              >
                <SlSettings size={23} className="min-w-max" />
                Settings
              </Link>
            </li>
          </ul>
          {/* second */}
          {(isOpen || isTab) && (
            <div className="flex-1 text-sm z-50 max-h-48 my-auto whitespace-pre w-full font-medium">
              <div className="flex items-center justify-between border-y border-s-lime-300 p-4">
                <div className="">
                  <p className="">Spark</p>
                  <small>No-cost $0/month</small>
                </div>
                <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                  Upgrade
                </p>
              </div>
            </div>
          )}
        </div>
        {/* Control Button */}
        <motion.div
          animate={
            isOpen
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{
            duration: 0,
          }}
          onClick={() => setisOpen(!isOpen)}
          className="absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer md:block hidden"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-4 md:hidden" onClick={() => setisOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
