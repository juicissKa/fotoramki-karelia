import React from "react";
import ContentLoader from "react-content-loader";

const ProductBlockSkeleton = () => (
  <ContentLoader
    speed={2}
    width={306}
    height={422}
    viewBox="0 0 306 422"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="20" ry="20" width="256" height="256" />
    <rect x="0" y="270" rx="5" ry="5" width="256" height="21" />
    <rect x="0" y="300" rx="5" ry="5" width="256" height="14" />
    <rect x="0" y="320" rx="5" ry="5" width="153" height="14" />
    <rect x="0" y="340" rx="5" ry="5" width="100" height="21" />
  </ContentLoader>
);

export default ProductBlockSkeleton;
