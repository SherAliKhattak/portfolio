import type { ReactNode } from "react";

type SectionHeaderProps = {
  kicker: string;
  title: string;
  description?: string;
  action?: ReactNode;
  titleTestId?: string;
};

export function SectionHeader({
  kicker,
  title,
  description,
  action,
  titleTestId = "section-title",
}: SectionHeaderProps) {
  return (
    <header className="section-header section-header--left section-header--standard">
      <div className="section-header-top">
        <p className="section-kicker">{kicker}</p>
        {action}
      </div>
      <h2 className="section-heading-title" data-testid={titleTestId}>
        {title}
      </h2>
      {description ? <p className="section-lede">{description}</p> : null}
    </header>
  );
}
