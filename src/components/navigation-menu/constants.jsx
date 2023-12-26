import { RxDashboard } from "react-icons/rx";
import { RiTaskLine, RiSettings5Line } from "react-icons/ri";

export const MENU = [
  {
    id: 0,
    icon: <RxDashboard />,
    title: "Dashboard",
    href: "dashboard",
  },
  {
    id: 1,
    icon: <RiTaskLine />,
    title: "Tasks",
    href: "tasks",
  },
  {
    id: 2,
    icon: <RiSettings5Line />,
    title: "Settings",
    href: "settings",
  },
];
