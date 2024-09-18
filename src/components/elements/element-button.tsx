import React from 'react';

// CustomButton Props Interface
interface CustomButtonProps {
    text: string;  // Text hiển thị trên nút hoặc badge
    variant?: 'default' | 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'danger' | 'light' | 'dark' | 'grad';  // Loại nút hoặc badge
    outline?: boolean;  // Có outline hay không
    icon?: string;  // Icon class name (nếu có)
    backgroundClass?: 'on-bg-light' | 'on-bg-light-alt' | 'on-bg-theme' | 'on-bg-theme-alt' | 'on-bg-theme-dark' | 'on-bg-theme-dark-alt';  // Lớp nền gradient
    badgeText?: string;  // Text hiển thị trên badge
    badgeVariant?: 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'danger' | 'light' | 'dark';  // Loại badge
    badgeOutline?: boolean;  // Badge có outline hay không
    badgeSize?: 'xs' | 'sm' | 'md';  // Kích thước badge
    size?: 'sm' | 'md' | 'auto';  // Kích thước nút
    onClick?: () => void;  // Sự kiện click (nếu có)
}

// Reusable CustomButton Component
const CustomButton: React.FC<CustomButtonProps> = ({
    text,
    variant = 'default',
    outline = false,
    icon,
    backgroundClass,
    badgeText,
    badgeVariant = 'primary',
    badgeOutline = false,
    badgeSize,
    size,
    onClick
}) => {
    // Xác định lớp CSS của nút
    const buttonClass = `btn ${outline ? 'btn-outline' : ''} btn-${variant} ${backgroundClass ? backgroundClass : ''} ${size ? `btn-${size}` : ''}`;
    // Xác định lớp CSS của badge nếu có
    const badgeClass = badgeText ? `badge ${badgeOutline ? 'badge-outline' : ''} badge-${badgeVariant} ${badgeSize ? `badge-${badgeSize}` : ''}` : '';

    return (
        <a href="#" className={buttonClass} onClick={onClick}>
            {icon && <em className={`icon ${icon}`}></em>}  {/* Hiển thị icon nếu có */}
            <span>{text}</span>
            {badgeText && <span className={badgeClass}>{badgeText}</span>}  {/* Hiển thị badge nếu có */}
        </a>
    );
};

export default CustomButton;
