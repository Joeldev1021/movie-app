import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonCard = (props) => (
  <div className="border rounded-2xl  m-3 card">
    <ContentLoader
      width={450}
      height={400}
      viewBox="0 0 450 400"
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede"
      {...props}
    >
      <rect x="42" y="77" rx="10" ry="10" width="200" height="300" />
    </ContentLoader>
  </div>
);

export default SkeletonCard;
