"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import pictu from '../pictu.png';
import Link  from "next/link";
import balls from '../balls.png';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';



function Navbar() {
    return(
        <nav>
      <div className="bg-[#70C174] bg-cover p-8 ">
        <div className="text-white text-5xl xl:font-serif font-bold">
        <Link href="/report_home_user">DEMISTORY SYSTEM</Link>
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

            <TableContainer className="flex justify-center items-center mt-10 px-10" >
              <Table >
                <TableHead >
                  <TableRow>
                    <TableCell className="text-black text-base font-semibold" >Datalist</TableCell>
                    <TableCell className="text-black text-base font-semibold" >Date</TableCell>
                    <TableCell className="text-black text-base font-semibold">Roomnumber :</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody >
          {reportList.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} 
            >
              <TableCell  scope="row" className="text-gray-600 text-sm font-semibold">
                {row.description}
              </TableCell>
              <TableCell className="text-gray-600 text-sm font-semibold ">{row.date ?? "NODATE"}</TableCell>
              <TableCell >
                <Button className="text-white text-base font-medium whitespace-nowrap items-stretch rounded backdrop-blur-2xl bg-red-600 self-stretch px-3 py-2">Cancel</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
        </div>
    );
}

