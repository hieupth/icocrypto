import React, { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface MemberDetail {
    image: string;
    name: string;
    position: string;
    socialLinks: {
        facebook?: string;
        linkedin?: string;
        twitter?: string;
    };
    description1: string;
    description2: string;
    progress: Skill[];
}

interface Skill {
    title: string;
    percentage: number;
}

const settingMembers = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

interface BlockOurTeamProps {
    ourteamMember: MemberDetail[];
}

export const BlockOurTeam: React.FC<BlockOurTeamProps> = ({ ourteamMember }) => {
    const [selectedMemberIndex, setSelectedMemberIndex] = useState<number | null>(null);
    const sliderRef = useRef<Slider | null>(null); 

    const handleClick = (index: number) => {
        setSelectedMemberIndex(selectedMemberIndex === index ? null : index);
    };

    const closePopup = () => {
        setSelectedMemberIndex(null);
    };

    const nextSlide = () => {
        sliderRef.current?.slickNext(); 
    };

    const prevSlide = () => {
        sliderRef.current?.slickPrev();
    };

    return (
        <>
            <div className="nk-block block-team">
                <Slider ref={sliderRef} {...settingMembers}>
                    {ourteamMember.map((member, index) => (
                        <div className="team-member-container" key={member.name}>
                            <div className="team-member" onClick={() => handleClick(index)} style={{ cursor: "pointer", marginRight: '50px', marginLeft: '50px', marginTop: index % 2 === 0 ? '60px' : '0' }}>
                                <div className="team-photo animated fadeInUp">
                                    <Image
                                        src={member.image}
                                        width={175}
                                        height={236}
                                        alt={`Photo of ${member.name}`}
                                        style={{ visibility: "visible" }}
                                    />
                                </div>
                                <div className="team-text">
                                    <h5 className="team-name">{member.name}</h5>
                                    <span className="team-position">{member.position}</span>
                                    <div className="team-socials d-flex">
                                        {member.socialLinks.facebook && (
                                            <a href={member.socialLinks.facebook}>
                                                <i className="fab fa-facebook-f me-3"></i>
                                            </a>
                                        )}
                                        {member.socialLinks.linkedin && (
                                            <a href={member.socialLinks.linkedin}>
                                                <i className="fab fa-linkedin-in me-3"></i>
                                            </a>
                                        )}
                                        {member.socialLinks.twitter && (
                                            <a href={member.socialLinks.twitter}>
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                {/* Navigation button */}
                <div style={{ textAlign: "center", paddingBottom: 20 }}>
                    <div 
                        className="button icon-circle icon-border" 
                        onClick={prevSlide} 
                        style={{ cursor: 'pointer', marginRight: 10, opacity: 0.5 }}>
                        <i className="fa fa-chevron-left"></i>
                    </div>
                    <div 
                        className="button icon-circle icon-border" 
                        onClick={nextSlide} 
                        style={{ cursor: 'pointer', marginLeft: 10, opacity: 0.5 }}>
                        <i className="fa fa-chevron-right"></i>
                    </div>
                </div>
            </div>
            {selectedMemberIndex !== null && (
                <div className="team-popup-overlay" onClick={closePopup}>
                    <div className="team-popup-container">
                        <div className="team-popup-content">
                            <div className="team-popup-left">
                                <Image
                                    src={ourteamMember[selectedMemberIndex].image}
                                    width={500}
                                    height={500}
                                    alt={`Detailed photo of ${ourteamMember[selectedMemberIndex].name}`}
                                />
                            </div>
                            <div className="team-popup-right">
                                <h3 className="team-name title title-lg">{ourteamMember[selectedMemberIndex].name}</h3>
                                <p className="team-position">{ourteamMember[selectedMemberIndex].position}</p>
                                <div className="team-socials d-flex">
                                    {ourteamMember[selectedMemberIndex].socialLinks.facebook && (
                                        <a href={ourteamMember[selectedMemberIndex].socialLinks.facebook}>
                                            <i className="fab fa-facebook-f me-3"></i>
                                        </a>
                                    )}
                                    {ourteamMember[selectedMemberIndex].socialLinks.linkedin && (
                                        <a href={ourteamMember[selectedMemberIndex].socialLinks.linkedin}>
                                            <i className="fab fa-linkedin-in me-3"></i>
                                        </a>
                                    )}
                                </div>
                                <p className="team-description">{ourteamMember[selectedMemberIndex].description1}</p>
                                <p className="team-description">{ourteamMember[selectedMemberIndex].description2}</p>
                                <div className="progress-list">
                                    {ourteamMember[selectedMemberIndex].progress.map((skill) => (
                                        <div className="progress-wrap" key={skill.title}>
                                            <div className="progress-title">
                                                {skill.title} <span className="progress-amount">{skill.percentage}%</span>
                                            </div>
                                            <div className="progress-bar progress-bar-xs bg-black-10">
                                                <div className="progress-percent bg-primary" style={{ width: `${skill.percentage}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <button className="close-btn" onClick={closePopup}>
                            ×
                        </button>
                    </div>
                </div>
            )}
            <style jsx>{`
                .team-member-container {
                    margin-bottom: 50px;
                }
                .team-popup-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: rgba(0, 0, 0, 0.7);
                    z-index: 1000;
                }

                .team-popup-container {
                    background-color: #0B192C;
                    padding: 35px;
                    position: relative;
                    color: #fff;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
                    max-width: 900px;
                    width: 100%;
                    margin: 0 20px;
                }

                .team-popup-content {
                    display: flex;
                    gap: 10px;
                }

                .team-popup-left {
                    flex: 1;
                    padding: 30px;
                }

                .team-popup-right {
                    flex: 1;
                }

                .close-btn {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    font-size: 40px;
                    background: none;
                    border: none;
                    color: #fff;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
};
