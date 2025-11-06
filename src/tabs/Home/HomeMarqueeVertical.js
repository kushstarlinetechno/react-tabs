// HomeMarqueeVertical.js
import React from "react";
import game1 from "../../assests/game1.jpg";
import game2 from "../../assests/game2.jpg";
import game3 from "../../assests/game3.png";
import game4 from "../../assests/game4.jpg";
import game5 from "../../assests/game5.jpg";

const marqueeStyle = {
  height: "438px",
  width: "120px",
  overflow: "hidden",
  background: "#222",
  color: "#fff",
  position: "relative",
  borderRadius: 8,
};
export const images = [
  // Replace with actual game image URLs
  game1,
  game2,
  game3,
  game4,
  game5,
];

const HomeMarqueeVertical = () => (
  <div style={marqueeStyle}>
    <div style={{
      position: "absolute",
      animation: "marquee-v 12s linear infinite",
    }}>
      {images.map((src, i) => (
        <img key={i} src={src} alt={`Game ${i + 1}`} style={{display: "block", margin: "16px auto", borderRadius: 8 , height: "120px", width: "120px"}} />
      ))}
    </div>
    <style>{`
      @keyframes marquee-v {
        0% { top: 100%; }
        100% { top: -100%; }
      }
    `}</style>
  </div>
);

export default HomeMarqueeVertical;
