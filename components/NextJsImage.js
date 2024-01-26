"use client";
import "yet-another-react-lightbox/styles.css";

export default function NextJsImage({ slide, rect }) {
  return (
    <div style={{ position: "relative" }}>
      <img src={slide.src} className="w-100 h-100 u-animated-background" />
    </div>
  );
}
