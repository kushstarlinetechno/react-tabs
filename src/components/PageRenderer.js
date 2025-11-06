import { useLayout } from "../context/LayoutContext";


export default function PageRenderer({ layouts }) {
  const { activeLayout } = useLayout();
  const content = layouts[activeLayout] || layouts.layout1;

  if (!content) return null;

  if (content.type === "order") {
    return (
      <div>
        {content.components.map((Comp, i) => (
          <Comp key={i} />
        ))}
      </div>
    );
  }

  if (content.type === "render") {
    return content.render();
  }

  return null;
}
