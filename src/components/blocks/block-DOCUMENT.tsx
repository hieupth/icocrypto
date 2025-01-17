import React from "react";
import Image from "next/image";
import { ColorStyle, Stylable } from "@/utils/colorclass";

interface DocumentItem {
    title: string;
    year: number;
    type: 'pdf' | 'doc' | 'xml' | 'wav' | string;
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
                <link rel="stylesheet" href="https://rawcdn.githack.com/dmhendricks/file-icon-vectors/master/dist/file-icon-vivid.min.css" />
                <div className="row gutter-vr-50px">
                    {documents.map((doc) => (
                        <div className="col-sm-6 col-lg-3" key={doc.title}>
                            <div className="doc animated fadeInUp" data-animate="fadeInUp" data-delay={0.1} style={{ visibility: "visible" }}>
                                
                                
                                <div className="doc-photo doc-shape">
                                    {doc.type == 'pdf' ? <span className="fiv-viv fiv-icon-pdf fiv-size-xl"></span>:null}
                                    {doc.type == 'doc' ? <span className="fiv-viv fiv-icon-doc fiv-size-xl"></span>:null}
                                    {doc.type == 'xml' ? <span className="fiv-viv fiv-icon-xml fiv-size-xl"></span>:null}
                                    {doc.type == 'wav' ? <span className="fiv-viv fiv-icon-wav fiv-size-xl"></span>:null}
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
