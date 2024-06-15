import React from 'react'
import styled from "styled-components"

const primary = "#FFB703";
const HeadingContent = styled.h1`
text-transform:capitalize;
color:${primary};
font-size:40px;
font-weight:700;
display:inline-block;
position:relative;
&:before{
  position:absolute;
  content:"";
  width:33.33%;
  height:4px;
  top:-20px ;
  left:0;
  background:${primary};
}
`

const Heading = ({name}) => {
  return (
    <HeadingContent>
      {name}
    </HeadingContent>
  )
}

export default Heading