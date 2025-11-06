
import SideNav from "../SideNav";
import MainLayout from "../MainLayout";
import { Outlet } from "react-router-dom";

// building blocks
export const ContainerBlocks = {
  sidenav: () => <SideNav />,
  main: () => <span style={{ width: '100%' }}><Outlet /></span>,
};

export const ContainerLayouts = {
  layout1: {
    type: "order",
    components: ["sidenav", "main"], 
  },
  layout2: {
    type: "order",
    components: ["main", "sidenav"], 
  },
};
