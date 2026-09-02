import { useState } from "react";
import "./App.css";

function App() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(1000);

  const handleFollow = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowers((prev) => prev - 1);
    } else {
      setIsFollowing(true);
      setFollowers((prev) => prev + 1);
    }
  };

  return (
    <div className="app">
      <div className="profile-container">

        {/* Header */}
        <div className="header">
          <button className="icon-btn">❮</button>

          <h2>Prem Patel</h2>

          <button className="menu-btn">•••</button>
        </div>

        {/* Profile Information */}
        <div className="profile-info">

          {/* Profile Image */}
          <div className="profile-border">
            <img
              src="https://i.pravatar.cc/300?img=12"
              alt="Prem Patel"
              className="profile-image"
            />
          </div>

          {/* Statistics */}
          <div className="stats">

            <div className="stat">
              <h3>106</h3>
              <p>Posts</p>
            </div>

            <div className="stat">
              <h3>{followers}</h3>
              <p>Followers</p>
            </div>

            <div className="stat">
              <h3>263</h3>
              <p>Following</p>
            </div>

          </div>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button
            className={isFollowing ? "following-btn" : "follow-btn"}
            onClick={handleFollow}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>

          <button className="message-btn">
            Message
          </button>
        </div>

        {/* Bio */}
        <div className="bio">
          <h3>Prem Patel</h3>
          <p>Web Developer</p>
          <p>Learning React ⚛️</p>
          <p>for queries: info@email.com</p>
        </div>

      </div>
    </div>
  );
}

export default App;