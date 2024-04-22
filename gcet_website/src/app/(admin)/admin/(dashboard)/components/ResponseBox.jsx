import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faPrint } from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useReactToPrint } from "react-to-print";
import styles from "./ResponseBox.module.css";

const ResponseBox = ({ allMessages, newMessage }) => {
  const [isTyping, setIsTyping] = useState(false);
  const [visibleText, setVisibleText] = useState("");
  const [messages, setMessages] = useState(allMessages);
  const typingRef = useRef(null);
  const componentRef = useRef(null);

  const handleCopy = () => {
    // Additional logic for copying text, if needed
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    if (newMessage) {
      startTypingAnimation(newMessage.content);
    }
  }, [newMessage]);

  const startTypingAnimation = (text) => {
    let currentIndex = 1; // Start from the second character

    // Check if text exists and is not undefined
    if (!text || text.length === 0) {
      // If text is undefined or empty, clear any existing interval and set isTyping to false
      clearInterval(typingRef.current);
      setIsTyping(false);
      return; // Exit the function
    }

    setIsTyping(true);
    setVisibleText(text[0]); // Start with the first character

    typingRef.current = setInterval(() => {
      if (currentIndex < text.length) {
        setVisibleText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingRef.current);
        setIsTyping(false);
        // Append the new message to the existing messages
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    }, 5); // Adjust the typing speed by changing this value (in milliseconds)
  };

  const formatMessageContent = (content) => {
    // Replace new line characters with HTML line breaks
    content = content.replace(/\n/g, "<br/>");

    // Split content into lines to check for lists and numbering
    const lines = content.split("\n");

    // Initialize an empty array to store formatted lines
    let formattedLines = [];

    // Iterate through each line
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];

      // Check if the line is a numbered list item
      if (/^\s*\d+\.\s+/.test(line)) {
        // Wrap the line with <ol> and <li> tags
        formattedLines.push(`<li>${line.replace(/^\s*\d+\.\s+/, "")}</li>`);
      }
      // Check if the line is a bulleted list item
      else if (/^\s*-\s+/.test(line)) {
        // Wrap the line with <ul> and <li> tags
        formattedLines.push(`<li>${line.replace(/^\s*-\s+/, "")}</li>`);
      }
      // If the line is neither a list item nor empty, just add it as is
      else if (line.trim().length > 0) {
        formattedLines.push(line);
      }
    }

    // Join the formatted lines with line breaks
    content = formattedLines.join("<br/>");

    // Apply bold and italic formatting
    content = content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"); // Bold
    content = content.replace(/\*(.*?)\*/g, "<em>$1</em>"); // Italic

    // You can add more formatting rules as needed

    // Return the formatted content
    return content;
  };

  return (
    <div className={styles.replyContainer} ref={componentRef}>
      {/* Render all messages */}
      {messages.map((message, index) => (
        <div key={index} className={styles.replyWrapper}>
          <div className={styles.replyHeader}>
            <CopyToClipboard text={message.content} onCopy={handleCopy}>
              <FontAwesomeIcon
                icon={faCopy}
                className={styles.iconButton}
                title="Copy"
              />
            </CopyToClipboard>
            <FontAwesomeIcon
              icon={faPrint}
              className={styles.iconButton}
              onClick={handlePrint}
              title="Print"
            />
          </div>
          <div className={styles.replyBubble}>
            <div
              className={styles.replyBubbleContent}
              dangerouslySetInnerHTML={{
                __html: formatMessageContent(message.content),
              }}
            />
          </div>
        </div>
      ))}
      {/* Render the animated message */}
      {newMessage && isTyping && (
        <div className={styles.replyWrapper}>
          <div className={styles.replyHeader}>
            <CopyToClipboard text={newMessage.content} onCopy={handleCopy}>
              <FontAwesomeIcon
                icon={faCopy}
                className={styles.iconButton}
                title="Copy"
              />
            </CopyToClipboard>
            <FontAwesomeIcon
              icon={faPrint}
              className={styles.iconButton}
              onClick={handlePrint}
              title="Print"
            />
          </div>
          <div className={styles.replyBubble}>
            <div className={styles.replyBubbleContent}>
              {/* Show the typing animation */}
              <span className={styles.typingAnimation}>
                {visibleText}
                <span className={styles.cursor} />
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponseBox;
