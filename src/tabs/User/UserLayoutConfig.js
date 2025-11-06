// User.jsx
import { users } from "./UserData";

export const UserLayouts = {
layout1: {
  type: "render",
  render: () => (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>ID</th>
          <th style={styles.th}>Name</th>
          <th style={styles.th}>Email</th>
          <th style={styles.th}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id} style={styles.tr}>
            <td style={styles.td}>{u.id}</td>
            <td style={styles.td}>{u.name}</td>
            <td style={styles.td}>{u.email}</td>
            <td style={styles.td}>{u.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
},


layout2: {
  type: "render",
  render: () => (
    <div style={styles.grid}>
      {users.map((u) => (
        <div key={u.id} style={styles.card}>
          <h2 style={styles.name}>{u.name}</h2>
          <p>ID: {u.id}</p>
          <p>Email: {u.email}</p>
          <p>Phone: {u.phone}</p>
        </div>
      ))}
    </div>
  ),
},

layout3: {
  type: "render",
  render: () => (
    <div style={styles.grid}>
      {users.map((u) => (
        <div key={u.id} style={styles.card}>
          <div style={styles.avatar}>{u.name.charAt(0) }</div>
          <h2 style={styles.name}>{u.name}</h2>
          <p>ID: {u.id}</p>
          <p>Email: {u.email}</p>
          <p>Phone: {u.phone}</p>
        </div>
      ))}
    </div>
  ),
},

};
const styles = {
  // Grid for cards
  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#4f46e5",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "18px",
    textTransform: "uppercase",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    background: "#fff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
  },

  // Table styles
  table: {
    width: "100%",
    borderCollapse: "collapse",
    margin: "20px 0",
  },
  th: {
    border: "1px solid #ccc",
    padding: "12px",
    background: "#f5f5f5",
    textAlign: "left",
    fontWeight: "bold",
  },
  td: {
    border: "1px solid #ccc",
    padding: "12px",
  },
  tr: {
    background: "#fff",
  },
};

