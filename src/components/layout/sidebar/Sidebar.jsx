import {
  LucideAlignJustify,
  LucideBadgeHelp,
  LucideClockFading,
  LucideMessageSquareCode,
  LucidePlus,
  LucideSettings,
} from "lucide-react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <section className="top-sidebar">
        <div className="top-sidebar__menu">
          <LucideAlignJustify />
        </div>

        <div className="top-sidebar__content">
          <button className="new-chat">
            <LucidePlus />
            <span>New chat</span>
          </button>
          <div className="recent">
            <h2>Recent</h2>
            <ul className="recent-list">
              <li>
                <LucideMessageSquareCode />
                <span>What is React...</span>
              </li>
            </ul>
          </div>
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
