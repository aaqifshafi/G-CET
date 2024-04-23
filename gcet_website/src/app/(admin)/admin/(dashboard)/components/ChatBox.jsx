import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import ResponseBox from "./ResponseBox";
import styles from "./Loading.module.css"; // Import the Loading styles

const openAiAPI = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

const ChatBox = ({ formData }) => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [allMessages, setAllMessages] = useState([]);
  const [apiResponseMessage, setApiResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loading animation

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const sendMessage = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsLoading(true); // Set loading state to true

    const url = "https://api.openai.com/v1/chat/completions";
    const token = `Bearer ${openAiAPI}`;
    const model = "gpt-3.5-turbo";

    try {
      let res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: model,
          messages: [
            {
              role: "user",
              content: message,
            },
            {
              role: "assistant",
              content: "Generate a Question paper for Examination...",
            },
          ],
        }),
      });

      let resJson = await res.json();
      setMessage("");
      setApiResponseMessage(resJson.choices[0].message);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // Set loading state back to false after response
    }
  };

  return (
    <div className="mt-4 relative">
      {" "}
      {/* Added relative position */}
      {isLoading && (
        <div className={styles.preLoading}>
          {" "}
          {/* Apply loading styles */}
          <div className={styles.ldsEllipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
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
