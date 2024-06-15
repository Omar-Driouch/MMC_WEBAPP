import React from 'react'
import styled from "styled-components";
import { Skeleton } from 'primereact/skeleton';

const Box = styled.div`
  display: flex;
  padding:2px;
  overflow:hidden;
  gap: 20px;
  margin-top:30px;
  width:100%;
`;
const LeftBox = styled.div`
  flex: 3;
  height:600px;
`;
// const LeftImage = styled.img`
//   width: 100%;
//   height: 100%;
//   box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
// `;
const RightBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
// const RightImage = styled.img`
//   width: 100%;
//   height: 300px;
//   box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
// `;

const EventDetailsSkeleton = () => {
  return (
    <div className="card" style={{width:"1200px",margin:"20px auto"}}>
    <div className="border-1 p-1 surface-border surface-card">
      <Skeleton borderRadius="0" width="340px" height="20px"></Skeleton>
      <div className="mt-10">
        <Skeleton borderRadius="0" width="360px" height="40px"></Skeleton>
      </div>
      {/* <div className="mt-5 flex gap-3">
        <Skeleton borderRadius="0" width="180px" height="40px"></Skeleton>
        <Skeleton borderRadius="0" width="180px" height="40px"></Skeleton>
        <Skeleton borderRadius="0" width="180px" height="40px"></Skeleton>
      </div> */}
      <Box>
          <LeftBox>
            <Skeleton borderRadius="0" width="100%" height="100%"></Skeleton>
          </LeftBox>
          {/* <RightBox>
            <Skeleton borderRadius="0" width="100%" height="300px"></Skeleton>
            <Skeleton borderRadius="0" width="100%" height="300px"></Skeleton>
            <Skeleton borderRadius="0" width="100%" height="300px"></Skeleton>
          </RightBox> */}
        </Box>
      {/* <div className="mt-2">
        <Skeleton borderRadius="0" width="100%" height="100px"></Skeleton>
      </div>
      <div className="mt-2">
        <Skeleton borderRadius="0" width="150px" height="50px"></Skeleton>
      </div> */}
    </div>
  </div>
  )
}

export default EventDetailsSkeleton