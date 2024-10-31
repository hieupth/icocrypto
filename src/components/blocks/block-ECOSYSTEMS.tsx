import Image from "next/image"

interface content{
    id: number,
    title: string,
    description: string 
}

interface EcosystemsProps{
    contents: content[]
    imageBackground: string,
}

export const BlockEcosystems: React.FC<EcosystemsProps> = ({
    contents,
    imageBackground
}) =>{
    return (
        <div className="container container-xxl">
            <div className="nk-block has-bg-image">
                <div className="row text-center align-items-lg-start gutter-vr-40px">
                    {contents.map(content =>(
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
                        backgroundImage: `url(${imageBackground})`,
                        visibility: "visible",
                        animationDelay: "0.2s",
                    }}
                >
                    <Image 
                         src= {imageBackground} 
                         fill={true} alt="image of globe"
                    /> 
                </div>
            </div>
        </div>
    )
}
