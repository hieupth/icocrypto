import Image from "next/image";

interface MVPItem {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string; 
}

interface BlockMVPProps {
    items: MVPItem[];
}

export const BlockMVP: React.FC<BlockMVPProps> = ({ items }) => {
  return (
    <section className="container">
      {/* MVP */}
      <div className="container container-xxl">
        <div className="nk-block">
          <div className="row align-items-center justify-content-center justify-content-xl-between gutter-vr-30px">
            <div className="col-xxl-6 col-xl-6 col-lg-8">
              <div
                className="nk-block-img nk-block-plx animated"
                data-animate="fadeInUp"
                data-delay="0.3"
                style={{ visibility: "visible", animationDelay: "0.3s" }}
              >
                {items.map((image, index) => (
                  <Image
                    key={index}
                    className={image.className}
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                  />
                ))}
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-8">
              <div className="nk-block-text">
                {[
                  "Powered by DAP, NEX lets you easily trade crypto-currencies & other digital.",
                  "User have full access to trading consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "Our multi-cryptocurrency exchange will uis aute irure dolor in reprehenderit in voluptate velit uuntur magni dolores esse cillum.",
                  "Traders able to trade with voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
                  "Users will be able to take quis nostrum exercitationem ullam corporis susci pitlabo riosam, nisi ut aliquid ex ea commodi consequatur."
                ].map((text, i) => (
                  <div
                    className="feature feature-inline animated"
                    data-animate="fadeInUp"
                    data-delay={`${0.4 + i * 0.1}`}
                    style={{ visibility: "visible", animationDelay: "0.3s" }}
                    key={i}
                  >
                    <div className="feature-icon feature-icon-md">
                      <em className="icon icon-xs icon-circle fas fa-check"></em>
                    </div>
                    <div className="feature-text">
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
                <div
                  className="text-center text-sm-start animated"
                  data-animate="fadeInUp"
                  data-delay="0.9"
                  style={{ visibility: "visible", animationDelay: "0.3s" }}
                >
                  <a href="#" className="btn btn-round btn-primary">
                    Try Demo Free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockMVP;
