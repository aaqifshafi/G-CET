"use client";
import "@/app/globals.css";
import InputBox from "@/components/InputBox";
import SubmitButton from "@/components/SubmitButton";
import Toast from "@/components/Toast";

import { useContext } from "react";
import studentContext from "@/contexts/student/studentContext";
import {
  faBookReader,
  faBuilding,
  faBuildingCircleArrowRight,
  faCalendar,
  faEnvelope,
  faGraduationCap,
  faHouse,
  faHouseChimney,
  faHouseFlag,
  faIdCard,
  faMapPin,
  faMosque,
  faPhone,
  fas,
  faUser,
  faUserTie,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Corrected import
import { type } from "os";
import { useState } from "react";
import Form from "../form/page";
import { get } from "http";

const apiURL = process.env.NEXT_PUBLIC_API_HOST;

const StudentForm = () => {
  // Next router
  const propValue = "";
  const router = useRouter();

  // Define a function to receive data from the child component
  const getData = (key) => {
    const studentDetails = useContext(studentContext).studentDetails;
    // setFormData(studentDetails?.email);
    // Do something with the received data
    // setFormData.email(data);
    return studentDetails?.[key];
  };

  // Form Data
  const [formData, setFormData] = useState({
    firstName: getData("firstName"),
    lastName: getData("lastName"),
    email: getData("email"),
    program: getData("program"),
    phoneNumber: getData("phoneNumber"),
    enrollmentNumber: getData("enrollmentNumber"),
    department: getData("department"),
    dob: getData("dob"),
    currentSem: getData("currentSem"),
    fatherName: getData("fatherName"),
    motherName: getData("motherName"),
    address: getData("address"),
    district: getData("district"),
    pincode: getData("pincode"),
    state: getData("state"),
    gender: getData("gender"),
    religion: getData("religion"),
    category: getData("category"),
  });

  // Toast related variables
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toast, setToast] = useState({});

  // Loading spinner variable
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle change in input fields
  const onChangeHandler = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  // Function to handle form submit
  const handleFormSubmit = async (e) => {
    // Check if any field is empty
    for (const key in formData) {
      if (key !== "email" && !formData[key]) {
        setIsToastVisible(true);
        setToast({
          type: "warning",
          message: "Please fill out all fields",
        });
        return; // Exit the function if any field is empty
      }
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      // All fields are filled, proceed with form submission
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        program: formData.program,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        enrollmentNumber: formData.enrollmentNumber,
        department: formData.department,
        dob: formData.dob,
        currentSem: formData.currentSem,
        fatherName: formData.fatherName,
        motherName: formData.motherName,
        address: formData.address,
        district: formData.district,
        pincode: formData.pincode,
        state: formData.state,
        gender: formData.gender,
        religion: formData.religion,
        category: formData.category,
      }),
    };

    try {
      setIsLoading(true);
      const response = await fetch(`${apiURL}/student/form`, options);

      const data = await response.json();

      if (data.success === false) {
        setIsToastVisible(true);
        setToast({
          type: "danger",
          message: data.message, // Respone message from the server(receive error as message)
        });
      } else {
        setIsToastVisible(true);
        setToast({
          type: "success",
          message: data.message, // Respone message from the server(Your Data has been Updated)
        });
        // If signup is successful, redirect to login page
        setTimeout(() => {
          router.replace("/student/dashboard");
        }, 5000);
      }
    } catch (err) {
      setIsToastVisible(true);
      setToast({
        type: "danger",
        message: "Something went wrong",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {isToastVisible && (
        <Toast
          toastType={toast.type}
          message={toast.message}
          setIsToastVisible={setIsToastVisible}
        />
      )}

      <div className="my-4 p-3">
        <h1 className="text-center text-2xl uppercase my-3 font-bold">
          Semester Admission Form
        </h1>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-4"
          action=""
        >
          <div className="w-full flex-col flex gap-2">
            <label htmlFor="name">
              Name<span className="text-red-600">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
              <InputBox
                name="firstName"
                placeholder="First Name*"
                type="text"
                value={formData.firstName}
                onChangeHandler={onChangeHandler}
              />

              <InputBox
                name="lastName"
                placeholder="Last Name"
                type="text"
                value={formData.lastName}
                onChangeHandler={onChangeHandler}
              />
            </div>
          </div>

          {/* <LockedData onDataReceived={getData} /> */}
          {/* Email */}
          <div className="w-full flex-col flex">
            <label htmlFor="email">
              Email<span className="text-red-600">*</span>
            </label>
            <InputBox
              name="email"
              placeholder="Email"
              type="email"
              id="email"
              value={formData.email}
              icon={faEnvelope}
              isDisabled={true}
            />
          </div>
          {/* DOB */}
          <div className="w-full flex-col flex">
            <label htmlFor="dob">
              Date of Birth<span className="text-red-600">*</span>
            </label>
            <InputBox
              name="dob"
              placeholder="DD/MM/YYYY"
              type="date"
              id="dob"
              value={formData.dob}
              icon={faCalendar}
              onChangeHandler={onChangeHandler}
              Required={true}
            />
          </div>
          <div className="w-full flex-col flex">
            <label htmlFor="phoneNumber">
              Phone Number<span className="text-red-600">*</span>
            </label>
            <InputBox
              name="phoneNumber"
              placeholder="0123456789"
              pattern="^[0-9]*$" // Only numbers allowed
              maxLength={10}
              type="tel"
              id="phoneNumber"
              value={formData.phoneNumber}
              icon={faPhone}
              onChangeHandler={onChangeHandler}
              Required={true}
            />
          </div>

          <div className="w-full flex-col flex">
            <label htmlFor="currentSem">
              Semester<span className="text-red-600">*</span>
            </label>
            <InputBox
              name="currentSem"
              placeholder="Current Semester"
              type="number"
              max={8}
              min={1}
              id="currentSem"
              value={formData.currentSem}
              icon={faBookReader}
              onChangeHandler={onChangeHandler}
              Required={true}
            />
          </div>

          {/* Enrollment No.*/}
          <div className="w-full flex-col flex">
            <label htmlFor="enrollmentNumber">
              Enrollment Number<span className="text-red-600">*</span>
            </label>
            <InputBox
              name="enrollmentNumber"
              placeholder="6-Digit Roll Number"
              type="text"
              pattern="^[0-9]*$" // Only numbers allowed
              maxLength={6}
              icon={faIdCard}
              id="enrollmentNumber"
              value={formData.enrollmentNumber}
              onChangeHandler={onChangeHandler}
              Required={true}
            />
          </div>
          <div className="w-full flex-col flex">
            <label htmlFor="fatherName">
              Father's Name<span className="text-red-600">*</span>
            </label>
            <InputBox
              name="fatherName"
              placeholder="Father's Name"
              type="text"
              id="fatherName"
              value={formData.fatherName}
              icon={faUserTie}
              onChangeHandler={onChangeHandler}
              Required={true}
            />
          </div>
          <div className="w-full flex-col flex">
            <label htmlFor="motherName">
              Mother's Name<span className="text-red-600">*</span>
            </label>
            <InputBox
              name="motherName"
              placeholder="Mother's Name"
              type="text"
              id="motherName"
              value={formData.motherName}
              icon={faUser}
              onChangeHandler={onChangeHandler}
              Required={true}
            />
          </div>

          {/* Select Program */}
          <div className="w-full flex-col flex">
            <label htmlFor="program">
              Program<span className="text-red-600">*</span>
            </label>
          </div>
          <div className="border rounded-sm overflow-hidden flex">
            <FontAwesomeIcon
              className="self-center p-3 text-blue-900"
              icon={faGraduationCap}
            />
            <select
              className="py-2 px-3 bg-gray-100 flex-1 cursor-pointer w-10/12"
              name="program"
              id="program"
              value={formData.program}
              onChange={onChangeHandler}
              required
            >
              <option hidden value={"default"}>
                Select Program
              </option>
              <option className="cursor-pointer" value="BIO-MED">
                B.tech Bio-Med
              </option>
              <option className="cursor-pointer" value="EEE">
                B.tech Electrical
              </option>
              <option className="cursor-pointer" value="CIVIL">
                B.tech Civil
              </option>
              <option className="cursor-pointer" value="CSE">
                B.tech CSE
              </option>
              <option className="cursor-pointer" value="MECH">
                B.tech Mechinical
              </option>
            </select>
          </div>
          <div className="w-full flex-col flex">
            <label htmlFor="department">
              Department<span className="text-red-600">*</span>
            </label>
          </div>

          {/* Select Department */}
          <div className="border rounded-sm overflow-hidden flex">
            <FontAwesomeIcon
              className="self-center p-3 text-blue-900"
              icon={faBuilding}
            />
            <select
              className="py-2 px-3 bg-gray-100 flex-1 cursor-pointer w-10/12"
              name="department"
              id="department"
              value={formData.department}
              onChange={onChangeHandler}
              required
            >
              <option hidden value={"default"}>
                Select your Department
              </option>
              <option
                className="cursor-pointer"
                value="Bio-Medical Engineering"
              >
                Bio-Medical Engineering
              </option>
              <option className="cursor-pointer" value="Electrical Engineering">
                Electrical Engineering
              </option>
              <option className="cursor-pointer" value="Civil Engineerng">
                Civil Engineerng
              </option>
              <option
                className="cursor-pointer"
                value="Computer Science & Engineering"
              >
                Computer Science & Engineering
              </option>
              <option className="cursor-pointer" value="Mechinical Engineering">
                Mechinical Engineering
              </option>
            </select>
          </div>

          {/* Gender */}
          <div className="w-full flex-col flex">
            <label htmlFor="gender">
              Gender<span className="text-red-600">*</span>
            </label>
          </div>
          <div className="border rounded-sm overflow-hidden flex">
            <FontAwesomeIcon
              className="self-center p-3 text-blue-900"
              icon={faVenusMars}
            />
            <select
              className="py-2 px-3 bg-gray-100 flex-1 cursor-pointer w-10/12"
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={onChangeHandler}
              required
            >
              <option hidden value={"default"}>
                Select Gender
              </option>
              <option className="cursor-pointer" value="Male">
                Male
              </option>
              <option className="cursor-pointer" value="Female">
                Female
              </option>
            </select>
          </div>

          {/* Category */}
          <div className="w-full flex-col flex">
            <label htmlFor="category">
              Category<span className="text-red-600">*</span>
            </label>
          </div>
          <div className="border rounded-sm overflow-hidden flex">
            <FontAwesomeIcon
              className="self-center p-3 text-blue-900"
              icon={faHouse}
            />
            <select
              className="py-2 px-3 bg-gray-100 flex-1 cursor-pointer w-10/12"
              name="category"
              id="category"
              value={formData.category}
              onChange={onChangeHandler}
              required
            >
              <option hidden value={"default"}>
                Select Category
              </option>
              <option className="cursor-pointer" value="General">
                General
              </option>
              <option className="cursor-pointer" value="Scheduled Castes">
                Scheduled Castes
              </option>
              <option className="cursor-pointer" value="Scheduled Tribe">
                Scheduled Tribe
              </option>
              <option className="cursor-pointer" value="Other Backward Classes">
                Other Backward Classes
              </option>
              <option
                className="cursor-pointer"
                value="Economically Weaker Sections"
              >
                Economically Weaker Sections
              </option>
            </select>
          </div>
          {/* Religion */}
          <div className="w-full flex-col flex">
            <label htmlFor="religion">
              Religion<span className="text-red-600">*</span>
            </label>
            <InputBox
              name="religion"
              placeholder="Enter your Religion"
              type="text"
              id="religion"
              value={formData.religion}
              icon={faMosque}
              onChangeHandler={onChangeHandler}
              Required={true}
            />
          </div>
          {/* Permanant Address */}
          <div className="w-full flex-col flex">
            <label htmlFor="address">
              Permanent Address<span className="text-red-600">*</span>
            </label>
            <InputBox
              name="address"
              placeholder="Street and House no."
              type="text"
              id="address"
              value={formData.address}
              icon={faHouseChimney}
              onChangeHandler={onChangeHandler}
              Required={true}
            />
          </div>
          {/* District */}
          <div className="w-full flex-col flex">
            <label htmlFor="district">
              District<span className="text-red-600">*</span>
            </label>
            <InputBox
              name="district"
              placeholder="City/Town"
              type="text"
              id="district"
              value={formData.district}
              icon={faBuildingCircleArrowRight}
              onChangeHandler={onChangeHandler}
              Required={true}
            />
          </div>
          {/* Pincode */}
          <div className="w-full flex-col flex">
            <label htmlFor="pincode">
              Pin Code<span className="text-red-600">*</span>
            </label>
            <InputBox
              name="pincode"
              placeholder="6-Digit Area Pincode"
              type="text"
              pattern="^[0-9]*$" // Only numbers allowed
              maxLength={6}
              icon={faMapPin}
              id="pincode"
              value={formData.pincode}
              onChangeHandler={onChangeHandler}
              Required={true}
            />
          </div>

          {/* State */}
          <div className="w-full flex-col flex">
            <label htmlFor="address">
              State<span className="text-red-600">*</span>
            </label>
            <InputBox
              name="state"
              placeholder="State"
              type="text"
              id="state"
              value={formData.state}
              icon={faHouseFlag}
              onChangeHandler={onChangeHandler}
              Required={true}
            />
          </div>

          {/* Submit Button */}
          <div className="my-8 w-full">
            <SubmitButton loading={isLoading} text={"Sumbit"} />
          </div>
        </form>
      </div>
    </>
  );
};

export default StudentForm;
