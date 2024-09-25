import React, { useEffect, useMemo } from "react";

interface ChartDataItem {
  color: string;
  title: string;
  amount: number;
}

const DoughnutChartWithoutInfo: React.FC = () => {
  const chartData: ChartDataItem[] = useMemo(
    () => [
      { color: "#223fa8", title: "Token Sale Program", amount: 60 },
      { color: "#8fa0df", title: "Reserve Fund", amount: 8 },
      { color: "#4aa0f6", title: "Team and Founders", amount: 15 },
      { color: "#6ad9ac", title: "Board Advisors", amount: 4 },
      { color: "#4d6fe9", title: "Ecosystem Development", amount: 7 },
      { color: "#15216d", title: "Marketing and Bounty", amount: 6 },
    ],
    []
  );

  useEffect(() => {
    drawDoughnutChart("donghnut-chart", chartData);
  }, [chartData]);

  return (
    <div className="col-lg-4">
      <h4 className="title title-sm text-center">
        Doughnut Chart Without Info
      </h4>
      <div>
        <canvas id="donghnut-chart"></canvas>
      </div>
    </div>
  );
};

const DoughnutChartWithInfo: React.FC = () => {
  const chartData: ChartDataItem[] = useMemo(
    () => [
      { color: "#223fa8", title: "Token Sale Program", amount: 40 },
      { color: "#8fa0df", title: "Reserve Fund", amount: 13 },
      { color: "#4aa0f6", title: "Team and Founders", amount: 15 },
      { color: "#6ad9ac", title: "Board Advisors", amount: 14 },
      { color: "#4d6fe9", title: "Ecosystem Development", amount: 10 },
      { color: "#15216d", title: "Marketing and Bounty", amount: 8 },
    ],
    []
  );

  useEffect(() => {
    drawDoughnutChart("donghnut-chart-2", chartData);
  }, [chartData]);

  return (
    <div className="col-lg-8">
      <h4 className="title title-sm text-center">Doughnut Chart With Info</h4>
      <div className="row align-items-center">
        <div className="col-md-6">
          <canvas id="donghnut-chart-2"></canvas>
        </div>
        <div className="col-md-6">
          <ul className="chart-data">
            {chartData.map((item, index) => (
              <li key={index} style={{ color: item.color }}>
                {item.title}: {item.amount}%
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

function drawDoughnutChart(chartId: string, data: ChartDataItem[]) {
  const canvas = document.getElementById(chartId) as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const total = data.reduce((sum, item) => sum + item.amount, 0);
  let startAngle = -0.5 * Math.PI;

  data.forEach((item) => {
    const sliceAngle = (item.amount / total) * 2 * Math.PI;
    const endAngle = startAngle + sliceAngle;

    ctx.beginPath();
    ctx.moveTo(75, 75);
    ctx.arc(75, 75, 75, startAngle, endAngle);
    ctx.fillStyle = item.color;
    ctx.fill();

    startAngle = endAngle;
  });

  ctx.beginPath();
  ctx.arc(75, 75, 35, 0, 2 * Math.PI);
  ctx.fillStyle = "#fff";
  ctx.fill();
}
const Banner: React.FC = () => {
  return (
    <div className="header-banner bg-theme-grad">
      <div className="nk-banner">
        <div className="banner banner-page">
          <div className="banner-wrap">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-9">
                  <div className="banner-caption cpn tc-light text-center">
                    <div className="cpn-head">
                      <h2 className="title ttu">Form</h2>
                      <p>
                        We designed a brand-new cool design and lots of
                        features, the latest version of the template supports
                        advanced block base scenarios, and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nk-ovm shape-a-sm"></div>
    </div>
  );
};

const ChartInstructions: React.FC = () => {
  return (
    <div className="nk-block mgt-l">
      <div className="card bg-light">
        <p>
          Use a canvas tag with an <code>id=&quot;your-id&quot;</code> in a
          place where you want to generate the chart.
          <br />
          Then create an <code>ul</code> with a class <code>.chart-data</code>{" "}
          and give it an attribute
          <code>data-canvas=&quot;Your-id&quot;</code> to link with the canvas.
          <br />
          Also, use <code>.d-none</code> class with <code>.chart-data</code> if
          you don&apos;t want to show this info in your page.
        </p>
        <p>
          Now for each data set you want to add on the chart, create a{" "}
          <code>li</code>, it takes 3 attributes
          <code>[data-color], [data-title], [data-amount]</code>.
          <br />
          <code>[data-color]</code> takes a <code>hex, rgb, rgba</code> color
          value. Don&apos;t forget to add <code>#</code> with hex color.
        </p>
      </div>
    </div>
  );
};
const Chart: React.FC = () => {
  return (
    <>
      <Banner />
      <main className="nk-pages">
        <section className="section ">
          <div className="container">
            <div className="nk-block">
              <div className="row gutter-vr-30px">
                <DoughnutChartWithoutInfo />
                <DoughnutChartWithInfo />
              </div>
            </div>
          </div>
        </section>
        <ChartInstructions />
      </main>
    </>
  );
};

export default Chart;
