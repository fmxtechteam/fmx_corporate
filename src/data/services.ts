import { Logistics, Ordering, PointOfSale } from "@/assets/icons";

export const routes = [
  {
    name: "Home",
    link: "/",
    id: 1,
  },
  {
    name: "Services",
    id: 2,
  },
  {
    name: "About us",
    link: "/about-us",
    id: 3,
  },
  {
    name: "FAQs",
    link: "/faqs",
    id: 4,
  },
  {
    name: "Contact us",
    link: "/contact-us",
    id: 5,
  },
];

export const services = [
  {
    id: 1,
    text: "Point of sale",
    icon: PointOfSale,
    link: "point-of-sale",
  },
  {
    id: 2,
    text: "Online ordering",
    icon: Ordering,
    link: "online-ordering",
  },
  {
    id: 3,
    text: "Logistics",
    icon: Logistics,
    link: "logistics",
  },
];
