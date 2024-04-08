import {
  faBars,
  faBell,
  faEnvelope,
  faFlag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import AVATAR from "../user.png";
import PropTypes from "prop-types";

const Header = ({ setIsMenuOpen, studentName }) => {
  return (
    <header className="flex justify-between items-center bg-primary-regular text-white shadow-md">
      <div
        onClick={() => setIsMenuOpen((prevState) => !prevState)}
        className="h-full flex items-center justify-center px-4 hover:bg-primary-dark cursor-pointer"
      >
        <FontAwesomeIcon className="text-3xl" icon={faBars} />
      </div>

      {/* ======= Right Side container ======= */}
      <div className="flex items-center h-full">
        <div className="h-full p-3 hover:bg-primary-dark cursor-pointer flex items-center">
          <Image
            src={AVATAR}
            height={35}
            width={35}
            alt="User Avatar"
            className="rounded-full border-2 border-white"
          />
          <span className="hidden sm:inline-block">{studentName}</span>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  setIsMenuOpen: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default Header;
