import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// FETCH ALL ColdRoom
export const GET = async () => {
  try {
    const coldRooms = await prisma.ColdRoom.findMany({
      include: {
        company: {select: {name:true}}
      },
    });
    return new NextResponse(JSON.stringify(coldRooms), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};