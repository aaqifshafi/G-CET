"use client";
import { useState } from "react";
import InputBox from "@/components/InputBox";
import SubmitButton from "@/components/SubmitButton";
import Toast from "@/components/Toast";
import Heading2 from "@/components/Heading2";
import { faFilePdf, faList, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const UploadNoticePage = () => {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toast, setToast] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    category: "",
    title: "",
  }); // Combine all input fields into a single state variable

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const uploadNotice = (e) => {
    e.preventDefault();
    if (file === null) {
      setIsToastVisible(true);
      setToast({ type: "error", message: "Please select a file" });
      return;
    }
    if (formData.category === "") {
      setIsToastVisible(true);
      setToast({ type: "error", message: "Please select a category" });
      return;
    }
    if (formData.title === "") {
      setToast({ type: "error", message: "Please enter a title" });
      setIsToastVisible(true);
      return;
    }
    setLoading(true);
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("category", formData.category);
    formdata.append("title", formData.title);

    const backendURL = process.env.NEXT_PUBLIC_API_HOST;
    fetch(`${backendURL}/admin/upload-notice`, {
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
            category: "",
            title: "",
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
                name="file"
                type="file"
                onChangeHandler={handleFileChange}
                accept=".pdf"
                icon={faFilePdf}
                isRequired={true}
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
};

export default UploadNoticePage;
