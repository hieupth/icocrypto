'use client';
import Modals from "@/components/elements/modals";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const openHandle = () => {
    setOpen(true);
  };

  const closeHandle = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={openHandle}>Open</button>
      <Modals size="sm" position="bottom" open={open} onClose={closeHandle}>
        <div className="row">
          <div className="col-6">
            <h3>Test</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>
          <div className="col-6">
            <h3>Test</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>
        </div>
      </Modals>
    </>
  );
}