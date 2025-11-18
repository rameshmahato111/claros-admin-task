
import { FaHome, FaUsers, FaProductHunt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo-img-2-opti.png";
import { IoAnalytics } from "react-icons/io5";
import { FcCollaboration } from "react-icons/fc";
import { BiDollar } from "react-icons/bi";
import { TbReportSearch } from "react-icons/tb";


const SideNavbar = ({ closeNav }: { closeNav: () => void }) => {
  const NavItems = [
    { name: "home", navUrl: "/", icon: <FaHome /> },
    { name: "products", navUrl: "/products", icon: <FaProductHunt /> },
    { name: "users", navUrl: "/users", icon: <FaUsers /> },
    { name: "analytics", navUrl: "/analytics", icon: <IoAnalytics /> },
    { name: "activities", navUrl: "/activities", icon: <FcCollaboration /> },
    { name: "team member", navUrl: "/team-members", icon: <FaUsers /> },
    { name: "revenue", navUrl: "/revenue", icon: <BiDollar /> },
    { name: "reports", navUrl: "/reports", icon: <TbReportSearch /> },


  ];

  return (
    <nav className="flex flex-col justify-between gap-40 lg:px-0 px-4  py-4">
      
      <div>
      
        <div className="flex items-center gap-3 mb-12 ring rounded-lg ring-gray-900/5 shadow-lg px-2">
          <img src={Logo} alt="logo" className="w-12 h-12 object-contain" />
          <span className="text-2xl font-semibold text-gray-800 tracking-tight">
            Claros
          </span>
          <div>
            
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col justify-between space-y-5 ">
          {NavItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.navUrl}
                onClick={closeNav}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium capitalize transition-colors
                  ${
                    isActive
                      ? "bg-black text-white shadow"
                      : "text-gray-700 hover:bg-gray-100 hover:text-black"
                  }`
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
      
        </ul>
      </div>

     
    </nav>
  );
};

export default SideNavbar;