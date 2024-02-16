"use client"

import React, { useEffect, useId, useState } from 'react';
import Image from 'next/image';
import pictu from '../pictu.png';
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

        <div className="px-10">
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

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

      <div>
          <div className="flex flex-col items-center self-center px-16 pt-5 pb-12 mt-20 w-full text-sm ">
                  <div className="bg-[#EFF7F2] rounded-lg px-20">
                  <div className="flex flex-col max-w-full w-[400px]">
                  <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max- my-10"style={{marginLeft: "-25px"}}>
                      <div className="flex flex-col flex-1 px-8 ">
                      <div className="text-black">Room number</div>
                      <div className="justify-center py-5  mt-4 whitespace-nowrap bg-white text-zinc-600"style={{width: "150px"}}>
                        <div className="text-left pl-5 my-0"> 
                        <UserRoom></UserRoom>
                        </div>
                      </div>
                      </div>
                      <div className="flex flex-col flex-1 self-start px-8">
                      <div className="text-black">Name</div>
                      <div className="justify-center py-5 mt-4 bg-white text-zinc-600"style={{width: "150px"}}>
                          <div className="text-left pl-5 my-0"> 
                          <UserList></UserList>
                          </div>
                      </div>
                      </div>
                  </div>
                  <div className="mt-2 text-black max-md:mt-10 max-md:max-w-full px-5">
                      Description
                  </div>
                  <form className="px-5">
                      <label htmlFor="description">
                      <input
                          type="text"
                          id="description"
                          placeholder="description"
                          name="description"
                          className="box-border flex relative flex-col shrink-0 self-center pb-52 pl-2.5 mt-5 -mr-px w-full h-auto rounded border border-solid border-stone-300 grow-0"
                          required={false}
                          aria-label="Description"
                      />
                      </label>
                  </form>
                  <div>

                  <button className="justify-center self-center px-8 py-3 mt-12 text-base font-medium text-right text-[#F23F44] whitespace-nowrap bg-[#fff] rounded backdrop-blur-2xl max-md:px-5 max-md:mt-10 my-8"style={{marginLeft: "45px"}}>
                      Cancel
                  </button>
                  <button className="justify-center self-center px-10 py-3 mt-12 text-base font-medium text-right text-white whitespace-nowrap bg-[#70C174] rounded backdrop-blur-2xl max-md:px-5 max-md:mt-10 my-8"style={{marginLeft: "80px"}}>
                      Save
                  </button>
                  </div>
                  </div>
                  </div>
                  </div>
          </div>

    </div>
  )
}