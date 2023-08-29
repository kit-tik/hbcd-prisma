import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET SINGLE HBCDCompany
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    const coldRoom = await prisma.HBCDCompany.findUnique({
      where: {
        bizID: id,
      },
      include: {
        // coldRooms: true
        coldRooms: {select: {RID: true}}
      }
    }
  );

    return new NextResponse(JSON.stringify(coldRoom), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

// // DELETE SINGLE ColdRoom
// export const DELETE = async (
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) => {
//   const { id } = params;
//   const session = await getAuthSession();

//   if (session?.user.isAdmin) {
//     try {
//       await prisma.coldRoom.delete({
//         where: {
//           id: id,
//         },
//       });

//       return new NextResponse(JSON.stringify("Cold Room has been deleted!"), {
//         status: 200,
//       });
//     } catch (err) {
//       console.log(err);
//       return new NextResponse(
//         JSON.stringify({ message: "Something went wrong!" }),
//         { status: 500 }
//       );
//     }
//   }
//   return new NextResponse(JSON.stringify({ message: "You are not allowed!" }), {
//     status: 403,
//   });
// };