import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface OurPartner {
    id: number;
    imageSrc: string;
    imageAlt: string;
}

interface BlockPartnersProps {
    variant: "S1" | "S2";
}

const settingPartners = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 4,
};

const partnersData: OurPartner[] = [
    { id: 0, imageSrc: "https://ico.themenio.com/images/partners/a.png", imageAlt: "Logo of Partner A" },
    { id: 1, imageSrc: "https://ico.themenio.com/images/partners/b.png", imageAlt: "Logo of Partner B" },
    { id: 2, imageSrc: "https://ico.themenio.com/images/partners/c.png", imageAlt: "Logo of Partner C" },
    { id: 3, imageSrc: "https://ico.themenio.com/images/partners/d.png", imageAlt: "Logo of Partner D" },
    { id: 4, imageSrc: "https://ico.themenio.com/images/partners/e.png", imageAlt: "Logo of Partner E" },
    { id: 5, imageSrc: "https://ico.themenio.com/images/partners/f.png", imageAlt: "Logo of Partner F" },
    { id: 6, imageSrc: "https://ico.themenio.com/images/partners/g.png", imageAlt: "Logo of Partner G" },
];

const BlockPartners: React.FC<BlockPartnersProps> = ({ variant }) => {
    return (
        <div className="nk-block block-partners">
            {variant === "S1" ? (
                <Slider {...settingPartners}>
                    {partnersData.map((partner) => (
                        <div key={partner.id} className="partner-logo p-5">
                            <Image
                                src={partner.imageSrc}
                                width={111}
                                height={30}
                                alt={partner.imageAlt}
                            />
                        </div>
                    ))}
                </Slider>
            ) : (
                <div className="container">
                    <h6 className="title title-xs tc-primary text-center animated" data-animate="fadeInUp" data-delay=".1">
                        Our Partners
                    </h6>
                    <ul className="partner-list flex-lg-nowrap">
                        {partnersData.map((partner) => (
                            <li
                                key={partner.id}
                                className="partner-logo animated"
                                data-animate="fadeInUp"
                                data-delay=".2"
                                style={{ visibility: "visible", animationDelay: "0.2s" }}
                            >
                                <Image
                                    src={partner.imageSrc}
                                    alt={partner.imageAlt}
                                    width={133}
                                    height={60}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BlockPartners;
