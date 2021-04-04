import React from "react";

const Cross = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox="0 0 32 32"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
       d="M31.555 3.577l-3.133-3.133-12.422 12.422-12.422-12.422-3.133 3.133 12.422 12.422-12.422 12.422 3.133 3.133 12.422-12.422 12.422 12.422 3.133-3.133-12.422-12.422 12.422-12.422z"
    />
  </svg>
);

export default Cross;
