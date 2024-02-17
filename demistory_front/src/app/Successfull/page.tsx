import React from "react";
import dd from '../212.png';
import Image from "next/image";
import Link from "next/link";

export default function (){

  return (
    <div style={{ position: 'relative' }}>
      <div className="absolute inset-0 backdrop-blur-[2px]" style={{ backgroundImage: `url(${dd})` }}></div>
      <Image src={dd} alt={""} />
      <button className="absolute top-[380px] left-0 flex items-center justify-center bg-[#EBF0F9] rounded-3xl h-[200px] w-[300px] ml-[-90px]" style={{marginLeft: "780px"}}>
      <button style={{ color: '#3a3a3a', fontSize: "28px",marginTop:"-40px" }}>Successful !</button>
      <Link href="/report_repair"><button className="absolute top-[120px] flex items-center justify-center bg-[#fff] hover:bg-[#c7f1cc] rounded-2xl h-[40px] w-[60px] ml-[-100px]"style={{marginRight: "-90px"}}>
       <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c7127bcc4758a1731313e8a1430cdc6873ab6e770ba27eb373d5394ef56c53c?apiKey=d2ea1981bd5246b0a7a3b636b55c7b9d&"></img>
      </button></Link>
      </button>
    </div>
  );
}