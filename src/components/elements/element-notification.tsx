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
                                            <h2 className="title ttu">Notification</h2>
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
export default function Notification() {
    return (
        <>
            <Banner />
            <main className="nk-pages">
                <section className="section ">
                    <div className="container">
                        <h3 className="title title-md">Notification Position</h3>
                        <div className="row gutter-vr-20px">
                            <div className="col-lg-3">
                                <a href="#" className="btn btn-md btn-primary toastr-top-center">Top Center</a>
                            </div>
                            <div className="col-lg-3">
                                <a href="#" className="btn btn-md btn-primary toastr-top-right">Top Right</a>
                            </div>
                            <div className="col-lg-3">
                                <a href="#" className="btn btn-md btn-primary toastr-top-left">Top Left</a>
                            </div>
                            <div className="col-lg-3">
                                <a href="#" className="btn btn-md btn-primary toastr-top-full">Top Full</a>
                            </div>
                            <div className="col-lg-3">
                                <a href="#" className="btn btn-md btn-primary toastr-bottom-center">Bottom Center</a>
                            </div>
                            <div className="col-lg-3">
                                <a href="#" className="btn btn-md btn-primary toastr-bottom-right">Bottom Right</a>
                            </div>
                            <div className="col-lg-3">
                                <a href="#" className="btn btn-md btn-primary toastr-bottom-left">Bottom Left</a>
                            </div>
                            <div className="col-lg-3">
                                <a href="#" className="btn btn-md btn-primary toastr-bottom-full">Bottom Full</a>
                            </div>
                        </div>
                        <div className="gap-4x"></div>
                        <h3 className="title title-md">Notification State</h3>
                        <div className="row gutter-vr-20px">
                            <div className="col-lg-3">
                                <a href="#" className="btn btn-md btn-info toastr-info">Toastr Info</a>
                            </div>
                            <div className="col-lg-3">
                                <a href="#" className="btn btn-md btn-success toastr-success">Toastr Success</a>
                            </div>
                            <div className="col-lg-3">
                                <a href="#" className="btn btn-md btn-warning toastr-warning">Toastr Warning</a>
                            </div>
                            <div className="col-lg-3">
                                <a href="#" className="btn btn-md btn-danger toastr-error">Toastr Error</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>

    );
}
