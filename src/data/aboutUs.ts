import {
  EndTransparency,
  GlobalVision,
  StreamedTransaction,
  SupplyChain,
} from "@/assets/icons";
import {
  daniellaImg,
  hitoshiImg,
  nicholasImg,
  tolulopeImg,
} from "@/constant/imgs";

export const aboutUs = [
  {
    id: 1,
    icon: StreamedTransaction,
    title: "whychoosefmx_about_title1",
    description: "whychoosefmx_about_description1",
    image: nicholasImg,
  },
  {
    id: 2,
    icon: SupplyChain,
    title: "whychoosefmx_about_title2",
    description: "whychoosefmx_about_description2",
    image: daniellaImg,
  },
  {
    id: 3,
    icon: EndTransparency,
    title: "whychoosefmx_about_title3",
    description: "whychoosefmx_about_description3",
    image: hitoshiImg,
  },
  {
    id: 4,
    icon: GlobalVision,
    title: "whychoosefmx_about_title4",
    description: "whychoosefmx_about_description4",
    image: tolulopeImg,
  },
];

export const aboutUsCard = [
  {
    id: 1,
    title: "ourTeam_team_title1",
    description: "ourTeam_team_description1",
    image: nicholasImg,
    name: "Nicholas Gangemi",
  },
  {
    id: 2,
    name: "Hitoshi Akazawa",
    title: "ourTeam_team_title2",
    description: "ourTeam_team_description2",
    image: hitoshiImg,
  },
  {
    id: 3,
    name: "Daniella Toka",
    title: "ourTeam_team_title3",
    description: "ourTeam_team_description3",
    image: daniellaImg,
  },
  {
    id: 4,
    name: "Tolulope Ogunleye",
    title: "ourTeam_team_title4",
    description: "ourTeam_team_description4",
    image: tolulopeImg,
  },
];
