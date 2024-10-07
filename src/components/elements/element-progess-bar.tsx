import { ColorStyle, getColorStyleClass, Stylable } from '@/utils/colorclass'; // Đường dẫn phù hợp
import { getSizeStyleClass, SizeStylable, StyledSize } from '@/utils/sizeclass'; // Đường dẫn phù hợp
import React from 'react';

// Interface cho Props của ProgressBar
interface ProgressBarProps {
    title: string; // Tiêu đề hiển thị của thanh tiến trình
    percentage: number; // Giá trị phần trăm tiến trình
    color: ColorStyle; // Màu sắc của thanh tiến trình từ StyledColor
    size?: StyledSize; // Kích thước của thanh tiến trình từ StyledSize
}

// Component ProgressBar
const ProgressBar: React.FC<ProgressBarProps> = ({
    title,
    percentage,
    color = ColorStyle.Primary, // Mặc định là màu primary
    size = StyledSize.Md, // Mặc định là kích thước md
}) => {
    // Giới hạn giá trị percentage từ 0 đến 100
    const validPercentage = Math.min(100, Math.max(0, percentage));

    // Tạo lớp CSS cho thanh tiến trình dựa trên kích thước và màu sắc
    const progressBarClass = getSizeStyleClass(SizeStylable.ProgressBar, size);
    const progressColorClass = getColorStyleClass(Stylable.Background, color);

    return (
        <div className="progress-wrap">
            {/* Tiêu đề và phần trăm */}
            <div className="progress-title">
                {title}<span className="progress-amount"> {validPercentage}%</span>
            </div>

            {/* Thanh tiến trình */}
            <div className={`
                ${SizeStylable.ProgressBar} ${progressBarClass} bg-light-alt`}>
                <div
                    className={`progress-percent ${progressColorClass}`}
                    style={{ width: `${validPercentage}%` }} // Chiều rộng thanh dựa trên phần trăm hợp lệ
                    data-percent={validPercentage} // Đặt data-percent với giá trị hợp lệ
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
