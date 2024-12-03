import { ColorStyle, Stylable } from "@/utils/colorclass";
import { FeatureBoxS1 } from "@/components/elements/element-featureBoxs" 


interface featureBoxS1 {
    items: {
        icon: string;
        title: string;
        text: string;
      }[]
}

type FeatureContentType = featureBoxS1;
type VariantType = "S1" 

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
            {variant === "S1"  && <FeatureBoxS1 FeatureBoxContent={featureContent as featureBoxS1} />}
        </section>
    );
};