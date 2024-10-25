import { ColorStyle, getColorStyleClass, Stylable } from '@/utils/colorclass';
import { getSizeStyleClass, SizeStylable, StyledSize } from '@/utils/sizeclass'; 

import React from 'react';

interface ProcessPoint {
    title: string,
    percent: number,
}

interface Status{
    title: string,
    percent: number,
    bonusTitle: string
}

interface ProgressBarProps {
    processPoint: ProcessPoint[],
    raised: string,
    target: string,
    currency: string,
    status: Status
    color?: ColorStyle;
    size?: StyledSize; 
}

// Component ProcessBar
const ProcessBar: React.FC<ProgressBarProps> = ({
    processPoint,
    raised,
    target,
    currency,
    status,
    color = ColorStyle.Primary, 
    size = StyledSize.Md, 
}) => {
   return (
        <div className="col-12 justify-content-between" style={{display:'flex'}}>
            <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
              <div className="progress-wrap progress-wrap-point animated" data-animate="fadeInUp" data-delay="0.8" style={{ visibility: "visible", animationDelay: "0.8s" }}>
                  <ul className="progress-info progress-info-s2">
                      <li>Raised - <span>{raised} {currency}</span></li>
                      <li className="text-end">Target - <span>{target} {currency}</span></li>
                  </ul>
                  <div className="progress-bar progress-bar-xs">
                      <div className="progress-percent progress-percent-s2" data-percent="30" style={{paddingLeft:"30%"}} ></div>
                      {processPoint.map((point,index)=>(
                        <div className="progress-point" data-point={point.percent} style={{marginLeft:`${point.percent}%`}} key={index}>{point.title}</div>
                      ))}
                  </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 col-lg-3 col-xl-3">
              <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
                <div className="status-info">
                  <h6 className="title title-xxs tc-default status-title ttu">{status.title}</h6>
                  <h3 className="fz-3 fw-3 status-percent">{status.percent}%</h3>
                  <div className="fz-8">{status.bonusTitle}</div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default ProcessBar;
