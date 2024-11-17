import React from "react";
import Image from "next/image";

interface OurPartner {
    id: number,
    imageSrc: string;
    imageAlt: string;
}

interface PartnerProps {
    partners: OurPartner[]
}

const Founder: React.FC<PartnerProps> = ({partners}) => {
  return (
    <>
        <div className="container">
            <div className="nk-block block-partners">
                <h6 className="title title-xs tc-primary text-center animated" data-animate="fadeInUp" data-delay=".1">Our Partners</h6>
                <ul className="partner-list flex-lg-nowrap">

                    {partners.map(partner=>(
                        <li key={partner.id} className="partner-logo animated" data-animate="fadeInUp" data-delay=".2" style={{ visibility: "visible", animationDelay: "0.2s" }}>
                        <Image 
                            src={partner.imageSrc}
                            alt={partner.imageAlt}
                            width={133} height={60}
                         />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
  );
};

/* prompt
partners: [
    { id:0, src: "images/partners/a.png", alt: "Logo of Partner A" },
    { id:1 ,src: "images/partners/b.png", alt: "Logo of Partner B" },
    { id:2 ,src: "images/partners/c.png", alt: "Logo of Partner C" },
    { id:3 ,src: "images/partners/d.png", alt: "Logo of Partner D" },
    { id:4 ,src: "images/partners/e.png", alt: "Logo of Partner E" },
    { id:5 ,src: "images/partners/f.png", alt: "Logo of Partner F" },
    { id:6 ,src: "images/partners/g.png", alt: "Logo of Partner G" },
] */

export default Founder;
