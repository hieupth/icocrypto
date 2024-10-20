import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface OurPartner {
    image: string;
    alt: string;
}

interface BlockOurPartnerProps {
    partners: OurPartner[];
}

const settingPartners = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 3,
};

export const BlockOurPartner: React.FC<BlockOurPartnerProps> = ({ partners }) => {
    return (
        <div className="nk-block block-partners">
            <Slider {...settingPartners}>
                {partners.map((partner, index) => (
                    <div key={index} className="partner-logo">
                        <Image
                            src={partner.image}
                            width={111}
                            height={30}
                            alt={partner.alt}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};
