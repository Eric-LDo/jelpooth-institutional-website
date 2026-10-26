import Reveal from "./Reveal";

type Props = { eyebrow: string; title: React.ReactNode; sub?: string };

export default function SectionHead({ eyebrow, title, sub }: Props) {
  return (
    <Reveal className="head">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="h2">{title}</h2>
      </div>
      {sub && <p className="sub">{sub}</p>}
    </Reveal>
  );
}
