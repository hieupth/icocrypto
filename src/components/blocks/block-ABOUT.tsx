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

interface about{
      contentTitle: string,
      content: string ,
      buttonLabel: string ,
      buttonIcon: string ,
      linkLabel: string ,
      link: string,
      imageUrl: string,
      imageAlt: string
}

export const BlockAbout: React.FC<{aboutContent: about}> = ({aboutContent}) =>{
    return (
      <div className="container container-xxl">
        <div className="row justify-content-between align-items-center">
          <div
            className="col-lg-6 order-lg-last"
          >
            <div className="gfx py-4 animated" data-animate="fadeInUp" data-delay="0.2" style={{ visibility: "visible", animationDelay: "0.2s" }}>
              <Image
                src= {aboutContent.imageUrl}
                alt={aboutContent.imageAlt}
                width={500} height={500}
              />
            </div>
          </div>

          <div className="col-lg-5">
            <ContentTitle>
             {aboutContent.contentTitle}
            </ContentTitle>
            <p>
              {aboutContent.content}
            </p>
            <div className="d-flex p-2" style={{ gap: "20px" }}>
              <CustomButton
                variant={ColorStyle.Primary}
                borderRadius={SizeStylable.BorderRadius}
              >
                <span>{aboutContent.buttonLabel}</span>
                <em className={`icon ti ${aboutContent.buttonIcon}`}></em>
              </CustomButton>
              <p
                className="animated fadeInUp"
                data-animate="fadeInUp"
                data-delay="0.7"
                style={{ visibility: "visible", animationDelay: "0.7s" }}
              >
                <a href={`${aboutContent.link}`} className="menu-link btn btn-underline">
                  {aboutContent.linkLabel}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>  
    )
}
