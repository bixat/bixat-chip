import React from "react";
import { ReactNode } from "react";

export interface TagType {
    name: string;
    textColor: string;
    icon: ReactNode;
    website: string | undefined;
}

export const BixatChip = ({ tag, link, withTitle }: { tag: TagType, link: string | null, withTitle: boolean }) => {
    const colorWithOpacity = `rgba(${parseInt(tag.textColor.slice(1, 3), 16)}, ${parseInt(tag.textColor.slice(3, 5), 16)}, ${parseInt(tag.textColor.slice(5, 7), 16)}, 0.15)`;
    return (
        <a href={link ?? tag.website} target="_blank" className="rounded-full hover:scale-110">
            <div className="flex flex-row shadow-md  gap-1 rounded-full items-center justify-evenly px-2 py-0.5" style={{ backgroundColor: colorWithOpacity }}>
                <p>{tag.icon}</p>
                {
                    (withTitle ? <p style={{ color: tag.textColor, fontWeight: "bold" }}>{tag.name}</p> : "")
                }
            </div>
        </a>
    );
}