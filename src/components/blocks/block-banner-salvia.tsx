import React from "react";
interface Community {
    name: string | null;
    icon: "fa-paper-plane" | "fa-facebook-f" | "fa-twitter" | "fa-youtube" | "fa-github" | "fa-bitcoin" | "fa-medium-m" | string;
    link: string;
}

interface LeftPannel {
    title: string;
    decs: string;
    l_button_text: string;
    r_button_text: string;
    community: Community[]
}

interface TokenData {
    left_value: string;
    right_token_icon: string;
    right_tokenname: string;
    token_name: string;
    token_avalabel: number;

}
interface RightPannel {
    title: string;
    date_countdown: string;
    token: TokenData | null;
    button_link: string ;
    percent_off: number | null;
    minimum: string | null;

}
interface BlockBannerSalviaProps {
    right_pannel: RightPannel;
    left_pannel: LeftPannel;
}

const BannerSalvia: React.FC<BlockBannerSalviaProps> = ({ left_pannel, right_pannel }) => {
    return (
        <div className="tab-pane" id="banner-mask-lg03">
            <div className="header-banner bg-theme-grad">
                <div className="nk-banner">
                    <div className="banner banner-fs banner-single banner-s1 banner-s1-overlay">
                        <div className="banner-wrap">
                            <div className="container">
                                <div className="row align-items-center justify-content-center justify-content-lg-between gutter-vr-60px">
                                    {/* Left Section */}
                                    <div className="col-lg-6 col-xl-5 col-md-8 col-sm-9 order-last">
                                        <div className="token-status token-status-s3 round bg-theme-dark-alt tc-light">
                                            <h4 className="title-md title-thin">{right_pannel.title}</h4>
                                            <div className="countdown-s2 countdown" data-date={right_pannel.date_countdown}></div>
                                            {right_pannel.token ?
                                                <div className="token-info token-info-s1">
                                                    <div className="token-info-item token-info-item-s1">
                                                        <div className="token-info-item-list">
                                                            <span>Token Price:</span>
                                                            <h4>{right_pannel.token.left_value}</h4>
                                                        </div>
                                                        <div className="token-info-item-list">
                                                            <span>We Accept:</span>
                                                            <h4>
                                                                <em className={"fab " + right_pannel.token.right_token_icon}></em> {right_pannel.token?.right_tokenname ?? ''}
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="token-info-item token-info-item-s1">
                                                        <span>
                                                            Tokens Available
                                                            <br className="d-none d-md-block" /> on Pre-Sale:
                                                        </span>
                                                        <h4>{right_pannel.token.token_avalabel} {right_pannel.token?.token_name ?? ''}</h4>
                                                    </div>
                                                </div>
                                                :
                                                <></>}

                                            <div className="token-action token-action-s2 flex-wrap flex-sm-nowrap">
                                                <a href={right_pannel.button_link} className="btn btn-md btn-secondary">
                                                    Buy Tokens with {right_pannel.percent_off}% off
                                                </a>
                                                <div className="token-min-s2">
                                                    <span>Minimum Purchase:</span>
                                                    <span>{right_pannel.minimum} {right_pannel.token?.token_name ?? ''}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Right Section */}
                                    <div className="col-lg-6 col-xl-6 text-center text-lg-start">
                                        <div className="banner-caption tc-light">
                                            <div className="cpn-head">
                                                <h1 className="title title-thin title-xl-2">
                                                    {left_pannel.title}
                                                </h1>
                                            </div>
                                            <div className="cpn-text cpn-text-s2">
                                                <p className="lead-s2 lead-light">
                                                    {left_pannel.decs}
                                                </p>
                                            </div>
                                            <div className="cpn-btns">
                                                <ul className="btn-grp">
                                                    <li>
                                                        <a className="btn btn-md btn-primary btn-outline" href="#">
                                                            {left_pannel.l_button_text}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="btn btn-md btn-primary btn-outline" href="#">
                                                            {left_pannel.r_button_text}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            {
                                                left_pannel.community ? (
                                                    <div className="cpn-social">
                                                        <h4 className="title-xs">JOIN OUR COMMUNITY</h4>
                                                        <ul className="social">
                                                            {left_pannel.community.map((item, index) => (
                                                                <li key={index}>
                                                                    <a href={item.link}>
                                                                        <em className={"social-icon " + item.icon}></em>
                                                                        {item.name ? <span>{item.name}</span> : null}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                                
                                                        </ul>
                                                    </div>
                                                ) : null
                                            }


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nk-ovm mask-a shape-q"></div>
            </div>
        </div>
    );
};

export default BannerSalvia;
