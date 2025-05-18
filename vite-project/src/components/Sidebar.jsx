import { NavLink } from "react-router-dom";

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
          fixed md:static top-0 left-0 h-screen w-[200px] bg-white border-r shadow-xl border-[#80808066] 
          px-4 pt-8 gap-2 z-50 flex flex-col transition-transform duration-300 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:flex
        `}
      >
        <button
          className="self-end mb-4 text-gray-500 text-sm md:hidden"
          onClick={handleClose}
        >
          Close ✕
        </button>

        <NavLink
          to="/"
          end
          onClick={handleClose}
          className={({ isActive }) =>
            `flex gap-2 items-center px-2 py-1.5 rounded-md hover:bg-blue-100 ${
              isActive ? "text-blue-500" : "text-[#808080]"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/applications"
          onClick={handleClose}
          className={({ isActive }) =>
            `flex gap-2 items-center px-2 py-1.5 rounded-md hover:bg-blue-100 ${
              isActive ? "text-blue-500" : "text-[#808080]"
            }`
          }
        >
          Applications
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
