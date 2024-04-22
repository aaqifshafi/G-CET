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
    }, 30); // Adjust the typing speed by changing this value (in milliseconds)
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
            <div className={styles.replyBubbleContent}>{message.content}</div>
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
