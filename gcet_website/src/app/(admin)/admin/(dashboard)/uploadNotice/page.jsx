"use client";
import { useState } from "react";
import InputBox from "@/components/InputBox";
import PasswordInputBox from "@/components/PasswordInputBox";
import SubmitButton from "@/components/SubmitButton";
import Toast from "@/components/Toast";
import Heading2 from "@/components/Heading2";
import {
  faCalendar,
  faFilePdf,
  faList,
  faPencil,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const UploadNoticePage = () => {
  const [isToastVisible, setIsToastVisible] = useState(false); // TOAST STATE VARIABLE
  const [toast, setToast] = useState({ type: "", message: "" }); // TOAST TYPE AND MESSAGE STATE VARIABLE
  const [loading, setLoading] = useState(false); // SPINNER STATE VARIABLE
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    category: "",
    date: getCurrentDate(),
    title: "",
  }); // Combine all input fields into a single state variable

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // TODO DEFINE UPLOAD FUNCTION FOR ON FORM SUBMIT
  const uploadNotice = (e) => {};
  return (
    <div className="min-h-fit sm:mx-2 border-2 rounded-md border-primary-regular overflow-x-auto">
      <h1 className="bg-primary-regular p-2 sm:p-4 text-secondary font-medium">
        Upload Notice
      </h1>
      <div className="my-4">
        <Heading2 headingText={"Fill the below details"} />
      </div>
      <form className="p-4 overflow-hidden" onSubmit={uploadNotice}>
        <div className="flex flex-col justify-center items-center">
          <div className="w-1/2 flex-col flex">
            <label htmlFor="file">
              Upload Notice File<span className="text-red-600">*</span>
            </label>
            <InputBox
              type="file"
              placeholder="Select an Excel Spreadsheet"
              onChangeHandler={handleFileChange}
              accept=".pdf"
              icon={faFilePdf}
              Required={true}
            />
          </div>

          <div className="w-1/2 flex-col flex">
            <label htmlFor="category">
              Category<span className="text-red-600">*</span>
            </label>
            {/* Select Category*/}
            <div className="border rounded-sm overflow-hidden flex">
              <FontAwesomeIcon
                className="self-center p-3 text-blue-900"
                icon={faList}
              />
              <select
                className="py-2 px-3 bg-gray-100 flex-1 cursor-pointer w-10/12"
                name="category"
                id="category"
                value={formData.category}
                onChange={handleInputChange}
                Required={true}
              >
                <option hidden value={"default"}>
                  Select Category
                </option>
                <option className="cursor-pointer" value="Admission">
                  Admission
                </option>
                <option className="cursor-pointer" value="Administration">
                  Administration
                </option>
                <option className="cursor-pointer" value="Sports">
                  Sports
                </option>
                <option className="cursor-pointer" value="Examination">
                  Examination
                </option>
                <option className="cursor-pointer" value="Placement">
                  Placement"
                </option>
                <option className="cursor-pointer" value="Library">
                  Library
                </option>
                <option className="cursor-pointer" value="Result">
                  Result
                </option>
                <option className="cursor-pointer" value="Tender">
                  Tender
                </option>

                <option className="cursor-pointer" value="Other">
                  Other
                </option>
              </select>
            </div>
          </div>
          <div className="w-1/2 flex-col flex">
            <label htmlFor="title">
              Notification Title<span className="text-red-600">*</span>
            </label>

            <InputBox
              placeholder={"Enter Title for Notice"}
              id={"title"}
              name={"title"}
              value={formData.title}
              type={"text"}
              onChangeHandler={handleInputChange}
              icon={faPencil}
              Required={true}
            />
          </div>
          <div className="w-1/2 flex-col flex">
            <label htmlFor="title">
              Date<span className="text-red-600">*</span>
            </label>

            <InputBox
              id={"date"}
              name={"date"}
              value={formData.date}
              type={"date"}
              onChangeHandler={handleInputChange}
              icon={faCalendar}
              Required={true}
            />
          </div>
          <div className="flex flex-col w-1/2 gap-4 my-4">
            <InputBox
              placeholder={"Enter your Email"}
              id={"email"}
              name={"email"}
              type={"email"}
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
};

export default UploadNoticePage;
