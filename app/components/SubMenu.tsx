'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
interface SubMenuProps {
  data: any;
}
const SubMenu: React.FC<SubMenuProps> = ({ data }) => {
  const pathname = usePathname()
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  return (
    <>
      <li className={`link ${pathname.includes(data.name) && 'text-blue-600'}`} onClick={()=>setSubMenuOpen(!subMenuOpen)}>
        <data.icon size={23} className="min-w-max" />
        <p className="capitalize">{data.name}</p>
        <IoIosArrowDown className={`${subMenuOpen && 'rotate-180'} duration-200`} />
      </li>
      <motion.ul
      animate={
        subMenuOpen ? {
          height: 'fit-content',
        } : {
          height: 0,
        }
      } className="flex flex-col pl-14 text-[0.8rem] font-normal overflow-hidden h-0">
        {data.menus.map((menu: any) => (
          <li key={menu}>
            <Link
              href={`/${data.name}/${menu}`}
              className="link !bg-transparent capitalize hover:active"
            >
              {menu}
            </Link>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;
