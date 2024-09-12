'use client'
import React, { useState, useEffect, ReactNode } from "react";

interface ModalsProps {
  size?: 'sm' | 'lg' | 'xl';
  position?: 'top' | 'center' | 'bottom';
  children: ReactNode;
  open: boolean; // Control the modal state externally
}

export default function Modals({ size = 'sm', position = 'top', children, open }: ModalsProps) {
  const [isOpen, setIsOpen] = useState(open); // Initialize with the open prop

  useEffect(() => {
    // Update internal state if the open prop changes
    setIsOpen(open);
  }, [open]);

  const modalSizeClass = size === 'xl' ? 'modal-xl' : size === 'lg' ? 'modal-lg' : '';
  const modalPositionClass = position === 'center' ? 'modal-dialog-centered' : position === 'bottom' ? 'modal-dialog-bottom' : '';

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close modal if the backdrop is clicked
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  const handleCloseClick = () => {
    setIsOpen(false); // Close modal when close button is clicked
  };

  if (!isOpen) return null; // Hide modal if closed

  return (
    <>
      {/* Overlay */}
      <div
        className="modal-backdrop fade show"
        style={{ zIndex: 50 }}  // Ensure overlay covers everything
        onClick={handleOverlayClick} // Trigger close when clicking outside
      ></div>

      {/* Modal */}
      <div
        className="modal fade show"
        style={{
          display: "block",
          paddingLeft: "0px",
          zIndex: 1050,  // Higher z-index for the modal itself
        }}
        aria-modal="true"
        role="dialog"
      >
        <div className={`modal-dialog ${modalSizeClass} ${modalPositionClass}`}>
          <div className="modal-content">
            <a
              href="#"
              className="modal-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleCloseClick}  // Close modal when the close button is clicked
            >
              <em className="ti ti-close"></em>
            </a>
            <div className="modal-body p-md-4 p-lg-5">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}