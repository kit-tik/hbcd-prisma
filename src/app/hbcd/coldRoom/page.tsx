//import { coldRoomsData } from "@/data/sampleData";
import prisma from "@/lib/prisma";
import { ColdRoom } from "@/data/types";
import Link from "next/link";
import { ReactNode } from "react";

function RoomRow({room} : {room:ColdRoom}) {
  return (
    <tr key={room.RID} className="odd:bg-blue-500/20 even:bg-white border border-slate-300 last:rounded-b-lg">
    <td className="border border-slate-300 text-center p-4">
    <Link
          href={`/hbcd/coldRoom/${room.RID}`}
          className="hover:text-blue-500"
          // style={{ backgroundImage: `url('/coldRoom.jpeg')` }}
        >{room.RID}
  </Link>
  </td>
    <td className="border border-slate-300 p-4 text-sm">{room.coldRoomAddress.substring(0,50)}</td>
    <td className="border border-slate-300 p-4 ">{room.province}</td>
    <td className="hidden md:block border border-slate-300 p-4 ">{room.year}</td>
  </tr>  );
}

function CompanyRow({ bizName, bizID }: {bizName: string, bizID:string}) {
  return (
    <tr>
      <th colSpan={4}  className=" bg-indigo-100 text-xl text-left p-4">
        <Link
              href={`/hbcd/company/${bizID}`}
              className="hover:text-blue-500"
              // style={{ backgroundImage: `url('/coldRoom.jpeg')` }}
            >{bizName}
      </Link>
      </th>
    </tr>
  );
}

const getData = async ()=>{
  const serverUrl = `${process.env.NEXT_PUBLIC_API_URL}/coldRoom`;
  const res = await fetch(serverUrl ,{
    cache:"no-store"
  })

  if(!res.ok){
   throw  new Error("Failed!");
  }

  return res.json()
}

const Page  =  async () => {
  const coldRoomsData: ColdRoom[] = await getData();

  const rows:ReactNode[] = [];
  let lastCompany = "";

  coldRoomsData.forEach((room) => {
    if (room.company.name !== lastCompany) {
      rows.push(
        <CompanyRow
          bizID={room.bizID}
          bizName={room.company.name}
          key={room.bizID} />
      );
    }
    rows.push(
      <RoomRow room={room} key={room.RID} />
    );
    lastCompany = room.company.name;
  });

  return (
      <div className="p-4 lg:px-20  items-center">
        {/* <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col gap-2 md:flex-row items-center"> */}
        <h1 className="text-3xl font-bold">Cold Room Page</h1>
        <div className="mt-4 inline-block rounded-xl border shadow-2xl">
        <table className="table-fixed  border border-slate-400 rounded-lg">
        <caption className='text-xl m-4'>List of Cold Rooms</caption>
        <thead>
          <tr className='bg-blue-500 text-white border border-slate-300 rounded-t-md'>
            <th className="p-4 border border-slate-300 text-center">RID</th>
            <th className="p-4 border border-slate-300 text-center">ที่ตั้งห้องเย็น</th>
            <th className="p-4 border border-slate-300 text-center">จังหวัด</th>
            <th className="hidden md:block p-4 border border-slate-300 text-center">ปีที่สร้าง</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      </div>
      </div>
    )
    // <div>
    //   <h1 className="col-span-2">Cold Room Page</h1>
    //   <div className="p-4 lg:px-20 xl:px-40 min-h-0 md:flex md:flex-col md:flex-wrap gap-2 items-center justify-stretch">
    //     {coldRoomsData.map((room, idx) => (
    //       <Link
    //         href={`/hbcd/coldRoom/${room.RID}`}
    //         key={room.RID}
    //         className="w-full bg-cover p-8 md:h-1/2 odd:bg-blue-500/20 bg-blue-800/20 rounded-md"
    //         // style={{ backgroundImage: `url('/coldRoom.jpeg')` }}
    //       >
    //         <div className={`w-full`}>
    //           <h1 className="uppercase font-bold text-xl">{room.coldRoomAddress.substring(0,40)}</h1>
    //           <p className="text-sm my-4">{room.province}</p>
    //           <button className="hidden xl:block bg-amber-300 text-amber-700 py-2 px-4 rounded-md">
    //             Explore
    //           </button>
    //         </div>
    //       </Link>
    //     ))}
    //   </div>
    // </div>
  // );
}
export default Page;