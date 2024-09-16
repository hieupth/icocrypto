import React from 'react';

// Interface cho Props của ProgressBar
interface ProgressBarProps {
    title: string; // Tiêu đề hiển thị của thanh tiến trình
    percentage: number; // Giá trị phần trăm tiến trình
    color: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'danger'; // Màu sắc của thanh tiến trình
    size?: 'xs' | 'sm' | 'md' | 'lg'; // Kích thước của thanh tiến trình
}

// Component ProgressBar
const ProgressBar: React.FC<ProgressBarProps> = ({ title, percentage, color, size = 'md' }) => {
    // Giới hạn giá trị percentage từ 0 đến 100
    const validPercentage = Math.min(100, Math.max(0, percentage));

    return (
        <div className="progress-wrap">
            {/* Tiêu đề và phần trăm */}
            <div className="progress-title">
                {title} <span className="progress-amount">{validPercentage}%</span>
            </div>

            {/* Thanh tiến trình */}
            <div className={`progress-bar progress-bar-${size} bg-light-alt`}>
                <div
                    className={`progress-percent bg-${color}`}
                    style={{ width: `${validPercentage}%` }} // Chiều rộng thanh dựa trên phần trăm hợp lệ
                    data-percent={validPercentage} // Đặt data-percent với giá trị hợp lệ
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
