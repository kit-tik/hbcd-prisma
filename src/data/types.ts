type KnowledgeItem = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  href?: string;
};

export type KnowledgeItems = KnowledgeItem[];

export const KHbcdItemsList: KnowledgeItems = [
  {
    id: 1,
    title: "เกี่ยวกับ HBCD",
    desc: "ความรู้พื้นฐานเกี่ยวข้องกับ HBCD",
    img: "/kmMenu/about.png",
    href: "/kHbcdAbout",
  },
  {
    id: 2,
    title: "Stockholms Convention",
    desc: "ความเป็นมาและกฏหมายที่เกี่ยวข้องกับ Stockholms Convention",
    img: "/kmMenu/stockholm.png",
    href: "/kStockholms",
  },
  {
    id: 3,
    title: "HBCD Guidelines",
    desc: "แนวปฏิบัติเกี่ยวกับสาร HBCD ในผลิตภัณฑ์",
    img: "/kmMenu/guideline.png",
    href: "/kHbcdGuideline",
  },
  {
    id: 4,
    title: "เอกสารการอบรม HBCD",
    desc: "เอกสารการอบรมการสร้างความตระหนักเกี่ยวกับ HBCD",
    img: "/kmMenu/event.png",
    href: "/kHbcdEventDocs",
  },
];

export const KPfasItemsList: KnowledgeItems = [
  {
    id: 1,
    title: "เกี่ยวกับ PFAS",
    desc: "ความรู้พื้นฐานเกี่ยวข้องกับ PFAS",
    img: "/kmMenu/about.png",
    href: "/kPfasAbout",
  },
  {
    id: 2,
    title: "Stockholms Convention",
    desc: "ความเป็นมาและกฏหมายที่เกี่ยวข้องกับ Stockholms Convention",
    img: "/kmMenu/stockholm.png",
    href: "/kStockholms",
  },
  {
    id: 3,
    title: "PFAS Guidelines",
    desc: "แนวปฏิบัติเกี่ยวกับสาร PFAS ในผลิตภัณฑ์",
    img: "/kmMenu/guideline.png",
    href: "/kPfasGuideline",
  },
  {
    id: 4,
    title: "เอกสารการอบรม PFAS",
    desc: "เอกสารการอบรมการสร้างความตระหนักเกี่ยวกับ PFAS",
    img: "/kmMenu/event.png",
    href: "/kPfasEventDocs",
  },
];

export type ColdRoom = {
  RID: string;
  roomType: string;
  coldRoomAddress: string;
  tambon: string;
  amper: string;
  province: string;
  zip: string;
  productType: string;
  roomWidth: number;
  roomLength: number;
  roomHeight: number;
  maxTemp: number;
  minTemp: number;
  constructionType: string;
  year: number;
  panelClass: string;
  foamMass: number;
  bizID: string;  // relationship to HBCDCompany
  company: {name: string} 
};
export type HBCDCompany = {
  name: string;
  bizType: string;
  bizID: string;
  licenseNo: string;
  officeAddress: string;
  officeTelNo: string;
  province: string;
  coldRooms?: {RID: string}[]; // relationship to ColdRooms
  _count: {coldRooms: number};
};
// export const company: HBCDCompany = [];

// export const singleColdRoom: ColdRoom = {};
