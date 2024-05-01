"use client";
import { useState } from "react";
import InputBox from "@/components/InputBox";
import SubmitButton from "@/components/SubmitButton";
import Toast from "@/components/Toast";
import Heading2 from "@/components/Heading2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookReader,
  faBuilding,
  faFileExcel,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";

export default function UploadResults() {
  const [isToastVisible, setIsToastVisible] = useState(false); // TOAST STATE VARIABLE
  const [toast, setToast] = useState({ type: "", message: "" }); // TOAST TYPE AND MESSAGE STATE VARIABLE
  const [loading, setLoading] = useState(false); // SPINNER STATE VARIABLE
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    semester: "",
    exam: "",
    department: "",
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const uploadResult = (e) => {
    e.preventDefault();
    if (file === null) {
      setIsToastVisible(true);
      setToast({ type: "error", message: "Please select a file" });
      return;
    }
    if (formData.semester === null) {
      setToast({ type: "error", message: "Please enter a valid Semester" });
      setIsToastVisible(true);
      return;
    }
    setLoading(true);
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("semester", formData.semester);
    formdata.append("department", formData.department);
    formdata.append("exam", formData.exam);

    const backendURL = process.env.NEXT_PUBLIC_API_HOST;
    fetch(`${backendURL}/admin/upload-result`, {
      method: "POST",
      // headers: {
      //   "Content-Type": "multipart/encrypted",
      // },
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setToast({ type: "success", message: data.message });
          setIsToastVisible(true);
          setFormData({
            semester: "",
            exam: "",
            department: "",
          });
          setFile(null);
        } else {
          setToast({ type: "danger", message: data.message });
          setIsToastVisible(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        setToast({ type: "danger", message: "Something went wrong" });
        setIsToastVisible(true);
        setLoading(false);
      });
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
              <label htmlFor="exam">
                Examination<span className="text-red-600">*</span>
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
                  value={formData.exam}
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
            <div className="my-4">
              <SubmitButton
                text="Upload"
                loading={loading}
                loadingText={"Uploading..."}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
