"use client";

import PageHeader from "@/components/blocks/page-header";
import CustomButton from "@/components/elements/element-button";
import Countdown from "@/components/elements/element-countdown";
import ProgressBar from "@/components/elements/element-progess-bar";
import { ColorStyle } from "@/utils/colorclass";
import { SizeStylable, StyledSize } from "@/utils/sizeclass";
import styles from "@/app/page.module.css";
export default function Home() {
  return (
    <>
      <PageHeader title="WORLD FIRST DECENTRALIZED MARKETPLACE WITH BLOCKCHAIN INFRASTRUCTURE">
        <span>
          The first decentralized Marketplace which makes simplifies and
          standarizes data with blockchain technology. We provides
          user-friendly, efficient and secure crypto solutions and utilizing
          blockchain technology.
        </span>
        <div style={{
          justifyContent: "center",
          display: "flex",
          gap: "20px",
          marginTop: "5%",
        }}>
          <CustomButton
            text="Private Sale"
            variant={ColorStyle.Primary}
            borderRadius={SizeStylable.BorderRadius}
          />
          <CustomButton
            text="Private Token"
            outline={ColorStyle.Outline}
            variant={ColorStyle.Primary}
            borderRadius={SizeStylable.BorderRadius}
          />
        </div>
      </PageHeader>
      <section style={{
        padding: "2% 10%"
      }}>
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
            subtitle="test"
            endDate="2024/10/01"
          />
        </div>
      </div>
      <div className="row" style={{
        marginTop: "5%"
      }}>
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
            style={{visibility: "visible", animationDelay: "1s",}}
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
    </>
  );
}
