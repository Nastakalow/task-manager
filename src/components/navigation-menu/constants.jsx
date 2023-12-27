import { RxDashboard } from "react-icons/rx";
import { RiTaskLine } from "react-icons/ri";
import { LuUserCheck } from "react-icons/lu";

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
    icon: <LuUserCheck />,
    title: "Create User",
    href: "create-user",
  },
];
