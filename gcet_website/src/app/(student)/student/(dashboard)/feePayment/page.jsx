"use client";
import React, { useState, useEffect } from "react";
import context from "@/contexts/student/studentContext";
import { useContext } from "react";

const apiURL = process.env.NEXT_PUBLIC_API_HOST;

const generateTXNID = () => {
  return Math.floor(Math.random() * 1000000000);
};

const amount = 6900;

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const handleSubmit = (formData, amount) => {
  options.body = JSON.stringify({ details: formData, amount: amount });

  fetch(`${apiURL}/create-payment-session`, options)
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      window.location = url;
    })
    .catch((err) => {
      console.error(err);
    });
};

const FeePayment = () => {
  const student = useContext(context).studentDetails;
  const enrollmentNumber = student?.enrollmentNumber;
  const [formData, setFormData] = useState(null);
  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await fetch(
          // TODO Change Fetch to get data from the backend without making request the enrollment number
          `${apiURL}/student/forms/${enrollmentNumber}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch form");
        }

        const data = await response.json();

        // Check if form data is empty or null
        if (!data || Object.keys(data).length === 0) {
          throw new Error("No form found for the given enrollment number");
        }

        // Set the form data
        setFormData(data);
      } catch (error) {
        console.error("Error fetching form:", error);
      }
    };

    fetchForm();
  }, [enrollmentNumber]);

  return (
    <div className="min-h-fit sm:mx-2 border-2 rounded-md border-primary-regular overflow-x-auto">
      <h1 className="bg-primary-regular p-2 sm:p-4 text-secondary font-medium">
        Fee Payments
      </h1>
      <div className="m-4">
        <h2 className="text-center font-bold text-3xl">Fee Details</h2>
        <div className="h-0.5 max-w-[6rem] bg-primary-regular mx-auto"></div>
      </div>
      <div className="border m-4 bg-secondary overflow-x-auto p-1 sm:w-3/4 mx-auto">
        <table className="max-w-full w-full min-w-max">
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Form Number
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {formData?.formNumber}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Name:
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {student?.firstName} {student?.lastName}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Enrollment ID
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {formData?.enrollmentNumber}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Semester:
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {formData?.currentSem}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Email:
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {student?.email}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Department
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {student?.department}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Total Fee:
              </td>
              <td className="border border-gray-300 px-4 py-2">{amount}</td>
            </tr>
          </tbody>
        </table>
        <div className="m-2 flex justify-center items-center ">
          <button
            className="w-1/4 duration-500 rounded-sm px-4 py-2 uppercase text-white bg-blue-900"
            type="submit"
            onClick={() => handleSubmit(formData, amount)}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeePayment;
