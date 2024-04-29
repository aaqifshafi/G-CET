"use client";
import Image from "next/image";
import AVATAR from "../user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faHouse,
  faMosque,
  faUser,
  faUserTie,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import studentContext from "@/contexts/student/studentContext";

const StudentInfo = () => {
  const studentDetails = useContext(studentContext).studentDetails;

  return (
    <div className=" border-blue-900 rounded-md bg-secondary py- px-2 shadow-inner">
      {/* ======= STUDENT AVATAR ======= */}

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-1 my-4 font-semibold">
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faUserTie} />
          Father's Name
        </span>
        <span className="col-span-3">{studentDetails?.fatherName}</span>
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faUser} />
          Mother's Name
        </span>
        <span className="col-span-3">{studentDetails?.motherName}</span>
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faVenusMars} />
          Gender
        </span>
        <span className="col-span-3">{studentDetails?.gender}</span>
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faMosque} />
          Religion
        </span>
        <span className="col-span-3">{studentDetails?.religion}</span>

        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faCalendarDays} />
          Date of Birth
        </span>
        <span className="col-span-3">{studentDetails?.dob}</span>
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faHouse} />
          Category
        </span>
        <span className="col-span-3">{studentDetails?.category}</span>
      </div>
    </div>
  );
};

export default StudentInfo;
