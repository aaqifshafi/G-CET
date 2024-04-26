"use client";
import Heading3 from "@/components/Heading3";
import React, { useState, useEffect } from "react";
import SubmitButton from "@/components/SubmitButton";

const apiURL = process.env.NEXT_PUBLIC_API_HOST;

const PendingApplications = () => {
  const handleAccept = async (formNumber) => {
    try {
      const response = await fetch(`${url}/admin/pending/update${formNumber}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        location.reload();
      } else {
        throw new Error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  const convertToLocalDate = (timestampString) => {
    return new Date(timestampString);
  };
  const [forms, setForms] = useState([]);
  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await fetch(`${apiURL}/admin/pending`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            //TODO: Check Auuthorization header Barer token
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch applications");
        }

        const data = await response.json();
        setForms(data.forms);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchForms();
  }, []);
  return (
    <div className="min-h-fit  sm:mx-2 border-2 rounded-md border-primary-regular overflow-x-auto">
      <h1 className="bg-primary-regular p-2 sm:p-4 text-secondary font-medium">
        Pending Applications
      </h1>
      <section className="p-4 overflow-hidden">
        <Heading3 headingText={"Accept or Defect New Application Forms"} />
        <div className="border  my-4 bg-secondary overflow-x-auto">
          <table className="max-w-full w-full min-w-max">
            <thead>
              <tr className="bg-blue-900 text-secondary">
                <th className="border border-gray-300 px-4 py-2">
                  Application ID
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Enrollment Number
                </th>
                <th className="border border-gray-300 px-4 py-2">Semester</th>
                <th className="border border-gray-300 px-4 py-2">
                  Application Date
                </th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Accept</th>
                <th className="border border-gray-300 px-4 py-2">Defect</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {forms.map((form) => (
                <tr key={form.formNumber}>
                  <td className="border border-gray-300 px-4 py-2">
                    {form.formNumber}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {form.enrollmentNumber}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {form.currentSem}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {convertToLocalDate(form.createdAt).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {form.status ? "Approved" : "Pending"}
                  </td>
                  {!form.status ? (
                    <td className="border border-gray-300 p-2">
                      <button
                        className="bg-primary-regular text-xs text-secondary  p-2 rounded-full"
                        onClick={() => handleAccept(form.formNumber)}
                      >
                        Accept
                      </button>
                    </td>
                  ) : (
                    <td className="border border-gray-300 px-4 py-2">Closed</td>
                  )}
                  {!form.status ? (
                    <td className="border border-gray-300 p-2">
                      <button
                        className="bg-primary-regular text-xs text-secondary  p-2 rounded-full"
                        onClick={() => handleAccept(form.formNumber)}
                      >
                        Defect
                      </button>
                    </td>
                  ) : (
                    <td className="border border-gray-300 px-4 py-2">Closed</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          {/* Show message if there are no applications */}
          {forms.length === 0 && (
            <div className="h-36 w-full flex justify-center items-center">
              There are no applications
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PendingApplications;
