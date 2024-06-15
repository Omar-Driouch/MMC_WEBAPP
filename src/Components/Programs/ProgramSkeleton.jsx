import { Skeleton } from "primereact/skeleton";
import React from "react";

const ProgramSkeleton = () => {
  return (
    <div className="card" style={{ width: "300px" }}>
      <div className="border-1 p-1 surface-border surface-card">
        <Skeleton borderRadius="0" width="100%" height="320px"></Skeleton>
      </div>
    </div>
  );
};

export default ProgramSkeleton;
