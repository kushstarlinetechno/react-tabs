// ReportChart.jsx
const ChartBar = () => (
  <div style={styles.chartBox}>
    <h4>Bar Chart</h4>
    <div style={styles.barChart}>
      <div style={{ height: "40%", background: "#4caf50", width: "20%" }} />
      <div style={{ height: "70%", background: "#2196f3", width: "20%" }} />
      <div style={{ height: "50%", background: "#ff9800", width: "20%" }} />
    </div>
  </div>
);

const ChartLine = () => (
  <div style={styles.chartBox}>
    <h4>Line Chart</h4>
    <svg width="100%" height="100" style={{ background: "#f9f9f9" }}>
      <polyline
        fill="none"
        stroke="#2196f3"
        strokeWidth="3"
        points="0,80 40,60 80,65 120,20 160,40 200,10"
      />
    </svg>
  </div>
);

// Chart Layout Config
export const ChartLayouts = {
  layout1: {
    type: "render",
    render: () => <ChartBar />,
  },
  layout2: {
    type: "render",
    render: () => <ChartLine />,
  },
};
const styles = {
  summary: {
    border: "1px solid #ccc",
    padding: "10px",
    background: "#fafafa",
    marginBottom: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
  th: {
    border: "1px solid #ccc",
    padding: "8px",
    background: "#f0f0f0",
  },
  td: {
    border: "1px solid #ccc",
    padding: "8px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "10px",
  },
  gridSummary: { gridColumn: "1 / 2" },
  gridChart: { gridColumn: "2 / 3" },
  gridTable: { gridColumn: "1 / 3" },
  chartBox: {
    border: "1px solid #ccc",
    padding: "10px",
    background: "#fff",
  },
  barChart: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-around",
    height: "100px",
    background: "#f9f9f9",
  },
};
