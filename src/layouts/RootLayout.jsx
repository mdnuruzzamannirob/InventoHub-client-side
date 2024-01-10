import { Outlet } from "react-router-dom";
import RootNavbar from "../components/layoutComp/rootComp/RootNavbar";

const RootLayout = () => {
  return (
    <div className="h-screen bg-[#1d366f]">
      <RootNavbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
