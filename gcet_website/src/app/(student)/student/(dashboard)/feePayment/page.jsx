"use client";
import { useState } from "react";
import Toast from "@/components/Toast";
import InputBox from "@/components/InputBox";
import Heading2 from "@/components/Heading2";
import React from "react";
import SubmitButton from "@/components/SubmitButton";

const data = [
  {
    name: "John Doe",
    applicationId: "12345",
    semester: "1st",
    email: "jingoor@gct.com",
    enrollmentNumber: "12345",
    // Add more fields if needed
  },
];
const generateTXNID = () => {
  return Math.floor(Math.random() * 1000000000);
};
const totalFee = 6900;
const handleSubmit = (e) => {
  // Add your logic here for Payment Gateway Integration
};

const FeePayment = (dataFromAPI) => {
  return (
    <div className="min-h-fit sm:mx-2 border-2 rounded-md border-primary-regular overflow-x-auto">
      <h1 className="bg-primary-regular p-2 sm:p-4 text-secondary font-medium">
        Fee Payments
      </h1>
      <div className="m-4">
        <h2 className="text-center font-bold text-3xl">Pre Confirmation</h2>
        <div className="h-0.5 max-w-[6rem] bg-primary-regular mx-auto"></div>
      </div>
      <div className="border m-4 bg-secondary overflow-x-auto p-1 sm:w-3/4 mx-auto">
        <table className="max-w-full w-full min-w-max">
          <tbody>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Transaction ID:
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {generateTXNID()}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Name:
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.name}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Application ID:
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.applicationId}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Semester:
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.semester}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Email:
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.email}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Enrollment ID:
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.enrollmentNumber}
                  </td>
                </tr>
              </React.Fragment>
            ))}
            {data.length > 0 && (
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  Total Fee:
                </td>
                <td className="border border-gray-300 px-4 py-2">{totalFee}</td>
              </tr>
            )}

            {data.length === 0 && (
              <tr>
                <td className="border border-gray-300 px-4 py-2" colSpan="2">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="m-2 flex justify-center items-center ">
          <button
            className="w-1/4 duration-500 rounded-sm px-4 py-2 uppercase text-white bg-blue-900"
            type="submit"
            onClick={handleSubmit}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeePayment;
