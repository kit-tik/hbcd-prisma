import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET SINGLE COLDROOM
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    const coldRoom = await prisma.ColdRoom.findUnique({
      where: {
        RID: id,
      },
      include: {
        company: {select: {name:true}}
      },
    });

    return new NextResponse(JSON.stringify(coldRoom), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};


// CREATE ColdRoom
// export const POST = async (req: NextRequest) => {
//     const session = await getAuthSession();
  
//     if (session) {
//       try {
//         const body = await req.json();
//         const coldRoom = await prisma.coldRoom.create({
//           data: body,
//         });
//         return new NextResponse(JSON.stringify(coldRoom), { status: 201 });
//       } catch (err) {
//         console.log(err);
//         return new NextResponse(
//           JSON.stringify({ message: "Something went wrong!" }),
//           { status: 500 }
//         );
//       }
//     } else {
//       return new NextResponse(
//         JSON.stringify({ message: "You are not authenticated!" }),
//         { status: 401 }
//       );
//     }
//   };


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