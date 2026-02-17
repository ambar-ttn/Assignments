"use client";

export default function Error({ reset }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Something went wrong</h2>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
}
