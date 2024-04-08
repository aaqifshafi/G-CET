"use client";
import Image from "next/image";
import AVATAR from "../user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faBuildingColumns,
  faCalendarDays,
  faEnvelope,
  faGraduationCap,
  faIdCard,
  faMosque,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import studentContext from "@/contexts/student/studentContext";

const StudentInfo = () => {
  const studentDetails = useContext(studentContext).studentDetails;

  return (
    <div className=" border-blue-900 rounded-md bg-secondary py-4 px-2 shadow-inner">
      {/* ======= STUDENT AVATAR ======= */}
      <Image
        className="border-blue-800 border-2 rounded-full mx-auto p-1"
        src={AVATAR}
        height={150}
        width={150}
        alt="User Avatar"
      />

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-1 my-4 font-semibold">
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faUser} />
          Full Name
        </span>
        <span className="col-span-3">
          {(studentDetails?.firstName || "") +
            " " +
            (studentDetails?.lastName || "")}
        </span>
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faBuildingColumns} />{" "}
          Department
        </span>
        <span className="col-span-3">{studentDetails?.department}</span>
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faIdCard} />
          Enrollment Number
        </span>
        <span className="col-span-3">{studentDetails?.enrollmentNumber}</span>
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faCalendarDays} />
          Date of Birth
        </span>
        <span className="col-span-3">{studentDetails?.dob}</span>
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faGraduationCap} />
          Program
        </span>
        <span className="col-span-3">
          {"B.tech" + " " + studentDetails?.program}
        </span>
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faBookOpenReader} />
          Semester
        </span>
        <span className="col-span-3">{studentDetails?.currentSem}</span>
      </div>
    </div>
  );
};

export default StudentInfo;
