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
import { BlockDocument } from "@/components/blocks/block-DOCUMENT";
import { BlockOurPartner } from "@/components/blocks/block-OURPARTNER";
import { BlockAbout } from "@/components/blocks/block-ABOUT";
import { BlockEcosystems } from "@/components/blocks/block-ECOSYSTEMS";
import BlockPlatform from "@/components/blocks/block-platform";
import BlockMVP from "@/components/blocks/block-MVP";
import { BlockBoardMember } from "@/components/blocks/block-BOARD-MEMBER";
import { BlockRoadMap } from "@/components/blocks/block-ROADMAP" 
import { BlockContactUs } from "@/components/blocks/block-CONTACT-US"

export default function Home() {
  const aboutContent = {
      contentTitle: 'We build fully Decentralized Marketplace that Augments Access to Blockchain Technologies',
      content: `We have developed a state-of-the-art marketplace where you can 
              securely and reliably buy and sell any items. The fastest and most
              flexible asset platform in existence. It will include easy
              cryptocurrency payments integration and a digital arbitration
              system. Our aim is to integrate all companies, employees, and
              business assets into a unified blockchain ecosystem, making
              business truly efficient, transparent, and reliable.`,
      buttonLabel: 'White Paper',
      buttonIcon: 'ti-arrow-down',
      linkLabel: 'See the Ecosystems',
      link: '#ecosystems',
      imageUrl: 'https://ico.themenio.com/images/azalea/gfx-e.png',
      imageAlt: 'image of gfx-e',
    }
  const roadmapContent = [
    {
      id: 0,
      year: 'Q1 2022',
      date: 'Jan - Apr 2022',
      text: 'Creation of a decentralize martketplace to neural network adjacent coefficients.',
      state: 2
    },
    {
      id: 1,
      year: 'Q2 2022',
      date: 'Jul - Aug 2022',
      text: 'Start of the ICO Crypto Platform Development and Introduction of advertiser auctions',
      state: 1
    },
    {
      id: 2,
      year: 'Q3 2022',
      date: 'Sep - Oct 2022',
      text: 'Start Private Token Sale Round to our contributors.',
      state: 0
    },
    {
      id: 3,
      year: 'Q4 2022',
      date: 'Nov - Dec 2022',
      text: 'Launch of the mobile Best versions of the Publisher application and Press Tour.',
      state: 0
    },
    {
      id: 4,
      year: 'Q1 2022',
      date: 'Jan - Apr 2022',
      text: 'Release of the initial versions of operational applications and smart contracts.',
      state: 0
    },
    {
      id: 5,
      year: 'Q2 2022',
      date: 'Jul - Aug 2022',
      text: 'Creation of a decentralize martketplace to neural network adjacent coefficients.',
      state: 0
    }
  ]  
  const membersData = [
    {
      name: 'Ron Glabischnig',
      position: 'General manager, Coindexin',
      imageUrl: 'https://ico.themenio.com/images/azalea/team-c.jpg',
      delay: '0.3',
      socialLinks: [
        { icon: 'fab fa-facebook-f', url: '#' },
        { icon: 'fab fa-linkedin-in', url: '#' },
        { icon: 'fab fa-twitter', url: '#' },
      ],
    },
    {
      name: 'Stefan Zakrisson',
      position: 'Legal Advisor, TokenWiz Project',
      imageUrl: 'https://ico.themenio.com/images/azalea/team-b.jpg',
      delay: '0.35',
      socialLinks: [
        { icon: 'fab fa-facebook-f', url: '#' },
        { icon: 'fab fa-linkedin-in', url: '#' },
        { icon: 'fab fa-twitter', url: '#' },
      ],
    },
    {
      name: 'Moises Teare',
      position: 'Managing Director, ICOCrypto',
      imageUrl: 'https://ico.themenio.com/images/azalea/team-a.jpg',
      delay: '0.4',
      socialLinks: [
        { icon: 'fab fa-facebook-f', url: '#' },
        { icon: 'fab fa-linkedin-in', url: '#' },
        { icon: 'fab fa-twitter', url: '#' },
      ],
    },
    {
      name: 'Michiel Berende',
      position: 'Insurance Lead & Financial Advisor',
      imageUrl: 'https://ico.themenio.com/images/azalea/team-d.jpg',
      delay: '0.45',
      socialLinks: [
        { icon: 'fab fa-facebook-f', url: '#' },
        { icon: 'fab fa-linkedin-in', url: '#' },
        { icon: 'fab fa-twitter', url: '#' },
      ],
    },
    {
      name: 'Noack Waylon',
      position: 'Ecosystem Manager & DevOps Engineer',
      imageUrl: 'https://ico.themenio.com/images/azalea/team-b.jpg',
      delay: '0.5',
      socialLinks: [
        { icon: 'fab fa-facebook-f', url: '#' },
        { icon: 'fab fa-linkedin-in', url: '#' },
        { icon: 'fab fa-twitter', url: '#' },
      ],
    },
    {
      name: 'Tobias Dalton',
      position: 'Member of the Operation Board',
      imageUrl: 'https://ico.themenio.com/images/azalea/team-c.jpg',
      delay: '0.55',
      socialLinks: [
        { icon: 'fab fa-facebook-f', url: '#' },
        { icon: 'fab fa-linkedin-in', url: '#' },
        { icon: 'fab fa-twitter', url: '#' },
      ],
    }
  ];
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
  const contactContent = [
    {
      contact_main: [
        { icon: 'fas fa-phone', text: '+44 0123 4567' },
        { icon: 'fas fa-envelope', text: 'info@company.com' },
        { icon: 'fas fa-paper-plane', text: 'Join us on Telegram' }
      ]
    },
    {
      contact_media: [
        { icon: 'fab fa-twitter' , url: '#' },
        { icon: 'fab fa-medium-m' , url: '#' },
        { icon: 'fab fa-facebook-f' , url: '#' },
        { icon: 'fab fa-youtube' , url: '#' },
        { icon: 'fab fa-bitcoin' , url: '#' },
        { icon: 'fab fa-github' , url: '#' },
      ]
    },
    { description: 'We are always open and we welcome any questions you have for our team. If you wish to get in touch, please fill out the form below.'}
  ]
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
      <BlockAbout aboutContent={aboutContent}/>
      <ContentTitleX1 title="CORE ECOSYSTEMS" mainTitle="ECOSYSTEMS" />
      <BlockEcosystems/>
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
        <BlockRoadMap roadmapList={roadmapContent} /> 
      </section>
      <ContentTitleX1 title="CORE TEAM" mainTitle="OUR TEAM" />
      <section className="container">
        {/* OUR TEAM */}
      </section>
      <ContentTitleX1 title="ADVISORS" mainTitle="BOARD MEMBER">Our advisors and board members are great part of our team.</ContentTitleX1> 
      <BlockBoardMember members={membersData}/>
      <div className="nk-block block-partners" style={{
        display: "flex", alignItems: "center", flexDirection: "column"
      }}>
        <CustomText heading="h4">OUR PARTNERS</CustomText>
        <BlockOurPartner partners={partners}/>
      </div>
      <ContentTitleX1 title="DOWNLOADS" mainTitle="DOCUMENTS">Download the whitepaper and learn about ICO Token, the unique ICO Crypto approach and the team/advisors.</ContentTitleX1> 
      <section className="container">
        {/* BOARD MEMBER */}
        <BlockDocument documents={documents} color="primary" style="custom-style" dark={true} />
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
      <section className="container">
        <BlockContactUs contentList={contactContent}/>
      </section>
    </>
  );
}
