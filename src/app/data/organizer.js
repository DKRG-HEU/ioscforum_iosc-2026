// app/data/organizer.js

const BASE_PATH =
  process.env.NODE_ENV === "production"
    ? "/ioscforum_iosc-2026"
    : "";

const organizerImage = (filename) =>
  `${BASE_PATH}/images/organizers/${filename}`;

export const seniorOrganizers = [
  {
    id: "general-chair",
    role: "General Chair",
    name: "Zhiwen Yu",
    affiliation: "Harbin Engineering University",
    image: organizerImage("Zhiwen Yu.png"),
    description:
      "Providing overall leadership and direction for IOSC Forum 2026.",
  },

  // Program Chairs
  {
    id: "program-chair-01",
    role: "Program Chair",
    name: "Dapeng Man",
    affiliation: "Harbin Engineering University",
    image: organizerImage("Dapeng Man.png"),
    description:
      "Supporting the technical program and academic activities of the forum.",
  },
  {
    id: "program-chair-02",
    role: "Program Chair",
    name: "Naixue Xiong",
    affiliation: "Harbin Engineering University",
    image: organizerImage("Naixue Xiong.jpg"),
    description:
      "Supporting the technical program and academic activities of the forum.",
  },
  {
    id: "program-chair-03",
    role: "Program Chair",
    name: "Wei Li",
    affiliation: "Harbin Engineering University",
    image: organizerImage("Wei Li.png"),
    description:
      "Supporting the technical program and academic activities of the forum.",
  },

  // Local Chairs
  {
    id: "local-chair-01",
    role: "Local Chair",
    name: "Hongwu Lv",
    affiliation: "Harbin Engineering University",
    image: organizerImage("吕宏武-Hongwu Lv.jpg"),
    description:
      "Supporting local arrangements and on-site forum activities.",
  },
  {
    id: "local-chair-02",
    role: "Local Chair",
    name: "Junhui Jiang",
    affiliation: "Harbin Engineering University",
    image: organizerImage("江俊慧=Junhui Jiang.jpg"),
    description:
      "Supporting local arrangements and on-site forum activities.",
  },
  {
    id: "local-chair-03",
    role: "Local Chair",
    name: "Rongsheng Li",
    affiliation: "Harbin Engineering University",
    image: organizerImage("李熔盛-Rongsheng Li.jpg"),
    description:
      "Supporting local arrangements and on-site forum activities.",
  },
];

export const organizingCommittee = [
  {
    id: "organizer-01",
    role: "Organizing Committee",
    name: "Hui Wang",
    affiliation: "Harbin Engineering University",
    image: organizerImage("王辉-Hui Wang.jpg"),
  },
  {
    id: "organizer-02",
    role: "Organizing Committee",
    name: "Tingting Wu",
    affiliation: "Harbin Engineering University",
    image: organizerImage("吴婷婷-Tingting Wu.jpg"),
  },
  {
    id: "organizer-03",
    role: "Organizing Committee",
    name: "Xiaolin Guo",
    affiliation: "Harbin Engineering University",
    image: organizerImage("郭晓琳-Xiaolin Guo.jpg"),
  },
  {
    id: "organizer-04",
    role: "Organizing Committee",
    name: "Wenqi Zheng",
    affiliation: "Harbin Engineering University",
    image: organizerImage("郑文祺-Wenqi Zheng.png"),
  },
  {
    id: "organizer-05",
    role: "Organizing Committee",
    name: "Kaiyu Wang",
    affiliation: "Harbin Engineering University",
    image: organizerImage("王开宇-Kaiyu Wang.jpg"),
  },
  {
    id: "organizer-06",
    role: "Organizing Committee",
    name: "Zhiqi Pang",
    affiliation: "Harbin Engineering University",
    image: organizerImage("庞志奇-Zhiqi Pang.jpg"),
  },
];

