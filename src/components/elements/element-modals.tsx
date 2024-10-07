import React, { ReactNode, useCallback, useEffect, useState } from "react";

interface ModalsProps {
  size?: 'sm' | 'lg' | 'xl';
  position?: 'top' | 'center' | 'bottom';
  children: ReactNode;
  open: boolean;
  onClose?: () => void;
}

export default function Modals({ 
  size = 'xl', 
  position = 'center', 
  children, 
  open, 
  onClose 
}: ModalsProps) {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (open) {
      setIsRendered(true);
    } else {
      const timer = setTimeout(() => setIsRendered(false), 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const handleOverlayClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }, [handleClose]);

  if (!isRendered && !open) return null;

  const modalSizeClass = size === 'xl' ? 'modal-xl' : size === 'lg' ? 'modal-lg' : '';
  const modalPositionClass = position === 'center' ? 'modal-dialog-centered' : 
                             position === 'bottom' ? 'modal-dialog-bottom' : '';

  const css = `
    .modal-backdrop {
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
    .modal-backdrop.show {
      opacity: 0.5;
    }
    .modal {
      display: flex !important;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    }
    .modal.show {
      opacity: 1;
      visibility: visible;
    }
    .modal-dialog {
      transform: scale(0.9);
      transition: transform 0.3s ease-in-out;
    }
    .modal.show .modal-dialog {
      transform: scale(1);
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div
        className={`modal-backdrop fade ${open ? 'show' : ''}`}
        style={{ zIndex: 50 }}
        onClick={handleOverlayClick}
      />
      <div
        className={`modal fade ${open ? 'show' : ''}`}
        style={{
          display: "flex",
          alignItems: position === 'top' ? 'flex-start' : position === 'bottom' ? 'flex-end' : 'center',
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