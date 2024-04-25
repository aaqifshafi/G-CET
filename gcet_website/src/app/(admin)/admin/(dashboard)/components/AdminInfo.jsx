"use client";
import Image from "next/image";
import AVATAR from "../user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faEnvelope,
  faIdCard,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import adminContext from "@/contexts/admin/adminContext";

const AdminInfo = () => {
  const adminDetails = useContext(adminContext).adminDetails;
  //   console.log(adminDetails);

  return (
    <div className=" border-blue-900 rounded-md bg-secondary py-4 px-2 shadow-inner">
      {/* ======= AVATAR ======= */}
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
          {(adminDetails?.firstName || "") +
            " " +
            (adminDetails?.lastName || "")}
        </span>
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faBuildingColumns} />{" "}
          Department
        </span>
        <span className="col-span-3">{adminDetails?.department}</span>
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faIdCard} />
          Employment ID
        </span>
        <span className="col-span-3">{adminDetails?.empId}</span>
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
          Email
        </span>
        <span className="col-span-3">{adminDetails?.email}</span>
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faPhone} />
          Phone
        </span>
        <span className="col-span-3">{adminDetails?.phone}</span>
      </div>
    </div>
  );
};

export default AdminInfo;
