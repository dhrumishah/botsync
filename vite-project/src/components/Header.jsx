import adminPortalLogo from "../assets/admin-portal.svg";
import userLogo from "../assets/user.svg";
import notificationLogo from "../assets/notification.svg";
import menuIcon from "../assets/menu.svg";

const Header = ({ setIsSidebarOpen }) => {
  return (
    <div className="flex items-center bg-[#00003EE8] h-10 text-white px-4 w-full">
      <div className="flex justify-between items-center w-full">
        
        <div className="md:hidden flex items-center">
          <img
            src={menuIcon}
            alt="Menu"
            className="h-6 cursor-pointer"
            onClick={() => setIsSidebarOpen(prev => !prev)}
          />
        </div>

        <div className="hidden md:flex items-center gap-2">
          <img src={adminPortalLogo} alt="Admin Portal" className="h-6" />
          <div>Admin Portal</div>
        </div>

        <div className="flex items-center gap-2">
          <img src={notificationLogo} alt="Notification" className="h-6 cursor-pointer" />
          <img src={userLogo} alt="User" className="h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
