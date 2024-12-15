import React from "react";
import { ColorStyle } from "@/utils/colorclass";
import Image from "next/image";
import CustomButton from "@/components/elements/element-button";
import page from "@/configs/page.json"; 
import {  SizeStylable } from "@/utils/sizeclass";



interface BannerLink {
    text: string;
    href: string;
    iconClass: string;
}

interface Button {
    text: string;
    variant: string;
    borderRadius: boolean;
    outline: boolean;
}

interface BannerData {
    imageSrc?: string;
    imageAlt?: string;
    title: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
    links?: BannerLink[];
    buttons?: Button[];  
}

interface PageData {
    theme: string;
    contents: {
        banners: {
            S1: BannerData;
            S2: BannerData;
        };
    };
}

interface BlockBannerProps {
    variant: "S1" | "S2";
    dark?: boolean;
    color?: ColorStyle;
}

const pageTyped = page as PageData;

const BlockBanner: React.FC<BlockBannerProps> = ({ variant, dark = false, color }) => {
    const darkClass = dark ? "dark" : "";
    const colorClass = color ? `color-${color}` : "";

    const bannerData: BannerData = pageTyped.contents.banners[variant];

    const renderBannerContent = (banner: BannerData) => (
        <>
            <div className="cpn-head">
                <h1 className={`title ${variant === "S2" ? "" : "text-center"}`}>{banner.title}</h1>
            </div>
            <div className={`cpn-text ${variant === "S2" ? "" : "text-center"}`}>
                <p>{banner.description}</p>
            </div>
            <div className="cpn-action">
                {banner.buttonText && banner.buttonLink && (
                    <CustomButton variant={ColorStyle.Gradient}>
                        {banner.buttonText}
                    </CustomButton>
                )}
                {banner.buttons && (
                    <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "5%" }}>
                        {banner.buttons.map((button, index) => (
                            <CustomButton
                                key={index}
                                variant={button.variant === "primary" ? ColorStyle.Primary : ColorStyle.Secondary}
                                borderRadius={button.borderRadius ? SizeStylable.BorderRadius : undefined}
                                outline={button.outline ? ColorStyle.Outline : undefined}
                            >
                                {button.text}
                            </CustomButton>
                        ))}
                    </div>
                )}
                {banner.links && (
                    <ul className="cpn-links" style={{ marginTop: "10px" }}>
                        {banner.links.map((link, index) => (
                            <li key={index}>
                                <a className="link" href={link.href}>
                                    <em className={`link-icon ${link.iconClass}`}></em>
                                    <span>{link.text}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );

    return (
        <section className={`block-banner ${darkClass} ${colorClass}`}>
            <div className={`banner ${variant}`}>
                <div className="banner-wrap">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            {variant === "S2" && bannerData.imageSrc && (
                                <div className="col-lg-5 order-lg-last">
                                    <Image
                                        src={bannerData.imageSrc}
                                        alt={bannerData.imageAlt || "Banner image"}
                                        width={1000}
                                        height={638}
                                    />
                                </div>
                            )}
                            <div
                                className={`col-lg-${variant === "S2" ? "7" : "12"} text-center text-lg-start`}
                                style={{ marginTop: '5rem' }}
                            >
                                <div 
                                    className={`banner-caption cpn tc-light ${variant === "S1" ? "d-flex flex-column justify-content-center align-items-center" : ""}`}
                                    style={variant === "S1" ? { minHeight: '400px' } : {}}
                                >
                                    {renderBannerContent(bannerData)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlockBanner;
