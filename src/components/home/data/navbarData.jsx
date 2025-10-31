import { BsPeople, BsShop } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { MdOutlineOndemandVideo } from "react-icons/md";

export const navbar_data = [
  {
    id: 1,
    title: "Home",
    icon: <GoHome size={25} />,
    link: "/home",
  },
  {
    id: 2,
    title: "Friends",
    icon: <BsPeople size={25} />,
    link: "/friends",
  },
  {
    id: 1,
    title: "Video",
    icon: <MdOutlineOndemandVideo size={25} />,
    link: "/videos",
  },
  {
    id: 1,
    title: "Marketplace",
    icon: <BsShop size={25} />,
    link: "/marketplace",
  },
];
