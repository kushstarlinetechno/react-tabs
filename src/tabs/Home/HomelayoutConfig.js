// HomelayoutConfig.js
import HomeMarqueeHorizontal from "./HomeMarqueeHorizontal";
import HomeMarqueeVertical from "./HomeMarqueeVertical";

const gameDescriptions = [
  {
    title: "Game 1",
    desc: "Spin the reels and win big prizes!",
  },
  {
    title: "Game 2",
    desc: "Classic slots with modern twists.",
  },
  {
    title: "Game 3",
    desc: "Test your luck and strategy.",
  },
  {
    title: "Game 4",
    desc: "Fast-paced action and rewards.",
  },
  {
    title: "Game 5",
    desc: "Fun for all skill levels.",
  },
];

const DescriptionList = () => (
  <div style={styles.descList}>
    {gameDescriptions.map((g, i) => (
      <div key={i} style={styles.descItem}>
        <h3 style={{margin: 0}}>{g.title}</h3>
        <p style={{margin: "4px 0 0 0"}}>{g.desc}</p>
      </div>
    ))}
  </div>
);

export const HomeLayouts = {
  layout1: {
    type: "order",
    components: [
      HomeMarqueeHorizontal,
      DescriptionList,
    ],
  },
  layout2: {
    type: "render",
    render: () => (
      <div style={styles.grid}>
        <div style={styles.marqueeCol}><HomeMarqueeVertical /></div>
        <div style={styles.descCol}><DescriptionList /></div>
      </div>
    ),
  },
    layout3: {
    type: "order",
    components: [
      DescriptionList,
      HomeMarqueeHorizontal,
    ],
  },
};

const styles = {
  descList: {
    background: "#f9f9f9",
    padding: "16px",
    borderRadius: 8,
    marginTop: 12,
  },
  descItem: {
    marginBottom: 12,
    padding: 8,
    borderBottom: "1px solid #eee",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "140px 1fr",
    gap: "24px",
    alignItems: "start",
    marginTop: 12,
  },
  marqueeCol: {
    gridColumn: "1 / 2",
  },
  descCol: {
    gridColumn: "2 / 3",
  },
};
