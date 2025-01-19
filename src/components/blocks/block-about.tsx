import React from 'react';
import { ColorStyle, Stylable } from "@/utils/colorclass";
import Link from 'next/link';
import Image from 'next/image';

interface AboutContent{
  companyName: String,
  video: String,
  description_main: String,
  description_1: String,
  description_2: String,
  description_3: String,
  team_description: String,
  team_image: string,
  vision_1: String,
  vision_2: String,
  mission: String,
  image_partner_1: string,
  image_partner_2: string,
  image_partner_3: string,
}

interface AboutProp{
  AboutContent: AboutContent;
  color?: ColorStyle;
  style?: Stylable;
  dark?: boolean;
  variant: "S1" | "S2" | "S3" | "S4" | "S5" | "S6" | "S7" | "S8" ;
}
export const BlockAbout: React.FC<AboutProp> = ({
  AboutContent,
  color = "default", // Default color if not provided
  style = "",
  dark = false, // Default dark mode to false
  variant = "S1",
}) => {
    return (
      <div className="">
        <div className="nk-wrap">
          {/* <div className="header-banner bg-inherit">
            <div className="nk-banner">
              <div className="banner banner-page">
                <div className="banner-wrap">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-xl-6 col-lg-9">
                        <div className="banner-caption cpn tc-light text-center">
                          <div className="cpn-head">
                            <h2 className="title ttu">About {AboutContent.companyName}</h2>
                            <p>{AboutContent.description_main}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nk-ovm shape-a-sm"></div>
          </div> */}
          <main className="nk-pages">
            <section className="section bg-inherit section-about">
              <div className="container">
                <div className="nk-block">
                  <div className="row gutter-vr-30px align-items-center">
                    <div className="col-lg-6">
                      <div className="nk-block-text">
                        <h2 className="title">About {AboutContent.companyName}</h2>
                        <p>{AboutContent.description_1}</p>
                        <p>{AboutContent.description_2}</p>
                        <p>{AboutContent.description_3}</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="nk-block-video">
                        <Image width={960} height={720} src="/images/video/a.png" alt="video" />
                        <Link 
                          href="https://www.youtube.com/watch?v=SSo_EIwHSd4" 
                          className="nk-block-video-play video-popup btn-play btn-play-light"
                        >
                          <em className="fas fa-play"></em>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hr"></div>
                <div className="nk-block nk-block-about">
                  <div className="row gutter-vr-30px align-items-center justify-content-between">
                    <div className="col-md-4 col-lg-3">
                      <div className="nk-block-text">
                        <h2 className="title title-lg">Beq Holdings <br />you can trust</h2>
                      </div>
                    </div>
                    <div className="col-md-7 col-lg-8">
                      <div className="nk-block-text">
                        <p className="lead">{AboutContent.vision_1}</p>
                        <p>{AboutContent.vision_2}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hr"></div>
                <div className="nk-block nk-block-about">
                  <div className="row gutter-vr-30px align-items-center justify-content-between">
                    <div className="col-md-4 col-lg-3">
                      <div className="nk-block-text">
                        <h2 className="title title-lg">Our Mission</h2>
                      </div>
                    </div>
                    <div className="col-md-7 col-lg-8">
                      <div className="nk-block-text">
                        <p className="lead">{AboutContent.mission}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-team">
              <div className="container">
                <div className="nk-block nk-block-team-featured team-featured">
                  <div className="row align-items-center">
                    <div className="col-lg-5 mb-4 mb-lg-0">
                      <div className="team-featured-photo tc-light">
                        <Image width={400} height={300} src={AboutContent.team_image} alt="team" />
                        <h5 className="team-featured-info">David Metthew<span>Chairman of ICOX and Entrepreneur</span></h5>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="team-featured-cont">
                        <h2 className="title title-lg title-dark">Meet Our Team</h2>
                        <p>{AboutContent.team_description}</p>
                        <p>
                          <Link className="btn-link" href="#team">See All Team Member</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-m section-partners bg-dark-alt" id="partners">
              <div className="container">
                <div className="nk-block block-partners">
                  <h6 className="title title-xs title-light text-center">Our Partners</h6>
                  <ul className="partner-list flex-lg-nowrap">
                    <li className="partner-logo">
                      <Image width={200} height={100} src={AboutContent.image_partner_1} alt="partner" />
                    </li>
                    <li className="partner-logo">
                      <Image width={200} height={100} src={AboutContent.image_partner_2} alt="partner" />
                    </li>
                    <li className="partner-logo">
                      <Image width={200} height={100} src={AboutContent.image_partner_3} alt="partner" />
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    )
}
    