
// import { Home } from "../seller/page/dashboard/home";
// import Profiles from "./page/dashboard/profiles";
// import Setting from "./page/dashboard/setting";
// import List from "./page/dashboard/list";
import { FaList } from "react-icons/fa6";
// import Analytic from "./page/dashboard/analytic";
import { IoAnalyticsSharp } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
// import Message from "./page/dashboard/message";
// import History from "./page/dashboard/history";
// import Subscription from "./page/dashboard/subscription";
import { IoHomeOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdOutlineSubscriptions } from "react-icons/md";
import Homeadmin from "./page/dashboard/homeadmin";
import Usermanagement from "./page/dashboard/usermanagement";
import Listadmin from "./page/dashboard/listadmin";
import Analyticadmin from "./page/dashboard/analysisadmin";
import Historyadmin from "./page/dashboard/historyadmin";
import Subscriptionadmin from "./page/dashboard/subscription/subscriptionadmin";


// import SignIn from "../pages/SignIn";

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
        path: "/admin",
        // element: <Homeadmin />,
      },
      {
        icon: <IoBagHandleOutline {...icon} />,
        name: "User management",
        path: "/user",
        element: <Usermanagement />,
      },
      {
        icon: <FaList {...icon} />,
        name: "Listing",
        path: "/listing",
        element: <Listadmin />,
      },
      {
        icon: <IoAnalyticsSharp {...icon} />,
        name: "analysis",
        path: "/analyticadmin",
        element: <Analyticadmin />,
      },
      {
        icon: <MdOutlineHistoryToggleOff {...icon} />,
        name: "history",
        path: "/historyadmin",
        element: <Historyadmin />,
      },
      {
        icon: <MdOutlineSubscriptions  {...icon} />,
        name: "subscription",
        path: "/subscriptionadmin",
        element: <Subscriptionadmin />,
      },
      {
        icon: <LuMessageCircle {...icon} />,
        name: "message",
        path: "/message",
        // element: <Message/> ,
      },
     
     
      {
        icon: <IoSettingsOutline {...icon} />,
        name: "setting",
        path: "/setting",
        // element: <Setting />,
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
        // element: <SignIn />,
      },
      
    ],
  },
];

export default routes;
