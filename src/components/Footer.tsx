import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-blue-500 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">Pop Recording System</Link>
      <p className="text-sm md:text-base">© ALL RIGHTS RESERVED.</p>
      <Link href="/contact" className="font-bold md:text-lg">Contact</Link>
    </div>
  );
};

export default Footer;
