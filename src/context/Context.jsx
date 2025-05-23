import { createContext, useState } from "react";
import { gemini } from "../services/gemini";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [promptTerm, setPromptTerm] = useState("");
  const [resultData, setResultData] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSent = async () => {
    setLoading(true);
    const response = await gemini(promptTerm);
    console.log(response);
    setLoading(false);
    setResultData(response);
    setShowResult(true);
  };

  const value = {
    promptTerm,
    setPromptTerm,
    onSent,
    resultData,
    showResult,
    loading,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
