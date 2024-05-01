"use client";
import React from "react";
import Heading3 from "@/components/Heading3";
import { useContext, useState, useEffect } from "react";
import studentContext from "@/contexts/student/studentContext";

const Results = () => {
  const studentDetails = useContext(studentContext).studentDetails;
  const [results, setResults] = useState([]);
  const [minor, setMinor] = useState([]);

  const apiURL = process.env.NEXT_PUBLIC_API_HOST;

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`${apiURL}/student/results`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            enrollmentNumber: studentDetails?.enrollmentNumber,
            semester: studentDetails?.currentSem,
            exam: "Minor-I",
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch Results");
        }

        const data = await response.json();
        setResults(data.marks); // Assuming the response data contains the forms array
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchResults();
  }, []);
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`${apiURL}/student/results`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            enrollmentNumber: studentDetails?.enrollmentNumber,
            semester: studentDetails?.currentSem,
            exam: "Minor-II",
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch Results");
        }

        const data = await response.json();
        setMinor(data.marks); // Assuming the response data contains the forms array
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchResults();
  }, []);
  // Function to calculate pass or fail
  const calculatePassOrFail = (obtainedMarks, maxMarks) => {
    const percentage = (obtainedMarks / maxMarks) * 100;
    return percentage >= 40 ? "Pass" : "Fail";
  };

  return (
    <>
      <div className="min-h-fit  sm:mx-2 border-2 rounded-md border-primary-regular overflow-x-auto">
        <h1 className="bg-primary-regular p-2 sm:p-4 text-secondary font-medium">
          {studentDetails?.currentSem} Semester Internal Results
        </h1>
        <section className="p-4 overflow-hidden">
          <Heading3 headingText={"Minor-I"} />
          <div className="border  my-4 bg-secondary overflow-x-auto">
            <table className="max-w-full w-full min-w-max">
              <thead>
                <tr className="bg-blue-900 text-secondary">
                  <th className="border border-gray-300 px-4 py-2">Subject</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Marks Obtained
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Max Marks
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Pass/Fail
                  </th>
                </tr>
              </thead>

              <tbody>
                {results.map((result, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">
                      {result.subject}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {result.marks}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">20</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {calculatePassOrFail(result.marks, 20)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {results.length === 0 && (
              <div className="h-36 w-full flex justify-center items-center">
                No results uploaded yet
              </div>
            )}
          </div>
        </section>

        {/* Minor 2 */}
        <section className="p-4 overflow-hidden">
          <Heading3 headingText={"Minor-II"} />
          <div className="border  my-4 bg-secondary overflow-x-auto">
            <table className="max-w-full w-full min-w-max">
              <thead>
                <tr className="bg-blue-900 text-secondary">
                  <th className="border border-gray-300 px-4 py-2">Subject</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Marks Obtained
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Max Marks
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Pass/Fail
                  </th>
                </tr>
              </thead>

              <tbody>
                {minor.map((key, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">
                      {key.subject}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {key.marks}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">20</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {calculatePassOrFail(key.marks, 20)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {minor.length === 0 && (
              <div className="h-36 w-full flex justify-center items-center">
                No results uploaded yet
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Results;
