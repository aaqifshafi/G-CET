import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FacultyTable = ({ staff }) => {
  return (
    <>
      <table className="w-full min-w-max">
        <thead>
          <tr className="bg-primary-regular text-white">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Designation</th>
            <th className="border border-gray-300 px-4 py-2">Qualification</th>
            <th className="border border-gray-300 px-4 py-2">Department</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((faculty, index) => (
            <tr
              className={`${index % 2 === 1 ? "bg-gray-200" : ""}`}
              key={index}
            >
              <td className="border border-gray-300 px-4 py-2">
                {faculty.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {faculty.designation}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {faculty.qualification}
              </td>

              <td className="border border-gray-300 px-4 py-2">
                {faculty.department}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FacultyTable;
