import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import ResponseBox from "./ResponseBox";
import styles from "./Loading.module.css";

const openAiAPI = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
const rapidAPIKey = process.env.NEXT_PUBLIC_RAPID_API_KEY;
const rapidAPIHost = process.env.NEXT_PUBLIC_RAPID_API_HOST;

const ChatBox = ({ formData }) => {
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [apiResponseMessage, setApiResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fileText, setFileText] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleFileChange = async (e) => {
    setIsLoading(true);
    const file = e.target.files[0];
    const text = await convertPdfToText(file, 1);
    setFileText(text);
    e.target.value = null;
    setIsLoading(false);
  };
  const convertPdfToText = async (pdfFile, page) => {
    const url =
      "https://pdf-to-text-converter.p.rapidapi.com/api/pdf-to-text/convert";
    const data = new FormData();
    data.append("file", pdfFile);
    data.append("page", page);
    const options = {
      method: "POST",
      headers: {
        "X-RapidAPI-Key": rapidAPIKey,
        "X-RapidAPI-Host": rapidAPIHost,
      },
      body: data,
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      return result;
      // console.log(result);
    } catch (error) {
      console.error(error);
    }
    return result;
  };
  const sendMessage = async (e) => {
    setIsLoading(true);
    e.preventDefault();

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
            ...allMessages,
            {
              role: "user",
              content: message || fileText,
            },
            {
              role: "assistant",
              content: JSON.stringify({
                message:
                  "Generate a Question paper for Examination for the following syllabus with equal marks distribution to each UNIT, Divide the paper in 3 Sections Long Answer Type , Short Answer Type and Multiple choice Questions. Mention Qustion Paper Heading at the top of the paper with maximum marks and duration of the exam as passed further.Mention the same Duration and Maximum Marks on top of Question paper",
                difficulty: formData.difficulty,
                maxMarks: formData.marks,
                duration: formData.duration + " hours",
              }),
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
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-4 relative">
      {isLoading && (
        <div className={styles.preLoading}>
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
            placeholder="Type or Upload Syllabus here..."
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
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
          />

          <button
            type="submit"
            className="self-center p-4 bg-primary-regular text-white  focus:outline-none"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBox;
