"use client";

//Default Alert Style
import React, { useState } from "react";

export const AlertPrimary = ({ children }: React.PropsWithChildren<{}>) => {
    return <div className={`alert alert-primary`}>{children}</div>;
};
export const AlertSecondary = ({ children }: React.PropsWithChildren<{}>) => {
    return <div className={`alert alert-secondary`}>{children}</div>;
};
export const AlertSuccess = ({ children }: React.PropsWithChildren<{}>) => {
    return <div className={`alert alert-success`}>{children}</div>;
};
export const AlertDanger = ({ children }: React.PropsWithChildren<{}>) => {
    return <div className={`alert alert-danger`}>{children}</div>;
};
export const AlertWarning = ({ children }: React.PropsWithChildren<{}>) => {
    return <div className={`alert alert-warning`}>{children}</div>;
};
export const AlertInfo = ({ children }: React.PropsWithChildren<{}>) => {
    return <div className={`alert alert-info`}>{children}</div>;
};

export const AlertLink = ({
    children,
    link,
}: React.PropsWithChildren<{ link: string }>) => {
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

export const AlertDismissible = ({ children }: React.PropsWithChildren<{}>) => {
    const [isVisible, setIsVisible] = useState(true);
    if (!isVisible) {
        return null; // Don't render anything if isVisible is false
    }

    return (
        <>
            {isVisible && (
                <div
                    className={`alert alert-danger alert-dismissible fade show`}
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
            )}
        </>
    );
};

//Alternet Alert Style

export const AlertPrimaryAlternet = ({
    children,
}: React.PropsWithChildren<{}>) => {
    return <div className={`alert alert-primary-alt`}>{children}</div>;
};
export const AlertSecondaryAlternet = ({
    children,
}: React.PropsWithChildren<{}>) => {
    return <div className={`alert alert-secondary-alt`}>{children}</div>;
};
export const AlertSuccessAlternet = ({
    children,
}: React.PropsWithChildren<{}>) => {
    return <div className={`alert alert-success-alt`}>{children}</div>;
};
export const AlertDangerAlternet = ({
    children,
}: React.PropsWithChildren<{}>) => {
    return <div className={`alert alert-danger-alt`}>{children}</div>;
};
export const AlertWarningAlternet = ({
    children,
}: React.PropsWithChildren<{}>) => {
    return <div className={`alert alert-warning-alt`}>{children}</div>;
};
export const AlertInfoAlternet = ({
    children,
}: React.PropsWithChildren<{}>) => {
    return <div className={`alert alert-info-alt`}>{children}</div>;
};

export const AlertLinkAlternet = ({
    children,
    link,
}: React.PropsWithChildren<{ link: string }>) => {
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

export const AlertDismissibleAlternet = ({
    children,
}: React.PropsWithChildren<{}>) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null; // Don't render anything if isVisible is false
    }

    return (
        <div
            className={`alert alert-danger-alt alert-dismissible fade show`}
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
