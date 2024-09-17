import Countdown from "@/components/Countdown";
import React from 'react';

const Banner: React.FC = () => {
    return (

        <div className="header-banner bg-theme-grad">
            <div className="nk-banner">
                <div className="banner banner-page">
                    <div className="banner-wrap">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-6 col-lg-9">
                                    <div className="banner-caption cpn tc-light text-center">
                                        <div className="cpn-head">
                                            <h2 className="title ttu">Countdown</h2>
                                            <p>We designed a brand-new cool design and lots of features, the latest version of the template supports advanced block base scenarios, and more.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nk-ovm shape-a-sm"></div>
        </div>
    );
}
export default function Element_Countdown() {
    return (
        <>
            <main className="nk-pages">
                <section className="section ">
                    <div className="container">
                        <div className="nk-block">
                            <div className="row">
                                <div className="col-lg-6 mgb-l">
                                    <div className="countdown" data-date="2023/04/27"></div>
                                </div>
                                <div className="col-lg-6 mgb-l">
                                    <div className="countdown countdown-s2" data-date="2023/04/27"></div>
                                </div>
                                <div className="col-lg-6 mgb-l">
                                    <div className="countdown countdown-s3" data-date="2023/04/27" data-min-text="Minutes" data-sec-text="Seconds"></div>
                                </div>
                                <Countdown title="" percent="" caption="" subtitle="" endDate="10/01/2024"></Countdown>

                                <div className="col-lg-6 text-center">
                                    <h4 className="title title-sm">Small Countdown</h4>
                                    <div className="countdown justify-content-center countdown-small countdown-s3" data-date="2023/04/27" data-day-text="D" data-hour-text="H" data-min-text="M" data-sec-text="S"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}