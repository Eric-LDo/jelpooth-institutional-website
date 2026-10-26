import SplitHeading from "./SplitHeading";
import Reveal from "./Reveal";

type Props = { eyebrow: string; title: React.ReactNode; lead?: string; children?: React.ReactNode };

export default function PageHero({ eyebrow, title, lead, children }: Props) {
  return (
    <section className="page-hero">
      <div className="orb" />
      <div className="grain" />
      <div className="wrap">
        <div className="eyebrow">{eyebrow}</div>
        <SplitHeading className="h-display">{title}</SplitHeading>
        <Reveal>
          {lead && <p className="lead">{lead}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
