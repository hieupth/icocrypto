import BlockBanner from "@/components/blocks/block-banner";
import BlockCoreTeam from "@/components/blocks/block-core-team";
import { Footer } from '@/components/blocks/block-footer'
import footerData from '@/data/footer-data.json'
import { BlockFAQ } from '@/components/blocks/block-FAQ'
import faqTabs from '@/data/faq-tabs.json'

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
                    <BlockFAQ tabs={faqTabs.tabs} variant="S1" />
                </div>
            </section>
        </>
    );
}
