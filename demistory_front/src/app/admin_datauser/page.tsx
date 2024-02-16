import * as React from "react";
import Image from 'next/image';
import pictu from '../pictu.png'
import Link  from "next/link";
import balls from '../balls.png';

function Navbar() {
  return(
    <nav >
      <div className="bg-[#70C174] bg-cover p-8 ">
        <div className="text-white text-5xl xl:font-serif font-bold">
          <Link href="/report_home_admin">DEMISTORY SYSTEM</Link></div>
      </div>

      <div className="bg-green-200 flex grid-cols-2 gap-4 place-items-stretch px-10">
        <div className="flex justify-between gap-px px-8">
          <Image src={pictu} alt="" width="85" ></Image>
        </div>

        <div className="px-10">
          <div className="text-green-50 text-base font-semibold my-10 ">
            <Link href="/admin_report_list">Report repair</Link>
            </div>
        </div>

        <div className="px-10 ">
          <div className="text-green-50 text-base font-semibold relative my-10">
          <Link href="/admin_history">History finish</Link>
          </div>
        </div>

        <div className="px-10 bg-[#FFFFFF]">
          <div className="text-green-400 text-base font-semibold relative my-10">
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
            <div className="text-right text-sm">Admin</div>
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

export default function datauser() {
    return (
        <div>
            <Navbar></Navbar>

            <div>
       <table className=" flex flex-center  items-center mt-6 ">
       <table className="text-center flex flex-row bg-[#EFF7F2] h-[35px] w-[100%] "style={{ borderRadius: "5px" }}>
        <table className="mt-1.5"style={{ width: '35%', color: '#000',fontSize: "16px",marginLeft:"-110px"}}>Roomnumber</table>
        <table className="mt-1.5" style={{ width: '35%', color: '#000',fontSize: "16px",marginLeft:"20px" }}>Name</table>
        <table className="mt-1.5" style={{ width: '35%', color: '#000',fontSize: "16px",marginRight:"100px" }}>Phonenumber</table>
       </table>
     </table>
    

    <div>
    <table className=" flex flex-center  items-center mt-6 ">
    <table className="mt-1.5"style={{ width: '35%', color: '#000',fontSize: "12px",marginLeft:"175px"}}>3369</table>
        <table className="mt-1.5" style={{ width: '35%', color: '#000',fontSize: "12px",marginLeft:"180px" }}>ponpan</table>
        <table className="mt-1.5" style={{ width: '35%', color: '#000',fontSize: "12px",marginLeft:"125px" }}>0896650235</table>
        </table>
      </div>

      <div>
    <table className=" flex flex-center  items-center mt-5 ">
    <table className="mt-1.5"style={{ width: '35%', color: '#000',fontSize: "12px",marginLeft:"175px"}}>3602</table>
        <table className="mt-1.5" style={{ width: '35%', color: '#000',fontSize: "12px",marginLeft:"180px" }}>woramet</table>
        <table className="mt-1.5" style={{ width: '35%', color: '#000',fontSize: "12px",marginLeft:"125px" }}>0699847733</table>
        </table>
      </div>

      <div>
    <table className=" flex flex-center  items-center mt-5 ">
    <table className="mt-1.5"style={{ width: '35%', color: '#000',fontSize: "12px",marginLeft:"175px"}}>3508</table>
        <table className="mt-1.5" style={{ width: '35%', color: '#000',fontSize: "12px",marginLeft:"180px" }}>nanta</table>
        <table className="mt-1.5" style={{ width: '35%', color: '#000',fontSize: "12px",marginLeft:"125px" }}>0825569023</table>
        </table>
      </div>

      <div>
    <table className=" flex flex-center  items-center mt-5 ">
    <table className="mt-1.5"style={{ width: '35%', color: '#000',fontSize: "12px",marginLeft:"175px"}}>2501</table>
        <table className="mt-1.5" style={{ width: '35%', color: '#000',fontSize: "12px",marginLeft:"180px" }}>nontapat</table>
        <table className="mt-1.5" style={{ width: '35%', color: '#000',fontSize: "12px",marginLeft:"125px" }}>0967844566</table>
        </table>
      </div>

      <div>
    <table className=" flex flex-center  items-center mt-5 ">
    <table className="mt-1.5"style={{ width: '35%', color: '#000',fontSize: "12px",marginLeft:"175px"}}>4001</table>
        <table className="mt-1.5" style={{ width: '35%', color: '#000',fontSize: "12px",marginLeft:"180px" }}>warawan</table>
        <table className="mt-1.5" style={{ width: '35%', color: '#000',fontSize: "12px",marginLeft:"125px" }}>0872198565</table>
        </table>
      </div>

      </div>

        </div>
    )
}