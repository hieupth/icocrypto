/**
 * VideoModals component
 * 
 * A modal dialog specifically designed for video content. It always appears in the center of the screen
 * and has a fixed size.
 * 
 * @component
 * @example
 * <VideoModals open={true} onClose={() => console.log('Modal closed')}>
 *   <video controls src="video-url.mp4" />
 * </VideoModals>
 * 
 * @param {Object} props - The properties for the VideoModals component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the modal (e.g., video).
 * @param {boolean} props.open - Determines if the modal is open or closed.
 * @param {() => void} [props.onClose] - Optional callback function to be called when the modal is closed.
 * 
 * @author thinhphoenix
 */

'use client';
import React, { ReactNode, useCallback } from "react";

interface VideoModalsProps {
  children: ReactNode;
  open: boolean;
  onClose?: () => void;
}

export default function VideoModals({ 
  children, 
  open, 
  onClose 
}: VideoModalsProps) {
  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const handleOverlayClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }, [handleClose]);

  if (!open) return null;

  return (
    <>
      <div
        className="modal-backdrop fade show"
        style={{ zIndex: 50, boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }}
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
        <div className="modal-xl modal-dialog-centered">
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
            <div className="modal-body btn-grp gutter-10px gutter-vr-10px"
            style={{
                padding: "0px",
                objectFit: "fill",
              }}
              >
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
