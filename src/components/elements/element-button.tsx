import { ColorStyle, getColorStyleClass, Stylable } from "@/utils/colorclass"; // Thay đổi đường dẫn phù hợp
import { getSizeStyleClass, SizeStylable, StyledSize } from "@/utils/sizeclass"; // Đường dẫn của file chứa StyledSize và getSizeStyleClass
import React, { ReactNode } from "react";

// CustomButton Props Interface
interface CustomButtonProps {
    variant?: ColorStyle;
    outline?: ColorStyle;
    icon?: string;
    backgroundClass?: Stylable;
    borderRadius?: SizeStylable;
    badgeText?: string;
    badgeVariant?: ColorStyle;
    badgeOutline?: ColorStyle;
    badgeSize?: StyledSize;
    size?: StyledSize;
    onClick?: () => void;
    children: ReactNode;
}

// Reusable CustomButton Component
const CustomButton: React.FC<CustomButtonProps> = ({
    children,
    variant = ColorStyle.Default,
    outline,
    icon,
    backgroundClass,
    borderRadius,
    badgeText,
    badgeVariant = ColorStyle.Primary,
    badgeOutline = ColorStyle.Outline,
    badgeSize,
    size,
    onClick,
}) => {
    // Class của button sử dụng getSizeStyleClass
    const buttonClass = `${Stylable.Button}
        ${getColorStyleClass(Stylable.Button, variant, false)}
        ${outline ? getColorStyleClass(Stylable.Button, outline) : ""}
        ${borderRadius ? getSizeStyleClass(SizeStylable.Button, borderRadius) : ""}
        ${backgroundClass ? backgroundClass : ""}
        ${getSizeStyleClass(SizeStylable.Button, size)}`;

    // Class của badge nếu có, sử dụng getSizeStyleClass cho badgeSize
    const badgeClass = badgeText
        ? `${Stylable.Badge}
        ${getColorStyleClass(Stylable.Badge, badgeVariant)}
        ${badgeOutline ? getColorStyleClass(Stylable.Badge, badgeOutline) : ""}
        ${getSizeStyleClass(SizeStylable.Badge, badgeSize)}`
        : "";

    return (
        <a href="#" className={buttonClass.trim()} onClick={onClick}>
            {icon && <em className={`icon ${icon}`}></em>} {/* Hiển thị icon nếu có */}
            {children}
            {badgeText && <span className={badgeClass}>{badgeText}</span>} {/* Hiển thị badge nếu có */}
        </a>
    );
};

export default CustomButton;
