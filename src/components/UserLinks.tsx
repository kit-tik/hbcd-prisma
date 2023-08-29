"use client";

// import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserLinks = () => {
  // const { status } = useSession();
  const status = null;
  return (
    <div>
      {status === "authenticated" ? (
        <div>
          <Link href="/mgtResources">Manage Resources</Link>
          {/* <span className="ml-4 cursor-pointer" onClick={() => signOut()}>Logout</span> */}
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default UserLinks;
