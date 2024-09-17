import React, { ReactNode } from 'react';

// Interface cho Props của Table
interface TableProps {
    type: 'basic' | 'bordered'; // Loại bảng (basic hoặc bordered)
    children: ReactNode; // Nội dung bảng, truyền vào dưới dạng children
}

// Component TableHeader
const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <td className="table-head">{children}</td>;
};

// Component TableDescription
const TableDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <td className="table-des">{children}</td>;
};

// Component TableCustom
const TableCustom: React.FC<TableProps> = ({ type, children }) => {
    // Xác định lớp CSS của bảng dựa trên loại bảng
    const tableClass = `table ${type === 'bordered' ? 'table-bordered' : 'table-s1'}`;

    return (
        <div className="table-container">
            <table className={tableClass}>
                <tbody>
                    {React.Children.map(children, (child) => {
                        if (React.isValidElement(child) && (child.type === TableHeader || child.type === TableDescription)) {
                            return <tr>{child}</tr>;
                        }
                        return child; // Nếu không phải là <TableHeader> hoặc <TableDescription>, trả về như cũ
                    })}
                </tbody>
            </table>
        </div>
    );
};

// Export cả ba component từ file này
export { TableCustom, TableDescription, TableHeader };
