import React from "react";
import { ReactNode } from "react";
export interface TagType {
    name: string;
    textColor: string;
    icon: ReactNode;
    website: string | undefined;
}
export declare const BixatChip: ({ tag, link, withTitle }: {
    tag: TagType;
    link: string | null;
    withTitle: boolean;
}) => React.JSX.Element;
