import { reasons, techs } from "@/data/content";
import Reveal from "@/components/ui/Reveal";

export function WhyTiles() {
  return (
    <Reveal className="wg" stagger=".tile">
      {reasons.map((r) => (
        <div key={r.label} className="tile">
          <span className="lb">{r.label}</span>
          <div>
            <div className="bn">{r.big}</div>
            <p>{r.text}</p>
          </div>
        </div>
      ))}
    </Reveal>
  );
}

export function TechMarquee() {
  const list = [...techs, ...techs];
  return (
    <div className="marquee" style={{ marginTop: 64 }}>
      <div className="marquee-track">
        {list.map(([file, name], i) => (
          <span key={i} aria-hidden={i >= techs.length}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/assets/icons/knowledge/${file}.svg`} alt="" />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
