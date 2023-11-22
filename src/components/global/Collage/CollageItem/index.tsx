import React from "react";

type CollageItemProps = {
  col?: number;
  row?: number;
};

const CollageItem: React.FC<React.PropsWithChildren<CollageItemProps>> = ({
  children,
  col,
  row,
}) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        gridColumn: `span ${col}`,
        gridRow: `span ${row}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default CollageItem;
