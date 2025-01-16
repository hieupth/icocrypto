import BlockBanner from "@/components/blocks/block-banner";
import { BlockContact } from "@/components/blocks/block-contact";
import BlockCoreTeam from "@/components/blocks/block-core-team";
import { BlockRoadMap } from "@/components/blocks/block-ROADMAP";
import { BlockTokens } from "@/components/blocks/block-TOKEN";
//fake data
import contact_data from "@/data/contact.json";
import { tokenData, tokenInfo } from "@/data/token_chart";
import { roadmapData } from "@/data/roadmap";
export default function Page() {

    return (
        <>
            <BlockBanner variant="S1" />
            <section className="section section-team bg-theme-dark tc-light pt-lg-8">
                <div className="container">
                    <div className="section-head text-center wide-auto">
                        <h2 className="title title-lg title-dark ">Core Team</h2>
                    </div>
                    <BlockCoreTeam />
                </div>
            </section>
            <section id="tokens" className="section pb-2  tc-light">
                <div className=" text-center wide-auto">
                    <h2 className="title title-dark ">Token</h2>
                </div>
                <div className="">
                    <BlockTokens chartData={tokenData} tokenInfo={tokenInfo} canvasId={"tokens"} />
                </div>
            </section>
            <section id="roadmap" className="section  pb-2 tc-light pt-lg-8 ">
                <div className="section-head text-center wide-auto">
                    <h2 className="title title-lg title-dark ">Roadmap</h2>
                </div>
                <div className="container">
                    <BlockRoadMap roadmapList={roadmapData} />
                </div>
            </section>
            <section id="contact" className="section bg-theme-dark pt-lg-4">
                <div className="container">
                    <BlockContact contactContent={contact_data} variant={"S1"} />
                </div>
            </section>
        </>
    );
}
