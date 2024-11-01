import React from 'react';
import DoughnutChart from '@/components/elements/element-chart';

interface TokenData {
    label: string;
    title: string;
    subtitle: string;
    amount: number;
    color: string;
    colorHover: string;
}

interface TokenInfo {
    title: string;
    description: string;
    colorClass: string;
    delay: string;
}

interface BlockTokensProps {
    chartData: TokenData[];
    tokenInfo: TokenInfo[];
    canvasId: string;
    color?: string;
    style?: string;
    dark?: boolean;
}

export const BlockTokens: React.FC<BlockTokensProps> = ({
    chartData,
    tokenInfo,
    canvasId,
    color = "default",
    style = "",
    dark = false,
}) => {
    const darkClass = dark ? "dark" : "";
    const styleClass = style ? style : "";
    const colorClass = color ? color : "default";

    const doughnutChartData = chartData.map((data) => ({
        color: data.color,
        title: data.label,
        amount: data.amount,
        colorHover: data.colorHover,
        subtitle: data.subtitle
    }));

    return (
        <section className={`section ${styleClass} ${colorClass} ${darkClass}`}>
            <div className="container container-xxl">
                <div className="nk-block">
                    <div className="row align-items-center mx-5">
                        <div className="col-lg-6 mb-6 order-1 order-lg-2">
                            <div className="animated" data-animate="fadeInUp" data-delay="0.3">
                                <DoughnutChart
                                    chartId={canvasId}
                                    chartData={doughnutChartData}
                                    showInfo={true}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 mb-6 order-2 order-lg-1">
                            <div className="chart-info">
                                <ul
                                    className="chart-data-s2 row"
                                    data-canvas={canvasId}
                                    data-canvas-type="pie"
                                    data-border-color="#0f1932"
                                >
                                    {chartData.map((data, index) => (
                                        <li
                                            key={index}
                                            className={`col-sm-${index < 2 ? '8' : '6'} ${index === 0 ? 'active' : ''}`}
                                            data-color={data.color}
                                            data-color-hover={data.colorHover}
                                            data-label={data.title}
                                            data-title={data.title}
                                            data-subtitle={data.subtitle}
                                            data-amount={data.amount}
                                            style={{ border: '2px solid transparent', padding: '4px', marginBottom: '4px', color: '#000' }}
                                        >
                                            <div className="chart-data-item">
                                                <span className="chart-label">{data.title}</span>
                                                <span className="chart-info">
                                                    <span className="chart-percent">{data.amount}% </span>
                                                    <span className="chart-sublabel">{data.subtitle}</span>
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="token-info-s2 mt-5">
                        <div className="row gutter-vr-50px mx-5">
                            {tokenInfo.map((info, index) => (
                                <div className="col-12 col-lg-auto d-flex justify-content-center" key={index}>
                                    <div
                                        className={`token-info-item ${info.colorClass} animated d-flex flex-column justify-content-center align-items-center p-3`}
                                        data-animate="fadeInUp"
                                        data-delay={info.delay}
                                        style={{
                                            width: "230px",  
                                            height: "60px", 
                                            visibility: "visible"
                                        }}
                                    >
                                        <div className="token-info-title">{info.title}</div>
                                        <h4 className="token-info-des">{info.description}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
