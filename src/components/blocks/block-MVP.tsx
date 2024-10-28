import Image from "next/image";

const BlockMVP = () => {
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
                <Image
                  className="shadow rounded"
                  src="https://ico.themenio.com/images/app-screens/sc-medium-b.png"
                  alt="image sc-medium-b"
                  width={500}
                  height={300}
                />
                <Image
                  className="nk-block-img-plx plx-screen shadow rounded"
                  src="https://ico.themenio.com/images/app-screens/sc-small-d.jpg"
                  alt="image sc-small-d"
                  width={500}
                  height={300}
                />
                <Image
                  className="nk-block-img-plx plx-circle plx-circle-s1"
                  src="https://ico.themenio.com/images/gfx/circle-a.png"
                  alt="image circle-a"
                  width={100}
                  height={100}
                />
                <Image
                  className="nk-block-img-plx plx-polygon plx-polygon-s1"
                  src="https://ico.themenio.com/images/gfx/polygon-a.png"
                  alt="image polygon-a"
                  width={100}
                  height={100}
                />
                <Image
                  className="nk-block-img-plx plx-triangle plx-triangle-s1"
                  src="https://ico.themenio.com/images/gfx/triangle-a.png"
                  alt="triangle-a"
                  width={100}
                  height={100}
                />
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
