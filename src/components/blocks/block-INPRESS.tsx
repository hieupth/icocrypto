import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface InPressItem {
    image: string;
    alt: string;
}

interface BlockInPressProps {
    inPressItems: InPressItem[];
}

const settingInPress = {
    arrows: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 3,
};

export const BlockInPress: React.FC<BlockInPressProps> = ({ inPressItems }) => {
    const sliderRef = useRef<Slider | null>(null);

    const nextSlide = () => {
        sliderRef.current?.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current?.slickPrev();
    };

    return (
        <div className="nk-block">
            <div className="row justify-content-center" data-animate="fadeInUp" data-delay="0.3" style={{ visibility: "visible", animationDelay: "0.3s" }}>
                <Slider ref={sliderRef} {...settingInPress}>
                    {inPressItems.map((item, index) => (
                        <div key={index} className="p-4 mb-2 d-flex justify-content-center">
                        
                            <Image
                                src={item.image}
                                width={101} 
                                height={30} 
                                alt={item.alt}
                            />
                        </div>
                    ))}
                </Slider>
                <div style={{ textAlign: "center", paddingBottom: 20 }}>
                    <div 
                        className="button icon-circle icon-border" 
                        onClick={prevSlide} 
                        style={{ cursor: 'pointer', marginRight: 10, opacity: 0.5 }}>
                        <ChevronLeft />
                    </div>
                    <div 
                        className="button icon-circle icon-border" 
                        onClick={nextSlide} 
                        style={{ cursor: 'pointer', marginLeft: 10, opacity: 0.5 }}>
                        <ChevronRight />
                    </div>
                </div>
            </div>
        </div>
    );
};
