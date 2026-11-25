// const BASE_PATH =
//   process.env.NODE_ENV === "production"
//     ? "/ioscforum_iosc-2026"
//     : "";

// import {
//   CalendarDays,
//   Hotel,
//   Utensils,
//   MapPin,
// } from "lucide-react";

// export const forumDetails = {
//   title: "Forum Schedule",
//   subtitle: "& Event Information",
//   institution: "Harbin Engineering University",
//   eventDates: "November 28–29, 2026",
//   mainForumDate: "November 28–29, 2026",
//   mainForumTime: "November 28: 08:30–18:00 | November 29: 08:30–11:30",
//   venue: "Qihang Teacher Salon",
// };

// export const eventDays = [
//   {
//     date: "28",
//     month: "NOV",
//     fullDate: "November 28, 2026",
//     title: "Forum Programme – Day 1",
//     description:
//       "The first day of IOSC Forum 2026 will take place at Qihang Teacher Salon, Harbin Engineering University.",
//     time: "08:30 AM – 06:00 PM",
//   },
//   {
//     date: "29",
//     month: "NOV",
//     fullDate: "November 29, 2026",
//     title: "Forum Programme – Day 2",
//     description:
//       "The second day of IOSC Forum 2026 will continue at Qihang Teacher Salon, Harbin Engineering University.",
//     time: "08:30 AM – 11:30 AM",
//   },
// ];

// export const mealArrangements = [
//   {
//     date: "November 28, 2026",
//     time: "Lunch",
//     restaurant: "International Exchange Center",
//     venue: "Harbin Engineering University",
//     note: "Lunch arrangement for forum participants.",
//   },
//   {
//     date: "November 28, 2026",
//     time: "Dinner",
//     restaurant: "Portman Russian Restaurant",
//     venue: "Harbin, China",
//     note: "Dinner arrangement for forum participants.",
//   },
//   {
//     date: "November 29, 2026",
//     time: "Lunch",
//     restaurant: "International Exchange Center",
//     venue: "Harbin Engineering University",
//     note: "Lunch arrangement for forum participants.",
//   },
// ];

// export const accommodation = {
//   hotel: "Wanda Sofitel",
//   address: "Harbin, China",
//   instructions:
//     "Wanda Sofitel is the designated accommodation for IOSC Forum 2026 participants.",
// };

// export const informationCards = [
//   {
//     icon: MapPin,
//     title: "Forum Venue",
//     description: "Qihang Teacher Salon",
//     detail: "Harbin Engineering University",
//   },
//   {
//     icon: Hotel,
//     title: "Accommodation",
//     description: accommodation.hotel,
//     detail: accommodation.address,
//   },
//   {
//     icon: Utensils,
//     title: "Meal Arrangements",
//     description:
//       "Lunch on November 28 and 29 will be served at the International Exchange Center. Dinner on November 28 will be at Portman Russian Restaurant.",
//     detail: "Three meal arrangements",
//   },
// ];

// export const summaryItems = [
//   {
//     icon: CalendarDays,
//     label: "Event Dates",
//     value: forumDetails.eventDates,
//   },
//   {
//     icon: MapPin,
//     label: "Forum Venue",
//     value: "Qihang Teacher Salon",
//   },
//   {
//     icon: Hotel,
//     label: "Accommodation",
//     value: accommodation.hotel,
//   },
// ];

// /*
//  * Keep these image files inside public/images/:
//  * campus.jpg
//  * campus-2.jpg
//  * campus-3.jpg
//  * campus-4.jpg
//  *
//  * Each section uses a different campus background.
//  */
// export const campusBackgrounds = {
//   hero: `${BASE_PATH}/images/campus.jpg`,
//   schedule: `${BASE_PATH}/images/campus-2.jpg`,
//   talks: `${BASE_PATH}/images/campus-3.jpg`,
//   travel: `${BASE_PATH}/images/campus-4.jpg`,
//   registration: `${BASE_PATH}/images/campus.jpg`,
// };



import {
  CalendarDays,
  Hotel,
  Utensils,
  MapPin,
} from "lucide-react";

const BASE_PATH =
  process.env.NODE_ENV === "production"
    ? "/ioscforum_iosc-2026"
    : "";

export const forumDetails = {
  title: "Forum Schedule",
  subtitle: "& Event Information",
  institution: "Harbin Engineering University",
  eventDates: "November 27–29, 2026",
  mainForumDate: "November 28–29, 2026",
  mainForumTime:
    "November 28: 08:00–20:00 | November 29: 08:30–13:00",
  venue: "Qihang Teacher Salon",
};

// Complete conference programme
export const detailedSchedule = [
  {
    date: "November 27, 2026",
    day: "Friday",
    dateNumber: "27",
    month: "NOV",
    title: "Arrival and Welcome",
    description: "Arrival and hotel arrangements for invited speakers and participants.",
    sessions: [
      {
        time: "Arrival",
        title: "Airport Pickup and Hotel Check-in",
        type: "travel",
        location: "Wanda Sofitel Hotel",
      },
      {
        time: "18:00",
        title: "Welcome Dinner",
        type: "dinner",
        location: "Taigongwang Cantonese Restaurant (Tentative)",
      },
    ],
  },
  {
    date: "November 28, 2026",
    day: "Saturday",
    dateNumber: "28",
    month: "NOV",
    title: "Forum Programme – Day 1",
    description: "Morning and afternoon sessions at Qihang Teacher Salon.",
    sessions: [
      {
        time: "08:00",
        title: "Departure from Wanda Sofitel Hotel",
        description: "11 invited speakers will travel by Coaster bus.",
        type: "travel",
      },
      {
        time: "08:20–08:30",
        title: "Group Photography",
        location: "Qihang Teacher Salon",
        type: "activity",
      },
      {
        time: "08:30–09:00",
        title: "Forum Opening Ceremony",
        description:
          "Opening remarks, introduction of guests, and welcome address by President Yu Zhiwen.",
        type: "ceremony",
      },
      {
        time: "09:00–09:30",
        title: "Sudip Misra",
        type: "speaker",
      },
      {
        time: "09:30–10:00",
        title: "Jie Wu",
        type: "speaker",
      },
      {
        time: "10:00–10:30",
        title: "Coffee Break",
        type: "break",
      },
      {
        time: "10:30–11:00",
        title: "Naixue Xiong",
        type: "speaker",
      },
      {
        time: "11:00–11:30",
        title: "Yan Zhang",
        type: "speaker",
      },
      {
        time: "11:40–14:00",
        title: "Lunch and Break",
        description: "Lunch followed by a rest period.",
        location: "International Exchange Center",
        type: "lunch",
      },
      {
        time: "14:00–14:30",
        title: "Yu Guan",
        type: "speaker",
      },
      {
        time: "14:30–15:00",
        title: "Xiaohua Jia",
        type: "speaker",
      },
      {
        time: "15:00–15:30",
        title: "Coffee Break",
        type: "break",
      },
      {
        time: "15:30–16:00",
        title: "Mo Li",
        type: "speaker",
      },
      {
        time: "16:00–16:30",
        title: "Zhenjiang Li",
        type: "speaker",
      },
      {
        time: "16:30–17:00",
        title: "Lei Yang",
        type: "speaker",
      },
      {
        time: "18:00–20:00",
        title: "Conference Dinner",
        location: "Portman Western Restaurant",
        type: "dinner",
      },
    ],
  },
  {
    date: "November 29, 2026",
    day: "Sunday",
    dateNumber: "29",
    month: "NOV",
    title: "Forum Programme – Day 2",
    description: "Final morning sessions at Qihang Teacher Salon.",
    sessions: [
      {
        time: "08:30–09:00",
        title: "Dongyao Chen",
        type: "speaker",
      },
      {
        time: "09:00–09:30",
        title: "Bin Xiao",
        type: "speaker",
      },
      {
        time: "09:30–10:00",
        title: "Coffee Break",
        type: "break",
      },
      {
        time: "10:00–10:30",
        title: "Dingqi Yang",
        type: "speaker",
      },
      {
        time: "10:30–11:00",
        title: "Wei Li",
        type: "speaker",
      },
      {
        time: "12:00–13:00",
        title: "Lunch",
        location: "International Exchange Center",
        type: "lunch",
      },
    ],
  },
];

// Two main forum days
export const eventDays = [
  {
    date: "28",
    month: "NOV",
    fullDate: "November 28, 2026",
    title: "Forum Programme – Day 1",
    description:
      "The first day of IOSC Forum 2026 will take place at Qihang Teacher Salon, Harbin Engineering University.",
    time: "08:00 AM – 08:00 PM",
  },
  {
    date: "29",
    month: "NOV",
    fullDate: "November 29, 2026",
    title: "Forum Programme – Day 2",
    description:
      "The second day of IOSC Forum 2026 will continue at Qihang Teacher Salon, Harbin Engineering University.",
    time: "08:30 AM – 01:00 PM",
  },
];

export const mealArrangements = [
  {
    date: "November 27, 2026",
    time: "18:00",
    restaurant: "Taigongwang Cantonese Restaurant",
    venue: "Harbin, China",
    note: "Welcome dinner (tentative arrangement).",
  },
  {
    date: "November 28, 2026",
    time: "11:40–14:00",
    restaurant: "International Exchange Center",
    venue: "Harbin Engineering University",
    note: "Lunch and afternoon session break.",
  },
  {
    date: "November 28, 2026",
    time: "18:00–20:00",
    restaurant: "Portman Western Restaurant",
    venue: "Harbin, China",
    note: "Conference dinner.",
  },
  {
    date: "November 29, 2026",
    time: "12:00–13:00",
    restaurant: "International Exchange Center",
    venue: "Harbin Engineering University",
    note: "Lunch for forum participants.",
  },
];

export const accommodation = {
  hotel: "Wanda Sofitel",
  address: "Harbin, China",
  instructions:
    "Wanda Sofitel is the designated accommodation for IOSC Forum 2026 participants. Airport pickup and hotel check-in are arranged for November 27.",
};

export const informationCards = [
  {
    icon: MapPin,
    title: "Forum Venue",
    description: "Qihang Teacher Salon",
    detail: "Harbin Engineering University",
  },
  {
    icon: Hotel,
    title: "Accommodation",
    description: accommodation.hotel,
    detail: accommodation.address,
  },
  {
    icon: Utensils,
    title: "Meal Arrangements",
    description:
      "Welcome dinner on November 27, lunch and dinner on November 28, and lunch on November 29.",
    detail: "Four meal arrangements",
  },
];

export const summaryItems = [
  {
    icon: CalendarDays,
    label: "Event Dates",
    value: forumDetails.eventDates,
  },
  {
    icon: MapPin,
    label: "Forum Venue",
    value: "Qihang Teacher Salon",
  },
  {
    icon: Hotel,
    label: "Accommodation",
    value: accommodation.hotel,
  },
];

/*
 * Keep these image files inside public/images/:
 * campus.jpg
 * campus-2.jpg
 * campus-3.jpg
 * campus-4.jpg
 */
export const campusBackgrounds = {
  hero: `${BASE_PATH}/images/campus.jpg`,
  schedule: `${BASE_PATH}/images/campus-2.jpg`,
  talks: `${BASE_PATH}/images/campus-3.jpg`,
  travel: `${BASE_PATH}/images/campus-4.jpg`,
  registration: `${BASE_PATH}/images/campus.jpg`,
};

