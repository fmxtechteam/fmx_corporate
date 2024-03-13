import { Logistics, Ordering, PointOfSale } from "@/assets/icons";

export const routes = [
  {
    name: "home",
    link: "/",
    id: "/home",
  },
  {
    name: "services",
    id: "services",
  },
  {
    name: "about_us",
    link: "/about-us",
    id: "about-us",
  },
  {
    name: "faqs",
    link: "/faqs",
    id: "faqs",
  },
  {
    name: "contact_us",
    link: "/contact-us",
    id: "contact-us",
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
