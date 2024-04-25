"use client";
import {
  faArrowRightFromBracket,
  faDatabase,
  faGear,
  faIndianRupeeSign,
  faSquarePen,
  faTable,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { on } from "events";
import { useRouter } from "next/navigation";
import studentContext from "@/contexts/student/studentContext";
import PropTypes from "prop-types";
const url = process.env.NEXT_PUBLIC_API_HOST;
const StudentInfo = () => {
  const studentDetails = useContext(studentContext).studentDetails;
};
const NavBar = ({ isMenuOpen }) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("authorization");
    sessionStorage.removeItem("authorization");
    router.replace("/student/login");
  };
  const getForms = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          email: studentDetails.email,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      } else {
        console.error("Request Failed");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const NAV_ITEMS = [
    {
      name: "DashBoard",
      icon: faTable,
      link: "/student/dashboard",
    },
    {
      name: "Application Form",
      icon: faUniversity,
      link: "/student/form",
    },
    {
      name: "Submitted Application",
      icon: faDatabase,
      link: "/student/myApplications",
      onClick: (email) => {
        getForms(email);
      },
    },
    {
      name: "Payment",
      icon: faIndianRupeeSign,
      link: "/student/feePayment",
    },
    {
      name: "Results",
      icon: faSquarePen,
      link: "/student/results",
    },
    // {
    //   name: "Setting",
    //   icon: faGear,
    //   link: "/student/settings",
    // },
  ];

  return (
    <nav className=" max-w-full bg-blue-900 h-full overflow-y-auto">
      <ul className="flex flex-col gap-4 p-4 text-white">
        {NAV_ITEMS.map((item, index) => (
          <li
            key={index}
            onClick={() => router.push(item.link)}
            className={`flex items-center gap-4 p-2 rounded-md hover:bg-blue-800 cursor-pointer font-medium duration-500 `}
          >
            <FontAwesomeIcon className="text-xl font-light" icon={item.icon} />
            {isMenuOpen && <span>{item.name}</span>}
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
