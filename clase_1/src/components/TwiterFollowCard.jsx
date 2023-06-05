import React, { useState } from "react";
import "../styles/app.css";

export default function TwiterFollowCard({ userName, children, initialFolowwing }) {
  const [isFollowing, setisFollowing] = useState(false);
  const text = isFollowing ? "siguiendo" : "seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setisFollowing(!isFollowing);
  };
  return (
    <>
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img
            className="tw-followCard-avatar"
            src={`https://unavatar.io/twitter/@${userName}`}
            alt="photo_profile"
          />
          <div className="tw-followCard-info">
            <strong>{children}</strong>
            <span className="tw-followCard-text">{`@${userName}`}</span>
          </div>
        </header>
        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-followCard-text">{text}</span>
            <span className="tw-followCard-stopFollow">Dejar de seguir</span>
          </button>
        </aside>
      </article>
    </>
  );
}
