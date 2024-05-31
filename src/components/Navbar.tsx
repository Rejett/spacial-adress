import { SiPlanetscale } from "react-icons/si";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
export default function Navbar() {
  return (
    <nav className="navbar bg-base-100 w-screen overflow-hidden">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <IoMdMenu className="text-3xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="#">Página Inicial</Link>
            </li>
            <li>
              <Link to="#">Pedidos</Link>
            </li>
            <li>
              <Link to="#">Produtos</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl">
          Mars<strong className="font-bold text-2xl -ml-2">Fleet</strong>
          <SiPlanetscale className="text-2xl text-mars" />
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <CiSearch className="text-2xl" />
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <IoIosNotifications className="text-2xl" />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
      <div className="avatar">
        <div className="w-10 rounded-full ml-2 mr-2">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </nav>
  );
}
