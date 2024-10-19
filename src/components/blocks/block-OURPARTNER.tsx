import Image from "next/image";
import CustomText from "@/components/elements/element-typography";

interface OurPartner {
    image: string;
    alt: string;
}

interface BlockOurPartnerProps {
    partners: OurPartner[];
}

export const BlockOurPartner: React.FC<BlockOurPartnerProps> = ({ partners }) => {
    return (
        <div className="nk-block block-partners" style={{
            display: "flex", alignItems: "center", flexDirection: "column"
        }}>
            <CustomText heading="h4">OUR PARTNERS</CustomText>
            <ul className="has-carousel partner-list justify-content-center animated fadeInUp" data-items="7" data-items-mobile="2" data-auto="true" data-loop="true" data-animate="fadeInUp" data-delay="0.75" style={{ visibility: "visible", animationDelay: "0.75s" }}>
                {partners.map((partner, index) => (
                    <li key={index} className="partner-logo">
                        <Image
                            src={partner.image}
                            width={111}
                            height={30}
                            alt={partner.alt}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
