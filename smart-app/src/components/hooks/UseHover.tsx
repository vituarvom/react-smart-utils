import React from "react";
import { useHover } from "react-smart-utils";

const UseHover: React.FC = () => {
  const [isHovered, hoverRef] = useHover<HTMLDivElement>(); // Use the custom hook

  return (
    <div
      ref={hoverRef}
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: isHovered ? "blue" : "green",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid blue",
        borderRadius: "10px",
        transition: "background-color 0.3s",
      }}
    >
      <h2>{isHovered ? "Hovered!" : "Hover over me!"}</h2>
    </div>
  );
};

export default UseHover;
