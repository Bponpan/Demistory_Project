
"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import pictu from '../pictu.png';
import Link  from "next/link";
import balls from '../balls.png';


function Navbar() {
    return(
        <nav>
      <div className="bg-[#70C174] bg-cover p-8 ">
        <div className="text-white text-5xl xl:font-serif font-bold">
        <Link href="/">DEMISTORY SYSTEM</Link>
        </div>
      </div>

      <div className="bg-green-200 flex grid-cols-2 gap-4 place-items-stretch px-10">
        <div className="flex justify-between gap-px px-8">
          <Image src={pictu} alt="" width="85" ></Image>
        </div>

        <div className="px-10 ">
          <div className="text-green-50 text-base font-semibold my-10 ">
            <Link href="/report_repair">Report repair</Link>
            </div>
        </div>

        <div className="px-10 bg-[#FFFFFF]">
          <div className="text-green-400 text-base font-semibold relative my-10">
          <Link href="/report_list">Report List</Link>
          </div>
        </div>

        <div className="px-8 flex ml-auto items-center">
          <div className="px-5 flex justify-end ">
            <div className="relative my-8 ">
            <Image src={balls} alt="" width="30"></Image>
            </div>
          </div>

          <div className="px-5 flex justify-end ">
            <div className="text-[#525560] font-semibold relative my-8">
            <div className="text-right text-sm">WORAMET Y</div>
            <div className="text-right text-sm">User</div>
            </div>
          </div>

          <div className="flex justify-self-center ">
            <div className="w-14 h-14 bg-[#525560] rounded-[10px] my-6 ">
            </div>
          </div>
        </div>
        
      </div>
      </nav>
    )
}

export default function replist() {

    return (
        <div>
            <Navbar></Navbar>
            <div>
      <div className="flex justify-center items-center mt-10 ">
        <div className="text-black text-base font-semibold"style={{ marginRight: "420px" }}>Detail</div>
        <div className="text-black text-base font-semibold"style={{ marginRight: "-50px" }}>Date</div>
        <div className="text-black text-base font-semibold"style={{ marginLeft: "500px" }}>Room Number: 8503</div>
      </div>
      <div className="bg-zinc-600 bg-opacity-80 self-stretch min-h-[1px] w-full mt-5" />
      <div>
        <div className="flex justify-center items-center mt-5">
        <div className="text-gray-600 text-sm font-semibold"style={{ marginRight: "400px" }}>พัดลมพัง</div>
        <div className="text-gray-600 text-sm font-semibold ">21/12/2022</div>
        <div className="text-white text-base font-medium whitespace-nowrap items-stretch rounded backdrop-blur-2xl bg-red-600 self-stretch px-3 py-2"style={{ marginLeft: "500px" }}>
      Cancel
      </div>
      </div>
    </div>
    <div>
        <div className="flex justify-center items-center mt-5 ">
        <div className="text-gray-600 text-sm font-semibold"style={{ marginRight: "400px" }}>พัดลมพัง</div>
        <div className="text-gray-600 text-sm font-semibold ">21/12/2022</div>
        <div className="text-white text-base font-medium whitespace-nowrap items-stretch rounded backdrop-blur-2xl bg-red-600 self-stretch px-3 py-2"style={{ marginLeft: "500px" }}>
      Cancel
      </div>
      </div>
    </div>

    </div>
        </div>
    );
}
