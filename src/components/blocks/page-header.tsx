import React, { ReactNode } from "react";
import { getSizeStyleClass, SizeStylable, StyledSize } from "@/utils/sizeclass";
import { ColorStyle, getColorStyleClass, Stylable } from "@/utils/colorclass";

interface PageHeaderProps {
  title: string;
  size?: StyledSize;
  bgImage?: boolean;
  colorStyle?: ColorStyle;
  children?: ReactNode;  // Add children for description or any other content
}

const PageHeader = ({ title, size, colorStyle, bgImage = false, children }: PageHeaderProps) => {
  return (
    <>
      <div
        style={{
          zIndex: 0,
        }}
        className={`header-banner ${
          colorStyle === ColorStyle.Light
            ? getColorStyleClass(Stylable.Background, colorStyle)
            : ``
        } has-ovm ${bgImage ? 'has-bg-image' : ''}`}
      >
        <div className="nk-banner">
          <div className={`banner banner-page ${getSizeStyleClass(SizeStylable.PageHeader, size)}`}>
            <div className="banner-wrap">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-9">
                    <div className={`banner-caption tc-light cpn text-center`}>
                      <div className="cpn-head">
                        <h2 className="title ttu">{title}</h2>
                        <div>{children}</div> {/* Use children here */}
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
    </>
  );
};

export default PageHeader;
