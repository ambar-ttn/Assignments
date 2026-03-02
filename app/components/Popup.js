"use client";

export default function Popup({ onClose }) {
  return (
    <div style={{
      position: "fixed",
      top: "30%",
      left: "30%",
      background: "white",
      padding: "20px",
      border: "2px solid black",
      zIndex: 1000
    }}>
      <h2>Popup Opened </h2>
      <p>This component is dynamically imported.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}