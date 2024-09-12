'use client';
import React, { ReactNode, useCallback } from "react";

interface ModalsProps {
  size?: 'sm' | 'lg' | 'xl';
  position?: 'top' | 'center' | 'bottom';
  children: ReactNode;
  open: boolean;
  onClose?: () => void;
}

export default function Modals({ 
  size = 'sm', 
  position = 'top', 
  children, 
  open, 
  onClose 
}: ModalsProps) {
  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const handleOverlayClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }, [handleClose]);

  if (!open) return null;

  const modalSizeClass = size === 'xl' ? 'modal-xl' : size === 'lg' ? 'modal-lg' : '';
  const modalPositionClass = position === 'center' ? 'modal-dialog-centered' : 
                             position === 'bottom' ? 'modal-dialog-bottom' : '';

  return (
    <>
      <div
        className="modal-backdrop fade show"
        style={{ zIndex: 50 }}
        onClick={handleOverlayClick}
      />
      <div
        className="modal fade show"
        style={{
          display: "block",
          paddingLeft: "0px",
          zIndex: 1050,
        }}
        aria-modal="true"
        role="dialog"
      >
        <div className={`modal-dialog ${modalSizeClass} ${modalPositionClass}`}>
          <div className="modal-content">
            <a
              href="#"
              className="modal-close"
              aria-label="Close"
              onClick={(e) => {
                e.preventDefault();
                handleClose();
              }}
            >
              <em className="ti ti-close" />
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