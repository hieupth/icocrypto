import React, { useState } from 'react';
import Image from 'next/image';
import {
    AlignJustify,
    FileText,
    Lightbulb
} from 'lucide-react';

const BlockHeader: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="nk-header page-header is-transparent is-sticky is-shrink" id="header">
            <div className="header-main">
                <div className="header-container container">
                    <div className="header-wrap">
                        <div
                            className="header-logo logo animated"
                            data-animate="fadeInDown"
                            data-delay=".6"
                        >
                            <a href="./" className="logo-link">
                                <Image
                                    className="logo-dark"
                                    src="/images/logo.png"
                                    alt="logo"
                                    width={150}
                                    height={50}
                                />
                                <Image
                                    className="logo-light"
                                    src="/images/logo-full-white.png"
                                    alt="logo"
                                    width={150}
                                    height={50}
                                />
                            </a>
                        </div>

                        <div className="header-nav-toggle">
                            <button
                                onClick={toggleMenu}
                                className="navbar-toggle"
                            >
                                <div className="toggle-line">
                                    <AlignJustify size={24} />
                                </div>
                            </button>
                        </div>

                        <div
                            className={`header-navbar animated ${isMenuOpen ? 'is-active' : ''}`}
                            data-animate="fadeInDown"
                            data-delay=".75"
                        >
                            <nav className="header-menu" id="header-menu">
                                <ul className="menu">
                                    <li className="menu-item has-sub">
                                        <a
                                            className="menu-link nav-link menu-toggle"
                                            href="#"
                                        >
                                            Home
                                        </a>
                                        <div className="menu-sub menu-drop menu-mega menu-mega-3clmn">
                                        </div>
                                    </li>

                                    <li className="menu-item has-sub">
                                        <a
                                            className="menu-link nav-link menu-toggle"
                                            href="#"
                                        >
                                            Pages
                                        </a>
                                        <div className="menu-sub menu-drop menu-mega menu-mega-2clmn">
                                        </div>
                                    </li>
                                </ul>

                                <ul className="menu-btns">
                                    <li>
                                        <a
                                            href="page-login.html"
                                            className="btn btn-md btn-auto btn-grad no-change"
                                        >
                                            <span>Login</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-banner bg-theme-grad">
                <div className="nk-banner">
                    <div className="banner banner-fs banner-single banner-gap-b2">
                        <div className="banner-wrap">
                            <div className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-5 order-lg-last">
                                        <div
                                            className="banner-gfx banner-gfx-re-s1 animated"
                                            data-animate="fadeInUp"
                                            data-delay=".9"
                                        >
                                            <Image
                                                src="/images/header/gfx-a.png"
                                                alt="header"
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-7 col-sm-10 text-center text-lg-start">
                                        <div className="banner-caption cpn tc-light">
                                            <div className="cpn-head">
                                                <h1
                                                    className="title animated"
                                                    data-animate="fadeInUp"
                                                    data-delay="1"
                                                >
                                                    World First Ecosystem that <br className="d-none d-md-block" />
                                                    Scaling Decentralized Applications
                                                </h1>
                                            </div>

                                            <div className="cpn-text">
                                                <p
                                                    className="animated"
                                                    data-animate="fadeInUp"
                                                    data-delay="1.1"
                                                >
                                                    Our revolutionary blockchain service is designed to create your own blockchain ecosystem, secure digital assets and access to funding all over the world.
                                                </p>
                                            </div>

                                            <div className="cpn-action">
                                                <div
                                                    className="cpn-btns animated"
                                                    data-animate="fadeInUp"
                                                    data-delay="1.2"
                                                >
                                                    <a className="btn btn-grad" href="#">
                                                        Register &amp; Buy Token Now
                                                    </a>
                                                </div>

                                                <ul
                                                    className="cpn-links animated"
                                                    data-animate="fadeInUp"
                                                    data-delay="1.3"
                                                >
                                                    <li>
                                                        <a className="link" href="#">
                                                            <Lightbulb className="link-icon" />
                                                            <span>How to Buy</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="link" href="#">
                                                            <FileText className="link-icon" />
                                                            <span>White Paper</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nk-ovm mask-a shape-a"></div>

                <div
                    id="particles-bg"
                    className="particles-container particles-bg"
                ></div>
            </div>
        </header>
    );
};

export default BlockHeader;
