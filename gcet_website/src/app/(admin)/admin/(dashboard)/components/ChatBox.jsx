"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPaperclip } from "@fortawesome/free-solid-svg-icons";

const openAiAPI = process.env.OPENAI_API_KEY;
const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const sendMessage = async () => {
    console.log(message);
    let url = "https://api.openai.com/v1/chat/completions";
    let token = `Bearer ${openAiAPI}`;
    let model = "gpt-3.5-turbo";

    let res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model,
        message: message,
      }),
    });
    let resjosn = await res.json();
    if (resjosn.status === "success") {
      console.log(resjosn.data);
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(); // Call sendMessage function to send the message
    setMessage(""); // Clear the message input
    setFile(null); // Clear the file input
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="border rounded-sm overflow-hidden flex flex-1">
          <input
            className="py-2 px-3 bg-gray-100 flex-1 w-10/12 focus:outline-none"
            type="text"
            value={message}
            onChange={handleMessageChange}
            placeholder="Type or Upload Syllabus..."
          />
          <label
            htmlFor="file-input"
            className="self-center p-3 text-blue-900 focus:outline-none cursor-pointer"
          >
            <FontAwesomeIcon icon={faPaperclip} />
          </label>
          <input
            id="file-input"
            type="file"
            accept=".pdf,.txt,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            type="submit"
            className="self-center p-2 bg-primary-regular text-white rounded-full focus:outline-none"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBox;
