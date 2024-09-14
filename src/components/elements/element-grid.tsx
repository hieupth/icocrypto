import React from "react";

interface Content {
    children: React.ReactNode;
}

export const Grid: React.FC<Content> = ({ children }) => {
    const childrenArray = React.Children.toArray(children);
    const childCount = childrenArray.length;
    const getColumnClass = (count: number) => {
        if (count === 4) return "col-lg-3 mb-4";
        if (count === 3) return "col-lg-4 mb-4";
        if (count === 2) return "col-lg-6 mb-4";
        return "";
    };

    return (
        <div className="row">
            {React.Children.map(children, (child) => (
                <div className={getColumnClass(childCount)}>{child}</div>
            ))}
        </div>
    );
};
