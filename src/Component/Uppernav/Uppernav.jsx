import React from 'react';
import { motion } from 'framer-motion';
import whatsappicon from "../../assets/whatsapp-line.svg";
import facebookicon from "../../assets/facebook-line.svg";
import linkedinicon from "../../assets/linkedin-line.svg";

const Uppernav = () => {
  const containerStyle = {
    width: "100%",
    backgroundColor: "#928AFD",
    color: "white",
    fontFamily: "sans-serif",
    padding: "8px 0",
    overflow: "hidden",
    position: "relative",
    zIndex: 1000,
  };

  const contentStyle = {
    display: "flex",
    alignItems: "center",
    gap: "2.5rem",
    whiteSpace: "nowrap",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "0 1rem"
  };

  const textStyle = {
    fontSize: "14px",
    display: "flex",
    gap: "0.5rem",
    alignItems: "center"
  };

  const dividerStyle = {
    width: "1px",
    height: "16px",
    backgroundColor: "white",
    opacity: 0.4
  };

  const iconStyle = {
    width: "20px",
    height: "20px",
    transition: "transform 0.2s",
    cursor: "pointer"
  };

  const contactStyle = {
    fontSize: "14px",
    display: "flex",
    gap: "0.5rem",
    alignItems: "center"
  };

  const spanStyle = {
    fontWeight: "500"
  };

  return (
    <motion.div
      style={containerStyle}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 12, delay: 0.2 }}
    >
      <div style={contentStyle}>
        <p style={textStyle}>
          Working Hour: <span style={spanStyle}>08:00pm to 09:00pm</span>
        </p>
        <span style={dividerStyle}></span>
        <p style={textStyle}>
          Email: <span style={spanStyle}>bhanuandey0843@gmail.com</span>
        </p>
        <span style={dividerStyle}></span>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a href="https://wa.me/917061738562" target="_blank" rel="noopener noreferrer">
            <img src={whatsappicon} alt="WhatsApp" style={iconStyle} />
          </a>
          <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src={facebookicon} alt="Facebook" style={iconStyle} />
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <img src={linkedinicon} alt="LinkedIn" style={iconStyle} />
          </a>
        </div>
        <span style={dividerStyle}></span>
        <p style={contactStyle}>
          Contact: <span style={spanStyle}>+91 7061738562</span>
        </p>
      </div>
    </motion.div>
  );
};

export default Uppernav;
