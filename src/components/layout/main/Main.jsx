import {
  LucideBriefcase,
  LucideCode,
  LucideCompass,
  LucideImagePlus,
  LucideLightbulb,
  LucideMic,
  LucideSendHorizontal,
  LucideSparkles,
} from "lucide-react";
import { useContext } from "react";
import Context from "../../../context/Context";
import Loader from "../../ui/Loader/Loader";
import TypingDisplay from "../../ui/TypingDisplay";
import "./Main.css";

export default function Main() {
  const {
    promptTerm,
    setPromptTerm,
    onSent,
    resultData,
    showResult,
    loading,
    recentPrompt,
  } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSent();
  };

  return (
    <main className="main">
      <nav className="top-main">
        <h1 className="logo">Eclipser</h1>
        <img src="avatar.png" alt="" className="avatar" />
      </nav>

      {showResult ? (
        <section className="result">
          <div className="result-title">
            <img src="avatar.png" alt="" className="avatar" />
            <h3 className="prompt-term">{recentPrompt}</h3>
          </div>
          <div className="result-content">
            <span>
              <LucideSparkles className="sparkles" />
            </span>
            {loading ? (
              <Loader />
            ) : (
              <div className="result-data">
                <TypingDisplay text={resultData} />
              </div>
            )}
          </div>
        </section>
      ) : (
        <section className="main-content">
          <h1>Hello, Dev.</h1>
          <p>How can I assist you today?</p>
          <div className="cards">
            <div className="card">
              <p>Suggest beautiful places to see on an upcoming roadtrip.</p>
              <LucideCompass className="card-icon" />
            </div>
            <div className="card">
              <p>Briefly summarize this concept: urban planning.</p>
              <LucideLightbulb className="card-icon" />
            </div>
            <div className="card">
              <p>Brainstorm team bonding activities for our work retreat.</p>
              <LucideBriefcase className="card-icon" />
            </div>
            <div className="card">
              <p>Tell me about React Js and React Native.</p>
              <LucideCode className="card-icon" />
            </div>
          </div>
        </section>
      )}

      <footer className="main-footer">
        <form onSubmit={handleSubmit}>
          <label htmlFor="prompt" hidden>
            prompt
          </label>
          <input
            required
            type="text"
            id="prompt"
            name="prompt"
            placeholder="What would you like to know?"
            value={promptTerm}
            onChange={(e) => setPromptTerm(e.target.value)}
          />
          <div className="prompt-actions">
            <LucideImagePlus className="prompt-icon" />
            {promptTerm ? (
              <button className="prompt-icon" type="submit">
                <LucideSendHorizontal />
              </button>
            ) : (
              <button className="prompt-icon">
                <LucideMic />
              </button>
            )}
          </div>
        </form>
        <p className="footer-text">
          Eclipser may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Eclipser Apps
        </p>
      </footer>
    </main>
  );
}
