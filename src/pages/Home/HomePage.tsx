import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function HomePage() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-gray-300 flex flex-col ">
      <Navbar />
      <Outlet />
    </div>
  );
}
