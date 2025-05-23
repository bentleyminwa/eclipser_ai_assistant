import {
  LucideBriefcase,
  LucideCode,
  LucideCompass,
  LucideImagePlus,
  LucideLightbulb,
  LucideMic,
  LucideSendHorizontal,
  LucideUser,
} from "lucide-react";
import "./Main.css";

export default function Main() {
  return (
    <main className="main">
      <nav className="top-main">
        <h1 className="logo">Eclipser</h1>
        <img src="avatar.png" alt="" className="avatar" />
      </nav>

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

      <footer className="main-footer">
        <form>
          <label htmlFor="prompt" hidden>
            prompt
          </label>
          <input
            type="text"
            id="prompt"
            name="prompt"
            placeholder="What would you like to know?"
          />
          <div className="prompt-actions">
            <LucideImagePlus className="prompt-icon" />
            <LucideMic className="prompt-icon" />
            <LucideSendHorizontal className="prompt-icon" />
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
