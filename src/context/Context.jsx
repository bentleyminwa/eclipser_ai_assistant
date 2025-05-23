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

  const onSent = async () => {
    setLoading(true);
    const response = await gemini(promptTerm);
    setResultData(response);
    setLoading(false);
    setRecentPrompt(promptTerm);
    setPrevPrompts((prev) => [...prev, recentPrompt]);
    setShowResult(true);
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
    prevPrompts,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
