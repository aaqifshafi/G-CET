"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputBox from "@/components/InputBox";
import Toast from "@/components/Toast";
import Heading2 from "@/components/Heading2";
import { faArrowUp, faBrain, faClock } from "@fortawesome/free-solid-svg-icons";
import ChatBox from "../components/ChatBox";

const PaperWizard = () => {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toast, setToast] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    difficulty: "",
    marks: "",
    duration: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // TODO DEFINE UPLOAD FUNCTION FOR ON FORM SUBMIT

  // const validateForm = (e) => {
  //   e.preventDefault();

  //   // Validate form data
  //   if (!formData.marks || !formData.difficulty || !formData.duration) {
  //     setToast({ type: "error", message: "Please fill all required fields" });
  //     setIsToastVisible(true);
  //     return;
  //   }
  //};

  return (
    <div className="min-h-fit sm:mx-2 border-2 rounded-md border-primary-regular overflow-x-auto">
      <h1 className="bg-primary-regular p-2 sm:p-4 text-secondary font-medium">
        Auto generate Question Paper
      </h1>
      <div className="my-4 mx-4">
        <Heading2 headingText={"Paper Wizard"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="marks" className="block font-medium mb-1">
              Maximum Marks<span className="text-red-600">*</span>
            </label>
            <InputBox
              name="marks"
              placeholder="Maximum Marks"
              pattern="^[0-9]*$" // Only numbers allowed
              maxLength={3}
              min={20}
              max={100}
              id="marks"
              value={formData.marks}
              icon={faArrowUp}
              onChangeHandler={handleInputChange}
              Required={true}
            />
          </div>
          <div>
            <label htmlFor="duration" className="block font-medium mb-1">
              Duration (in hours)<span className="text-red-600">*</span>
            </label>
            <InputBox
              name="duration"
              placeholder="Duration (in hours)"
              type="number"
              min={1}
              step={0.5}
              id="duration"
              value={formData.duration}
              icon={faClock}
              onChangeHandler={handleInputChange}
              Required={true}
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="difficulty" className="block font-medium mb-1">
            Difficulty<span className="text-red-600">*</span>
          </label>
          <div className="border rounded-sm overflow-hidden flex">
            <FontAwesomeIcon
              className="self-center p-3 text-blue-900"
              icon={faBrain}
            />
            <select
              className="py-2 px-3 bg-gray-100 flex-1 cursor-pointer w-10/12"
              name="difficulty"
              id="difficulty"
              value={formData.difficulty}
              onChange={handleInputChange}
              Required={true}
            >
              <option hidden value={"default"}>
                Select Difficulty
              </option>
              <option className="cursor-pointer" value="Easy">
                Easy
              </option>
              <option className="cursor-pointer" value="Medium">
                Medium
              </option>
              <option className="cursor-pointer" value="Hard">
                Hard
              </option>
            </select>
          </div>
        </div>
        {console}
        <ChatBox formData={formData} />
      </div>
      {isToastVisible && <Toast type={toast.type} message={toast.message} />}
    </div>
  );
};

export default PaperWizard;
