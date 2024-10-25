import React from "react";

interface FooterProps {
  privacyPolicyLink?: string; 
  termsOfSalesLink?: string;   
  copyrightText?: string;       
  handcraftedBy?: string;       
  handcraftedLink?: string;     
}

const Footer = ({
  privacyPolicyLink = "#", 
  termsOfSalesLink = "#", 
  copyrightText = "Copyright © 2022 ICO.", 
  handcraftedBy = "iO", 
  handcraftedLink = "#"
}: FooterProps) => {
  return (
    <>
      <footer className="nk-footer-bar section section-s tc-light">
        <div className="container container-xxl">
          <div className="row gutter-vr-10px">
            <div className="col-lg-6 order-lg-last text-lg-end">
              <ul className="footer-nav">
                <li><a href={privacyPolicyLink}>Privacy Policy</a></li>
                <li><a href={termsOfSalesLink}>Terms of sales</a></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="copyright-text copyright-text-s2">
                {copyrightText} Handcrafted by <a href={handcraftedLink}>{handcraftedBy}</a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
