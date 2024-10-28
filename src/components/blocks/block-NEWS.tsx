import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface NewsItem {
    title: string;
    location: string;
    imageUrl: string;
}

interface BlockNewsProps {
    newsItems: NewsItem[];
}

export const BlockNews: React.FC<BlockNewsProps> = ({ newsItems }) => {
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, 
        rows: 2,
    };

    const nextSlide = () => {
        sliderRef.current?.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current?.slickPrev();
    };

    return (
        <div className="nk-block block-news">
                <Slider ref={sliderRef} {...settings} className="carousel-nav-center">
                    {newsItems.map((news, index) => (
                        <div key={index} className="item pb-2 d-flex justify-content-center">
                            <div className="blog blog-s2 animated" style={{ visibility: "visible" }} data-animate="fadeInUp" data-delay={`0.${index + 2}`}>
                                <div className="blog-content blog-content-inline">
                                    <div className="blog-text">
                                        <h5 className="blog-title title-sm">{news.title}</h5>
                                        <div className="blog-location">{news.location}</div>
                                    </div>
                                    <div className="blog-action">
                                        <a href="#" className="link">
                                            <span>Learn More</span>{" "}
                                            <em className="link-icon link-icon-sm fas fa-angle-right"></em>
                                        </a>
                                    </div>
                                </div>
                                <div className="bg-image round" data-overlay="theme-dark" data-opacity="85" style={{ visibility: "visible", position: "relative"}}>
                                    <Image 
                                        src={news.imageUrl} 
                                        alt={""}        
                                        width= {100}
                                        height= {200}
                                    />
                                </div>
                            </div>
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
    );
};
