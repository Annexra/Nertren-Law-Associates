// Practice-area icons and team avatars.
const icons = {
  writ: "M6 3h9l4 4v14H6z M15 3v4h4 M9 12h7 M9 16h7",
  civil: "M12 4v16 M7 20h10 M5 7h14 M5 7l-2 6h4z M19 7l-2 6h4z",
  trademark: "M3 9h7 M6.5 9v7 M12 16V9l3 4 3-4v7",
  patent: "M9 18h6 M10 21h4 M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z",
  waqf: "M4 20h16 M6 20v-7 M18 20v-7 M6 13a6 6 0 0 1 12 0 M12 4v3 M10 20v-4h4v4",
  hrce: "M4 20h16 M6 20v-4h12v4 M8 16v-4h8v4 M10 12V8h4v4 M12 8V4",
  execution: "M13 4l7 7 M10 7l7 7 M12.5 9.5L5 17 M3 20h9",
};

export function Icon({ name }) {
  return (
    <svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d={icons[name]} /></svg>
  );
}

export function Avatar({ initials, photo, name }) {
  return photo ? (
    <img className="avatar" src={photo} alt={`Portrait of ${name}`} width="84" height="84" loading="lazy" />
  ) : (
    <div className="avatar mono" aria-hidden="true">{initials}</div>
  );
}

// Framed photo: clip-path reveal on scroll; add `par` for a gentle parallax.
export function Frame({ src, alt = "", w, h, cls = "", pos, par = false, priority = false }) {
  return (
    <figure className={`frame ${cls}${par ? " par" : ""}`} data-reveal data-parallax={par ? "" : undefined}>
      <img src={src} alt={alt} width={w} height={h} style={pos ? { objectPosition: pos } : undefined}
        loading={priority ? "eager" : "lazy"} decoding="async" />
    </figure>
  );
}
