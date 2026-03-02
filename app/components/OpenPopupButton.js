"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Popup = dynamic(() => import("./Popup"), {
  ssr: false,
});

export default function OpenPopupButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Open Popup
      </button>

      {open && <Popup onClose={() => setOpen(false)} />}
    </>
  );
}