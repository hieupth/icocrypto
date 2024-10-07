import { Content } from "../elements/element-content";
import { Grid } from "../elements/element-grid";
import Videos from "../elements/element-videos";

export const BlockFeaturesPanel: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <Grid>
            <Content.TextBlock>
                <Content.Title>
                    <>About ICO Crypto</>
                </Content.Title>
                <p>
                    <strong>ICO Crypto is #1 best selling ICO Landing</strong>
                    page, which helps you lunch and introduce your ICO Website.
                    We designed it very carefully to make it more attractive,
                    useful and fit any kind of ICO/Crypto website.
                </p>
                <p>
                    ICO Crypto sectetur adipiscing elit, sed do eiusmod tempor
                    incididunt uteop labore et dolore magna aliqua. Ut enim ad
                    minim veniam, nostrud exercit ullamco laboris nisi commodo
                    consequat.
                </p>
                <p>
                    We create cryptocurrency dipiscing elit, sed do eiusmod
                    tempor incididunt uteop labore et dolore magna aliqua. Ut
                    enim ad minim veniam, nostrud exercit ullamco laboris nisi
                    commodo consequat.
                </p>
            </Content.TextBlock>
            <Videos
                type={1}
                thumb="https://cly.1cdn.vn/2023/03/18/hot2.jpg"
                src="https://www.youtube.com/watch?v=a0pUuI0WxyY"
            ></Videos>
        </Grid>
    );
};
