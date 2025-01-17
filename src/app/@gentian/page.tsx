import { BlockContact } from "@/components/blocks/block-contact";
import BlockCoreTeam from "@/components/blocks/block-core-team";
import { BlockFAQ } from '@/components/blocks/block-FAQ'
import faqTabs from '@/data/faq-tabs.json'
import { BlockRoadMap } from "@/components/blocks/block-ROADMAP";
import { BlockTokens } from "@/components/blocks/block-TOKEN";
import contact_data from "@/data/contact.json";
import { tokenData, tokenInfo } from "@/data/token_chart";
import { roadmapData } from "@/data/roadmap";
import { Footer } from '@/components/blocks/block-footer'
import footerData from '@/data/footer-data.json'
import BannerSalvia from "@/components/blocks/block-banner-salvia";
import {leftPannel,rightPannel} from "@/data/banner";
export default function Page() {
    return (
        <>
            <BannerSalvia right_pannel={rightPannel} left_pannel={leftPannel}  />
            <section id="tokens" className="section pb-2 tc-light">
                <div className=" text-center wide-auto">
                    <h2 className="title title-dark ">Token</h2>
                </div>
                <div className="">
                    <BlockTokens chartData={tokenData} tokenInfo={tokenInfo} canvasId={"tokens"} />
                </div>
            </section>
            
            <section id="roadmap" className="section  pb-2 tc-light">
                <div className="section-head text-center wide-auto">
                    <h2 className="title title-lg title-dark ">Roadmap</h2>
                </div>
                <div className="container">
                    <BlockRoadMap roadmapList={roadmapData} />
                </div>
            </section>
            <section id="contact" className="section bg-theme-dark pb-2">
                <div className="container">
                    <div className="section-head text-center wide-auto">
                        <h2 className="title title-lg title-dark ">Contact</h2>
                    </div>
                    <BlockContact contactContent={contact_data} variant={"S1"} />
                </div>
            </section>
            <section id="team" className="section bg-theme-dark pb-2">
                <div className="container">
                    <div className="section-head text-center wide-auto">
                        <h2 className="title title-lg title-dark ">Core Team</h2>
                        <BlockCoreTeam />
                    </div>
                </div>
            </section>
            <section id="faqs" className="section bg-theme-dark">
                <div className="container">
                    <div className="section-head text-center wide-auto">
                        <h2 className="title title-lg title-dark ">FAQ</h2>
                    </div>
                    <BlockFAQ tabs={faqTabs.tabs} variant="S1" />
                </div>
            </section>
            <section className="section bg-theme-dark pt-4 border-top border-white">
                <div className="container">
                    <Footer FooterContent={footerData} variant="S1" />
                </div>
            </section>
        </>
    );
}
