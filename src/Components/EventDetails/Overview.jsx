import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
const OverviewContainer = styled.div`
  margin: 50px 0;
`;
const OverviewTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    top: -10px;
    left: 0;
    width: 30px;
    height: 5px;
    background: #ffb703;
  }
`;
const Overview = ({ overview }) => {
  return (
    <OverviewContainer>
      <OverviewTitle>Overview</OverviewTitle>
      <p className="max-w-[600px] mt-4">{parse(overview)}</p>
    </OverviewContainer>
  );
};

export default Overview;
