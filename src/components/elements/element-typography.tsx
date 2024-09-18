import React from 'react';

// Interface cho Props của CustomText
interface CustomTextProps {
    children: React.ReactNode; // Nội dung văn bản
    heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; // Loại tiêu đề (có thể có hoặc không)
    color?: 'danger' | 'success' | 'warning' | 'info' | 'secondary' | 'primary' | 'dark' | 'light' | 'default' | 'lighter' | 'theme'; // Màu sắc văn bản
    textTransform?: 'tt-n' | 'tt-l' | 'tt-u' | 'tt-c'; // Kiểu chữ: none, lowercase, uppercase, capitalize
    className?: string; // Lớp CSS tùy chỉnh nếu có
}

// Hàm tiện ích để tạo lớp CSS từ màu sắc
const getTextColorClass = (color?: string) => {
    return color ? `tc-${color}` : 'tc-dark'; // Mặc định là 'tc-dark' nếu không có màu
};

// Hàm tiện ích để tạo lớp CSS từ kiểu chữ
const getTextTransformClass = (transform?: string) => {
    return transform ? transform : 'tt-n'; // Mặc định là 'tt-n' nếu không có kiểu
};

// Component CustomText
const CustomText: React.FC<CustomTextProps> = ({ children, heading, color, textTransform, className = '' }) => {
    // Tạo lớp CSS tổng hợp cho văn bản
    const combinedClassName = `${getTextColorClass(color)} ${getTextTransformClass(textTransform)} ${className}`;

    if (heading) {
        // Nếu có 'heading', sử dụng thẻ tiêu đề tương ứng
        const HeadingTag = heading; // Sử dụng biến động để xác định loại tiêu đề
        return <HeadingTag className={combinedClassName}>{children}</HeadingTag>;
    }

    // Nếu không có 'heading', sử dụng thẻ 'span' hoặc 'div' mặc định
    return <span className={combinedClassName}>{children}</span>;
};

export default CustomText;
