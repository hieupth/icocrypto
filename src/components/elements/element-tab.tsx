"use client";

import React, { useState } from "react";

interface TabRow {
    id: string;
    title: string;
    children: React.ReactNode;
}
export const TabItem: React.FC<TabRow> = ({ id, title, children }) => {
    return <>{children}</>;
};

export const TabRow: React.FC<{
    children: React.ReactElement<TabRow>[];
}> = ({ children }) => {
    const [activeTab, setActiveTab] = useState<string>("tab-1-1");

    return (
        <div className="row">
            {/* Tab Navigation */}
            <div className="col-md-4 mb-4 mb-lg-0">
                <ul className="nav tab-nav tab-nav-vr tab-nav-bdr me-lg-3">
                    {React.Children.map(children, (child) => {
                        const element = child as React.ReactElement<TabRow>;
                        return element.props ? (
                            <li key={element.props.id}>
                                <a
                                    className={
                                        activeTab === element.props.id
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        setActiveTab(element.props.id)
                                    }
                                    href={`#${element.props.id}`}
                                    data-bs-toggle="tab"
                                >
                                    <em className="fas fa-caret-right"></em>
                                    {element.props.title}
                                </a>
                            </li>
                        ) : null;
                    })}
                </ul>
            </div>
            {/* Tab Content */}
            <div className="col-md-8">
                <div className="tab-content">
                    {React.Children.map(children, (child) => {
                        const element = child as React.ReactElement<TabRow>;
                        return element.props ? (
                            <div
                                key={element.props.id}
                                className={`tab-pane fade ${
                                    activeTab === element.props.id
                                        ? "show active"
                                        : ""
                                }`}
                                id={element.props.id}
                            >
                                {element.props.children}
                            </div>
                        ) : null;
                    })}
                </div>
            </div>
        </div>
    );
};
export const TabButton: React.FC<{
    children: React.ReactElement<TabRow>[];
}> = ({ children }) => {
    const [activeTab, setActiveTab] = useState<string>("tab-1-1");

    return (
        <div className="col-lg-10">
            {/* Tab Navigation */}
            <ul className="nav tab-nav tab-nav-btn">
                {React.Children.map(children, (child) => {
                    const element = child as React.ReactElement<TabRow>;
                    return element.props ? (
                        <li key={element.props.id}>
                            <a
                                className={
                                    activeTab === element.props.id
                                        ? "active"
                                        : ""
                                }
                                onClick={() => setActiveTab(element.props.id)}
                                href={`#${element.props.id}`}
                                data-bs-toggle="tab"
                            >
                                <em className="fas fa-caret-right"></em>
                                {element.props.title}
                            </a>
                        </li>
                    ) : null;
                })}
            </ul>

            {/* Tab Content */}
            <div className="tab-content">
                {React.Children.map(children, (child) => {
                    const element = child as React.ReactElement<TabRow>;
                    return element.props ? (
                        <div
                            key={element.props.id}
                            className={`tab-pane fade ${
                                activeTab === element.props.id
                                    ? "show active"
                                    : ""
                            }`}
                            id={element.props.id}
                        >
                            {element.props.children}
                        </div>
                    ) : null;
                })}
            </div>
        </div>
    );
};
export const TabCenter: React.FC<{
    children: React.ReactElement<TabRow>[];
}> = ({ children }) => {
    const [activeTab, setActiveTab] = useState<string>("tab-1-1");

    return (
        <div className="col-lg-10">
            {/* Tab Navigation */}
            <ul className="nav tab-nav tab-nav-s2 tab-nav-center">
                {React.Children.map(children, (child) => {
                    const element = child as React.ReactElement<TabRow>;
                    return element.props ? (
                        <li key={element.props.id}>
                            <a
                                className={
                                    activeTab === element.props.id
                                        ? "active"
                                        : ""
                                }
                                onClick={() => setActiveTab(element.props.id)}
                                href={`#${element.props.id}`}
                                data-bs-toggle="tab"
                            >
                                <em className="fas fa-caret-right"></em>
                                {element.props.title}
                            </a>
                        </li>
                    ) : null;
                })}
            </ul>

            {/* Tab Content */}
            <div className="tab-content">
                {React.Children.map(children, (child) => {
                    const element = child as React.ReactElement<TabRow>;
                    return element.props ? (
                        <div
                            key={element.props.id}
                            className={`tab-pane fade ${
                                activeTab === element.props.id
                                    ? "show active"
                                    : ""
                            }`}
                            id={element.props.id}
                        >
                            {element.props.children}
                        </div>
                    ) : null;
                })}
            </div>
        </div>
    );
};
export const TabLine: React.FC<{
    children: React.ReactElement<TabRow>[];
}> = ({ children }) => {
    const [activeTab, setActiveTab] = useState<string>("tab-1-1");

    return (
        <div className="col-lg-10">
            {/* Tab Navigation */}
            <ul className="nav tab-nav tab-nav-line tab-nav-center">
                {React.Children.map(children, (child) => {
                    const element = child as React.ReactElement<TabRow>;
                    return element.props ? (
                        <li key={element.props.id}>
                            <a
                                className={
                                    activeTab === element.props.id
                                        ? "active"
                                        : ""
                                }
                                onClick={() => setActiveTab(element.props.id)}
                                href={`#${element.props.id}`}
                                data-bs-toggle="tab"
                            >
                                <em className="fas fa-caret-right"></em>
                                {element.props.title}
                            </a>
                        </li>
                    ) : null;
                })}
            </ul>

            {/* Tab Content */}
            <div className="tab-content">
                {React.Children.map(children, (child) => {
                    const element = child as React.ReactElement<TabRow>;
                    return element.props ? (
                        <div
                            key={element.props.id}
                            className={`tab-pane fade ${
                                activeTab === element.props.id
                                    ? "show active"
                                    : ""
                            }`}
                            id={element.props.id}
                        >
                            {element.props.children}
                        </div>
                    ) : null;
                })}
            </div>
        </div>
    );
};
