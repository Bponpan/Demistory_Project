"use client"

import React, { useEffect, useId, useState } from 'react';
import Image from 'next/image';
import pictu from '../pictu.png'
import Link  from "next/link";
import balls from '../balls.png';

type User = {
  "id": 104,
  "username": "Woramet Y",
  "password": "123456",
  "phonenumber": 933332222
}

function UserItem({user} : {user:User}){
 return <div key={user.id}>{user.username}</div>;
}

function UserList(){
const [users, setUsers] = useState([] as User[]);
const targetUserId = 104; 

useEffect(() => {
  fetch("http://127.0.0.1:3001/User", {
    method: "GET",
  })
    .then(async (r) => {
      setUsers(await r.json());
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, []);

const filteredUsers = users.filter((user) => user.id === targetUserId);

return (
  <div>
    {filteredUsers.map((user) => (
      <UserItem key={user.id} user={user} />
    ))}
  </div>
);
}

type Room = {
"id": 2,
"room": 712
}

function Userroom({room} : {room:Room}){
return <div key={room.id}>{room.room}</div>;
}

function UserRoom(){
const [rooms, setRoom] = useState([] as Room[]);
const targetRoomId = 2;

useEffect(() => {
  fetch("http://127.0.0.1:3001/rooms", {
    method: "GET"
  })
    .then(async (r) => {
      setRoom(await r.json());
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, []);

const filteredRoom = rooms.filter((room) => room.id === targetRoomId);

return (
  <div>
    {filteredRoom.map((rooms) => (
      <Userroom key={rooms.id} room={rooms} />
    ))}
  </div>
)
}

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

function ReportRow({report}){
  return ( <div className="flex flex-center justify-center items-center mt-5">
  <div className="text-center flex flex-row h-[35px] w-[890px]" style={{ marginLeft: "5px" }}>
      <div style={{ width: '45%', color: '#000', fontSize: "12px" }}>{report.id}</div>
      <div style={{  width:'45%',color: '#000', fontSize: "12px" }}>{report.user?.username ?? "NO DATA"}</div>
      <div style={{ width: '45%', color: '#000', fontSize: "12px" }}>{report.description}</div>
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
</div>)
}

export default function Home() {

  const [reportList,setReportList] = useState([]) 

    const loadReport = async () => {
        let response = await fetch("http://127.0.0.1:3001/Complaints", {
          method : "GET",
          headers : {
            "Content-Type" : "application/json"
          }
        })
        console.log("loadReport response",  response)

        if( response.ok) {
          let data = await response.json();
          console.log("loadReport data",data)
          setReportList(data)
        }else {
          //error
        }

    }

    useEffect(()=> {
        loadReport()
    },[])

  return (
    <div>
      <Navbar></Navbar>
    
      <div>
     <table className="flex justify-center items-center m-[100px]">
       <table className="flex flex-center bg-[#EFF7F2] rounded-3xl h-[470px] w-[1050px]"style={{marginLeft: '0px'}}>
         <table className="flex justify-center items-center">
        </table>
      <div>
        <table className="flex flex-row flex-1 px-20 mt-10">
          <div className="text-black">Roomnumber</div>
          <div className="flex flex-row  px-20 ">
          <div className="text-black"style={{ marginLeft: "300px" }}>Name</div>
        </div>
      </table>

     <div>
      <table className="flex  flex-row-center flex-1 ">
       <table className="flex  flex-row-center  px-20 mt-2">
         <table className=" bg-[#ffff] h-[30px] w-[220px] "> 
         <div className="p-2">
         <UserRoom></UserRoom>
         </div>
         </table>
         <table className="flex flex-row  mt-0 ">
         <table className=" bg-[#ffff] h-[30px] w-[220px]"style={{ marginLeft: "260px" }}> 
         <div className="p-2">
          <UserList></UserList>
          </div>
         </table>
        </table>
       </table>
       </table>

     <div>
       <table className=" flex flex-center  items-center mt-6 ">
       <table className="text-center flex flex-row bg-[#ffff] h-[35px] w-[945px] "style={{ borderRadius: "5px",marginLeft:"60px" }}>
        <table className="mt-1.5"style={{ width: '35%', color: '#70C174',fontSize: "14px",marginLeft:"20px"}}>Roomnumber</table>
        <table className="mt-1.5" style={{ width: '35%', color: '#70C174',fontSize: "14px",marginLeft:"20px" }}>Name</table>
        <table className="mt-1.5" style={{ width: '35%', color: '#70C174',fontSize: "14px",marginLeft:"20px" }}>Details</table>
        <table className="mt-1.5" style={{ width: '35%', color: '#70C174',fontSize: "14px",marginLeft:"20px" }}>Date added</table>
        <table className="mt-1.5" style={{ width: '35%', color: '#70C174',fontSize: "14px",marginLeft:"30px" }}>STATUS</table>
        <table className="mt-1.5" style={{ width: '35%', color: '#70C174',fontSize: "14px",marginLeft:"5px" }}>More</table>
       </table>
     </table>

     <div>
      <table className="flex flex-center justify-center items-center mt-5">
        <table className="text-center flex flex-row h-[35px] w-[890px]" style={{ marginLeft: "5px" }}>
            <table style={{ width: '45%', color: '#000', fontSize: "12px" }}>3221</table>
            <table style={{  width:'45%',color: '#000', fontSize: "12px" }}>warawan</table>
            <table style={{ width: '45%', color: '#000', fontSize: "12px" }}>ฝักบัวแตก</table>
            <table style={{ width: '45%', color: '#000', fontSize: "12px" }}>29/11/67</table>
            <table className=" text-center flex-row bg-[#FFE2E5]" style={{ borderRadius: "4px", width: "180px", height: "21px", alignItems: "center", marginLeft: '50px' }}>
            <table style={{  color: '#F64E60', fontSize: "12px", textAlign: "center" }}>in progress</table>
             </table>
            <table style={{ marginLeft: "15px" }}>
            <table className="flex flex-row bg-[#ffff]" style={{ borderRadius: "4px", width: '25px', height: "23px", alignItems: "center",marginLeft:'80px' }}>
            <table style={{ flex: "1", color: '#70C174', fontSize: "12px", textAlign: "center" }}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a36ef8adcb1b14d984b2f4fdf9223643b742dfc4059f33c195afe0cd20f0dba?apiKey=d2ea1981bd5246b0a7a3b636b55c7b9d&"></img>
          </table>
         </table>
        </table>
       </table>
      </table>

      <div>
      {reportList.map(r => <ReportRow key={r.id} report={r}></ReportRow>)}

      
     <div>
      <table className="flex flex-center justify-center items-center mt-5">
        <table className="text-center flex flex-row h-[35px] w-[890px]" style={{ marginLeft: "5px" }}>
            <table style={{ width: '45%', color: '#000', fontSize: "12px" }}>3507</table>
            <table style={{  width:'45%',color: '#000', fontSize: "12px" }}>nontapat</table>
            <table style={{ width: '45%', color: '#000', fontSize: "12px" }}>แอร์ไม่เย็น</table>
            <table style={{ width: '45%', color: '#000', fontSize: "12px" }}>12/12/66</table>
            <table className=" text-center flex-row bg-[#FFE2E5]" style={{ borderRadius: "4px", width: "180px", height: "21px", alignItems: "center", marginLeft: '50px' }}>
            <div style={{  color: '#F64E60', fontSize: "12px", textAlign: "center" }}>in progress</div>
             </table>
            <table style={{ marginLeft: "15px" }}>
            <table className="flex flex-row bg-[#ffff]" style={{ borderRadius: "4px", width: '25px', height: "23px", alignItems: "center",marginLeft:'80px' }}>
            <table style={{ flex: "1", color: '#70C174', fontSize: "12px", textAlign: "center" }}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a36ef8adcb1b14d984b2f4fdf9223643b742dfc4059f33c195afe0cd20f0dba?apiKey=d2ea1981bd5246b0a7a3b636b55c7b9d&"></img>
          </table>
         </table>
        </table>
       </table>
      </table>

     
     <div>
      <table className="flex flex-center justify-center items-center mt-5">
        <table className="text-center flex flex-row h-[35px] w-[890px]" style={{ marginLeft: "5px" }}>
            <table style={{ width: '45%', color: '#000', fontSize: "12px" }}>3221</table>
            <table style={{  width:'45%',color: '#000', fontSize: "12px" }}>woramet</table>
            <table style={{ width: '45%', color: '#000', fontSize: "12px" }}>สายไฟไหม้</table>
            <table style={{ width: '45%', color: '#000', fontSize: "12px" }}>27/10/66</table>
            <table className=" text-center flex-row bg-[#FFE2E5]" style={{ borderRadius: "4px", width: "180px", height: "21px", alignItems: "center", marginLeft: '50px' }}>
            <table style={{  color: '#F64E60', fontSize: "12px", textAlign: "center" }}>in progress</table>
             </table>
            <table style={{ marginLeft: "15px" }}>
            <table className="flex flex-row bg-[#ffff]" style={{ borderRadius: "4px", width: '25px', height: "23px", alignItems: "center",marginLeft:'80px' }}>
            <table style={{ flex: "1", color: '#70C174', fontSize: "12px", textAlign: "center" }}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a36ef8adcb1b14d984b2f4fdf9223643b742dfc4059f33c195afe0cd20f0dba?apiKey=d2ea1981bd5246b0a7a3b636b55c7b9d&"></img>
          </table>
         </table>
        </table>
       </table>
      </table>

            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
   </div>
  </table>
  </table>
    </div>


    </div>
  )
}