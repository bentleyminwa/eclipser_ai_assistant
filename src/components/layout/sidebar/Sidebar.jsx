import {
  LucideAlignJustify,
  LucideBadgeHelp,
  LucideClockFading,
  LucideMessageSquareCode,
  LucidePlus,
  LucideSettings,
} from "lucide-react";
import { useContext, useState } from "react";
import Context from "../../../context/Context";
import "./Sidebar.css";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const { prevPrompts, setRecentPrompt, onSent, newChat } = useContext(Context);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <section className="top-sidebar">
        <div className="top-sidebar__menu">
          <LucideAlignJustify onClick={toggleSidebar} />
        </div>

        <div className="top-sidebar__content">
          <button className="new-chat" onClick={newChat}>
            <LucidePlus />
            <span>New chat</span>
          </button>

          <span className="recent">
            <h2>Recent</h2>
            {prevPrompts.map((item, index) => (
              <ul key={index} className="recent-list">
                <li onClick={() => loadPrompt(item)}>
                  <LucideMessageSquareCode />
                  <span>{item.slice(0, 10)}...</span>
                </li>
              </ul>
            ))}
          </span>
        </div>
      </section>

      <section className="bottom-sidebar">
        <ul className="bottom-menu__list">
          <li>
            <LucideBadgeHelp />
            <span>Help</span>
          </li>
          <li>
            <LucideClockFading />
            <span>Activity</span>
          </li>
          <li>
            <LucideSettings />
            <span>Settings</span>
          </li>
        </ul>
      </section>
    </aside>
  );
}
