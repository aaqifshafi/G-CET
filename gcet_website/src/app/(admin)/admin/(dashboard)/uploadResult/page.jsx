"use client";
import { useState } from "react";
import InputBox from "@/components/InputBox";
import PasswordInputBox from "@/components/PasswordInputBox";
import SubmitButton from "@/components/SubmitButton";
import Toast from "@/components/Toast";
import Heading2 from "@/components/Heading2";

import {
  faBookReader,
  faBuilding,
  faFileExcel,
  faFilePen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UploadResults() {
  const [isToastVisible, setIsToastVisible] = useState(false); // TOAST STATE VARIABLE
  const [toast, setToast] = useState({ type: "", message: "" }); // TOAST TYPE AND MESSAGE STATE VARIABLE
  const [loading, setLoading] = useState(false); // SPINNER STATE VARIABLE
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    semester: "",
    examnation: "",
    department: "",
  }); // Combine all input fields into a single state variable

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // TODO DEFINE UPLOAD FUNCTION FOR ON FORM SUBMIT
  const uploadResult = (e) => {};

  return (
    <div className="min-h-fit sm:mx-2 border-2 rounded-md border-primary-regular overflow-x-auto">
      <h1 className="bg-primary-regular p-2 sm:p-4 text-secondary font-medium">
        Upload Results
      </h1>
      <div className="my-4">
        <Heading2 headingText={"Fill the below details"} />
      </div>
      <form onSubmit={uploadResult} className="p-4 overflow-hidden">
        <div className="flex flex-col justify-center items-center">
          <div className="w-1/2 flex-col flex">
            <label htmlFor="file">
              Upload Result Spreadsheet<span className="text-red-600">*</span>
            </label>
            <InputBox
              type="file"
              placeholder="Select an Excel Spreadsheet"
              onChangeHandler={handleFileChange}
              accept=".xlsx, .xls"
              icon={faFileExcel}
              Required={true}
            />
          </div>
          <div className="w-1/2 flex-col flex">
            <label htmlFor="currentSem">
              Semester<span className="text-red-600">*</span>
            </label>
            <InputBox
              name="semester"
              placeholder="Select Semester"
              type="number"
              max={8}
              min={1}
              id="semester"
              value={formData.semester}
              icon={faBookReader}
              onChangeHandler={handleInputChange}
              Required={true}
            />
          </div>
          <div className="w-1/2 flex-col flex">
            <label htmlFor="department">
              Department<span className="text-red-600">*</span>
            </label>
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
                onChange={handleInputChange}
                Required={true}
              >
                <option hidden value={"default"}>
                  Select Department
                </option>
                <option
                  className="cursor-pointer"
                  value="Bio-Medical Engineering"
                >
                  Bio-Medical Engineering
                </option>
                <option
                  className="cursor-pointer"
                  value="Electrical Engineering"
                >
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
                <option
                  className="cursor-pointer"
                  value="Mechinical Engineering"
                >
                  Mechinical Engineering
                </option>
              </select>
            </div>
          </div>
          <div className="w-1/2 flex-col flex">
            <label htmlFor="department">
              Department<span className="text-red-600">*</span>
            </label>
            {/* Select Department */}
            <div className="border rounded-sm overflow-hidden flex">
              <FontAwesomeIcon
                className="self-center p-3 text-blue-900"
                icon={faFilePen}
              />
              <select
                className="py-2 px-3 bg-gray-100 flex-1 cursor-pointer w-10/12"
                name="exam"
                id="exam"
                value={formData.examnation}
                onChange={handleInputChange}
                Required={true}
              >
                <option hidden value={"default"}>
                  Select Examination
                </option>

                <option className="cursor-pointer" value="Minor-I">
                  Minor-I
                </option>
                <option className="cursor-pointer" value="Minor-II">
                  Minor-II
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col w-1/2 gap-4 my-4">
            <InputBox
              placeholder={"Enter your Email"}
              id="email"
              name={"email"}
              value={formData.email}
              onChangeHandler={handleInputChange}
              icon={faUser}
              Required={true}
            />
            <PasswordInputBox
              id="password"
              name="password"
              placeholder="Enter your Password"
              value={formData.password}
              onChangeHandler={handleInputChange}
              required={true}
            />
          </div>

          <div className="my-4">
            <SubmitButton text="Upload" loading={loading} />
          </div>
        </div>
      </form>
    </div>
  );
}
