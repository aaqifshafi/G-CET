import React from "react";
import Heading3 from "@/components/Heading3";

const PendingApplications = () => {
  return (
    <div className="min-h-fit  sm:mx-2 border-2 rounded-md border-primary-regular overflow-x-auto">
      <h1 className="bg-primary-regular p-2 sm:p-4 text-secondary font-medium">
        Pending Applications
      </h1>
      <section className="p-4 overflow-hidden">
        <Heading3 headingText={"New Admission Application Received"} />
        <div className="border  my-4 bg-secondary overflow-x-auto">
          <table className="max-w-full w-full min-w-max">
            <thead>
              <tr className="bg-blue-900 text-secondary">
                <th className="border border-gray-300 px-4 py-2">
                  Application ID
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Student Name
                </th>
                <th className="border border-gray-300 px-4 py-2">Course</th>
                <th className="border border-gray-300 px-4 py-2">
                  Application Date
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Application Status
                </th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <div className="h-36 w-full flex justify-center items-center">
            There is not any Application
          </div>
        </div>
      </section>
    </div>
  );
};

export default PendingApplications;
