import React from "react";
import Image from "next/image";

interface FounderProps {
    imageSrc: string,
    imageAlt: string,
    name: string,
    role: string,
    subtitle: string,
    title: string,
    description: string,
}

const Founder = ({
    imageSrc,
    imageAlt,
    name,
    role,
    subtitle,
    title,
    description,
}: FounderProps) => {
  return (
    <>
      <div className="nk-block nk-block-team-featured team-featured">
        <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
                <div className="team-featured-photo tc-light animated" data-animate="fadeInUp" data-delay=".1" style={{ visibility: "visible", animationDelay: "0.1s" }}>
                    <Image 
                        src={imageSrc}
                        alt={imageAlt}
                        fill={true}
                    />
                    <h5 className="team-featured-info">{name}<span>{role}</span></h5>
                </div>
            </div>
            <div className="col-lg-7">
                <div className="team-featured-cont">
                    <h6 className="title title-xs title-light animated" data-animate="fadeInUp" data-delay=".2">{subtitle}</h6>
                    <h2 className="title title-lg title-dark animated" data-animate="fadeInUp" data-delay=".3">{title}</h2>
                    <p className="animated" data-animate="fadeInUp" data-delay=".4">{description}</p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Founder;
