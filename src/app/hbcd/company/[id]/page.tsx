import React from 'react'
// import { hbcdCompanyData } from "@/data/sampleData";
import Image from "next/image";
import { HBCDCompany } from '@/data/types';
import Link from 'next/link';
const getData = async (id: string) => {
  const serverUrl = `${process.env.NEXT_PUBLIC_API_URL}/hbcdCompany/${id}`;

  const res = await fetch(serverUrl, {
    cache: "no-store",
  });

  if(!res.ok){
   throw  new Error("Failed!");
  }

  return res.json()
}

const Page = async ({ params }: { params: { id: string } }) => {
  const singleCompany: HBCDCompany = await getData(params.id);
  if (singleCompany) {
    let roomLinkList = null;
    if (singleCompany.coldRooms && singleCompany.coldRooms.length > 0) {
      roomLinkList = singleCompany.coldRooms?.map((e)=> (
        <li key={e.RID} className='list-decimal mx-2'><Link href={`/hbcd/coldRoom/${e.RID}`} className='hover:text-blue-500 ml-2'>{e.RID}</Link></li>
      ))
  }
  return (
      <div className="p-4 text-black h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
      {/* TEXT CONTAINER */}
      <h1 className="text-3xl font-bold uppercase xl:text-5xl text-blue-500">{singleCompany.name}</h1>
      <div className="my-2">
        <p className='p-2'><span className="font-bold text-gray-600">ที่อยู่:</span> {singleCompany.officeAddress}</p>
        <p className='p-2'><span className="font-bold text-gray-600">การติดต่อ:</span> {singleCompany.officeTelNo}</p>
        <p className='p-2'><span className="font-bold text-gray-600">ประเภทธุรกิจ:</span> {singleCompany.bizType}</p>
        <p className='p-2'><span className="font-bold text-gray-600">Lincense no.:</span> {singleCompany.licenseNo}</p>
        <p className='p-2'><span className="font-bold text-gray-600">จังหวัด:</span> {singleCompany.province}</p>
        <p className='p-2'><span className="font-bold text-gray-600">จำนวนห้องเย็น (ห้อง):</span> {singleCompany.coldRooms?.length}</p>
        {roomLinkList && <div className='px-2'>รายการห้องเย็น (RID): <ul className='mx-4'>{roomLinkList}</ul></div>}
        </div>
      </div>
  )}
  else {
    return <div className='text-red'>Not found the company with bizId {params.id}</div>
  }
};
export default Page;