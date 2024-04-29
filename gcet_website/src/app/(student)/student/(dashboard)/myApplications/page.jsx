"use client";
import studentContext from "@/contexts/student/studentContext";
import React, { useState, useEffect } from "react";
import Heading3 from "@/components/Heading3";
import { useContext } from "react";

const apiURL = process.env.NEXT_PUBLIC_API_HOST;

const MyApplications = () => {
  const studentDetails = useContext(studentContext).studentDetails;
  const rollNo = studentDetails?.enrollmentNumber;

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch(`${apiURL}/student/myApplications`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            enrollmentNumber: rollNo,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch applications");
        }

        const data = await response.json();
        setApplications(data.forms); // Assuming the response data contains the forms array
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchApplications();
  }, []);
  const convertToLocalDate = (timestampString) => {
    return new Date(timestampString);
  };
  return (
    <div className="min-h-fit sm:mx-2 border-2 rounded-md border-primary-regular overflow-x-auto">
      <h1 className="bg-primary-regular p-2 sm:p-4 text-secondary font-medium">
        Submitted Applications
      </h1>
      <section className="p-4 overflow-hidden">
        <Heading3 headingText={"Admission Forms"} />
        <div className="border  my-4 bg-secondary overflow-x-auto">
          <table className="max-w-full w-full min-w-max">
            {/* Table header */}
            <thead>
              <tr className="bg-blue-900 text-secondary">
                <th className="border border-gray-300 px-4 py-2">
                  Form Number
                </th>
                <th className="border border-gray-300 px-4 py-2">Semester</th>
                <th className="border border-gray-300 px-4 py-2">
                  Roll Number
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Application Date
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Application Status
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {applications.map((application) => (
                <tr key={application.formNumber}>
                  <td className="border border-gray-300 px-4 py-2">
                    {application.formNumber}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {application.currentSem}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {application.enrollmentNumber}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {convertToLocalDate(
                      application.createdAt
                    ).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {application.status ? "Approved" : "Pending"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Show message if there are no applications */}
          {applications.length === 0 && (
            <div className="h-36 w-full flex justify-center items-center">
              There are no applications
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MyApplications;
