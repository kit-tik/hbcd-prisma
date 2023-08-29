import Link from "next/link";
export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <>
      <div className="m-auto bg-blue-500 text-white p-4 my-4 hover:transition-all ease-in-out duration-300 hover:translate-x-2">
        <Link href="/kPfas">
          <span className="text-bold">ดู</span> ความรู้เกี่ยวกับ PFAS
        </Link>
      </div>
      <div className="md:grid md:grid-cols-3 lg:grid-cols-4 p-4 md:p-6 lg:p-12 max-w-full md:gap-4">
        <aside className="xs:flex xs:flex-row md:col-span-1 border-r-2 border-blue-400 pr-2 md:h-screen">
          <h1 className="hover:text-blue-600">
            <Link href="/pfas" scroll={false}>
              ฐานข้อมูล PFAS
            </Link>
          </h1>
          <ul className="sticky top-4 ml-4">
            <li className="hover:text-blue-600">
              <Link href="/pfas/company" scroll={false}>
                รายการบริษัท (Companies)
              </Link>
            </li>
          </ul>
        </aside>
        <div className="md:col-span-2 lg:col-span-3">{children}</div>
      </div>
    </>
  );
}
