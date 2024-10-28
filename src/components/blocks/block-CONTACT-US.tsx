import { useState } from "react";
import Image from "next/image"

interface ContactDetail {
    icon: string;
    text: string;
}

interface ContactLink {
    icon: string;
    url: string;
}

interface ContactDescription {
    text: string;
    backgroundImage: string; 
    altText: string; 
}

interface ContactInfo {
    mainDetails?: ContactDetail[];
    socialLinks?: ContactLink[];
    description?: ContactDescription;
}
  
interface ContactUsBlockProps {
    contentList: ContactInfo[];
}

export const BlockContactUs: React.FC<ContactUsBlockProps> = ({contentList}) =>{
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      };
    return (
        <div className="nk-block nk-block-about">
        <div className="row justify-content-between align-items-center gutter-vr-50px">
        <div className="col-lg-6">
            <div className="nk-block-text">
                <div className="nk-block-text-head">
                <h2 className="title title-lg ttu animated" data-animate="fadeInUp" data-delay="0.7" style={{ visibility: "visible", animationDelay: "0.7s" }}>Contact Us</h2>
                <p className="animated" data-animate="fadeInUp" data-delay="0.8" style={{ visibility: "visible", animationDelay: "0.8s" }}>
                    {contentList[2]?.description?.text}
                </p>
                </div>
                <form className="nk-form-submit" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-6">
                    <div className="field-item animated" data-animate="fadeInUp" data-delay="0.8" style={{ visibility: "visible", animationDelay: "0.8s" }}>
                        <label className="field-label ttu">Your Name</label>
                        <div className="field-wrap">
                        <input
                            name="contact-name"
                            placeholder="Introduce yourself"
                            type="text"
                            className="input-bordered required"
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                        />
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="field-item animated" data-animate="fadeInUp" data-delay="0.9" style={{ visibility: "visible", animationDelay: "0.9s" }}>
                        <label className="field-label ttu">Your Email</label>
                        <div className="field-wrap">
                        <input
                            name="contact-email"
                            placeholder="Who do we reply to"
                            type="email"
                            className="input-bordered required email"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                        />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="field-item animated" data-animate="fadeInUp" data-delay="1.0" style={{ visibility: "visible", animationDelay: "1.0s" }}>
                    <label className="field-label ttu">Your Message</label>
                    <div className="field-wrap">
                    <textarea
                        name="contact-message"
                        placeholder="Leave your question or comment here"
                        className="input-bordered input-textarea required"
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                    ></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5 text-end animated" data-animate="fadeInUp" data-delay="1.1" style={{ visibility: "visible", animationDelay: "1.1s" }}>
                        <button type="submit" className="btn btn-round btn-primary">SEND</button>
                    </div>
                    <div className="col-sm-7 order-sm-first">
                        <div className="form-results"></div>
                    </div>
                </div>
                </form>
            </div>
            </div>
            <div className="col-lg-5 text-center order-lg-first">
                <div className="nk-block-contact nk-block-contact-s1 animated" data-animate="fadeInUp" data-delay="0.1" style={{ visibility: "visible", animationDelay: "0.1s" }}>
                    <ul className="contact-list">
                        {contentList[0].mainDetails?.map((main,index)=>(
                          <li className="animated" data-animate="fadeInUp" data-delay="0.2" style={{ visibility: "visible", animationDelay: "0.2s" }} key={index}>
                            <em className={`contact-icon ${main.icon}`}></em>
                            <div className="contact-text">
                                <span>{main.text}</span>
                            </div>
                         </li>
                         ))}
                    </ul>
                    <div className="nk-circle-animation nk-df-center white small"></div>{/* <!-- .circle-animation --> */}
                    <Image
                        src={contentList[2]?.description?.backgroundImage ?? ''} 
                        alt={contentList[2]?.description?.altText ?? ''}
                        fill={true} style={{zIndex:0}}
                    />
                </div>
                <ul className="social-links social-links-s2 justify-content-center animated" data-animate="fadeInUp" data-delay="0.6" style={{ visibility: "visible", animationDelay: "0.6s" }}>
                    {contentList[1].socialLinks?.map((media,index)=>(
                        <li key={index}><a href={media.url}><em className={media.icon}></em></a></li>
                    ))}     
                </ul>
            </div>
        </div>
    </div>  
    )
}
