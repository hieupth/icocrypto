import Image from "next/image"
import {
    Content,
    ContentNkBlock,
    ContentTitle,
    ContentTitleX1,
  } from "@/components/elements/element-content";
import CustomButton from "@/components/elements/element-button";
import { ColorStyle } from "@/utils/colorclass";
import { SizeStylable, StyledSize } from "@/utils/sizeclass";

export const BlockAbout: React.FC = ({}) =>{
    return (
      <div className="container container-xxl">
        <div className="row">
          <div className="col-6">
            <ContentTitle>
              We build fully Decentralized Marketplace that Augments Access to
              Blockchain Technologies
            </ContentTitle>
            <p>
              We have developed a state-of-the-art marketplace where you can
              securely and reliably buy and sell any items. The fastest and most
              flexible asset platform in existence. It will include easy
              cryptocurrency payments integration and a digital arbitration
              system. Our aim is to integrate all companies, employees, and
              business assets into a unified blockchain ecosystem, making
              business truly efficient, transparent, and reliable.
            </p>
            <div className="d-flex p-2" style={{ gap: "20px" }}>
              <CustomButton
                variant={ColorStyle.Primary}
                borderRadius={SizeStylable.BorderRadius}
              >
                <span>White Paper</span>
                <em className="icon ti ti-arrow-down"></em>
              </CustomButton>
              <p
                className="animated fadeInUp"
                data-animate="fadeInUp"
                data-delay="0.7"
                style={{ visibility: "visible", animationDelay: "0.7s" }}
              >
                <a href="#ecosystems" className="menu-link btn btn-underline">
                  See the Ecosystems
                </a>
              </p>
            </div>
          </div>

          <div
            className="col-6"
            style={{ position: "relative", height: "400px" }}
          >
            <Image
              src="https://ico.themenio.com/images/azalea/gfx-e.png"
              alt="image of gfx-e"
              width={500} height={500}
            />
          </div>
        </div>
      </div>  
    )
}
