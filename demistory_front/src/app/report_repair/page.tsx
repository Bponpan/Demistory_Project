"use client"

import React, { useContext, useEffect, useId, useState } from 'react';
import Image from 'next/image';
import pictu from '../pictu.png';
import Link  from "next/link";
import balls from '../balls.png';
import { error } from 'console';
import { AuthProviderContext } from '../context/AuthProvider';




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

function Navbar(){
  const {user} = useContext(AuthProviderContext)

    return (
        <nav>
      <div className="bg-[#70C174] bg-cover p-8 ">
        <div className="text-white text-5xl xl:font-serif font-bold">
            <Link href="/report_home_user">DEMISTORY SYSTEM</Link></div>
      </div>

      <div className="bg-green-200 flex grid-cols-2 gap-4 place-items-stretch px-10">
        <div className="flex justify-between gap-px px-8">
          <Image src={pictu} alt="" width="85" ></Image>
        </div>

        <div className="px-10 bg-[#FFFFFF]">
          <div className="text-green-400 text-base font-semibold my-10 ">
            <Link href="/report_repair">Report repair</Link>
            </div>
        </div>

        <div className="px-10 ">
          <div className="text-green-50 text-base font-semibold relative my-10">
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
            <div className="text-right text-sm">{user?.username}</div>
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

interface ComplaintDTO {
  description: string;
  userId: number;
}

export default function report() {

  const {user} = useContext(AuthProviderContext)

    const [reportForm, setReportForm] = useState({description : ''} as ComplaintDTO)

    const handleReportForm = (e : React.ChangeEvent<HTMLInputElement>) => {
      setReportForm({
        ...reportForm,
        [e.target.name] : e.target.value
      })
    }

    const reportFormSubmit = async () => {

      console.log("reportFormSubmit reportForm",reportForm)

      let response = await fetch("http://127.0.0.1:3001/complaints", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          "description" : reportForm.description,
          "userId" : 115
        })
      })

      console.log("reportFormSubmit response :",response)
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="flex flex-col items-center self-center px-16 pt-5 pb-12 mt-20 w-full text-sm ">
                    <div className="bg-[#EFF7F2] rounded-lg px-20">
                    <form className="px-5 flex flex-col max-w-full w-[814px]">
                    <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full my-10">
                        <div className="flex flex-col flex-1 px-8 ">
                        <div className="text-black">Room number</div>
                        <div className="justify-center py-5 mt-4 whitespace-nowrap bg-white text-zinc-600">
                          <div className="text-left pl-5 my-0"> 
                          {user?.room.room}
                          </div>
                        </div>
                        </div>
                        <div className="flex flex-col flex-1 self-start px-8">
                        <div className="text-black">Name</div>
                        <div className="justify-center py-5 mt-4 bg-white text-zinc-600">
                            <div className="text-left pl-5 my-0"> 
                            {user?.username}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="mt-14 text-black max-md:mt-10 max-md:max-w-full px-5">
                        Description
                    </div>
                    
                        <label htmlFor="description">
                        <input
                            onChange={handleReportForm}
                            type="text"
                            id="description"
                            placeholder="description"
                            name="description"
                            className="box-border flex relative flex-col shrink-0 self-center pb-52 pl-2.5 mt-5 -mr-px w-full h-auto rounded border border-solid border-stone-300 grow-0"
                            required={false}
                            aria-label="Description"
                        />
                        </label>
                    <Link href="/Successfull" className="justify-center self-center">
                    <button type='button' onClick={reportFormSubmit} className="justify-center self-center px-8 py-4 mt-12 text-base font-medium text-right text-white whitespace-nowrap bg-green-400 rounded backdrop-blur-2xl max-md:px-5 max-md:mt-10 my-8">
                        Submit
                    </button></Link>
                    </form>
                    </div>
                    </div>
            </div>

        

    )
}