import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
          <span>
            <Link
              style={{ color: "#E1C16E" }}
              className="nav-link"
              to={"https://github.com/nnkwonta3"}
            >
              By  Frances Nkwonta
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
