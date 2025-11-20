import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import SideNavbar from "../components/Side-Navbar";




const Layout = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
     
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-white shadow-md">
        <img src={'/assets/logo/logo-img-claros-home.png'} alt="person" className="size-12 rounded-full" />
        <button onClick={() => setNav(!nav)} className="text-2xl">
          <FaBars />
        </button>
      </div>

     
      <aside
        className={`
          fixed z-40 top-0 left-0 h-full w-64 bg-white shadow-xl transition-transform duration-300 overflow-y-auto
          ${nav ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:shadow-lg lg:ring lg:ring-gray-900/5 lg:px-6 lg:py-8
        `}
      >
        <SideNavbar closeNav={() => setNav(false)} />
      </aside>

      
      <div className="flex-1 flex flex-col lg:ml-64 pt-16 lg:pt-0">
        <main className="flex-1 w-full overflow-y-auto">
          <Outlet />
        </main>
      </div>

     
      {nav && (
        <div
          className="lg:hidden fixed inset-0 bg-opacity-50 z-30"
          onClick={() => setNav(false)}
        />
      )}
    </div>
  );
};

export default Layout;