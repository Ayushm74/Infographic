import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.leftSection}>
        <span style={styles.about}>❓ About ▼</span>
      </div>
      <div style={styles.centerSection}>
        <h2 style={styles.logo}>imgbb</h2>
      </div>
      <div style={styles.rightSection}>
        <span style={styles.upload}>⬆️ Upload</span>
        <span style={styles.signIn}>🔄 Sign in</span>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100vw", // ✅ Ensures full width
    height: "60px", // ✅ Fixed height
    padding: "10px 20px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    position: "fixed", // ✅ Keeps Navbar at the top
    top: 0,
    left: 0,
    zIndex: 1000, // ✅ Ensures it stays above other content
  },
  leftSection: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  about: {
    cursor: "pointer",
  },
  centerSection: {
    flex: 1,
    textAlign: "center",
  },
  logo: {
    fontFamily: "cursive",
    color: "#00aaff",
    margin: 0, // ✅ Prevents unwanted extra spacing
  },
  rightSection: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  upload: {
    marginRight: "15px",
    cursor: "pointer",
  },
  signIn: {
    cursor: "pointer",
  },
};

export default Navbar;
