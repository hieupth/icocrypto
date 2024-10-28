"use client";

import PageHeader from "@/components/blocks/block-banner";
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
import ProcessBar  from "@/components/elements/element-process-bar";
import { BlockFAQ } from "@/components/blocks/block-FAQ";
import { BlockDocument } from "@/components/blocks/block-DOCUMENT";
import { BlockOurPartner } from "@/components/blocks/block-OURPARTNER";
import { BlockInPress } from '@/components/blocks/block-INPRESS';
import { BlockNews } from '@/components/blocks/block-NEWS';
import Footer from "@/components/blocks/block-footer"

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
  const documents = [
    {
      title: "White Paper",
      year: 2022,
      image: "https://ico.themenio.com/images/azalea/doc-a.jpg",
      lang: "ENGLISH",
      downloadLink: "#",
    },
    {
      title: "Two Pager",
      year: 2022,
      image: "https://ico.themenio.com/images/azalea/doc-b.jpg",
      lang: "ENGLISH",
      downloadLink: "#",
    },
    {
      title: "One Pager",
      year: 2022,
      image: "https://ico.themenio.com/images/azalea/doc-c.jpg",
      lang: "ENGLISH",
      downloadLink: "#",
    },
    {
      title: 'Presentation',
      year: 2022,
      image: "https://ico.themenio.com/images/azalea/doc-d.jpg",
      lang: "ENGLISH",
      downloadLink: "#",
    },
  ];
  const partners = [
    { image: "https://ico.themenio.com/images/partners/a-light.png", alt: "image of a-light" },
    { image: "https://ico.themenio.com/images/partners/b-light.png", alt: "image of b-light" },
    { image: "https://ico.themenio.com/images/partners/c-light.png", alt: "image of c-light" },
    { image: "https://ico.themenio.com/images/partners/d-light.png", alt: "image of d-light" },
    { image: "https://ico.themenio.com/images/partners/e-light.png", alt: "image of e-light" },
    { image: "https://ico.themenio.com/images/partners/f-light.png", alt: "image of f-light" },
    { image: "https://ico.themenio.com/images/partners/g-light.png", alt: "image of g-light" },
  ];
  const inPressItems = [
    {
        image: "https://ico.themenio.com/images/partners/a-light.png",
        alt: "Partner A",
    },
    {
        image: "https://ico.themenio.com/images/partners/b-light.png",
        alt: "Partner B",
    },
    {
        image: "https://ico.themenio.com/images/partners/c-light.png",
        alt: "Partner C",
    },
    {
        image: "https://ico.themenio.com/images/partners/d-light.png",
        alt: "Partner D",
    },
    {
        image: "https://ico.themenio.com/images/partners/e-light.png",
        alt: "Partner E",
    },
    {
        image: "https://ico.themenio.com/images/partners/f-light.png",
        alt: "Partner F",
    },
    {
        image: "https://ico.themenio.com/images/partners/a-light.png",
        alt: "Partner A",
    },
    {
        image: "https://ico.themenio.com/images/partners/b-light.png",
        alt: "Partner B",
    },
    {
        image: "https://ico.themenio.com/images/partners/c-light.png",
        alt: "Partner C",
    },
  ];
  const newsItems = [
    {
        title: "Fintech G20 Global Summit 2022",
        location: "New York, United State",
        imageUrl: "https://ico.themenio.com/images/azalea/news-hr-a.jpg",  
    },
    {
        title: "Blockchain Global Summit 2022",
        location: "California, United State",
        imageUrl: "https://ico.themenio.com/images/azalea/news-hr-b.jpg",
    },
    {
        title: "Fintech G20 Global Summit 2022",
        location: "New York, United State",
        imageUrl: "https://ico.themenio.com/images/azalea/news-hr-a.jpg",
    },
    {
      title: "Blockchain Global Summit 2022",
      location: "California, United State",
      imageUrl: "https://ico.themenio.com/images/azalea/news-hr-b.jpg",
  
    },
  ];
  return (
    <>
      <PageHeader title={Page.contents.banner.title}>
        <span>
          {Page.contents.banner.description}
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
          <div className="col-9"> 
          <ProcessBar
            processPoint={[
              { title: 'Soft Cap', percent: 25 },
              { title: 'Crowdsale', percent: 55 },
              { title: 'Hard Cap', percent: 85 }
            ]}
            progressPoint={30}
            raised="1,1250"
            target="150,000"
            currency="Tokens"
            status={{
            title: 'CURRENT BONUS',
            percent: 20,
            bonusTitle: 'Contributor can receive'
           }}
          />
          </div>
          <div className="col-3">
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
      <BlockAbout aboutContent={Page.contents.about}/>
      <ContentTitleX1 title="CORE ECOSYSTEMS" mainTitle="ECOSYSTEMS" />
      <BlockEcosystems {...Page.contents.ecosystems}/>
      <ContentTitleX1 title="ICOX PRODUCTS" mainTitle="PLATFORM" />
      <BlockPlatform/>
      <ContentTitleX1 title="MVP APPS" mainTitle="MVP">Our project is based on an existing cryptocurrency exchange.</ContentTitleX1>
      <BlockMVP/>
      <ContentTitleX1 title="TOKEN DETAILS" mainTitle="TOKENS">Breakdown of our Token Recipients.</ContentTitleX1>
      <section className="container">
        {/* TOKENS */}
      </section>
      <ContentTitleX1 title="TIMELINE" mainTitle="ROADMAP">ICO Crypto is developing a global data-driven platform for the world. Powered by blockchain and smart contracts.</ContentTitleX1>
      <section className="container">
        {/* ROADMAP */}
        <BlockRoadMap roadmapList={Page.contents.roadmap} /> 
      </section>
      <ContentTitleX1 title="CORE TEAM" mainTitle="OUR TEAM" />
      <section className="container">
        {/* OUR TEAM */}
      </section>
      <ContentTitleX1 title="ADVISORS" mainTitle="BOARD MEMBER">Our advisors and board members are great part of our team.</ContentTitleX1> 
      <BlockBoardMember members={Page.contents.member}/>
      <div className="nk-block block-partners" style={{
        display: "flex", alignItems: "center", flexDirection: "column"
      }}>
        <CustomText heading="h4">OUR PARTNERS</CustomText>
        <BlockOurPartner partners={Page.contents.partners}/>
      </div>
      <ContentTitleX1 title="DOWNLOADS" mainTitle="DOCUMENTS">Download the whitepaper and learn about ICO Token, the unique ICO Crypto approach and the team/advisors.</ContentTitleX1> 
      <section className="container">
        {/* BOARD MEMBER */}
        <BlockDocument documents={Page.contents.documents} color="primary" style="custom-style" dark={true} />
      </section>
      <div className="row">
        <div className="col-6">
        <ContentTitleX1 title="PRESS" mainTitle="IN PRESS" />
      <section className="container">
        {/* IN PRESS */}
        <BlockInPress inPressItems={inPressItems} />
      </section>
        </div>
        <div className="col-6">
        <ContentTitleX1 title="UPDATE" mainTitle="NEWS" />
      <section className="container">
        {/* NEWS */}
        <BlockNews newsItems={newsItems} />
      </section>
        </div>

      </div>
      <ContentTitleX1 title="UPDATE" mainTitle="FAQS">Below we’ve provided a bit of ICO, ICO Token, cryptocurrencies, and few others. If you have any other questions, please get in touch.</ContentTitleX1> 
      <section className="container">
        <BlockFAQ tabs={Page.contents.faqTabs} variant="S2"/>
      </section>
      <section className="container">
        <BlockContactUs contentList={Page.contents.contact}/>
      </section>
      <Footer />
    </>
  );
}
