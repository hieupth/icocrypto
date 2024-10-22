import Image from "next/image";

const BlockPlatform = () => {
  const tabs = [
    {
      id: "tab-1-1",
      title: "A Open Platform for our Participators",
      description: "Each participator can choose the trader and to sign a contract.",
      features: [
        { icon: "ikon-bulb", text: "User have full access to trading consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { icon: "ikon-paricle", text: "Our multi-cryptocurrency exchange will uis aute irure dolor in reprehenderit in voluptate velit uuntur magni dolores esse cillum." },
        { icon: "ikon-bulb-2", text: "Users will be able to take quis nostrum exercitationem ullam corporis susci pitlabo riosam, nisi ut aliquid ex ea commodie." },
        { icon: "ikon-document-2", text: "Sign a smart-contract to allow our trader’s access for live trading corporis cryptocurrency susci pitlabo riosam, nisi ut." }
      ],
      image: "https://ico.themenio.com/images/app-screens/sc-medium-a.png"
    },
    {
      id: "tab-1-2",
      title: "For Traders",
      description: "Some description here for traders...",
      features: [], // Add features for the traders tab here
      image: "https://ico.themenio.com/images/app-screens/sc-medium-b.png" // Replace with appropriate image
    }
  ];

  return (
    <div className="container container-xxl">
      <div className="nk-block">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <ul className="nav tab-nav tab-nav-btn-bdr-s2 justify-content-center justify-content-sm-between pb-4 pb-sm-5">
              <li><a className="active" data-bs-toggle="tab" href="#tab-1-1">FOR Participators</a></li>
              <li className="tab-nav-sap d-none d-sm-block"></li>
              <li><a data-bs-toggle="tab" href="#tab-1-2">For Traders</a></li>
            </ul>
          </div>
        </div>
        <div className="tab-content">
          {tabs.map((tab, index) => (
            <div className={`tab-pane fade${index === 0 ? ' show active' : ''}`} id={tab.id} key={tab.id}>
              <div className="row align-items-center justify-content-between gutter-vr-40px">
                <div className="col-lg-6 order-lg-last">
                  <div className="nk-block-img nk-block-ca">
                    <div className="nk-circle-animation nk-df-center fast"></div>
                    <div
                      className="shadow rounded"
                      style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", height: "auto" }}
                    >
                      <Image
                        src={tab.image}
                        alt={tab.id}
                        width={450}
                        height={450}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="nk-block-text mgb-m30">
                    <h2 className="title title-md">{tab.title}</h2>
                    <p>{tab.description}</p>
                    {tab.features.map((feature, i) => (
                      <div className="feature feature-inline feature-middle" key={i}>
                        <div className="feature-icon feature-icon-md">
                          <em className={`icon icon-md icon-grd ikon ${feature.icon}`}></em>
                        </div>
                        <div className="feature-text">
                          <p>{feature.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockPlatform;
