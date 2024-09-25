"use client";
import React, { useState } from "react";
import { getColorStyleClass, ColorStyle, Stylable } from "@/utils/colorclass";

interface AlertProps {
    variant: ColorStyle;
    alt?: boolean;
    dark?: boolean;
    children: React.ReactNode;
    alternet?: boolean;
}

export const Alert = ({ variant, children }: AlertProps) => {
    return <div className={`alert alert-${variant}`}>{children}</div>;
};

interface AlertLinkProps {
    link: string;
    alternet?: boolean;
    children: React.ReactNode;
}

export const AlertLink = ({ children, link }: AlertLinkProps) => {
    return (
        <a
            href={`${link}`}
            className="alert-link-"
            style={{
                textDecoration: "none",
            }}
        >
            {children}
        </a>
    );
};

interface AlertDismissibleProps {
    variant: ColorStyle;
    alt?: boolean;
    dark?: boolean;
    children: React.ReactNode;
    alternet?: boolean;
}

export const AlertDismissible = ({
    variant,
    children,
}: AlertDismissibleProps) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null;
    }

    return (
        <div
            className={`alert alert-${variant} alert-dismissible fade show`}
            style={{ paddingRight: "50px" }}
        >
            {children}
            <button
                type="button"
                className="close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => setIsVisible(false)}
            >
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};
