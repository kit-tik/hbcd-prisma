import RPie from "@/components/BarChart";
import Link from "next/link";

const HBCDDashboard = () => {
  const labelsYear = [1995, 2000, 2005, 2010, 2015, 2020, 2025];
  const epsYears = [452916.576, 359737.5072, 1632568.32, 1199131.88736, 915492.31008, 788028.31536, 30830.496];

  const labelsRegion = ["N","NE","C","W","S",  ];
  const epsRegion = [745742.841600001,199502.08416,6875316.36733329,622243.8,664797.578879998, ]
  const companyRegion = [20,8,122,17,12,]
  const coldRoomRegion = [241,41,1182,118,98,]
  const random = () => Math.floor(Math.random() * 500);
  const set1 = epsYears.map((e) => e/1000);
  const set2 = epsRegion.map((e) => e/1000);
  const dataYear = {
    labels: labelsYear,
    datasets: [
      {
        label: "Foam Mass (ton)",
        data: set1, //epsYears,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      // {
      //   label: "EPS ??",
      //   data: set2,
      //   borderColor: "rgb(53, 162, 235)",
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      // },
    ],
  };
  const foamMassSet = {
    labels: labelsRegion,
    datasets: [
      {
        label: "Foam Mass (ton)",
        data: set2, //epsRegion,
        borderColor: "rgb(162, 50, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const companyData = {
    labels: labelsRegion,
    datasets: [
      {
        label: "Number of companies",
        data: companyRegion,
        borderColor: "rgb(190, 173, 250)",
        backgroundColor: "rgba(186, 144, 198, 0.5)",
      },
    ],
  };
  const coldRoomData = {
    labels: labelsRegion,
    datasets: [
      {
        label: "Number of rooms",
        data: coldRoomRegion,
        borderColor: "rgb(179, 200, 144)",
        backgroundColor: "rgba(179, 200, 144, 0.5)",
      },
    ],
  };

  return (
    <div>
      <div className="justify-items-center text-center mt-4 text-xl">
      <h1 >Dashboard HBCD</h1>
      </div>
      <div className="lg:flex lg:flex-row lg:flex-wrap gap-4">
        <div><RPie className="min-h-[180px]" data={dataYear} chType={"Bar"} title={"EPS by Year"}/></div>
        <div><RPie className="min-h-[180px]"  data={foamMassSet} chType={"Bar"} title={"EPS by Region"}/></div>
        <div><RPie className="min-h-[180px]" data={companyData} chType={"Bar"} title={"Company by Region"}/></div>
        <div><RPie className="min-h-[180px]"  data={coldRoomData} chType={"Bar"} title={"Cold Room by Region"}/></div>
      </div>
    </div>
  );
};
export default HBCDDashboard;
