import styles from "./styles.module.css";
import { useRef, useState } from "react";

import { IoMdLogOut } from "react-icons/io";
import { useOutsidePopup } from "../../hooks/useOutsidePopup";

import { logout } from "../../services/auth";
import { useNavigate } from "react-router-dom";

function Header() {
  const { username, role } = JSON.parse(localStorage.getItem("user")) || {};
  const firstLetter = username?.substring(0, 1)?.toUpperCase();
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();
  const nodeRef = useRef(null);

  const handleClick = () => {
    setShowProfile(!showProfile);
  };

  const handleLogout = () => {
    navigate(`/${role}/login`);
    localStorage.removeItem("user");
    logout();
  };

  useOutsidePopup(nodeRef, () => {
    setShowProfile(false);
  });

  return (
    <header className={styles.header}>
      <div ref={nodeRef} className={styles.profileWrapper}>
        <button onClick={handleClick} className={styles.profileBtn}>
          <span className={styles.profileImg}>{firstLetter}</span>
          <div>
            <h2 className={styles.username}>{username}</h2>
            <span className={styles.role}>{role}</span>
          </div>
        </button>
        {showProfile && (
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Logout
            <IoMdLogOut />
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
