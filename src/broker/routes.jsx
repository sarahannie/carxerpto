
import { Home } from "../seller/page/dashboard/home";
import Profiles from "./page/dashboard/profiles";
import Setting, { SettingBroker } from "./page/dashboard/setting";
import List from "./page/dashboard/list";
import { FaList } from "react-icons/fa6";
import Analytic from "./page/dashboard/analytic";
import { IoAnalyticsSharp } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import Message from "./page/dashboard/message";
import History from "./page/dashboard/history";

import { IoHomeOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdOutlineSubscriptions } from "react-icons/md";
import SignIn from "../pages/SignIn";
import SubscriptionBroker from "./page/dashboard/subscription";
import { RiCoinLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import Brokerprofile from "./page/dashboard/profile/brokerprofile";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <IoHomeOutline {...icon} />,
        name: "dashboard",
        path: "/home",
        // element: <Home />,
      },
      {
        icon: <IoBagHandleOutline {...icon} />,
        name: "Order",
        path: "/seller-profile",
        // element: <Profiles />,
      },
      {
        icon: <FaList {...icon} />,
        name: "Listing",
        path: "/seller-product",
        // element: <List />,
      },
      {
        icon: <IoAnalyticsSharp {...icon} />,
        name: "analysis",
        path: "/analysis",
        // element: <Analytic />,
      },
      {
        icon: <LuMessageCircle {...icon} />,
        name: "message",
        path: "/message",
        // element: <Message/> ,
      },
      {
        icon: <IoPersonOutline {...icon} />,
        name: "Profile",
        path: "/brokerprofile",
        element: <Brokerprofile />,
      },
      {
        icon: <RiCoinLine  {...icon} />,
        name: "subscription",
        path: "/SubscriptionBroker",
        element: <SubscriptionBroker />,
      },
      {
        icon: <IoSettingsOutline {...icon} />,
        name: "setting",
        path: "/settingbroker",
        element: <SettingBroker />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <CiLogin {...icon} />,
        name: "Logout",
        path: "/signin",
        element: <SignIn />,
      },
      
    ],
  },
];

export default routes;
