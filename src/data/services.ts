import { Logistics, Ordering, PointOfSale } from "@/assets/icons";

export const routes = [
  {
    name: "home",
    link: "/",
    id: 1,
  },
  {
    name: "services",
    id: 2,
  },
  {
    name: "about_us",
    link: "/about-us",
    id: 3,
  },
  {
    name: "faqs",
    link: "/faqs",
    id: 4,
  },
  {
    name: "contact_us",
    link: "/contact-us",
    id: 5,
  },
];

export const services = [
  {
    id: 1,
    text: "point_of_sales",
    icon: PointOfSale,
    link: "point-of-sale",
  },
  {
    id: 2,
    text: "online_ordering",
    icon: Ordering,
    link: "online-ordering",
  },
  {
    id: 3,
    text: "logistics",
    icon: Logistics,
    link: "logistics",
  },
];
