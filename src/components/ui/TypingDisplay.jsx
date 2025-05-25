// components/TypingDisplay.jsx
import { useEffect, useState } from "react";

const TypingDisplay = ({ text }) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 5);

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  const parseFormattedText = (str) => {
    // Replace bold (**text**) with <strong>
    let formatted = str.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // Replace single * with <br>
    formatted = formatted.replace(/(?<!\*)\*(?!\*)/g, "<br />");
    return formatted;
  };

  return (
    <p
      className="typing-text"
      dangerouslySetInnerHTML={{ __html: parseFormattedText(displayed) }}
    />
  );
};

export default TypingDisplay;
