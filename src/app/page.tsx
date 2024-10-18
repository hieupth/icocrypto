"use client";

import PageHeader from "@/components/blocks/page-header";
import CustomButton from "@/components/elements/element-button";
import Countdown from "@/components/elements/element-countdown";
import ProgressBar from "@/components/elements/element-progess-bar";
import { ColorStyle } from "@/utils/colorclass";
import { SizeStylable, StyledSize } from "@/utils/sizeclass";
import styles from "@/app/page.module.css";
import {
  Content,
  ContentNkBlock,
  ContentTitle,
  ContentTitleX1,
} from "@/components/elements/element-content";
import Image from "next/image";
import CustomText from "@/components/elements/element-typography";
import { BlockFAQ } from "@/components/blocks/block-FAQ";

export default function Home() {

  const faqTabs = [
    {
        id: "tab1",
        title: "General Questions",
        faqs: [
            { title: "What is ICO Crypto?", content: "Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa." },
            { title: "What cryptocurrencies can I use to purchase?", content: "Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa." },
            { title: "How can I participate in the ICO Token sale?", content: "Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa." },
            { title: "How do I benefit from the ICO Token?", content: "Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa." },
        ],
    },
    {
        id: "tab2",
        title: "Technical Support",
        faqs: [
            { title: "How to reset my password?", content: "Click on 'Forgot Password' and follow the instructions." },
            { title: "How to contact support?", content: "You can reach us via our support email." },
        ],
    },
];

  return (
    <>
      <PageHeader title="WORLD FIRST DECENTRALIZED MARKETPLACE WITH BLOCKCHAIN INFRASTRUCTURE">
        <span>
          The first decentralized Marketplace which simplifies and standardizes
          data with blockchain technology. We provide user-friendly, efficient,
          and secure crypto solutions utilizing blockchain technology.
        </span>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            gap: "20px",
            marginTop: "5%",
          }}
        >
          <CustomButton
            variant={ColorStyle.Primary}
            borderRadius={SizeStylable.BorderRadius}
          >
            Private Sale
          </CustomButton>
          <CustomButton
            outline={ColorStyle.Outline}
            variant={ColorStyle.Primary}
            borderRadius={SizeStylable.BorderRadius}
          >
            Private Token
          </CustomButton>
        </div>
      </PageHeader>
      <section
        style={{
          padding: "2% 10%",
        }}
      >
        <div className="row">
          <div className="col-6">
            <ProgressBar
              title="Test"
              percentage={20}
              color={ColorStyle.Primary}
              size={StyledSize.Sm}
            />
          </div>
          <div className="col-6">
            <Countdown
              title="Test"
              percent="20"
              caption="test"
              subtitle="The Bonus ends in"
              endDate="2024/10/01"
            />
          </div>
        </div>
        <div
          className="row"
          style={{
            marginTop: "5%",
          }}
        >
          <div className="col-sm-7 d-flex justify-content-center justify-content-sm-start">
            <ul className="btn-grp btn-grp-break justify-content-center justify-content-sm-start gutter-vr-20px">
              <li
                className="animated fadeInUp"
                data-animate="fadeInUp"
                data-delay="0.8"
                style={{ visibility: "visible", animationDelay: "0.8s" }}
              >
                <a
                  href="https://www.youtube.com/watch?v=SSo_EIwHSd4"
                  className="link link-light link-break video-popup"
                >
                  <em className="icon-circle icon-border icon-animation fas fa-play"></em>
                  <span>How it Works</span>
                </a>
              </li>
              <li
                className="animated fadeInUp"
                data-animate="fadeInUp"
                data-delay="0.9"
                style={{ visibility: "visible", animationDelay: "0.9s" }}
              >
                <a href="#" className="link link-light link-break">
                  <em className="icon-circle icon-border far fa-lightbulb"></em>
                  <span>Why buy Tokens now?</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-5">
            <ul
              className="social-links social-links-s2 justify-content-center justify-content-sm-end animated fadeInUp"
              data-animate="fadeInUp"
              data-delay="1"
              style={{ visibility: "visible", animationDelay: "1s" }}
            >
              <li>
                <a href="#">
                  <em className="fab fa-twitter"></em>
                </a>
              </li>
              <li>
                <a href="#">
                  <em className="fab fa-medium-m"></em>
                </a>
              </li>
              <li>
                <a href="#">
                  <em className="fab fa-facebook-f"></em>
                </a>
              </li>
              <li>
                <a href="#">
                  <em className="fab fa-youtube"></em>
                </a>
              </li>
              <li>
                <a href="#">
                  <em className="fab fa-bitcoin"></em>
                </a>
              </li>
              <li>
                <a href="#">
                  <em className="fab fa-github"></em>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <ContentTitleX1 title="WHAT AND WHY" mainTitle="ABOUT" />
      <section className="container">
        <div className="row">
          <div className="col-6">
            <ContentTitle>
              We build fully Decentralized Marketplace that Augments Access to
              Blockchain Technologies
            </ContentTitle>
            <p>
              We have developed a state-of-the-art marketplace where you can
              securely and reliably buy and sell any items. The fastest and most
              flexible asset platform in existence. It will include easy
              cryptocurrency payments integration and a digital arbitration
              system. Our aim is to integrate all companies, employees, and
              business assets into a unified blockchain ecosystem, making
              business truly efficient, transparent, and reliable.
            </p>
            <div className="d-flex p-2" style={{ gap: "20px" }}>
              <CustomButton
                variant={ColorStyle.Primary}
                borderRadius={SizeStylable.BorderRadius}
              >
                <span>White Paper</span>
                <em className="icon ti ti-arrow-down"></em>
              </CustomButton>
              <p
                className="animated fadeInUp"
                data-animate="fadeInUp"
                data-delay="0.7"
                style={{ visibility: "visible", animationDelay: "0.7s" }}
              >
                <a href="#ecosystems" className="menu-link btn btn-underline">
                  See the Ecosystems
                </a>
              </p>
            </div>
          </div>

          <div
            className="col-6"
            style={{ position: "relative", height: "400px" }}
          >
            <Image
              src="https://ico.themenio.com/images/azalea/gfx-e.png"
              alt="image of gfx-e"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
      <ContentTitleX1 title="CORE ECOSYSTEMS" mainTitle="ECOSYSTEMS" />
      <section className="container">
      <div className="container container-xxl">
            <div className="nk-block has-bg-image">
                <div className="row text-center align-items-lg-start gutter-vr-40px">
                    <div className="col-lg-3 col-sm-6">
                        <div
                            className="feature feature-s6 feature-s6-1 animated fadeInUp"
                            data-animate="fadeInUp"
                            data-delay="0.3"
                            style={{ visibility: "visible", animationDelay: "0.3s" }}
                        >
                            <div className="feature-text">
                                <h5 className="title title-sm ttu">ONE MARKETPLACE</h5>
                                <p>
                                    One International Marketplace that combines online store
                                    and services around the world. Buy any goods or services with
                                    our tokens.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div
                            className="feature feature-s6 feature-s6-2 animated fadeInUp"
                            data-animate="fadeInUp"
                            data-delay="0.4"
                            style={{ visibility: "visible", animationDelay: "0.4s" }}
                        >
                            <div className="feature-text">
                                <h5 className="title title-sm ttu">Transparency and Trust</h5>
                                <p>
                                    One International Marketplace that combines online store
                                    and services around the world. Buy any goods or services with
                                    our tokens.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div
                            className="feature feature-s6 feature-s6-3 animated fadeInUp"
                            data-animate="fadeInUp"
                            data-delay="0.5"
                            style={{ visibility: "visible", animationDelay: "0.5s" }}
                        >
                            <div className="feature-text">
                                <h5 className="title title-sm ttu">Blockchain Based Profiles</h5>
                                <p>
                                    One International Marketplace that combines online store
                                    and services around the world. Buy any goods or services with
                                    our tokens.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div
                            className="feature feature-s6 feature-s6-4 animated fadeInUp"
                            data-animate="fadeInUp"
                            data-delay="0.6"
                            style={{ visibility: "visible", animationDelay: "0.6s" }}
                        >
                            <div className="feature-text">
                                <h5 className="title title-sm ttu">PAYMENT FLEXIBILITY</h5>
                                <p>
                                    One International Marketplace that combines online store
                                    and services around the world. Buy any goods or services with
                                    our tokens.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="bg-image bg-contain bg-bottom-center bg-ecosystems animated d-none d-sm-block overlay-fall bg-image-loaded fadeInUp"
                    data-animate="fadeInUp"
                    data-delay="0.2"
                    style={{
                        backgroundImage: "url('https://ico.themenio.com/images/globe-particle.png')",
                        visibility: "visible",
                        animationDelay: "0.2s",
                    }}
                >
                    <img src="https://ico.themenio.com/images/globe-particle.png" alt="globe" />
                </div>
            </div>
        </div>
      </section>
      <ContentTitleX1 title="ICOX PRODUCTS" mainTitle="PLATFORM" />
      <section className="container">
        {/* PLATFORM */}
        <div className="container container-xxl">
            <div className="nk-block">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8">
                  <ul className="nav tab-nav tab-nav-btn-bdr-s2 justify-content-center justify-content-sm-between pb-4 pb-sm-5">
                    <li><a className="active" data-bs-toggle="tab" href="#tab-1-1">FOR Participators</a></li>
                    <li className="tab-nav-sap d-none d-sm-block"></li>
                    <li><a data-bs-toggle="tab" href="#tab-1-2">For Traders</a></li>
                  </ul>
                </div>
              </div>
              <div className="tab-content">
                {['tab-1-1', 'tab-1-2'].map((id, index) => (
                  <div className={`tab-pane fade${index === 0 ? ' show active' : ''}`} id={id} key={id}>
                    <div className="row align-items-center justify-content-between gutter-vr-40px">
                      <div className="col-lg-6 order-lg-last">
                        <div className="nk-block-img nk-block-ca">
                          <div className="nk-circle-animation nk-df-center fast"></div>
                          <div
                            className="shadow rounded"
                            style={{ position: "relative", 
                              display: "flex", 
                              justifyContent: "center", 
                              alignItems: "center", 
                              height: "auto"}}
                          >
                            <Image
                              src="https://ico.themenio.com/images/app-screens/sc-medium-a.png"
                              alt="image sc-medium-a"
                              width={450}
                              height={450}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="nk-block-text mgb-m30">
                          <h2 className="title title-md">A Open Platform for our Participators</h2>
                          <p>Each participator can choose the trader and to sign a contract.</p>
                          {[
                            { icon: 'ikon-bulb', text: 'User have full access to trading consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                            { icon: 'ikon-paricle', text: 'Our multi-cryptocurrency exchange will uis aute irure dolor in reprehenderit in voluptate velit uuntur magni dolores esse cillum.' },
                            { icon: 'ikon-bulb-2', text: 'Users will be able to take quis nostrum exercitationem ullam corporis susci pitlabo riosam, nisi ut aliquid ex ea commodie.' },
                            { icon: 'ikon-document-2', text: 'Sign a smart-contract to allow our trader’s access for live trading corporis cryptocurrency susci pitlabo riosam, nisi ut.' }
                          ].map((feature, i) => (
                            <div className="feature feature-inline feature-middle" key={i}>
                              <div className="feature-icon feature-icon-md">
                                <em className={`icon icon-md icon-grd ikon ${feature.icon}`}></em>
                              </div>
                              <div className="feature-text">
                                <p>{feature.text}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>
      <ContentTitleX1 title="MVP APPS" mainTitle="MVP">Our project is based on an existing cryptocurrency exchange.</ContentTitleX1>
      <section className="container">
        {/* MVP */}
        <div className="container container-xxl">
          <div className="nk-block">
            <div className="row align-items-center justify-content-center justify-content-xl-between gutter-vr-30px">
              <div className="col-xxl-6 col-xl-6 col-lg-8">
                <div className="nk-block-img nk-block-plx animated" data-animate="fadeInUp" data-delay="0.3" style={{ visibility: "visible", animationDelay: "0.3s" }}>
                  <Image 
                    className="shadow rounded" 
                    src="https://ico.themenio.com/images/app-screens/sc-medium-b.png" 
                    alt="" width={500} height={300} />
                  <Image 
                    className="nk-block-img-plx plx-screen shadow rounded" 
                    src="https://ico.themenio.com/images/app-screens/sc-small-d.jpg" 
                    alt="" width={500} height={300} />
                  <Image 
                    className="nk-block-img-plx plx-circle plx-circle-s1" 
                    src="https://ico.themenio.com/images/gfx/circle-a.png" 
                    alt="" width={100} height={100} />
                  <Image 
                    className="nk-block-img-plx plx-polygon plx-polygon-s1" 
                    src="https://ico.themenio.com/images/gfx/polygon-a.png" 
                    alt="" width={100} height={100} />
                  <Image 
                    className="nk-block-img-plx plx-triangle plx-triangle-s1" 
                    src="https://ico.themenio.com/images/gfx/triangle-a.png" 
                    alt="" width={100} height={100} />
                </div>
              </div>
              <div className="col-xxl-5 col-xl-6 col-lg-8">
                <div className="nk-block-text">
                  <div className="feature feature-inline animated" data-animate="fadeInUp" data-delay="0.4" style={{ visibility: "visible", animationDelay: "0.3s" }}>
                    <div className="feature-icon feature-icon-md">
                      <em className="icon icon-xs icon-circle fas fa-check"></em>
                    </div>
                    <div className="feature-text">
                      <p>Powered by DAP, NEX lets you easily trade crypto-currencies &amp; other digital.</p>
                    </div>
                  </div>
                  <div className="feature feature-inline animated" data-animate="fadeInUp" data-delay="0.5" style={{ visibility: "visible", animationDelay: "0.3s" }}>
                    <div className="feature-icon feature-icon-md">
                      <em className="icon icon-xs icon-circle fas fa-check"></em>
                    </div>
                    <div className="feature-text">
                      <p>User have full access to trading consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                  <div className="feature feature-inline animated" data-animate="fadeInUp" data-delay="0.6" style={{ visibility: "visible", animationDelay: "0.3s" }}>
                    <div className="feature-icon feature-icon-md">
                      <em className="icon icon-xs icon-circle fas fa-check"></em>
                    </div>
                    <div className="feature-text">
                      <p>Our multi-cryptocurrency exchange will uis aute irure dolor in reprehenderit in voluptate velit uuntur magni dolores esse cillum.</p>
                    </div>
                  </div>
                  <div className="feature feature-inline animated" data-animate="fadeInUp" data-delay="0.7" style={{ visibility: "visible", animationDelay: "0.3s" }}>
                    <div className="feature-icon feature-icon-md">
                      <em className="icon icon-xs icon-circle fas fa-check"></em>
                    </div>
                    <div className="feature-text">
                      <p>Traders able to trade with voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                    </div>
                  </div>
                  <div className="feature feature-inline animated" data-animate="fadeInUp" data-delay="0.8" style={{ visibility: "visible", animationDelay: "0.3s" }}>
                    <div className="feature-icon feature-icon-md">
                      <em className="icon icon-xs icon-circle fas fa-check"></em>
                    </div>
                    <div className="feature-text">
                      <p>Users will be able to take quis nostrum exercitationem ullam corporis susci pitlabo riosam, nisi ut aliquid ex ea commodi consequatur.</p>
                    </div>
                  </div>
                  <div className="text-center text-sm-start animated" data-animate="fadeInUp" data-delay="0.9" style={{ visibility: "visible", animationDelay: "0.3s" }}>
                    <a href="#" className="btn btn-round btn-primary">Try Demo Free</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContentTitleX1 title="TOKEN DETAILS" mainTitle="TOKENS" />
      <section className="container">
        {/* TOKENS */}
      </section>
      <ContentTitleX1 title="TIMELINE" mainTitle="ROADMAP" />
      <section className="container">
        {/* ROADMAP */}
      </section>
      <ContentTitleX1 title="CORE TEAM" mainTitle="OUR TEAM" />
      <section className="container">
        {/* OUR TEAM */}
      </section>
      <ContentTitleX1 title="ADVISORS" mainTitle="BOARD MEMBER">Our advisors and board members are great part of our team.</ContentTitleX1> 
      <section className="container">
        {/* BOARD MEMBER */}
        <div className="container container-xxl">
            <div className="nk-block nk-block-sm">
                <div className="row">
                    <div className="col-md-4 col-lg-2 col-6">
                        <div 
                          className="team team-s2 team-sm-s2 team-odd animated fadeInUp fadeInUp" 
                          data-animate="fadeInUp" 
                          data-delay="0.3"
                          style={{ visibility: "visible", animationDelay: "0.3s" }}
                          >
                            
                            <div className="team-photo team-photo-s2" >
                                <Image
                                  src="https://ico.themenio.com/images/azalea/team-c.jpg"
                                  layout="intrinsic" // Hình ảnh sẽ có kích thước tự động theo nội dung
                                  width={140} height={150} alt="image of team-c"
                                />
                                
                            </div>
                            <h5 className="team-name title title-sm">Ron Glabischnig</h5>
                            <span className="team-position team-position-sm">General manager, Coindexin</span>
                            <ul className="team-social team-social-s2">
                                <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                <li><a href="#"><em className="fab fa-twitter"></em></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-6">
                        <div 
                          className="team team-s2 team-sm-s2 team-even animated fadeInUp" 
                          data-animate="fadeInUp" 
                          data-delay="0.35"
                          style={{ visibility: "visible", animationDelay: "0.35s" }}
                          >
                            <div className="team-photo team-photo-s2">
                                <Image
                                  src="https://ico.themenio.com/images/azalea/team-b.jpg"
                                  width={140} height={130} alt="image of team-b"
                                />
                            </div>
                            <h5 className="team-name title title-sm">Stefan Zakrisson</h5>
                            <span className="team-position team-position-sm">Legal Advisor, TokenWiz Project</span>
                            <ul className="team-social team-social-s2">
                                <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                <li><a href="#"><em className="fab fa-twitter"></em></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-6">
                        <div 
                          className="team team-s2 team-sm-s2 team-odd animated fadeInUp" 
                          data-animate="fadeInUp" 
                          data-delay="0.4"
                          style={{ visibility: "visible", animationDelay: "0.4s" }}
                          >
                            <div className="team-photo team-photo-s2">
                                <Image
                                  src="https://ico.themenio.com/images/azalea/team-a.jpg"
                                  width={140} height={130} alt="image of team-a"
                                />
                            </div>
                            <h5 className="team-name title title-sm">Moises Teare</h5>
                            <span className="team-position team-position-sm">Managing Director, ICOCrypto</span>
                            <ul className="team-social team-social-s2">
                                <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                <li><a href="#"><em className="fab fa-twitter"></em></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-6">
                        <div 
                          className="team team-s2 team-sm-s2 team-even animated fadeInUp" 
                          data-animate="fadeInUp" 
                          data-delay="0.45"
                          style={{ visibility: "visible", animationDelay: "0.35s" }}
                          >
                            <div className="team-photo team-photo-s2">
                                <Image
                                  src="https://ico.themenio.com/images/azalea/team-d.jpg"
                                  width={140} height={130} alt="image of team-d"
                                />
                            </div>
                            <h5 className="team-name title title-sm">Michiel Berende</h5>
                            <span className="team-position team-position-sm">Insurance Lead &amp; Financial Advisor</span>
                            <ul className="team-social team-social-s2">
                                <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                <li><a href="#"><em className="fab fa-twitter"></em></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-6">
                        <div 
                          className="team team-s2 team-sm-s2 team-odd animated fadeInUp" 
                          data-animate="fadeInUp" 
                          data-delay="0.5"
                          style={{ visibility: "visible", animationDelay: "0.5s" }}
                          >
                            <div className="team-photo team-photo-s2">
                                <Image
                                  src="https://ico.themenio.com/images/azalea/team-b.jpg"
                                  width={140} height={130} alt="image of team-b"
                                />
                            </div>
                            <h5 className="team-name title title-sm">Noack Waylon</h5>
                            <span className="team-position team-position-sm">Ecosystem Manager &amp; DevOps Engineer</span>
                            <ul className="team-social team-social-s2">
                                <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                <li><a href="#"><em className="fab fa-twitter"></em></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-2 col-6">
                        <div 
                          className="team team-s2 team-sm-s2 team-even animated fadeInUp" 
                          data-animate="fadeInUp" 
                          data-delay="0.55"
                          style={{ visibility: "visible", animationDelay: "0.55s" }}
                          >
                            <div className="team-photo team-photo-s2">
                                <Image
                                  src="https://ico.themenio.com/images/azalea/team-c.jpg"
                                  width={140} height={130} alt="image of team-c"
                                />
                            </div>
                            <h5 className="team-name title title-sm">Tobias Dalton</h5>
                            <span className="team-position team-position-sm">Member of the Oparation Board</span>
                            <ul className="team-social team-social-s2">
                                <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                <li><a href="#"><em className="fab fa-twitter"></em></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Block @s --> */}
            
        </div>
      </section>
      <div className="nk-block block-partners" style={{
        display: "flex", alignItems: "center", flexDirection: "column"
      }}>
        <CustomText heading="h4">OUR PARTNERS</CustomText>
        <ul className="has-carousel partner-list justify-content-center animated fadeInUp" data-items="7" data-items-mobile="2" data-auto="true" data-loop="true" data-animate="fadeInUp" data-delay="0.75" style={{ visibility: "visible", animationDelay: "0.75s" }}>
          <li className="partner-logo">
            <Image
              src="https://ico.themenio.com/images/partners/a-light.png"
              width={111} height={30} alt="image of a-light"
            />
          </li>
          <li className="partner-logo">
            <Image
              src="https://ico.themenio.com/images/partners/b-light.png"
              width={111} height={30} alt="image of b-light" 
            />
          </li>
          <li className="partner-logo">
            <Image
                src="https://ico.themenio.com/images/partners/c-light.png"
                width={111} height={30} alt="image of c-light" 
              />
          </li>
          <li className="partner-logo">
            <Image
                src="https://ico.themenio.com/images/partners/d-light.png"
                width={111} height={30} alt="image of d-light" 
              />
          </li>
          <li className="partner-logo">
            <Image
                src="https://ico.themenio.com/images/partners/e-light.png"
                width={111} height={30} alt="image of e-light" 
              />
          </li>
          <li className="partner-logo">
            <Image
                src="https://ico.themenio.com/images/partners/f-light.png"
                width={111} height={30} alt="image of f-light" 
              />
          </li>
          <li className="partner-logo">
            <Image
                src="https://ico.themenio.com/images/partners/g-light.png"
                width={111} height={30} alt="image of g-light" 
              />
          </li>
          <li className="partner-logo">
            <Image
              src="https://ico.themenio.com/images/partners/a-light.png"
              width={111} height={30} alt="image of a-light"
            />
          </li>
          <li className="partner-logo">
            <Image
              src="https://ico.themenio.com/images/partners/b-light.png"
              width={111} height={30} alt="image of b-light" 
            />
          </li>
          <li className="partner-logo">
            <Image
                src="https://ico.themenio.com/images/partners/c-light.png"
                width={111} height={30} alt="image of c-light" 
              />
          </li>
          <li className="partner-logo">
            <Image
                src="https://ico.themenio.com/images/partners/d-light.png"
                width={111} height={30} alt="image of d-light" 
              />
          </li>
          <li className="partner-logo">
            <Image
                src="https://ico.themenio.com/images/partners/e-light.png"
                width={111} height={30} alt="image of e-light" 
              />
          </li>
          <li className="partner-logo">
            <Image
                src="https://ico.themenio.com/images/partners/f-light.png"
                width={111} height={30} alt="image of f-light" 
              />
          </li>
          <li className="partner-logo">
            <Image
                src="https://ico.themenio.com/images/partners/g-light.png"
                width={111} height={30} alt="image of g-light" 
              />
          </li>
        </ul>
      </div>
      <ContentTitleX1 title="DOWNLOADS" mainTitle="DOCUMENTS">Download the whitepaper and learn about ICO Token, the unique ICO Crypto approach and the team/advisors.</ContentTitleX1> 
      <section className="container">
        {/* BOARD MEMBER */}
        <div className="container container-xxl">
          <div className="nk-block">
              <div className="row gutter-vr-50px">
                  <div className="col-sm-6 col-lg-3">
                      <div className="doc animated fadeInUp" data-animate="fadeInUp" data-delay="0.3" style={{ visibility: "visible", animationDelay: "0.3s" }}>
                          <div className="doc-photo doc-shape doc-shape-a">
                              <Image
                                src="https://ico.themenio.com/images/azalea/doc-a.jpg"
                                width={175} height={236} alt="image of doc-a" 
                              />
                          </div>
                          <div className="doc-text">
                              <h5 className="doc-title title-sm">White Paper <small>(2022)</small></h5>
                              <a className="doc-download" href="#"><em className="ti ti-import"></em></a>
                              <div className="doc-lang">ENGLISH</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                      <div className="doc animated fadeInUp" data-animate="fadeInUp" data-delay="0.4" style={{ visibility: "visible", animationDelay: "0.4s" }}>
                          <div className="doc-photo doc-shape doc-shape-b">
                              {/* <img src="images/azalea/doc-b.jpg" alt=""> */}
                              <Image
                                src="https://ico.themenio.com/images/azalea/doc-b.jpg"
                                width={175} height={236} alt="image of doc-a" 
                              />
                          </div>
                          <div className="doc-text">
                              <h5 className="doc-title title-sm">Two Pager <small>(2022)</small></h5>
                              <a className="doc-download" href="#"><em className="ti ti-import"></em></a>
                              <div className="doc-lang">ENGLISH</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                      <div className="doc animated fadeInUp" data-animate="fadeInUp" data-delay="0.5" style={{ visibility: "visible", animationDelay: "0.5s" }}>
                          <div className="doc-photo doc-shape doc-shape-c">
                              {/* <img src="images/azalea/doc-c.jpg" alt=""> */}
                              <Image
                                src="https://ico.themenio.com/images/azalea/doc-c.jpg"
                                width={175} height={236} alt="image of doc-a" 
                              />
                          </div>
                          <div className="doc-text">
                              <h5 className="doc-title title-sm">One Pager <small>(2022)</small></h5>
                              <a className="doc-download" href="#"><em className="ti ti-import"></em></a>
                              <div className="doc-lang">ENGLISH</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                      <div className="doc animated fadeInUp" data-animate="fadeInUp" data-delay="0.6" style={{ visibility: "visible", animationDelay: "0.6s" }}>
                          <div className="doc-photo doc-shape doc-shape-d">
                              {/* <img src="images/azalea/doc-d.jpg" alt=""> */}
                              <Image
                                src="https://ico.themenio.com/images/azalea/doc-d.jpg"
                                width={175} height={236} alt="image of doc-a" 
                              />
                          </div>
                          <div className="doc-text">
                              <h5 className="doc-title title-sm">Presentation <small>(2022)</small></h5>
                              <a className="doc-download" href="#"><em className="ti ti-import"></em></a>
                              <div className="doc-lang">ENGLISH</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </section>
      <div className="row">
        <div className="col-6">
        <ContentTitleX1 title="PRESS" mainTitle="IN PRESS" />
      <section className="container">
        {/* IN PRESS */}
      </section>
        </div>
        <div className="col-6">
        <ContentTitleX1 title="UPDATE" mainTitle="NEWS" />
      <section className="container">
        {/* NEWS */}
      </section>
        </div>

      </div>
      <ContentTitleX1 title="UPDATE" mainTitle="FAQS">Below we’ve provided a bit of ICO, ICO Token, cryptocurrencies, and few others. If you have any other questions, please get in touch.</ContentTitleX1> 
      <section className="container">
        <BlockFAQ tabs={faqTabs} variant="S2"/>
      </section>
    </>
  );
}
