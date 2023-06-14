// import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loader = ({ height }) => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div>
        <Skeleton height={height} duration={2} />
      </div>
    </SkeletonTheme>
  );
};

export default Loader;
