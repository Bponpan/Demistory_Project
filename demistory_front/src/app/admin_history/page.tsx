"use client"

import React, { useContext, useEffect, useId, useState } from 'react';
import Image from 'next/image';
import pictu from '../pictu.png'
import Link  from "next/link";
import balls from '../balls.png';
import { AuthProviderContext } from '../context/AuthProvider';

type User = {
  "id": 115,
  "username": "Woramet Y",
  "password": "112233",
  "phonenumber": 932221111
}

function UserItem({user} : {user:User}){
 return <div key={user.id}>{user.username}</div>;
}

function UserList(){
const [users, setUsers] = useState([] as User[]);
const targetUserId = 115; 

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

type usertype = {
"id": 2,
"type": "admin"
}

function Userusertype({usertype} : {usertype:usertype}){
return <div key={usertype.id}>{usertype.type}</div>;
}

function Userusertypes(){
const [usertypes, setusertypes] = useState([] as usertype[]);
const targetUsertypesId = 2;

useEffect(() => {
  fetch("http://127.0.0.1:3001/usertypes", {
    method: "GET"
  })
    .then(async (r) => {
      setusertypes(await r.json());
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, []);

const filteredRoom = usertypes.filter((usertype) => usertype.id === targetUsertypesId);

return (
  <div>
    {filteredRoom.map((usertypes) => (
      <Userusertype key={usertypes.id} usertype={usertypes} />
    ))}
  </div>
)
}

function Navbar() {

  const {user} = useContext(AuthProviderContext)

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

        <div className="px-10 bg-[#FFFFFF]">
          <div className="text-green-400 text-base font-semibold relative my-10">
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
            <div className="text-right text-sm">{user?.username}</div>
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
  return ( 
    <div>
                <div className=" flex flex-center justify-center items-center mt-7 ">
                <div className="text-center flex flex-row h-[35px] w-[895px]"style={{ marginLeft: "80px" }}>
                    <div style={{ width: '45%', color: '#000',fontSize: "12px" }}>{report.description}</div>
                    <div style={{ width: '45%', color: '#000',fontSize: "12px" }}>11/10/67</div>
                    <div style={{ width: '45%', color: '#000',fontSize: "12px" }}>-</div>
                    <div style={{ width: '45%', color: '#FF1010',fontSize: "12px" }}>กำลังดำเนินการ</div>
                </div>
                </div>
                </div>
)
}



  export default function () {

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
                <div className="flex justify-center items-center m-[100px]">
                <div className="flex flex-center bg-[#EFF7F2] rounded-3xl h-[470px] w-[1050px] overflow-auto"style={{marginLeft: '-90px'}}>
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
                    <div className=" bg-[#ffff] h-[30px] w-[220px]">
                    <div className="p-2">
                    <Userusertypes></Userusertypes>
                    </div> </div>
                    <div className="flex flex-row  mt-0 ">
                    <div className=" bg-[#ffff] h-[30px] w-[220px]"style={{ marginLeft: "260px" }}> 
                    <div className="p-2">
                    <UserList></UserList>
                    </div>
                    </div>
                    </div>
                </div>
                </div>

                <div>
                <div className=" flex flex-center  items-center mt-6 ">
                <div className="text-center flex flex-row bg-[#ffff] h-[35px] w-[895px] "style={{ borderRadius: "5px",marginLeft:"80px" }}>
                    <div className="mt-1.5"style={{ width: '35%', color: '#70C174',fontSize: "14px" }}>รายละเอียด</div>
                    <div className="mt-1.5" style={{ width: '35%', color: '#70C174',fontSize: "14px" }}>วันดำเนินการ</div>
                    <div className="mt-1.5" style={{ width: '35%', color: '#70C174',fontSize: "14px" }}>วันเสร็จสิ้น</div>
                    <div className="mt-1.5" style={{ width: '35%', color: '#70C174',fontSize: "14px" }}>สถานะ</div>
                </div>
                </div>

                <div>
                <div>
                {reportList.map(r => <ReportRow key={r.id} report={r}></ReportRow>)}
                </div>

                
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>

  );
}