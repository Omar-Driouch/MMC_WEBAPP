import { Skeleton } from "primereact/skeleton";
import React from "react";

const SpeakerSkeleton = () => {
  return (
    <div className="card" style={{ width: "350px" }}>
      <div className="border-1 p-1 surface-border surface-card">
        <Skeleton borderRadius="0" width="100%" height="400px"></Skeleton>
      </div>
    </div>
  );
};

export default SpeakerSkeleton;
