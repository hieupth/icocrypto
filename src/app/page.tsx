import {
    AccordionItem,
    AccordionS1,
    AccordionS2,
    AccordionS3,
    AccordionS4,
} from "@/components/elements/element-accordion";
import {
    AlertPrimary,
    AlertSecondary,
    AlertSuccess,
    AlertDanger,
    AlertWarning,
    AlertInfo,
    AlertLink,
    AlertDismissible,
    AlertPrimaryAlternet,
    AlertSecondaryAlternet,
    AlertSuccessAlternet,
    AlertDangerAlternet,
    AlertWarningAlternet,
    AlertInfoAlternet,
    AlertDismissibleAlternet,
} from "@/components/elements/element-alert";
import {
    ContentHead,
    ContentTextBlock,
    ContentTitleMd,
    ContentListDot,
    ContentTitle,
    ContentTitleHead,
    ContentTitleXs,
    ContentListCheck,
    ContentLead,
    ContentCenter,
    ContentTextBlockHeadS8,
    ContentTextBlockHeadS9,
    ContentTextBlockHeadS7,
    ContentTextBlockHeadS6,
    ContentTextBlockHeadS5,
    ContentTextBlockHeadS4,
    ContentTextBlockHeadS2,
    ContentTextBlockHeadS3,
    ContentTitleLight,
    ContentTitleXsLight,
    ContentTitleS2,
    ContentTitleS3,
    ContentTitleX1,
    ContentNkBlock,
    ContentNkBlockE,
} from "@/components/elements/element-content";
import { Grid } from "@/components/elements/element-grid";
import {
    TabButton,
    TabCenter,
    TabItem,
    TabLine,
    TabRow,
} from "@/components/elements/element-tab";

export default function Home() {
    return (
        <>
            {/* Default Alert Style */}

            <AlertPrimary>AlertPrimary</AlertPrimary>
            <AlertSecondary>AlertSecondary</AlertSecondary>
            <AlertSuccess>AlertSecondary</AlertSuccess>
            <AlertDanger>AlertDanger</AlertDanger>
            <AlertWarning>AlertWarning</AlertWarning>
            <AlertInfo>AlertInfo</AlertInfo>
            <AlertInfo>
                A simple primary alert with
                <AlertLink link="#">an example link</AlertLink> Give it a click
                if you like.
            </AlertInfo>
            <AlertDismissible>
                A simple danger alert with dismissible option check it out!
            </AlertDismissible>

            {/* Alternet Alert Style */}

            <AlertPrimaryAlternet>AlertPrimary</AlertPrimaryAlternet>
            <AlertSecondaryAlternet>AlertSecondary</AlertSecondaryAlternet>
            <AlertSuccessAlternet>AlertSecondary</AlertSuccessAlternet>
            <AlertDangerAlternet>AlertDanger</AlertDangerAlternet>
            <AlertWarningAlternet>AlertWarning</AlertWarningAlternet>
            <AlertInfoAlternet>AlertInfo</AlertInfoAlternet>
            <AlertInfoAlternet>
                A simple primary alert with
                <AlertLink link="#">an example link</AlertLink> Give it a click
                if you like.
            </AlertInfoAlternet>
            <AlertDismissibleAlternet>
                A simple danger alert with dismissible option check it out!
            </AlertDismissibleAlternet>

            {/* Content */}

            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <ContentHead>
                        <ContentTitleHead>
                            What CryptoWallets can do for you?
                        </ContentTitleHead>
                        <p>
                            CryptoWallet is very simple, secure and with lots
                            cool features. It provides an easy way to buy and
                            send cryptocurrencies all over the world.
                        </p>
                    </ContentHead>
                    <ContentNkBlock></ContentNkBlock>
                    <ContentTextBlock>
                        <ContentTitle>About ICO Crypto</ContentTitle>
                        <p>
                            <strong>
                                ICO Crypto is #1 best selling ICO Landing
                            </strong>
                            page, which helps you lunch and introduce your ICO
                            Website. We designed it very carefully to make it
                            more attractive, useful and fit any kind of
                            ICO/Crypto website.
                        </p>
                        <p>
                            ICO Crypto sectetur adipiscing elit, sed do eiusmod
                            tempor incididunt uteop labore et dolore magna
                            aliqua. Ut enim ad minim veniam, nostrud exercit
                            ullamco laboris nisi commodo consequat.
                        </p>
                        <p>
                            We create cryptocurrency dipiscing elit, sed do
                            eiusmod tempor incididunt uteop labore et dolore
                            magna aliqua. Ut enim ad minim veniam, nostrud
                            exercit ullamco laboris nisi commodo consequat.
                        </p>
                    </ContentTextBlock>
                    <ContentNkBlock></ContentNkBlock>

                    <ContentTextBlock>
                        <ContentTitle>
                            <>Our Powerful </>
                            <>All-In-One Wallets </>
                        </ContentTitle>
                        <p>
                            ICOX Wallets is most secure am libero tempore, cum
                            soluta nobis est eligendi optio cumque nihil impedit
                            quo minus id quod maxime placeat facere possimus,
                            omnis voluptas assumenda est, omnis dolor
                            repellendus.
                        </p>
                        <div className="pdt-m">
                            <a href="#" className="btn btn-grad">
                                Download Now
                            </a>
                        </div>
                    </ContentTextBlock>
                    <ContentNkBlock></ContentNkBlock>

                    <ContentTextBlock>
                        <ContentTitleMd>Automation Development</ContentTitleMd>
                        <p>
                            The automation development provides rem aperiam, et
                            quasi architecto beatae vitae dicta sunt explicabo.
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit molestiae illum qui
                            dolorem eum.
                        </p>
                        <ContentListDot>
                            <li>
                                Sed do eiusmod tempor incididunt ut labore et
                                dolore.
                            </li>
                            <li>Wende omnis iste natus error sit volupt.</li>
                            <li>
                                Quis nostrud exercitation ullamco laboris nisiut
                                aliquip ex ea commodo consequat.
                            </li>
                        </ContentListDot>
                    </ContentTextBlock>
                    <ContentNkBlock></ContentNkBlock>

                    <ContentTextBlock>
                        <ContentTitleXs>Ico Admin Dashboard</ContentTitleXs>
                        <ContentTitle>
                            Introducing Complete Admin Dashboard
                        </ContentTitle>
                        <p>
                            We designed the ICO Admin panel to mange back-end of
                            ICO Token Sales. It’s allows to mange every thing
                            such as KYC, Users, Transaction etc.
                        </p>
                        <ContentListCheck>
                            <li>Fully manage KYC application process.</li>
                            <li>
                                Online Payment Gateway with Offline Payment
                                option.
                            </li>
                            <li>
                                Manage ICO Stage &amp; each stage pricing and
                                bonus option.
                            </li>
                            <li>
                                Analytics reports, Token Sales Data and others.
                            </li>
                            <li>Newsletter with Emailing options.</li>
                        </ContentListCheck>
                    </ContentTextBlock>
                    <ContentNkBlock></ContentNkBlock>

                    <ContentTextBlock>
                        <ContentCenter>
                            <ContentLead>
                                As an ICOCrypto user, you can choose our crypto
                                wallets. Manage your all cryptocurrency in
                                wallets in-app and instantly convert – no hidden
                                fees, no commissions.
                            </ContentLead>
                            <ContentLead>
                                As an ICOCrypto user, you can choose our crypto
                                wallets. Manage your all cryptocurrency in
                                wallets in-app and instantly convert – no hidden
                                fees, no commissions.
                            </ContentLead>
                        </ContentCenter>
                    </ContentTextBlock>
                    <ContentTextBlock></ContentTextBlock>

                    <ContentNkBlock></ContentNkBlock>

                    <ContentTextBlockHeadS9>
                        <ContentTitleXs>ICO MARKET</ContentTitleXs>
                        <ContentTitleHead>About ICO Crypto</ContentTitleHead>
                        <p>
                            ICO Crypto sectetur adipiscing elit, sed do eiusmod
                            tempor incididunt uteop labore et dolore magna
                            aliqua. Ut enim ad minim veniam, nostrud exercit
                            ullamco laboris nisi commodo consequat.
                        </p>
                    </ContentTextBlockHeadS9>
                    <ContentNkBlock></ContentNkBlock>

                    <ContentTextBlockHeadS8>
                        <ContentTitle>Problem and Challenge</ContentTitle>
                        <p>
                            We create cryptocurrency dipiscing elit, sed do
                            eiusmod tempor incididunt uteop labore et dolore
                            magna aliqua. Ut enim ad minim veniam, nostrud
                            exercit ullamco laboris nisi commodo consequat.
                        </p>
                    </ContentTextBlockHeadS8>
                    <ContentNkBlockE></ContentNkBlockE>

                    <ContentTextBlockHeadS7>
                        <ContentTitleLight>
                            Problem and Challenge
                        </ContentTitleLight>
                        <ContentLead>
                            Our roadmap is a planned where we take on the most
                            complex problems and turn them into great solutions
                        </ContentLead>
                    </ContentTextBlockHeadS7>
                    <ContentNkBlockE></ContentNkBlockE>

                    <ContentTextBlockHeadS6>
                        <ContentTitleXsLight>
                            THE ROADMAP TO SUCCESS
                        </ContentTitleXsLight>
                        <ContentTitle>What are our major goals?</ContentTitle>
                        <p>
                            We create cryptocurrency dipiscing elit, sed do
                            eiusmod tempor incididunt uteop labore et dolore
                            magna aliqua. Ut enim ad minim veniam, nostrud
                            exercit ullamco laboris nisi commodo consequat.
                        </p>
                    </ContentTextBlockHeadS6>
                    <ContentNkBlockE></ContentNkBlockE>

                    <ContentTextBlockHeadS5>
                        <ContentTitleS2>Pre-Sale & Values</ContentTitleS2>
                        <p>
                            ICO Crypto token will be released on the basis of
                            Ethereum and Bitocin platform. It’s compatibility of
                            the token with third-party services wallets,
                            exchanges etc, and provides easy-to-use integration.
                        </p>
                    </ContentTextBlockHeadS5>
                    <ContentNkBlockE></ContentNkBlockE>

                    <ContentTextBlockHeadS4>
                        <ContentTitleS3>Pre-Sale & Values</ContentTitleS3>
                        <p>
                            With help from our teams, contributors and investors
                            these are the milestones we are looking forward to
                            achieve.
                        </p>
                    </ContentTextBlockHeadS4>
                    <ContentNkBlockE></ContentNkBlockE>

                    <ContentTextBlockHeadS3>
                        <ContentTitleXs>WHY ICO CRYPTO</ContentTitleXs>
                        <ContentTitle>Competitive Advantage</ContentTitle>
                        <p>
                            With help from our teams, contributors and investors
                            these are the milestones we are looking forward to
                            achieve.
                        </p>
                    </ContentTextBlockHeadS3>
                    <ContentNkBlockE></ContentNkBlockE>

                    <ContentTextBlockHeadS2>
                        <ContentTitleX1 title="What and Why">
                            ABOUT
                        </ContentTitleX1>
                        <p>
                            Below we’ve provided a bit of ICO, ICO Token,
                            cryptocurrencies, and few others. If you have any
                            other questions, please get in touch using the
                            contact form below.
                        </p>
                    </ContentTextBlockHeadS2>
                </div>
            </div>

            {/* Tabs */}
            <TabRow>
                <TabItem id="tab-1-1" title="Nav One">
                    <ContentTitleMd>First Tab Heading</ContentTitleMd>
                    <p>
                        ICO Crypto - is unique platform; that is secure, smart
                        and easy-to-use platform, and completely disrupting the
                        way businesses raise capital.
                    </p>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exerc itation
                        ullamco. Lorem ipsum dolor sit amet, consectetur adipis
                        cing elit, sed do eiusmod tempor incididunt ut labore et
                        aliqua tempor incididunt ut labore.
                    </p>
                </TabItem>
                <TabItem id="tab-1-2" title="Nav Two">
                    <ContentTitleMd>Second Tab Heading</ContentTitleMd>

                    <p>
                        ICO Crypto - is unique platform; that is secure, smart
                        and easy-to-use platform, and completely disrupting the
                        way businesses raise capital.
                    </p>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exerc itation
                        ullamco. Lorem ipsum dolor sit amet, consectetur adipis
                        cing elit, sed do eiusmod tempor incididunt ut labore et
                        aliqua tempor incididunt ut labore.
                    </p>
                </TabItem>
                <TabItem id="tab-1-3" title="Nav Three">
                    <ContentTitleMd>Third Tab Heading</ContentTitleMd>
                    <p>
                        ICO Crypto - is unique platform; that is secure, smart
                        and easy-to-use platform, and completely disrupting the
                        way businesses raise capital.
                    </p>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exerc itation
                        ullamco. Lorem ipsum dolor sit amet, consectetur adipis
                        cing elit, sed do eiusmod tempor incididunt ut labore et
                        aliqua tempor incididunt ut labore.
                    </p>
                </TabItem>
                <TabItem id="tab-1-4" title="Nav Four">
                    <ContentTitleMd>Fourth Tab Heading</ContentTitleMd>
                    <p>
                        ICO Crypto - is unique platform; that is secure, smart
                        and easy-to-use platform, and completely disrupting the
                        way businesses raise capital.
                    </p>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exerc itation
                        ullamco. Lorem ipsum dolor sit amet, consectetur adipis
                        cing elit, sed do eiusmod tempor incididunt ut labore et
                        aliqua tempor incididunt ut labore.
                    </p>
                </TabItem>
            </TabRow>
            <TabButton>
                <TabItem id="tab-1-1" title="Nav One">
                    <ContentTitleMd>First Tab Heading</ContentTitleMd>
                    <p>
                        ICO Crypto - is unique platform; that is secure, smart
                        and easy-to-use platform, and completely disrupting the
                        way businesses raise capital.
                    </p>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exerc itation
                        ullamco. Lorem ipsum dolor sit amet, consectetur adipis
                        cing elit, sed do eiusmod tempor incididunt ut labore et
                        aliqua tempor incididunt ut labore.
                    </p>
                </TabItem>
                <TabItem id="tab-1-2" title="Nav Two">
                    <ContentTitleMd>Second Tab Heading</ContentTitleMd>

                    <p>
                        ICO Crypto - is unique platform; that is secure, smart
                        and easy-to-use platform, and completely disrupting the
                        way businesses raise capital.
                    </p>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exerc itation
                        ullamco. Lorem ipsum dolor sit amet, consectetur adipis
                        cing elit, sed do eiusmod tempor incididunt ut labore et
                        aliqua tempor incididunt ut labore.
                    </p>
                </TabItem>
                <TabItem id="tab-1-3" title="Nav Three">
                    <ContentTitleMd>Third Tab Heading</ContentTitleMd>
                    <p>
                        ICO Crypto - is unique platform; that is secure, smart
                        and easy-to-use platform, and completely disrupting the
                        way businesses raise capital.
                    </p>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exerc itation
                        ullamco. Lorem ipsum dolor sit amet, consectetur adipis
                        cing elit, sed do eiusmod tempor incididunt ut labore et
                        aliqua tempor incididunt ut labore.
                    </p>
                </TabItem>
                <TabItem id="tab-1-4" title="Nav Four">
                    <ContentTitleMd>Fourth Tab Heading</ContentTitleMd>
                    <p>
                        ICO Crypto - is unique platform; that is secure, smart
                        and easy-to-use platform, and completely disrupting the
                        way businesses raise capital.
                    </p>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exerc itation
                        ullamco. Lorem ipsum dolor sit amet, consectetur adipis
                        cing elit, sed do eiusmod tempor incididunt ut labore et
                        aliqua tempor incididunt ut labore.
                    </p>
                </TabItem>
            </TabButton>
            <TabCenter>
                <TabItem id="tab-1-1" title="Nav One">
                    <ContentTitleMd>First Tab Heading</ContentTitleMd>
                    <p>
                        ICO Crypto - is unique platform; that is secure, smart
                        and easy-to-use platform, and completely disrupting the
                        way businesses raise capital.
                    </p>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exerc itation
                        ullamco. Lorem ipsum dolor sit amet, consectetur adipis
                        cing elit, sed do eiusmod tempor incididunt ut labore et
                        aliqua tempor incididunt ut labore.
                    </p>
                </TabItem>
                <TabItem id="tab-1-2" title="Nav Two">
                    <ContentTitleMd>Second Tab Heading</ContentTitleMd>

                    <p>
                        ICO Crypto - is unique platform; that is secure, smart
                        and easy-to-use platform, and completely disrupting the
                        way businesses raise capital.
                    </p>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exerc itation
                        ullamco. Lorem ipsum dolor sit amet, consectetur adipis
                        cing elit, sed do eiusmod tempor incididunt ut labore et
                        aliqua tempor incididunt ut labore.
                    </p>
                </TabItem>
                <TabItem id="tab-1-3" title="Nav Three">
                    <ContentTitleMd>Third Tab Heading</ContentTitleMd>
                    <p>
                        ICO Crypto - is unique platform; that is secure, smart
                        and easy-to-use platform, and completely disrupting the
                        way businesses raise capital.
                    </p>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exerc itation
                        ullamco. Lorem ipsum dolor sit amet, consectetur adipis
                        cing elit, sed do eiusmod tempor incididunt ut labore et
                        aliqua tempor incididunt ut labore.
                    </p>
                </TabItem>
                <TabItem id="tab-1-4" title="Nav Four">
                    <ContentTitleMd>Fourth Tab Heading</ContentTitleMd>
                    <p>
                        ICO Crypto - is unique platform; that is secure, smart
                        and easy-to-use platform, and completely disrupting the
                        way businesses raise capital.
                    </p>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exerc itation
                        ullamco. Lorem ipsum dolor sit amet, consectetur adipis
                        cing elit, sed do eiusmod tempor incididunt ut labore et
                        aliqua tempor incididunt ut labore.
                    </p>
                </TabItem>
            </TabCenter>
            <TabLine>
                <TabItem id="tab-1-1" title="Nav One">
                    <ContentTitleMd>First Tab Heading</ContentTitleMd>
                    <p>
                        ICO Crypto - is unique platform; that is secure, smart
                        and easy-to-use platform, and completely disrupting the
                        way businesses raise capital.
                    </p>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exerc itation
                        ullamco. Lorem ipsum dolor sit amet, consectetur adipis
                        cing elit, sed do eiusmod tempor incididunt ut labore et
                        aliqua tempor incididunt ut labore.
                    </p>
                </TabItem>
                <TabItem id="tab-1-2" title="Nav Two">
                    <ContentTitleMd>Second Tab Heading</ContentTitleMd>

                    <p>
                        ICO Crypto - is unique platform; that is secure, smart
                        and easy-to-use platform, and completely disrupting the
                        way businesses raise capital.
                    </p>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exerc itation
                        ullamco. Lorem ipsum dolor sit amet, consectetur adipis
                        cing elit, sed do eiusmod tempor incididunt ut labore et
                        aliqua tempor incididunt ut labore.
                    </p>
                </TabItem>
                <TabItem id="tab-1-3" title="Nav Three">
                    <ContentTitleMd>Third Tab Heading</ContentTitleMd>
                    <p>
                        ICO Crypto - is unique platform; that is secure, smart
                        and easy-to-use platform, and completely disrupting the
                        way businesses raise capital.
                    </p>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exerc itation
                        ullamco. Lorem ipsum dolor sit amet, consectetur adipis
                        cing elit, sed do eiusmod tempor incididunt ut labore et
                        aliqua tempor incididunt ut labore.
                    </p>
                </TabItem>
                <TabItem id="tab-1-4" title="Nav Four">
                    <ContentTitleMd>Fourth Tab Heading</ContentTitleMd>
                    <p>
                        ICO Crypto - is unique platform; that is secure, smart
                        and easy-to-use platform, and completely disrupting the
                        way businesses raise capital.
                    </p>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exerc itation
                        ullamco. Lorem ipsum dolor sit amet, consectetur adipis
                        cing elit, sed do eiusmod tempor incididunt ut labore et
                        aliqua tempor incididunt ut labore.
                    </p>
                </TabItem>
            </TabLine>
            <div className="container">
                <ContentTitleMd>4 Columns Grid</ContentTitleMd>
                <Grid>
                    <p>
                        Tempore, cum soluta nobis est eligendi optio cumque
                        nihil id quod maxime placeat facere possimus, omnis
                        voluptas assumenda est omnis.
                    </p>
                    <p>
                        Tempore, cum soluta nobis est eligendi optio cumque
                        nihil id quod maxime placeat facere possimus, omnis
                        voluptas assumenda est omnis.
                    </p>
                    <p>
                        Tempore, cum soluta nobis est eligendi optio cumque
                        nihil id quod maxime placeat facere possimus, omnis
                        voluptas assumenda est omnis.
                    </p>
                    <p>
                        Tempore, cum soluta nobis est eligendi optio cumque
                        nihil id quod maxime placeat facere possimus, omnis
                        voluptas assumenda est omnis.
                    </p>
                </Grid>
                <ContentTitleMd>3 Columns Grid</ContentTitleMd>
                <Grid>
                    <p>
                        Tempore, cum soluta nobis est eligendi optio cumque
                        nihil id quod maxime placeat facere possimus, omnis
                        voluptas assumenda est omnis.
                    </p>
                    <p>
                        Tempore, cum soluta nobis est eligendi optio cumque
                        nihil id quod maxime placeat facere possimus, omnis
                        voluptas assumenda est omnis.
                    </p>
                    <p>
                        Tempore, cum soluta nobis est eligendi optio cumque
                        nihil id quod maxime placeat facere possimus, omnis
                        voluptas assumenda est omnis.
                    </p>
                </Grid>
                <ContentTitleMd>2 Columns Grid</ContentTitleMd>
                <Grid>
                    <p>
                        Tempore, cum soluta nobis est eligendi optio cumque
                        nihil id quod maxime placeat facere possimus, omnis
                        voluptas assumenda est omnis.
                    </p>
                    <p>
                        Tempore, cum soluta nobis est eligendi optio cumque
                        nihil id quod maxime placeat facere possimus, omnis
                        voluptas assumenda est omnis.
                    </p>
                </Grid>
            </div>
            <AccordionS1>
                <AccordionItem title="What is ICO Crypto?">
                    <p>
                        Once ICO period is launched, You can purchased Token
                        with Etherum, Bitcoin or Litecoin. You can also tempor
                        incididunt ut labore et dolore magna aliqua sed do
                        eiusmod eaque ipsa.
                    </p>
                </AccordionItem>
                <AccordionItem
                    title="What cryptocurrencies can I use to
                                            purchase?"
                >
                    <p>
                        Once ICO period is launched, You can purchased Token
                        with Etherum, Bitcoin or Litecoin. You can also tempor
                        incididunt ut labore et dolore magna aliqua sed do
                        eiusmod eaque ipsa.
                    </p>
                </AccordionItem>
                <AccordionItem
                    title="How can I participate in the ICO
                                            Token sale?"
                >
                    <p>
                        Once ICO period is launched, You can purchased Token
                        with Etherum, Bitcoin or Litecoin. You can also tempor
                        incididunt ut labore et dolore magna aliqua sed do
                        eiusmod eaque ipsa.
                    </p>
                </AccordionItem>
                <AccordionItem title=" How do I benefit from the ICO Token?">
                    <p>
                        Once ICO period is launched, You can purchased Token
                        with Etherum, Bitcoin or Litecoin. You can also tempor
                        incididunt ut labore et dolore magna aliqua sed do
                        eiusmod eaque ipsa.
                    </p>
                </AccordionItem>
            </AccordionS1>

            <AccordionS2>
                <AccordionItem title="What is ICO Crypto?">
                    <p>
                        Once ICO period is launched, You can purchased Token
                        with Etherum, Bitcoin or Litecoin. You can also tempor
                        incididunt ut labore et dolore magna aliqua sed do
                        eiusmod eaque ipsa.
                    </p>
                </AccordionItem>
                <AccordionItem title="What cryptocurrencies can I use to purchase?">
                    <p>
                        Once ICO period is launched, You can purchased Token
                        with Etherum, Bitcoin or Litecoin. You can also tempor
                        incididunt ut labore et dolore magna aliqua sed do
                        eiusmod eaque ipsa.
                    </p>
                </AccordionItem>
                <AccordionItem title="How can I participate in the ICO Token sale?">
                    <p>
                        Once ICO period is launched, You can purchased Token
                        with Etherum, Bitcoin or Litecoin. You can also tempor
                        incididunt ut labore et dolore magna aliqua sed do
                        eiusmod eaque ipsa.
                    </p>
                </AccordionItem>
                <AccordionItem title="How do I benefit from the ICO Token?">
                    <p>
                        Once ICO period is launched, You can purchased Token
                        with Etherum, Bitcoin or Litecoin. You can also tempor
                        incididunt ut labore et dolore magna aliqua sed do
                        eiusmod eaque ipsa.
                    </p>
                </AccordionItem>
            </AccordionS2>

            <AccordionS3>
                <AccordionItem title="What is ICO Crypto?">
                    <p>
                        Once ICO period is launched, You can purchased Token
                        with Etherum, Bitcoin or Litecoin. You can also tempor
                        incididunt ut labore et dolore magna aliqua sed do
                        eiusmod eaque ipsa.
                    </p>
                </AccordionItem>
                <AccordionItem title="What cryptocurrencies can I use to purchase?">
                    <p>
                        Once ICO period is launched, You can purchased Token
                        with Etherum, Bitcoin or Litecoin. You can also tempor
                        incididunt ut labore et dolore magna aliqua sed do
                        eiusmod eaque ipsa.
                    </p>
                </AccordionItem>
                <AccordionItem title="How can I participate in the ICO Token sale?">
                    <p>
                        Once ICO period is launched, You can purchased Token
                        with Etherum, Bitcoin or Litecoin. You can also tempor
                        incididunt ut labore et dolore magna aliqua sed do
                        eiusmod eaque ipsa.
                    </p>
                </AccordionItem>
                <AccordionItem title="How do I benefit from the ICO Token?">
                    <p>
                        Once ICO period is launched, You can purchased Token
                        with Etherum, Bitcoin or Litecoin. You can also tempor
                        incididunt ut labore et dolore magna aliqua sed do
                        eiusmod eaque ipsa.
                    </p>
                </AccordionItem>
            </AccordionS3>
            <AccordionS4>
                <AccordionItem title="What is ICO Crypto?">
                    <p>
                        Once ICO period is launched, You can purchased Token
                        with Etherum, Bitcoin or Litecoin. You can also tempor
                        incididunt ut labore et dolore magna aliqua sed do
                        eiusmod eaque ipsa.
                    </p>
                </AccordionItem>
                <AccordionItem title="What cryptocurrencies can I use to purchase?">
                    <p>
                        Once ICO period is launched, You can purchased Token
                        with Etherum, Bitcoin or Litecoin. You can also tempor
                        incididunt ut labore et dolore magna aliqua sed do
                        eiusmod eaque ipsa.
                    </p>
                </AccordionItem>
                <AccordionItem title="How can I participate in the ICO Token sale?">
                    <p>
                        Once ICO period is launched, You can purchased Token
                        with Etherum, Bitcoin or Litecoin. You can also tempor
                        incididunt ut labore et dolore magna aliqua sed do
                        eiusmod eaque ipsa.
                    </p>
                </AccordionItem>
                <AccordionItem title="How do I benefit from the ICO Token?">
                    <p>
                        Once ICO period is launched, You can purchased Token
                        with Etherum, Bitcoin or Litecoin. You can also tempor
                        incididunt ut labore et dolore magna aliqua sed do
                        eiusmod eaque ipsa.
                    </p>
                </AccordionItem>
            </AccordionS4>
        </>
    );
}
