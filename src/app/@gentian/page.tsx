import BlockBanner from "@/components/blocks/block-banner";
import BlockCoreTeam from "@/components/blocks/block-core-team";

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
        </>
    );
}
