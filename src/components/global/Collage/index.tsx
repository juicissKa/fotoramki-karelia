import React from "react";

type CollageProps = {
  width: string | number;
  height: string | number;
  gap: string | number;
  colNumber: number;
  rowNumber: number;
};

const Collage: React.FC<React.PropsWithChildren<CollageProps>> = ({
  width,
  height,
  gap,
  colNumber,
  rowNumber,
  children,
}) => {
  const style = {
    width,
    height,
    display: "grid",
    gap,
    gridTemplateColumns: "1fr ".repeat(colNumber),
    gridTemplateRows: "1fr ".repeat(rowNumber),
  };

  return <div style={style}>{children}</div>;
};

export default Collage;
