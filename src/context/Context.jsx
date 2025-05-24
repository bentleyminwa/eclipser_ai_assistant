import { createContext, useState } from "react";
import { gemini } from "../services/gemini";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [promptTerm, setPromptTerm] = useState("");
  const [resultData, setResultData] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);

    let response;
    if (prompt !== undefined) {
      response = await gemini(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompts((prev) => [...prev, promptTerm]);
      setRecentPrompt(promptTerm);
      response = await gemini(promptTerm);
    }

    setResultData(response);
    setLoading(false);
    setPromptTerm("");
  };

  const value = {
    promptTerm,
    setPromptTerm,
    onSent,
    resultData,
    showResult,
    loading,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    newChat,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
