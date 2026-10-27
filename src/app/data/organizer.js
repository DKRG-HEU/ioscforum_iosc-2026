
const BASE_PATH =
  process.env.NODE_ENV === "production"
    ? "/ioscforum_iosc-2026"
    : "";

export const seniorOrganizers = [
  {
    id: "general-chair",
    role: "General Chair",
    name: "Zhiwen Yu",
    affiliation: "Harbin Engineering University",
    image: `${BASE_PATH}/images/organizers/general-chair.jpg`,
    description:
      "Providing overall leadership and direction for the conference.",
  },
  {
    id: "program-chair-01",
    role: "Program Chair",
    name: "Guangsheng Feng",
    affiliation: "Harbin Engineering University",
    image: `${BASE_PATH}/images/organizers/program-chair.jpg`,
    description:
      "Overseeing the technical program, paper review, and research sessions.",
  },
  {
    id: "program-chair-02",
    role: "Program Chair",
    name: "Dapeng Man",
    affiliation: "Harbin Engineering University",
    image: `${BASE_PATH}/images/organizers/program-chair.jpg`,
    description:
      "Overseeing the technical program, paper review, and research sessions.",
  },
  {
    id: "local-chair",
    role: "Local Chair",
    name: "Wei Li",
    affiliation: "Harbin Engineering University",
    image: `${BASE_PATH}/images/organizers/Wei Li.png`,
    description:
      "Coordinating local arrangements and on-site conference activities.",
  },
];

export const organizingCommittee = [
  {
    id: "organizer-01",
    role: "Organizing Committee",
    name: "Hui Wang",
    affiliation: "Harbin Engineering University",
    image: `${BASE_PATH}/images/organizers/Hui Wang.jpg`,
  },
  {
    id: "organizer-02",
    role: "Organizing Committee",
    name: "Tingting Wu",
    affiliation: "Harbin Engineering University",
    image: `${BASE_PATH}/images/organizers/Tingting Wu.jpg`,
  },
  {
    id: "organizer-03",
    role: "Organizing Committee",
    name: "Xiaolin Guo",
    affiliation: "Harbin Engineering University",
    image: `${BASE_PATH}/images/organizers/Xiaolin Guo.jpg`,
  },
  {
    id: "organizer-04",
    role: "Organizing Committee",
    name: "Organizer Name 04",
    affiliation: "University or Institution",
    image: `${BASE_PATH}/images/organizers/organizer-04.jpg`,
  },
  {
    id: "organizer-05",
    role: "Organizing Committee",
    name: "Organizer Name 05",
    affiliation: "University or Institution",
    image: `${BASE_PATH}/images/organizers/organizer-05.jpg`,
  },
  {
    id: "organizer-06",
    role: "Organizing Committee",
    name: "Organizer Name 06",
    affiliation: "University or Institution",
    image: `${BASE_PATH}/images/organizers/organizer-06.jpg`,
  },
];
