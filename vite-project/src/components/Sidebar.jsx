import { NavLink } from "react-router-dom";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const handleClose = () => {
    if (setIsSidebarOpen) setIsSidebarOpen(false);
  };

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={handleClose}
        />
      )}

      <div
        className={`
          fixed md:static top-0 left-0 w-[200px] bg-white border-r shadow-xl border-[#80808066] 
          pt-8 gap-2 z-50 flex flex-col transition-transform duration-300 
          ${isSidebarOpen ? "translate-x-0 h-full" : "-translate-x-full  h-screen"} 
          md:translate-x-0 md:flex
        `}
      >
        <button
          className="self-end mb-4 mr-4 text-gray-500 text-sm md:hidden"
          onClick={handleClose}
        >
          Close ✕
        </button>

        <NavLink
          to="/"
          end
          onClick={handleClose}
          className={({ isActive }) =>
            `flex gap-2 items-center p-2 hover:bg-blue-100 ${
              isActive ? "text-blue-500 border-r-2 border-blue-500" : "text-[#808080]"
            }`
          }
        >
          <FiHome />
          <div>Home</div>
        </NavLink>

        <NavLink
          to="/applications"
          onClick={handleClose}
          className={({ isActive }) =>
            `flex gap-2 items-center p-2 hover:bg-blue-100 ${
              isActive ? "text-blue-500 border-r-2 border-blue-500" : "text-[#808080]"
            }`
          }
        >
          <FaRegPenToSquare />
          <div>Applications</div>
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
