import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1>Forgot Password Page</h1>

      <input
        type="email"
        placeholder="Enter your email"
        style={{
          padding: "12px",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <button
        style={{
          padding: "12px 20px",
          cursor: "pointer",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
        }}
      >
        Send Reset Link
      </button>

      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#2563eb",
          fontSize: "16px",
        }}
      >
        Back to Login
      </Link>
    </div>
  );
};

export default ForgotPassword;