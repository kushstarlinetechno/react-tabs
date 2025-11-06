// Report.jsx
import PageRenderer from "../../components/PageRenderer";
import { ChartLayouts } from "./Chart/ReportChart";

const ReportSummary = () => (
  <div style={styles.summary}>
    <h2>Report Summary</h2>
    <p>Total Sales: $45,000</p>
    <p>Growth: 12%</p>
  </div>
);

const ReportTable = () => (
  <table style={styles.table}>
    <thead>
      <tr>
        <th style={styles.th}>Product</th>
        <th style={styles.th}>Sales</th>
        <th style={styles.th}>Growth</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={styles.td}>Product A</td>
        <td style={styles.td}>$10,000</td>
        <td style={styles.td}>5%</td>
      </tr>
      <tr>
        <td style={styles.td}>Product B</td>
        <td style={styles.td}>$15,000</td>
        <td style={styles.td}>20%</td>
      </tr>
      <tr>
        <td style={styles.td}>Product C</td>
        <td style={styles.td}>$20,000</td>
        <td style={styles.td}>15%</td>
      </tr>
    </tbody>
  </table>
);

// Report Layouts
export const ReportLayouts = {
  layout1: {
    type: "order",
    components: [
        () => <PageRenderer layouts={ChartLayouts} />, // use config for chart
      ReportSummary,
      ReportTable,
    ],
  },

  layout2: {
    type: "render",
    render: () => (
      <div style={styles.grid}>
        <div style={styles.gridSummary}><ReportSummary /></div>
        <div style={styles.gridChart}>
          <PageRenderer layouts={ChartLayouts} />
        </div>
        <div style={styles.gridTable}><ReportTable /></div>
      </div>
    ),
  },
    layout3: {
    type: "order",
    components: [
      ReportSummary,
      ReportTable,
    ],
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
