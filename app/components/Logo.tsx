import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href='/' className="flex items-center gap-2 font-medium border-b border-slate-300 py-3 mx-3">
      <Image
        src="https://img.icons8.com/color/512/firebase.png"
        alt="logo"
        width={45}
        height={45}
      />
      <span className="text-xl whitespace-pre mx-1">Firebase</span>
    </Link>
  );
};

export default Logo;
