import React, { memo, useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface DoughnutChartProps {
    chartId: string;
    chartData: Array<{
        color: string;
        title: string;
        amount: number;
        colorHover: string;
    }>;
    showInfo?: boolean;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ chartId, chartData, showInfo = false }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const data = {
                labels: chartData.map(item => item.title),
                datasets: [{
                    data: chartData.map(item => item.amount),
                    backgroundColor: chartData.map(item => item.color),
                    hoverBackgroundColor: chartData.map(item => item.colorHover),
                }]
            };

            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                const myDoughnutChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: data,
                    options: {
                        cutout: '0%',
                        responsive: true,
                        plugins: {
                            legend: { display: false },
                            tooltip: {
                                backgroundColor: 'transparent',
                                titleColor: '#fff',
                                bodyColor: '#fff',
                                displayColors: false,
                                bodyFont: { size: 16, weight: 'bold' },
                                callbacks: {
                                    label: (tooltipItem) => {
                                        const index = tooltipItem.dataIndex;
                                        const amount = chartData[index].amount;
                                        return `${amount}%`;
                                    }
                                }
                            }
                        },
                        elements: {
                            arc: {
                                borderColor: 'rgba(0, 0, 0, 0.3)',
                                borderWidth: 1,
                                borderAlign: 'inner',
                            }
                        },
                        onHover: (event, elements) => {
                            const canvasId = chartId;
                            const canvasElement = document.querySelector(`[data-canvas="${canvasId}"]`);

                            if (elements.length) {
                                const index = elements[0].index;

                                const items = canvasElement?.querySelectorAll('li');
                                items?.forEach(item => item.classList.remove('active'));

                                items && items[index].classList.add('active');
                            } else {
                                const items = canvasElement?.querySelectorAll('li');
                                items?.forEach(item => item.classList.remove('active'));
                            }
                        }
                    }
                });

                return () => {
                    myDoughnutChart.destroy();
                };
            }
        }
    }, [chartData, showInfo]);

    return (
        <canvas id={chartId} ref={chartRef} className="chart-canvas" style={{ visibility: 'visible' }}></canvas>
    );
};

export default memo(DoughnutChart);
