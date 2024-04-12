import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home } from "../seller/page/dashboard/home";
import { IoBagHandleSharp } from "react-icons/io5";
// import { Profile} from "../seller/page/dashboard/profile";
import {  Tables } from "../seller/page/dashboard/tables";
import { Notifications } from "../seller/page/dashboard/notifications";
import {  SignUp } from "../seller/page/auth/sign-up";
import { SignIn} from "../seller/page/auth/sign-in";
import Profiles from "./page/dashboard/profiles";
import Setting from "./page/dashboard/setting";
import List from "./page/dashboard/list";
import { FaList } from "react-icons/fa6";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <IoBagHandleSharp {...icon} />,
        name: "Order",
        path: "/seller-profile",
        element: <Profiles />,
      },
      {
        icon: <FaList {...icon} />,
        name: "Listing",
        path: "/seller-product",
        element: <List />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
