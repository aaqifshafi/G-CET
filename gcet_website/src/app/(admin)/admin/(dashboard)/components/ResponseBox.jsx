"use client";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faPrint } from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useReactToPrint } from "react-to-print";
import styles from "./ResponseBox.module.css";

const ResponseBox = ({ text }) => {
  const [isTyping, setIsTyping] = useState(true);
  const [visibleText, setVisibleText] = useState("");
  const typingRef = useRef(null);
  const componentRef = useRef(null);

  const handleCopy = () => {
    // Additional logic for copying text, if needed
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    startTypingAnimation();
  }, []);

  const startTypingAnimation = () => {
    let currentIndex = 0;

    // Check if text exists and is not undefined
    if (!text || text.length === 0) {
      // If text is undefined or empty, clear any existing interval and set isTyping to false
      clearInterval(typingRef.current);
      setIsTyping(false);
      return; // Exit the function
    }

    typingRef.current = setInterval(() => {
      if (currentIndex < text.length) {
        setVisibleText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingRef.current);
        setIsTyping(false);
      }
    }, 30); // Adjust the typing speed by changing this value (in milliseconds)
  };

  return (
    <div className={styles.replyContainer} ref={componentRef}>
      <div className={styles.replyHeader}>
        <CopyToClipboard text={visibleText} onCopy={handleCopy}>
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
          {isTyping ? (
            <span className={styles.typingIndicator}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </span>
          ) : (
            visibleText
          )}
        </div>
      </div>
    </div>
  );
};

export default ResponseBox;
