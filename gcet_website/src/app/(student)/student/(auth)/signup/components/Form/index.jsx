"use client";

import "@/app/globals.css";
import InputBox from "@/components/InputBox";
import PasswordInputBox from "@/components/PasswordInputBox";
import SubmitButton from "@/components/SubmitButton";
import Toast from "@/components/Toast";
import { checkPasswordPolicy } from "@/utils/passwordPolicy";
import {
  faEnvelope,
  faGraduationCap,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Corrected import
import { type } from "os";
import { useState } from "react";

const apiURL = process.env.NEXT_PUBLIC_API_HOST;

const SignUpForm = () => {
  // Next router
  const router = useRouter();

  // Form Data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    program: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
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
    e.preventDefault();

    // Check password policy
    const passwordPolicy = checkPasswordPolicy(
      formData.password,
      formData.confirmPassword
    );

    if (!passwordPolicy.status) {
      setIsToastVisible(true);
      setToast({
        type: "warning",
        message: passwordPolicy.message,
      });
      return;
    }

    setIsLoading(true);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        program: formData.program,
        email: formData.email,
        password: formData.password,
        phoneNumber: formData.phoneNumber,
      }),
    };

    try {
      const response = await fetch(`${apiURL}/student/signup`, options);

      const data = await response.json();

      if (data.success === false) {
        setIsToastVisible(true);
        setToast({
          type: "danger",
          message: data.message,
        });
      } else {
        setIsToastVisible(true);
        setToast({
          type: "success",
          message: data.message,
        });
        // If signup is successful, redirect to dashboard page
        setTimeout(() => {
          router.replace("/student/dashboard");
        }, 3000);
      }
    } catch (err) {
      setIsToastVisible(true);
      console.error(err);
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

      {/* Show form when isOtpSend is false */}

      <div className="my-4 p-3">
        <h3 className="text-center text-xl uppercase my-3">Sign Up Details</h3>
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
                Required={true}
              />

              <InputBox
                name="lastName"
                placeholder="Last Name"
                type="text"
                value={formData.lastName}
                onChangeHandler={onChangeHandler}
                Required={false}
              />
            </div>
          </div>
          <div className="w-full flex-col flex">
            <label htmlFor="email">
              Email<span className="text-red-600">*</span>
            </label>
            <InputBox
              name="email"
              placeholder="email@example.com"
              type="email"
              id="email"
              value={formData.email}
              icon={faEnvelope}
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
              type="tel"
              id="phoneNumber"
              value={formData.phoneNumber}
              icon={faPhone}
              onChangeHandler={onChangeHandler}
              Required={true}
            />
          </div>

          <div className="grow flex-col flex">
            <label htmlFor="password">
              Password<span className="text-red-600">*</span>
            </label>
            <PasswordInputBox
              name="password"
              placeholder="Use 8 or more characters with a mix of letters, numbers & symbols"
              type="password"
              id="password"
              value={formData.password}
              Required={true}
              onChangeHandler={onChangeHandler}
            />
          </div>

          <div className="w-full flex-col flex">
            <label htmlFor="confirmPassword">
              Confirm Password<span className="text-red-600">*</span>
            </label>
            <PasswordInputBox
              name="confirmPassword"
              placeholder="Use 8 or more characters with a mix of letters, numbers & symbols"
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              Required={true}
              onChangeHandler={onChangeHandler}
            />
          </div>

          <div className="w-full flex-col flex">
            <label htmlFor="program">
              Select Program<span className="text-red-600">*</span>
            </label>
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

            <div className=" gap-2 text-gray-500 flex items-center my-3">
              <input
                className="cursor-pointer"
                type="checkbox"
                name="termsAndCondition"
                id="checkBox"
                required
              />
              <label htmlFor="checkBox" className="text-sm max-w-md">
                I agree to receive Phone Calls, Emails or Messages from the
                college.
              </label>
            </div>
            <div className="my-8 w-full">
              <SubmitButton loading={isLoading} text={"Sign Up"} />
            </div>
          </div>
        </form>
        <p className="text-center">
          Already Registered?{" "}
          <Link
            className="duration-500 text-primary-regular hover:underline font-medium cursor-pointer"
            href="/student/login"
          >
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUpForm;
