/**
 * PictureModals component
 * 
 * A modal dialog specifically designed for image content. It always appears in the center of the screen
 * and has a fixed size.
 * 
 * @component
 * @example
 * <PictureModals open={true} onClose={() => console.log('Modal closed')} src="image-url.jpg" />
 * 
 * @param {Object} props - The properties for the PictureModals component.
 * @param {string} props.src - The URL of the image to be displayed in the modal.
 * @param {boolean} props.open - Determines if the modal is open or closed.
 * @param {() => void} [props.onClose] - Optional callback function to be called when the modal is closed.
 * 
 * @author thinhphoenix
 */

'use client';
import Image from "next/image";
import React, { useCallback } from "react";

interface PictureModalsProps {
  src: string;
  open: boolean;
  onClose?: () => void;
}

export default function PictureModals({ 
  src, 
  open, 
  onClose 
}: PictureModalsProps) {
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
            <div className="modal-body" 
              style={{
                padding: "0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Image src={src} alt="Modal content" layout="intrinsic" width={800} height={600} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
