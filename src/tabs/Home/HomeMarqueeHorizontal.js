// HomeMarqueeHorizontal.js
import React from "react";
import { images } from "./HomeMarqueeVertical";

const marqueeStyle = {
  width: "100%",
  overflow: "hidden",
  whiteSpace: "nowrap",
  background: "#222",
  color: "#fff",
  padding: "10px 0",
};


const HomeMarqueeHorizontal = () => (
  <div style={marqueeStyle}>
    <div style={{
      display: "inline-block",
      animation: "marquee-h 12s linear infinite",
    }}>
      {images.map((src, i) => (
        <img key={i} src={src} alt={`Game ${i + 1}`} style={{margin: "0 16px", verticalAlign: "middle", borderRadius: 8 , height: "80px", width: "120px"}} />
      ))}
    </div>
    <style>{`
      @keyframes marquee-h {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
    `}</style>
  </div>
);

export default HomeMarqueeHorizontal;
