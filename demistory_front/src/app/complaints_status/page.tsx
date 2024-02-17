"use client"
import de from '../213.png';
import React, { useEffect, useId, useState } from 'react';
import Image from 'next/image';
import pictu from '../pictu.png';
import Link  from "next/link";
import balls from '../balls.png';

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


export default function Home() {
  return (
    <div>
      
      <div>
    <div style={{ position: 'relative' }}>
      <div className="absolute inset-0 backdrop-blur-[4px]" style={{ backgroundImage: `url(${de})` }}></div>
      <Image src={de} alt={""}></Image>
            <div className="absolute top-[20px] left-0 flex items-center justify-centerflex flex-col self-center px-16 pt-5 pb-12 mt-10 w-full text-sm">
              <div className=" bg-[#EFF7F2] rounded-lg px-20 border border-[#4ad458]">
                <div className="flex flex-col max-w-full w-[400px] h-[620px]">
                  <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max- my-10" style={{ marginLeft: "-25px" }}>
                    <div className="flex flex-col flex-1 px-8">
                      <div className="text-black">Room number</div>
                      <div className="justify-center py-5  mt-4 whitespace-nowrap bg-white text-zinc-600" style={{ width: "150px" }}>
                        <div className="text-left pl-5 my-0">
                        <UserRoom></UserRoom>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 self-start px-8">
                      <div className="text-black">Name</div>
                      <div className="justify-center py-5 mt-4 bg-white text-zinc-600" style={{ width: "150px" }}>
                        <div className="text-left pl-5">
                        <UserList></UserList>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" text-black px-5 mt-[-10]">
                    Description
                  </div>
                  <form className="px-5">
                    
                      <input
                        type="text"
                        id="description"
                        placeholder="description"
                        name="description"
                        className="box-border flex relative flex-col shrink-0 self-center pb-52 pl-2.5 mt-5 -mr-px w-full h-auto rounded border border-solid border-stone-300 grow-0"
                        required={false}
                        aria-label="Description"
                      />

                  </form>

          
                  <div>
                  <button className="justify-center self-center py-0.5 px-4 mt-10 text-base font-medium text-right text-[#000] hover:text-[#ffff] whitespace-nowrap bg-{buttonColor} hover:bg-[#F23F22] rounded backdrop-blur-2xl max-md:px-2 my-5"
                    style={{ marginLeft: "55px" }}>
    
                  in progress
                  </button>

                   <button className="justify-center self-center py-0.5 px-10 mt-10 text-base font-medium text-right text-[#000] hover:text-[#ffff] whitespace-nowrap bg-{buttonColor} hover:bg-[#0fbd26] rounded backdrop-blur-2xl max-md:px-8 my-5"
                    style={{ marginLeft: "80px" }}>
                    
                    finish 
                  </button>

                  </div>
                 
  
                  <div>
                    <Link href="/admin_report_list"><button className="justify-center self-center px-8 py-3 mt-5 text-base font-medium text-right text-[#F23F44]  hover:text-[#fff] whitespace-nowrap bg-[#fff] hover:bg-[#F23F22] rounded backdrop-blur-2xl max-md:px-5  my-8" style={{ marginLeft: "55px" }}>
                      Cancel
                    </button></Link>
                    <button className="justify-center self-center px-10 py-3 mt-5 text-base font-medium text-right text-white  bg-[#70C174] hover:bg-[#0fbd26] rounded backdrop-blur-2xl max-md:px-5 my-8" style={{ marginLeft: "80px" }}>
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>

    </div>
  )
}