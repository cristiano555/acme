import React from "react";
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="container mx-auto mt-16">
      <Link href="/" className="flex items-center mb-16">
        <Image
          src="/images/brand-logo.svg"
          alt="ACME Institute Logo"
          width={57}
          height={57}
          className="mr-[1.5rem]"
        />
        <div className="mr-[1.375rem]">
          <p className="text-3xl font-poppins italic text-black font-semibold leading-[2rem]">
            <span className="text-[#8E2F3F]">A</span>CME
          </p>
          <p className="text-2xl font-poppins italic text-black leading-[1.5rem] font-300 mt-[-3px]">Institiute</p>
        </div>
        <div className="pl-[1.5rem] text-[0.938rem] font-poppins text-[#777776] leading-[1.063rem] border-l border-[#777776] hidden md:block">
          <p>FIKCYJNA</p>
          <p>INSTYTUCJA</p>
          <p>EDUKACYJNA</p>
        </div>
      </Link>
      <div className="mb-4">
        <p className="font-sans font-bold text-xs text-text leading-4">- BLOG</p>
      </div>
      <hr className="border-t border-border my-4" />
    </header>
  );
}
