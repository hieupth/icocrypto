import { ColorStyle, Stylable } from "@/utils/colorclass";
import { FeatureBoxS1, FeatureBoxS16 } from "@/components/elements/element-featureBoxs" 

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

type FeatureContentType = featureBoxS1 | featureBoxS16;
type VariantType = `featureBoxS${number}` | `featureCardS${number}`;

interface BlockContactProps {
    featureContent: FeatureContentType,
    color?: ColorStyle;
    style?: Stylable;
    dark?: boolean;
    variant: VariantType ;
}

export const BlockFeatureCards: React.FC<BlockContactProps> = ({
    featureContent,
    color = "default", 
    style = "",
    dark = false, 
    variant = "S1",
}) => {
    const darkClass = dark ? "dark" : "";
    const styleClass = style ? style : "";
    const colorClass = color ? color : "default";
    return (
        <section className={`${styleClass} ${colorClass} ${darkClass}`}>
            {variant === "featureBoxS1"  && <FeatureBoxS1 FeatureBoxContent={featureContent as featureBoxS1} />}
            {variant === "featureBoxS16"  && <FeatureBoxS16 FeatureBoxContent={featureContent as featureBoxS16} />}
        </section>
    );
};

/*
    featureBoxS16 => "ecosystem block" - azalea 
    featureBoxS1  => "about block" - gentian multi 
*/