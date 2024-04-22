import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import ResponseBox from "./ResponseBox";

const openAiAPI = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

const ChatBox = ({ formData }) => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [allMessages, setAllMessages] = useState([]);
  const [apiResponseMessage, setApiResponseMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const sendMessage = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const url = "https://api.openai.com/v1/chat/completions";
    const token = `Bearer ${openAiAPI}`;
    const model = "gpt-3.5-turbo";
    let res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model,
        messages: [
          ...allMessages,
          {
            role: "user",
            content: message,
          },
          {
            role: "assistant",
            content:
              "Generate a Question paper for Examination for the following syllabus with 25% marks distribution to each UNIT, Divide the paper in 3 Sections Long Answer Type , Short Answer Type and Multiple choice Questions. Mention Qustion Paper Heading at the top of the paper with aximum marks and duration of the exam.",
          },
          {
            role: "assistant",
            content: JSON.stringify({
              difficulty: formData.difficulty,
              maxMarks: formData.maxMarks,
              duration: formData.duration,
            }),
          },
        ],
      }),
    });
    let resJson = await res.json();
    setMessage("");
    setApiResponseMessage(resJson.choices[0].message);
  };

  return (
    <div className="mt-4">
      <ResponseBox allMessages={allMessages} newMessage={apiResponseMessage} />
      <form onSubmit={sendMessage} className="flex items-center">
        <div className="border rounded-sm overflow-hidden flex flex-1">
          <input
            className="py-2 px-3 bg-gray-100 flex-1 w-10/12 focus:outline-none"
            type="text"
            value={message}
            onChange={handleMessageChange}
            placeholder="Powered by ChatGPT..."
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
