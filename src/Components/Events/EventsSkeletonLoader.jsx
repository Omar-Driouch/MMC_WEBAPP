import React from 'react'
import { Skeleton } from 'primereact/skeleton';
const EventsSkeletonLoader = () => {
  return (
    <div className="card" style={{width:"350px"}}>
      <div className="border-1 p-1 surface-border surface-card">
        <Skeleton borderRadius="0" width="100%" height="320px"></Skeleton>
        <div className="mt-2">
          <Skeleton borderRadius="0" width="150px" height="20px"></Skeleton>
        </div>
        <div className="mt-2">
          <Skeleton borderRadius="0" width="180px" height="30px"></Skeleton>
        </div>
        <div className="mt-2">
          <Skeleton borderRadius="0" width="100%" height="100px"></Skeleton>
        </div>
        <div className="mt-2">
          <Skeleton borderRadius="0" width="150px" height="50px"></Skeleton>
        </div>
      </div>
    </div>
  )
}

export default EventsSkeletonLoader