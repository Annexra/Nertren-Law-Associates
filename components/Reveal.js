"use client";
import { useEffect } from "react";

// Adds .in to [data-reveal] elements once as they scroll into view,
// and drives a subtle parallax (--py, -1..1) on [data-parallax] frames.
export default function Reveal() {
  useEffect(() => {
    const els = [...document.querySelectorAll("[data-reveal]")];
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    document.documentElement.classList.add("js-reveal");
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.18 });
    els.forEach((e) => io.observe(e));

    const par = [...document.querySelectorAll("[data-parallax]")];
    let raf = 0;
    const tick = () => {
      raf = 0;
      const vh = window.innerHeight;
      par.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        const p = ((r.top + r.height / 2) - vh / 2) / (vh / 2 + r.height / 2);
        el.style.setProperty("--py", Math.max(-1, Math.min(1, p)).toFixed(3));
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    if (!still && par.length) { tick(); window.addEventListener("scroll", onScroll, { passive: true }); window.addEventListener("resize", onScroll); }
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);
  return null;
}
