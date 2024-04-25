"use client";
import "@/app/globals.css";
import InputBox from "@/components/InputBox";
import SubmitButton from "@/components/SubmitButton";
import Toast from "@/components/Toast";
import { useRouter } from "next/navigation"; // Corrected import
import { useState } from "react";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
const { customAlphabet, random } = require("nanoid");

function generateId() {
  const alphabet = "0123456789";
  // Get current date and time
  const nanoid = customAlphabet(alphabet, 8); // Changed the length to 8 for the first part
  const feedbackId = nanoid();

  return feedbackId;
}

const apiURL = process.env.NEXT_PUBLIC_API_HOST;

const FeedbackForm = () => {
  // Next router
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  // Toast related variables
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toast, setToast] = useState({});

  // Loading spinner variable
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle form submit
  const handleSubmit = async (e) => {
    // Check if feedback and email fields are filled
    if (!feedback || !email) {
      setIsToastVisible(true);
      setToast({
        type: "warning",
        message: "Please fill out both feedback and email fields",
      });
      return; // Exit the function if either field is empty
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // All fields are filled, proceed with form submission
      body: JSON.stringify({
        name,
        email,
        feedback,
        feedbackId: generateId(), // Generate a unique feedback ID
      }),
    };

    try {
      setIsLoading(true);
      const response = await fetch(`${apiURL}/feedback`, options);

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
          message: data.message, // Response message from the server (Your Data has been Updated)
        });
        setTimeout(() => {
          // Redirect to feedback page after 3 seconds
          router.refresh("/feedback");
        }, 3000);
      }
    } catch (err) {
      setIsToastVisible(true);
      setToast({
        type: "danger",
        message: "Failed to submit feedback. Please try again later.",
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
      <div className="m-6 flex items-center justify-center ">
        <div className="sm:mx-4 grid gap-6 text-lg border-t-8 border-1 bg-secondary shadow-md p-4 border-primary-regular rounded-md">
          <div className="border max-w-full overflow-x-auto no-scrollbar my-4">
            <div className="m-4">
              <h2 className="text-center font-bold text-3xl">
                Feedback, Complaints- Form
              </h2>
              <div className="h-0.5 max-w-[6rem] bg-primary-regular mx-auto "></div>
            </div>

            <div className="px-4 ">
              <p className="text-slate-600 mb-4 text-center">
                Feel free to share your feedback or complaint with us. We would
                love to hear.You can also send us your complaints anoyomously.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 "
                action=""
              >
                {/* Name */}
                <div className="w-1/2 flex-col flex">
                  <label htmlFor="name">Full Name</label>
                  <InputBox
                    name="name"
                    placeholder="Your Name"
                    type="text"
                    icon={faUser}
                    id="name"
                    value={name}
                    onChangeHandler={(e) => setName(e.target.value)}
                  />
                </div>
                {/* Email */}
                <div className="w-1/2 flex-col flex">
                  <label htmlFor="email">
                    Email<span className="text-red-600">*</span>
                  </label>
                  <InputBox
                    name="email"
                    placeholder="Your Email"
                    type="email"
                    icon={faEnvelope}
                    id="email"
                    value={email}
                    onChangeHandler={(e) => setEmail(e.target.value)}
                    isRequired={true}
                  />
                </div>
                {/* Feedback */}
                <div className="w-full flex-col flex">
                  <label htmlFor="feedback">
                    Feedback<span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="feedback"
                    className="py-2 px-3 bg-gray-100 flex-1 "
                    placeholder="Your Feedback"
                    type="text"
                    rows="4"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="mb-2">
                  {/* Submit Button */}
                  <SubmitButton loading={isLoading} text={"Sumbit"} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
