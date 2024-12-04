"use client";
import Image from "next/image";

interface featureBoxS1 {
  items: {
    icon: string;
    title: string;
    text: string;
  }[]
}

interface featureBoxS16{
  imageBackground: string,
  contents: {
    id: number,
    title: string,
    description: string 
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

export const FeatureBoxS16: React.FC<{FeatureBoxContent: featureBoxS16}> = ({FeatureBoxContent}) => {
  return (
    <div className="container container-xxl">
      <div className="nk-block has-bg-image">
          <div className="row text-center align-items-lg-start gutter-vr-40px">
              {FeatureBoxContent.contents.map(content =>(
                  <div className="col-lg-3 col-sm-6" key={content.id}>
                      <div
                          className={`feature feature-s6 feature-s6-${content.id} animated fadeInUp`}
                          data-animate="fadeInUp"
                          data-delay="0.6"
                          style={{ visibility: "visible", animationDelay: "0.6s" }}
                      >
                          <div className="feature-text">
                              <h5 className="title title-sm ttu">{content.title}</h5>
                              <p>{content.description}</p>
                          </div>
                      </div>
                  </div>
              ))}

          </div>

          <div
              className="bg-image bg-contain bg-bottom-center bg-ecosystems animated d-none d-sm-block overlay-fall bg-image-loaded fadeInUp"
              data-animate="fadeInUp"
              data-delay="0.2"
              style={{
                  backgroundImage: `url(${FeatureBoxContent.imageBackground})`,
                  visibility: "visible",
                  animationDelay: "0.2s",
              }}
          >
              <Image 
                  src= {FeatureBoxContent.imageBackground} 
                  fill={true} alt="image of globe"
              /> 
          </div>
      </div>
    </div>
  )
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

const featureCard_S16 = {
    title: "CORE ECOSYSTEMS",
    mainTitle: "ECOSYSTEMS",
    contents: [
        {
            id: 1,
            title: "ONE MARKETPLACE",
            description: "One International Marketplace that combines online store and services around the world. Buy any goods or services with our tokens."
        },
        {
            id: 2,
            title: "Transparency and Trust",
            description: "One International Marketplace that combines online store and services around the world. Buy any goods or services with our tokens."
        },
        {
            id: 3,
            title: "Blockchain Based Profiles",
            description: "One International Marketplace that combines online store and services around the world. Buy any goods or services with our tokens."
        },
        {
            id: 4,
            title: "PAYMENT FLEXIBILITY",
            description: "One International Marketplace that combines online store and services around the world. Buy any goods or services with our tokens."
        }
    ],
    imageBackground: "https://ico.themenio.com/images/globe-particle.png"
}

*/