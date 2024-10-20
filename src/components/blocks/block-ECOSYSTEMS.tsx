export const BlockEcosystems: React.FC = ({}) =>{
    return (
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
    )
}
