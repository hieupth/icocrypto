"use client";

interface featureBoxS1 {
  items: {
    icon: string;
    title: string;
    text: string;
  }[]
}

export const FeatureBoxS1: React.FC<{FeatureBoxContent: featureBoxS1}> = ({FeatureBoxContent}) => {
    return (
      <div className="nk-block nk-block-features mgb-m30">
      <div className="row">
          {FeatureBoxContent.items.map((item,index)=>(
            <div className="col-lg-4" key={index}>
              <div className="feature animated" data-animate="fadeInUp" data-delay={`.${index}`} style={{ visibility: "visible", animationDelay: `.${index}s`}}>
                  <div className="feature-icon dot">
                      <em className={`icon ikon ${item.icon}`}></em>
                  </div>
                  <div className="feature-text">
                      <h5 className="title title-sm">{item.title}</h5>
                      <p>{item.text} </p>
                  </div>
              </div>
            </div>
           ))}
      </div>
      </div>
    );
}


/*  
const FeatureBox_S1 = {
  items: [
    {
      icon: "ikon-paricle-alt",
      title: "Create a secure decentralize",
      text: "Tempore, cum soluta nobis est eligendi optiocum que nihil maxime placeat facere possimus."
    },
    {
      icon: "ikon-donught",
      title: "Solving small business problems",
      text: "Placeat facere possimus, omnis voluptas assum enda est, omnis dolor repellendus.."
    },
    {
      icon: "ikon-document",
      title: "Personal data must be isolated",
      text: "Nam libero tempore, cum soluta nobis est optio cumque nihil impedit quo minus id quod."
    }
  ]
}

*/