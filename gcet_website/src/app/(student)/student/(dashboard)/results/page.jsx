"use client";
import React from "react";
import Heading3 from "@/components/Heading3";
import { useState, useEffect } from "react";

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("/student/results")
      .then((response) => response.json())
      .then((data) => setResults(data))
      .catch((error) => console.error("Error fetching results:", error));
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
          {results.semester}Semester Results - {results.year} Batch
        </h1>
        <section className="p-4 overflow-hidden">
          <Heading3 headingText={"Minor-I"} />
          <div className="border  my-4 bg-secondary overflow-x-auto">
            <table className="max-w-full w-full min-w-max">
              <thead>
                <tr className="bg-blue-900 text-secondary">
                  <th className="border border-gray-300 px-4 py-2">Subject</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Max Marks
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Obtained Marks
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
                      {result.maxMarks}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {result.obtainedMarks}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {calculatePassOrFail(
                        result.obtainedMarks,
                        result.maxMarks
                      )}
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
        <section className="p-4 overflow-hidden">
          <Heading3 headingText={"Minor-II"} />
          <div className="border  my-4 bg-secondary overflow-x-auto">
            <table className="max-w-full w-full min-w-max">
              <thead>
                <tr className="bg-blue-900 text-secondary">
                  <th className="border border-gray-300 px-4 py-2">Subject</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Max Marks
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Obtained Marks
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
                      {result.maxMarks}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {result.obtainedMarks}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {calculatePassOrFail(
                        result.obtainedMarks,
                        result.maxMarks
                      )}
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
      </div>
    </>
  );
};

export default Results;
