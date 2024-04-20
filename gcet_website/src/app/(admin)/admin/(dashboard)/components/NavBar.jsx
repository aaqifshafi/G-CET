import {
  faArrowRightFromBracket,
  faBell,
  faDatabase,
  faPaperclip,
  faSquarePen,
  faTable,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";

const NavBar = ({ isMenuOpen }) => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("authorization");
    sessionStorage.removeItem("authorization");
    router.replace("/admin/login");
  };
  const NAV_ITEMS = [
    {
      name: "DashBoard",
      icon: faTable,
      link: "/admin/dashboard",
    },
    {
      name: "Received Application ",
      icon: faUniversity,
      link: "/admin/applications",
    },
    {
      name: "Pending Application",
      icon: faDatabase,
      link: "/admin/pending",
    },
    {
      name: "Upload Notice",
      icon: faBell,
      link: "/admin/uploadNotice",
    },
    {
      name: "Upload Result",
      icon: faSquarePen,
      link: "/admin/uploadResult",
    },
    {
      name: "Paper Wizard",
      icon: faPaperclip,
      link: "/admin/paperWizard",
    },
  ];
  return (
    <nav className=" max-w-full bg-blue-900 h-full overflow-y-auto">
      <ul className="flex flex-col gap-4 p-4 text-white">
        {NAV_ITEMS.map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-4 p-2 rounded-md hover:bg-blue-800 cursor-pointer font-medium duration-500 `}
          >
            <Link className="flex items-center gap-4" href={item.link}>
              <FontAwesomeIcon
                className="text-xl font-light"
                icon={item.icon}
              />
              {isMenuOpen && <span>{item.name}</span>}
            </Link>
          </li>
        ))}
        <li
          onClick={handleLogout}
          className={`flex items-center gap-4 p-2 rounded-md hover:bg-blue-800 cursor-pointer font-medium duration-500 `}
        >
          <FontAwesomeIcon
            className="text-xl font-light"
            icon={faArrowRightFromBracket}
          />
          {isMenuOpen && <span>Logout</span>}
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

export default NavBar;
