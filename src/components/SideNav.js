// SideNav.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import PageRenderer from "./PageRenderer";

const menuItems = [
  { key: "home", label: "Home" },
  { key: "user", label: "User" },
  { key: "report", label: "Report" },
];
const style = {
  horizontal: {
    width: "80px",
    background: "#eee",
    height: "100%",
    borderRight: "1px solid #ccc",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "20px",
  },
  vertical: {
    paddingLeft: "35px",
    gap: "50px",
    background: "rgb(238, 238, 238)",
    height: "46px",
    borderRight: "1px solid rgb(204, 204, 204)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }
}
const SideNavBase = ({type = "horizontal"}) => {
  const navigation = useNavigate();
  const onMenuClick = (key) => {
    navigation("/" + key);
  };

  return (
    <nav style={style[type]}>
      {menuItems.map((item) => (
        <button
          key={item.key}
          style={{ margin: "10px 0", width: "60px" }}
          onClick={() => onMenuClick(item.key)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

const SideNavLayouts = {
  layout1: {
    type: "render",
    render: () => <SideNavBase />,
  },
  layout2: {
    type: "render",
    render: () => <SideNavBase />,
  },
  layout3: {
    type: "render",
    render: () => <SideNavBase type="vertical" />,
  },
};

const SideNav = () => {
  return <PageRenderer layouts={SideNavLayouts} />;
};

export default SideNav;
