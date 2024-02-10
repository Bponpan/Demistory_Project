"use client"

import Image from 'next/image';
import pictu from '../pictu.png'
import Link  from "next/link";
import balls from '../balls.png';

function Navbar() {
  return(
    <nav >
      <div className="bg-[#70C174] bg-cover p-8 ">
        <div className="text-white text-5xl xl:font-serif font-bold">
          <Link href="/page">DEMISTORY SYSTEM</Link></div>
      </div>

      <div className="bg-green-200 flex grid-cols-2 gap-4 place-items-stretch px-10">
        <div className="flex justify-between gap-px px-8">
          <Image src={pictu} alt="" width="85" ></Image>
        </div>

        <div className="px-10 bg-[#FFFFFF]">
          <div className="text-green-400 text-base font-semibold my-10 ">
            <Link href="/admin_report_list">Report repair</Link>
            </div>
        </div>

        <div className="px-10 ">
          <div className="text-green-50 text-base font-semibold relative my-10">
          <Link href="/admin_history">History finish</Link>
          </div>
        </div>

        <div className="px-10 ">
          <div className="text-green-50 text-base font-semibold relative my-10">
          <Link href="/admin_datauser">Data User</Link>
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

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
    
    <div>
     <div className="flex justify-center items-center m-[100px]">
       <div className="flex flex-center bg-[#EFF7F2] rounded-3xl h-[470px] w-[1050px]"style={{marginLeft: '0px'}}>
         <div className="flex justify-center items-center">
        </div>
      <div>
        <div className="flex flex-row flex-1 px-20 mt-10">
          <div className="text-black">Roomnumber</div>
          <div className="flex flex-row  px-20 ">
          <div className="text-black"style={{ marginLeft: "300px" }}>Name</div>
        </div>
      </div>

     <div>
      <div className="flex  flex-row-center flex-1 ">
       <div className="flex  flex-row-center  px-20 mt-2">
         <div className=" bg-[#ffff] h-[30px] w-[220px]"> </div>
         <div className="flex flex-row  mt-0 ">
         <div className=" bg-[#ffff] h-[30px] w-[220px]"style={{ marginLeft: "260px" }}> 
         </div>
        </div>
       </div>
       </div>

     <div>
       <div className=" flex flex-center  items-center mt-6 ">
       <div className="text-center flex flex-row bg-[#ffff] h-[35px] w-[945px] "style={{ borderRadius: "5px",marginLeft:"60px" }}>
        <div className="mt-1.5"style={{ width: '35%', color: '#70C174',fontSize: "14px",marginLeft:"20px"}}>Roomnumber</div>
        <div className="mt-1.5" style={{ width: '35%', color: '#70C174',fontSize: "14px",marginLeft:"20px" }}>Name</div>
        <div className="mt-1.5" style={{ width: '35%', color: '#70C174',fontSize: "14px",marginLeft:"20px" }}>Details</div>
        <div className="mt-1.5" style={{ width: '35%', color: '#70C174',fontSize: "14px",marginLeft:"20px" }}>Date added</div>
        <div className="mt-1.5" style={{ width: '35%', color: '#70C174',fontSize: "14px",marginLeft:"30px" }}>STATUS</div>
        <div className="mt-1.5" style={{ width: '35%', color: '#70C174',fontSize: "14px",marginLeft:"5px" }}>More</div>
       </div>
     </div>

     <div>
      <div className="flex flex-center justify-center items-center mt-5">
        <div className="text-center flex flex-row h-[35px] w-[890px]" style={{ marginLeft: "5px" }}>
            <div style={{ width: '45%', color: '#000', fontSize: "12px" }}>3221</div>
            <div style={{  width:'45%',color: '#000', fontSize: "12px" }}>warawan</div>
            <div style={{ width: '45%', color: '#000', fontSize: "12px" }}>ฝักบัวแตก</div>
            <div style={{ width: '45%', color: '#000', fontSize: "12px" }}>29/11/67</div>
            <div className=" text-center flex-row bg-[#FFE2E5]" style={{ borderRadius: "4px", width: "180px", height: "21px", alignItems: "center", marginLeft: '50px' }}>
            <div style={{  color: '#F64E60', fontSize: "12px", textAlign: "center" }}>in progress</div>
             </div>
            <div style={{ marginLeft: "15px" }}>
            <div className="flex flex-row bg-[#ffff]" style={{ borderRadius: "4px", width: '25px', height: "23px", alignItems: "center",marginLeft:'80px' }}>
            <div style={{ flex: "1", color: '#70C174', fontSize: "12px", textAlign: "center" }}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a36ef8adcb1b14d984b2f4fdf9223643b742dfc4059f33c195afe0cd20f0dba?apiKey=d2ea1981bd5246b0a7a3b636b55c7b9d&"></img>
          </div>
         </div>
        </div>
       </div>
      </div>

      <div>
      <div className="flex flex-center justify-center items-center mt-5">
        <div className="text-center flex flex-row h-[35px] w-[890px]" style={{ marginLeft: "5px" }}>
            <div style={{ width: '45%', color: '#000', fontSize: "12px" }}>3601</div>
            <div style={{  width:'45%',color: '#000', fontSize: "12px" }}>ponpan</div>
            <div style={{ width: '45%', color: '#000', fontSize: "12px" }}>ท่อน้ำรั่ว</div>
            <div style={{ width: '45%', color: '#000', fontSize: "12px" }}>09/10/66</div>
            <div className=" text-centerflex flex-row bg-[#FFE2E5]" style={{ borderRadius: "4px", width: "180px", height: "21px", alignItems: "center", marginLeft: '50px' }}>
            <div style={{  color: '#F64E60', fontSize: "12px", textAlign: "center" }}>in progress</div>
             </div>
            <div style={{ marginLeft: "15px" }}>
            <div className="flex flex-row bg-[#ffff]" style={{ borderRadius: "4px", width: '25px', height: "23px", alignItems: "center",marginLeft:'80px' }}>
            <div style={{ flex: "1", color: '#70C174', fontSize: "12px", textAlign: "center" }}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a36ef8adcb1b14d984b2f4fdf9223643b742dfc4059f33c195afe0cd20f0dba?apiKey=d2ea1981bd5246b0a7a3b636b55c7b9d&"></img>
          </div>
         </div>
        </div>
       </div>
      </div>

      
     <div>
      <div className="flex flex-center justify-center items-center mt-5">
        <div className="text-center flex flex-row h-[35px] w-[890px]" style={{ marginLeft: "5px" }}>
            <div style={{ width: '45%', color: '#000', fontSize: "12px" }}>3507</div>
            <div style={{  width:'45%',color: '#000', fontSize: "12px" }}>nontapat</div>
            <div style={{ width: '45%', color: '#000', fontSize: "12px" }}>แอร์ไม่เย็น</div>
            <div style={{ width: '45%', color: '#000', fontSize: "12px" }}>12/12/66</div>
            <div className=" text-center flex-row bg-[#FFE2E5]" style={{ borderRadius: "4px", width: "180px", height: "21px", alignItems: "center", marginLeft: '50px' }}>
            <div style={{  color: '#F64E60', fontSize: "12px", textAlign: "center" }}>in progress</div>
             </div>
            <div style={{ marginLeft: "15px" }}>
            <div className="flex flex-row bg-[#ffff]" style={{ borderRadius: "4px", width: '25px', height: "23px", alignItems: "center",marginLeft:'80px' }}>
            <div style={{ flex: "1", color: '#70C174', fontSize: "12px", textAlign: "center" }}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a36ef8adcb1b14d984b2f4fdf9223643b742dfc4059f33c195afe0cd20f0dba?apiKey=d2ea1981bd5246b0a7a3b636b55c7b9d&"></img>
          </div>
         </div>
        </div>
       </div>
      </div>

     
     <div>
      <div className="flex flex-center justify-center items-center mt-5">
        <div className="text-center flex flex-row h-[35px] w-[890px]" style={{ marginLeft: "5px" }}>
            <div style={{ width: '45%', color: '#000', fontSize: "12px" }}>3221</div>
            <div style={{  width:'45%',color: '#000', fontSize: "12px" }}>woramet</div>
            <div style={{ width: '45%', color: '#000', fontSize: "12px" }}>สายไฟไหม้</div>
            <div style={{ width: '45%', color: '#000', fontSize: "12px" }}>27/10/66</div>
            <div className=" text-center flex-row bg-[#FFE2E5]" style={{ borderRadius: "4px", width: "180px", height: "21px", alignItems: "center", marginLeft: '50px' }}>
            <div style={{  color: '#F64E60', fontSize: "12px", textAlign: "center" }}>in progress</div>
             </div>
            <div style={{ marginLeft: "15px" }}>
            <div className="flex flex-row bg-[#ffff]" style={{ borderRadius: "4px", width: '25px', height: "23px", alignItems: "center",marginLeft:'80px' }}>
            <div style={{ flex: "1", color: '#70C174', fontSize: "12px", textAlign: "center" }}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a36ef8adcb1b14d984b2f4fdf9223643b742dfc4059f33c195afe0cd20f0dba?apiKey=d2ea1981bd5246b0a7a3b636b55c7b9d&"></img>
          </div>
         </div>
        </div>
       </div>
      </div>

            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
   </div>
  </div>
  </div>
</div>

    </div>
  )
}