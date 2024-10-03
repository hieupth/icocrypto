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
      </section>
      <ContentTitleX1 title="MVP APPS" mainTitle="MVP" />
      <section className="container">
        {/* MVP */}
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
      <ContentTitleX1 title="ADVISORS" mainTitle="BOARD MEMBER" />
      <section className="container">
        {/* BOARD MEMBER */}
      </section>
      <div className="nk-block block-partners" style={{
        display: "flex", alignItems: "center", flexDirection: "column"
      }}>
        <CustomText heading="h4">OUR PARTNERS</CustomText>
        <ul className="has-carousel partner-list justify-content-center animated fadeInUp" data-items="7" data-items-mobile="2" data-auto="true" data-loop="true" data-animate="fadeInUp" data-delay="0.75" style={{ visibility: "visible", animationDelay: "0.75s" }}>
        </ul>
      </div>
      <ContentTitleX1 title="DOWNLOADS" mainTitle="DOCUMENTS" />
      <section className="container">
        {/* BOARD MEMBER */}
      </section>
      <div className="row">
        <div className="col-6">
        <ContentTitleX1 title="PRESS" mainTitle="IN PRESS" />
      <section className="container">
        {/* BOARD MEMBER */}
      </section>
        </div>
        <div className="col-6">
        <ContentTitleX1 title="UPDATE" mainTitle="NEWS" />
      <section className="container">
        {/* BOARD MEMBER */}
      </section>
        </div>

      </div>
      <ContentTitleX1 title="UPDATE" mainTitle="FAQS" />
      <section className="container">
        <BlockFAQ tabs={faqTabs} variant="S2"/>
      </section>
    </>
  );
}
