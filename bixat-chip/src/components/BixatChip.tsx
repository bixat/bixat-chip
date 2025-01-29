import React, { ReactNode } from "react";
import "./BixatChip.css";

export interface TagType {
  name: string;
  textColor: string;
  icon: ReactNode;
  website: string | undefined;
}

export const BixatChip = ({
  tag,
  link,
  withTitle,
}: {
  tag: TagType;
  link?: string;
  withTitle: boolean;
}) => {
  const colorWithOpacity = `rgba(${parseInt(
    tag.textColor.slice(1, 3),
    16
  )}, ${parseInt(tag.textColor.slice(3, 5), 16)}, ${parseInt(
    tag.textColor.slice(5, 7),
    16
  )}, 0.15)`;

  return (
    <a
      href={link ?? tag.website}
      target="_blank"
      rel="noopener noreferrer"
      className="bixat-chip__link"
    >
      <div className="bixat-chip" style={{ backgroundColor: colorWithOpacity }}>
        <span className="bixat-chip__icon">{tag.icon}</span>
        {withTitle && (
          <p className="bixat-chip__title" style={{ color: tag.textColor }}>
            {tag.name}
          </p>
        )}
      </div>
    </a>
  );
};