import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface DoughnutChartProps {
    chartId: string; 
    chartData: Array<{
        color: string; 
        title: string; 
        amount: number;
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
                }]
            };

            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                const myDoughnutChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: data,
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                display: showInfo, 
                                position: 'bottom',
                            },
                            tooltip: {
                                callbacks: {
                                    label: (tooltipItem) => {
                                        const index = tooltipItem.dataIndex;
                                        const amount = chartData[index].amount;
                                        return `${chartData[index].title}: ${amount}`;
                                    }
                                }
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
        <div>
            <canvas id={chartId} ref={chartRef} className="chart-canvas"></canvas>
            {showInfo && (
                <ul className="chart-data" data-canvas={chartId} data-canvas-type="doughnut">
                    {chartData.map((item, index) => (
                        <li key={index} data-color={item.color} data-title={item.title} data-amount={item.amount}></li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DoughnutChart
