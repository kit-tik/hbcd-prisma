import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// FETCH ALL HBCDCompany
export const GET = async () => {
  try {
    const hbcdCompanies = await prisma.HBCDCompany.findMany({
        include: {
            _count: {
                select: {
                    coldRooms: true
                }
            }
        }
    });
    return new NextResponse(JSON.stringify(hbcdCompanies), { status: 200 });
} catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};