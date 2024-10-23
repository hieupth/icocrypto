import React,{ useRef } from 'react';
import Slider from "react-slick";
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface roadmap {
    id: number,
    year: string,
    date: string,
    text: string,
    state: number
}

interface roadmapProp{
    roadmapList: roadmap[]
}

export const BlockRoadMap: React.FC<roadmapProp> = ({roadmapList}) => {
    console.log('roadmap List: ', roadmapList)
    let sliderRef = useRef<Slider | null>(null); 
    const next = () => {
        sliderRef.current?.slickNext(); 
    };
    const previous = () => {
        sliderRef.current?.slickPrev();
    };
    // config slider behavior       
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              initialSlide: 0,
              dots: false,
              infinite: false,      
            }
          },
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              initialSlide: 0,
              dots: false,
              infinite: false      
            }
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 0,
              dots: false,
              infinite: false
            }
          }
        ]
      };
    return(
        <div className="container container-xxl">
            <div className="nk-block">
                <div className="roadmap-wrap roadmap-wrap-ovl-right text-center animated" data-animate="fadeInUp" data-delay="0.3" style={{ visibility: "visible", animationDelay: "0.3s" }}>
                    <div className="roadmap-slider has-carousel carousel-nav-center" data-blank="true" data-items="5" data-items-tab-l="4" data-items-tab-p="3" data-items-mobile="2" data-margin="-1" data-navs="true">
                         <Slider
                            ref={sliderRef}
                            {...settings}
                             >
                            {roadmapList.map((roadmap) =>(
                                <div className={`roadmap roadmap-s2 roadmap-i1 ${ roadmap.state === 0 ? '' : roadmap.state === 1 ? 'roadmap-running' : 'roadmap-finished'}`} key={roadmap.id}>
                                    <h6 className="roadmap-year-s2">{roadmap.year}</h6>
                                    <h5 className="title title-sm roadmap-date">{roadmap.date}</h5>
                                    <div className="roadmap-text">
                                        <p>{roadmap.text}</p>
                                    </div>
                                </div>
                            ))} 
                            <div>
                                <div className="roadmap-line-s2" style={{ top: "55px" }}></div>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div style={{ textAlign: "center", paddingBottom: 90 }}>
                    <div className="button icon-circle icon-border" onClick={previous} style={{cursor:'pointer', marginRight: 10, opacity: .7}}>
                        <ChevronLeft />
                    </div>
                    <div className="button icon-circle icon-border" onClick={next} style={{cursor:'pointer', marginLeft: 10, opacity: .7}}>
                        <ChevronRight />                                    
                    </div>
                </div>            

            </div>
        </div>
    )
}