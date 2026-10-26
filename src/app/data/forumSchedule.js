// app/data/forumSchedule.js
const BASE_PATH =
  process.env.NODE_ENV === 'production'
    ? '/ioscforum_iosc-2026'
    : '';
import {
  CalendarDays,
  Hotel,
  Utensils,
  Bus,
} from "lucide-react";

export const forumDetails = {
  title: "Forum Schedule",
  subtitle: "& Event Information",
  institution: "Harbin Engineering University",
  eventDates: "11–13 December 2025",
  mainForumDate: "13 December 2025",
  mainForumTime: "08:30–17:30",
};

export const eventDays = [
  {
    date: "11",
    month: "DEC",
    fullDate: "December 11, 2025",
    title: "Arrival & Hotel Check-in",
    description:
      "Arrive in Harbin and check in at Sofitel Hotel Wanda Harbin. A welcome dinner is scheduled for the evening.",
  },
  {
    date: "12",
    month: "DEC",
    fullDate: "December 12, 2025",
    title: "Forum Activities",
    description:
      "Forum-related activities and the scheduled evening dinner.",
  },
  {
    date: "13",
    month: "DEC",
    fullDate: "December 13, 2025",
    title: "Main Forum",
    description:
      "The main forum programme runs from 08:30 to 17:30.",
  },
];

export const mealArrangements = [
  {
    date: "December 11",
    time: "18:30",
    restaurant: "Harbin Guo…",
    venue: "Private Room 207, 2nd Floor",
    note: "Restaurant name needs confirmation from the original schedule.",
  },
  {
    date: "December 12",
    time: "19:00",
    restaurant: "Qing Seafood Restaurant",
    venue: "Private Room 403",
    note: "Confirm the complete address and floor before publication.",
  },
  {
    date: "December 13",
    time: "To be confirmed",
    restaurant: "Portman Restaurant (Daoli Branch)",
    venue: "No. 76, Ganshui Road, Xiangfang District",
    note: "Please verify the date, venue, and address against the original programme.",
  },
];

export const accommodation = {
  hotel: "Sofitel Hotel Wanda Harbin",
  address: "No. 68, Ganshui Road, Xiangfang District, Harbin, China",
  instructions:
    "Separate event check-in is not required. Please proceed directly to the hotel to complete your hotel check-in.",
};

export const transportation = {
  title: "Point-to-point Shuttle Service",
  description:
    "Point-to-point shuttle service will be provided. Please follow the transportation instructions shared by the organizing committee.",
};

export const informationCards = [
  {
    icon: Utensils,
    title: "Meal Arrangements",
    description:
      "Dinner is scheduled for December 11 at 18:30 and December 12 at 19:00. Check the meal details below and confirm any changes with the organizers.",
  },
  {
    icon: Hotel,
    title: "Accommodation",
    description: accommodation.hotel,
    detail: accommodation.address,
  },
  {
    icon: Bus,
    title: "Transportation",
    description: transportation.description,
  },
];

export const summaryItems = [
  {
    icon: CalendarDays,
    label: "Event dates",
    value: forumDetails.eventDates,
  },
  {
    icon: CalendarDays,
    label: "Main forum",
    value: "13 December · 08:30–17:30",
  },
  {
    icon: Hotel,
    label: "Accommodation",
    value: accommodation.hotel,
  },
];

/*
 * Add these images to public/images/:
 * campus.jpg
 * campus-2.jpg
 * campus-3.jpg
 * campus-4.jpg
 *
 * Each section uses a different image as its background.
 */
export const campusBackgrounds = {
  hero: `${BASE_PATH}/images/campus.jpg`,
  schedule: `${BASE_PATH}/images/campus-2.jpg`,
  talks: `${BASE_PATH}/images/campus-3.jpg`,
  travel: `${BASE_PATH}/images/campus-4.jpg`,
  registration: `${BASE_PATH}/images/campus.jpg`,
};