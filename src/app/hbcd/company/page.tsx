// import { hbcdCompanyData } from "@/data/sampleData";
import prisma from "@/lib/prisma";
import {HBCDCompany} from '@/data/types'
import Link from "next/link";

const getData = async ()=>{
  const serverUrl = `${process.env.NEXT_PUBLIC_API_URL}/hbcdCompany`;
  const res = await fetch(serverUrl, {
    cache:"no-store"
  })

  if(!res.ok){
   throw  new Error("Failed!");
  }

  return res.json()
}

const Page  =  async () => {
  const hbcdCompanyData: HBCDCompany[] = await getData();

  return (
    <div className="p-4 lg:px-20   items-center">
      {/* <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col gap-2 md:flex-row items-center"> */}
      <h1 className="text-3xl font-bold">Company Page</h1>
      <div className="mt-4 inline-block rounded-xl border shadow-2xl">
      <table className="table-fixed border-collapse  border border-slate-400  rounded-lg">
      <caption className='text-xl m-4'>List of Companies</caption>
      <thead>
        <tr className='bg-blue-500 text-white border border-slate-300 rounded-t-md'>
          {/* <th className="p-4 border border-slate-300 text-center">Biz Id</th> */}
          <th className="p-4 border border-slate-300 text-center">ชื่อ</th>
          <th className="hidden md:block p-4 border border-slate-300 text-center">ประเภทธุรกิจ</th>
          <th className="p-4 border border-slate-300 text-center">จังหวัด</th>
          <th className="p-4 border border-slate-300 text-center">จำนวนห้องเย็น</th>
        </tr>
      </thead>
      <tbody>
      {hbcdCompanyData.map((company) => (
        <tr key={company.bizID} className="odd:bg-blue-500/20 even:bg-white border border-slate-300 last:rounded-b-lg">
            <td className="border border-slate-300 p-4">
            <Link
                  href={`/hbcd/company/${company.bizID}`}
                  key={company.bizID}
                  className="hover:text-blue-500"
                  // style={{ backgroundImage: `url('/coldRoom.jpeg')` }}
                >{company.name}
          </Link>
          </td>
        {/* <td className="border border-slate-300 p-4 ">{company.name}</td> */}
        <td className="hidden md:block border border-slate-300 p-4 ">{company.bizType}</td>
        <td className="border border-slate-300 p-4 ">{company.province}</td>
        <td className="border border-slate-300 p-4 text-center">{company._count.coldRooms}</td>
      </tr>))}
      </tbody>
    </table>
    </div>
    </div>
  )
{/* <Link
            href={`/hbcd/company/${company.bizID}`}
            key={company.bizID}
            className="w-full h-1/3 bg-cover p-8 md:h-1/2 odd:bg-blue-500/20 bg-blue-800/20 rounded-md"
            // style={{ backgroundImage: `url('/coldRoom.jpeg')` }}
          >
            <div className={`w-full`}>
              <h1 className="uppercase font-bold text-2xl">{company.name}</h1>
              <p className="text-sm my-4">{company.bizType}</p>
              <button className="hidden xl:block bg-amber-300 text-amber-700 py-2 px-4 rounded-md">
                Explore
              </button>
            </div>
          </Link>
        ))} 
    </div> 
    </div>
      );*/}
}
export default Page