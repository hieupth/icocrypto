import { ColorStyle, getColorStyleClass, Stylable } from '@/utils/colorclass'; // Đường dẫn phù hợp
import { getSizeStyleClass, SizeStylable, StyledSize } from '@/utils/sizeclass'; // Đường dẫn của file chứa StyledSize và getSizeStyleClass
import React from 'react';

// Interface cho Props của CustomText
interface CustomTextProps {
    children: React.ReactNode; // Nội dung văn bản
    heading?: StyledSize | string; // Loại tiêu đề (h1-h6 hoặc các kích thước khác từ StyledSize)
    color?: ColorStyle; // Màu sắc văn bản dựa trên StyledColor
    size?: StyledSize; // Kích thước văn bản dựa trên StyledSize
    textTransform?: SizeStylable; // Sử dụng SizeStylable cho textTransform (none, lowercase, uppercase, capitalize)
    className?: string; // Lớp CSS tùy chỉnh nếu có
}

// Component CustomText
const CustomText: React.FC<CustomTextProps> = ({
    children,
    heading,
    color,
    size,
    textTransform = SizeStylable.NoneTrans, // Mặc định là không có biến đổi chữ (ttn)
    className = ''
}) => {
    // Tạo lớp CSS tổng hợp cho văn bản từ colorclass và sizeclass
    const combinedClassName = `${getColorStyleClass(Stylable.Text, color)} ${getSizeStyleClass(SizeStylable.Text, size)} ${textTransform} ${className}`;

    if (heading) {
        const HeadingTag = heading as keyof JSX.IntrinsicElements; // Sử dụng trực tiếp thẻ heading được cung cấp
        return <HeadingTag className={combinedClassName}>{children}</HeadingTag>;
    }

    // Nếu không có `heading`, sử dụng thẻ 'span' mặc định
    return <span className={combinedClassName}>{children}</span>;
};

export default CustomText;
