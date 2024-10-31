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
import CustomText from "@/components/elements/element-typography";
import ProcessBar  from "@/components/elements/element-process-bar";
import { BlockFAQ } from "@/components/blocks/block-FAQ";
import { BlockDocument } from "@/components/blocks/block-DOCUMENT";
import { BlockOurPartner } from "@/components/blocks/block-OURPARTNER";
import { BlockInPress } from '@/components/blocks/block-INPRESS';
import { BlockNews } from '@/components/blocks/block-NEWS';
import Footer from "@/components/blocks/block-footer"

import { BlockContactUs } from "@/components/blocks/block-CONTACT-US";
import { BlockAbout } from "@/components/blocks/block-ABOUT";
import { BlockEcosystems } from "@/components/blocks/block-ECOSYSTEMS";
import BlockPlatform from "@/components/blocks/block-platform";
import BlockMVP from "@/components/blocks/block-MVP";
import { BlockTokens } from "@/components/blocks/block-TOKEN";
import { BlockOurTeam } from "@/components/blocks/block-OURTEAM";
import { BlockBoardMember } from "@/components/blocks/block-BOARD-MEMBER";
import { BlockRoadMap } from "@/components/blocks/block-ROADMAP" 
import { BlockContactUs } from "@/components/blocks/block-CONTACT-US"
import { BlockInPress } from "@/components/blocks/block-INPRESS";
import { BlockNews } from "@/components/blocks/block-NEWS";
import Footer from "@/components/blocks/block-footer";

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
  const processBar = {
    processPoint: [
      { title: 'Soft Cap', percent: 25 },
      { title: 'Crowdsale', percent: 55 },
      { title: 'Hard Cap', percent: 85 }
    ],
    raised: '1,1250',
    target: '150,000',
    currency: 'Tokens',
    status: { title: 'CURRENT BONUS', percent: 20, bonusTitle: 'Contributor can receive'
    }
  }
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
  const mvpItems = [
    {
      className: "shadow rounded img-fluid",
      src: "https://ico.themenio.com/images/app-screens/sc-medium-b.png",
      alt: "image sc-medium-b",
      width: 500,
      height: 300
  },
  {
      className: "nk-block-img-plx plx-screen shadow rounded img-fluid",
      src: "https://ico.themenio.com/images/app-screens/sc-small-d.jpg",
      alt: "image sc-small-d",
      width: 500,
      height: 300
  },
  {   
      className: "nk-block-img-plx plx-circle plx-circle-s1 img-fluid",
      src: "https://ico.themenio.com/images/gfx/circle-a.png",
      alt: "image circle-a",
      width: 100,
      height: 100
  },
  {
      className: "nk-block-img-plx plx-polygon plx-polygon-s1 img-fluid",
      src: "https://ico.themenio.com/images/gfx/polygon-a.png",
      alt: "image polygon-a",
      width: 100,
      height: 100
  },
  {
      className: "nk-block-img-plx plx-triangle plx-triangle-s1 img-fluid",
      src: "https://ico.themenio.com/images/gfx/triangle-a.png",
      alt: "triangle-a",
      width: 100,
      height: 100
  }
];
const chartData = [
  { label: "Public Sale", title: "Tokens alocate for Public Sale", subtitle: "(Lockup)", amount: 45, color: "#1f2e4d", colorHover: "#f42f54" },
  { label: "Private Sale", title: "Tokens alocate for Private Sale", subtitle: "(1 month lockup for half bonus)", amount: 25, color: "#1f2e4d", colorHover: "#f42f54" },
  { label: "Reserve Fund", title: "Reserve Fund", subtitle: "(6 months lockup)", amount: 8, color: "#1f2e4d", colorHover: "#f42f54" },
  { label: "Team & Founder", title: "Team & Founder", subtitle: "(3 months lockup)", amount: 12, color: "#1f2e4d", colorHover: "#f42f54" },
  { label: "Bounty & Events", title: "Bounty & Events", subtitle: "(1 month lockup)", amount: 6, color: "#1f2e4d", colorHover: "#f42f54" },
  { label: "Advisors & Partners", title: "Advisors & Partners", subtitle: "(6 months lockup)", amount: 4, color: "#1f2e4d", colorHover: "#f42f54" },
];
const tokenInfo = [
  { title: "Start Time", description: "15 Sep, 2022", colorClass: "color-1", delay: "0.7" },
  { title: "Token Symbol", description: "ICOX", colorClass: "color-1", delay: "0.7" },
  { title: "End Time", description: "30 Nov, 2022", colorClass: "color-2", delay: "0.75" },
  { title: "Tokens Offered", description: "15.0 M", colorClass: "color-2", delay: "0.75" },
  { title: "Soft Cap", description: "1.5 K", colorClass: "color-3", delay: "0.8" },
  { title: "Soft Cap", description: "1.5 K", colorClass: "color-3", delay: "0.8" },
  { title: "Crowdsale", description: "10.5 M", colorClass: "color-4", delay: "0.8" },
  { title: "Crowdsale", description: "10.5 M", colorClass: "color-4", delay: "0.8" },
  { title: "Hard Cap", description: "12.0 M", colorClass: "color-5", delay: "0.9" },
  { title: "Hard Cap", description: "12.0 M", colorClass: "color-5", delay: "0.9" },
];
const members = [
  {
      image: "https://ico.themenio.com/images/azalea/team-a.jpg",
      name: "Louis Baker",
      position: "CEO & Lead Blockchain",
      socialLinks: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
      },
      description1: "He is a great man to work Lorem ipsum dolor sit amet, consec tetur adipis icing elit. Simi lique, autem.",
      description2: "Tenetur quos facere magnam volupt ates quas esse Sedrep ell endus mole stiae tates quas esse Sed repell endus molesti aela uda ntium quis quam iusto minima thanks.",
      progress: [
          { title: "BLOCKCHAIN", percentage: 85 },
          { title: "DECENTRALIZATION", percentage: 68 },
      ],
  },
  {
      image: "https://ico.themenio.com/images/azalea/team-b.jpg",
      name: "Stefan Harary",
      position: "CTO & Senior Developer",
      socialLinks: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
      },
      description1: "He is a great man to work Lorem ipsum dolor sit amet, consec tetur adipis icing elit. Simi lique, autem.",
      description2: "Tenetur quos facere magnam volupt ates quas esse Sedrep ell endus mole stiae tates quas esse Sed repell endus molesti aela uda ntium quis quam iusto minima thanks.",
      progress: [],
  },
  {
      image: "https://ico.themenio.com/images/azalea/team-c.jpg",
      name: "Moises Teare",
      position: "Blockchain App Developer",
      socialLinks: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
      },
      description1: "He is a great man to work Lorem ipsum dolor sit amet, consec tetur adipis icing elit. Simi lique, autem.",
      description2: "Tenetur quos facere magnam volupt ates quas esse Sedrep ell endus mole stiae tates quas esse Sed repell endus molesti aela uda ntium quis quam iusto minima thanks.",
      progress: [],
  },
  {
      image: "https://ico.themenio.com/images/azalea/team-d.jpg",
      name: "Louis Baker",
      position: "CEO & Lead Blockchain",
      socialLinks: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
      },
      description1: "He is a great man to work Lorem ipsum dolor sit amet, consec tetur adipis icing elit. Simi lique, autem.",
      description2: "Tenetur quos facere magnam volupt ates quas esse Sedrep ell endus mole stiae tates quas esse Sed repell endus molesti aela uda ntium quis quam iusto minima thanks.",
      progress: [],
  },
];
  return (
    <>
      <PageHeader title={page.contents.banner.title}>
        <span>
          {page.contents.banner.description}
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
      <div style={{ marginBottom: "100px" }}/> 
      <ContentTitleX1 title="WHAT AND WHY" mainTitle="ABOUT" />
      <BlockAbout aboutContent={aboutContent}/>
      <div style={{ marginBottom: "100px" }}/> 
      <ContentTitleX1 title="CORE ECOSYSTEMS" mainTitle="ECOSYSTEMS" />
      <BlockEcosystems/>
      <div style={{ marginBottom: "100px" }}/> 
      <ContentTitleX1 title="ICOX PRODUCTS" mainTitle="PLATFORM" />
      <BlockPlatform/>
      <div style={{ marginBottom: "100px" }}/>
      <ContentTitleX1 title="MVP APPS" mainTitle="MVP">Our project is based on an existing cryptocurrency exchange.</ContentTitleX1>
      <BlockMVP items={mvpItems} />
      <div style={{ marginBottom: "100px" }}/> 
      <ContentTitleX1 title="TOKEN DETAILS" mainTitle="TOKENS">Breakdown of our Token Recipients.</ContentTitleX1>
      <section className="container">
        {/* TOKENS */}
        <BlockTokens
                    chartData={chartData}
                    tokenInfo={tokenInfo}
                    canvasId="token-distribution"
                    color="light"
                    style="custom-style"
                    dark={false}
                />
      </section>
      <div style={{ marginBottom: "100px" }}/>
      <ContentTitleX1 title="TIMELINE" mainTitle="ROADMAP">ICO Crypto is developing a global data-driven platform for the world. Powered by blockchain and smart contracts.</ContentTitleX1>
      <section className="container">
        {/* ROADMAP */}
        <BlockRoadMap roadmapList={page.contents.roadmap} /> 
      </section>
      <div style={{ marginBottom: "100px" }}/> 
      <ContentTitleX1 title="CORE TEAM" mainTitle="OUR TEAM" />
      <section className="container">
        {/* OUR TEAM */}
        <BlockOurTeam members={members} />
      </section>
      <div style={{ marginBottom: "100px" }}/> 
      <ContentTitleX1 title="ADVISORS" mainTitle="BOARD MEMBER">Our advisors and board members are great part of our team.</ContentTitleX1> 
      <BlockBoardMember members={membersData}/>
      <div style={{ marginBottom: "100px" }}/> 
      <div className="nk-block block-partners" style={{
        display: "flex", alignItems: "center", flexDirection: "column"
      }}>
        <CustomText heading="h4">OUR PARTNERS</CustomText>
        <BlockOurPartner partners={page.contents.partners}/>
      </div>
      <div style={{ marginBottom: "100px" }}/> 
      <ContentTitleX1 title="DOWNLOADS" mainTitle="DOCUMENTS">Download the whitepaper and learn about ICO Token, the unique ICO Crypto approach and the team/advisors.</ContentTitleX1> 
      <section className="container">
        {/* BOARD MEMBER */}
        <BlockDocument documents={documents} color="primary" style="custom-style" dark={true} />
      </section>
      <div style={{ marginBottom: "100px" }}/> 
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
      <div style={{ marginBottom: "100px" }}/> 
      <ContentTitleX1 title="UPDATE" mainTitle="FAQS">Below we’ve provided a bit of ICO, ICO Token, cryptocurrencies, and few others. If you have any other questions, please get in touch.</ContentTitleX1> 
      <section className="container">
        <BlockFAQ tabs={page.contents.faqTabs} variant="S2"/>
      </section>
      <div style={{ marginBottom: "100px" }}/> 
      <section className="container">
        <BlockContactUs contentList={page.contents.contact}/>
      </section>
      <div style={{ marginBottom: "100px" }}/> 
      <Footer /> 
    </>
  );
}
