"use client";
import Image from "next/image";
import AVATAR from "../user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingCircleArrowRight,
  faEnvelope,
  faMapPin,
  faHouseChimney,
  faHouseFlag,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import studentContext from "@/contexts/student/studentContext";
const StudentInfo = () => {
  const studentDetails = useContext(studentContext).studentDetails;

  return (
    <div className=" border-blue-900 rounded-md bg-secondary py- px-2 shadow-inner">
      <h2 className="text-center my-4 font-bold text-lg w-full">
        {studentDetails?.name}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-1 my-4 font-semibold">
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
          Email ID
        </span>
        <a
          className="col-span-3  text-blue-500 hover:text-blue-800 visited:text-purple-600"
          href={`mailto:${studentDetails?.email}`}
        >
          {studentDetails?.email}
        </a>
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faPhone} />
          Mobile Number
        </span>
        <a
          className="col-span-3 text-blue-500 hover:text-blue-800 visited:text-purple-600"
          href={`tel:${studentDetails?.phoneNumber}`}
        >
          {studentDetails?.phoneNumber}
        </a>

        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faHouseChimney} />
          Permanent Address
        </span>
        <span className="col-span-3">{studentDetails?.address}</span>
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faBuildingCircleArrowRight} />
          District
        </span>
        <span className="col-span-3">{studentDetails?.district}</span>

        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faHouseFlag} />
          State
        </span>
        <span className="col-span-3">{studentDetails?.state}</span>
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faMapPin} />
          Pincode
        </span>
        <span className="col-span-3">{studentDetails?.pincode}</span>
      </div>
    </div>
  );
};

export default StudentInfo;
