import React from "react";
import Image from "next/image";
import { ColorStyle, Stylable } from "@/utils/colorclass";

interface DocumentItem {
    title: string;
    year: number;
    image: string;
    lang: string;
    downloadLink: string;
}

interface BlockDocumentProps {
    documents: DocumentItem[];
    color?: string; 
    style?: string; 
    dark?: boolean;
}

export const BlockDocument: React.FC<BlockDocumentProps> = ({
    documents,
    color = "default", 
    style = "",
    dark = false, 
}) => {
    const darkClass = dark ? "dark" : "";
    const styleClass = style ? style : "";
    const colorClass = color ? color : "default";

    return (
        <section className={`container ${styleClass} ${colorClass} ${darkClass}`}>
            <div className="nk-block">
                <div className="row gutter-vr-50px">
                    {documents.map((doc) => (
                        <div className="col-sm-6 col-lg-3" key={doc.title}> 
                            <div className="doc animated fadeInUp" data-animate="fadeInUp" data-delay={0.1} style={{ visibility: "visible" }}>
                                <div className="doc-photo doc-shape">
                                        <Image
                                            src={doc.image} 
                                            width={175}
                                            height={236}
                                            alt={`image of ${doc.title}`}
                                        />
                                </div>
                                <div className="doc-text">
                                    <h5 className="doc-title title-sm">{doc.title} <small>({doc.year})</small></h5>                          
                                        <a className="doc-download" href={doc.downloadLink}> 
                                            <em className="ti ti-import"></em>
                                        </a>                             
                                    <div className="doc-lang">{doc.lang}</div> 
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
