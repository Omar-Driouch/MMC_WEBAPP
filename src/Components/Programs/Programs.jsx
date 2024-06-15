import React, { useEffect } from 'react'
import {useDispatch , useSelector} from "react-redux"
import styled from "styled-components"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { fetchPrograms } from '../../features/programSlice';
import Program from './Program';
import ProgramSkeleton from './ProgramSkeleton';
import ErrorAlert from '../ErrorAlert/ErrorAlert';
const ProgramsContainer = styled.div`
  //  min-height:100vh;
`
const ProgramHeading = styled.div`
 width:100%;
 height:350px;
 display:flex;
 position:relative;
 top:90px;
 margin-bottom:120px;
 left:0;
 align-items:center;
 justify-content:center;
 background-image: linear-gradient(45deg, transparent 0%, transparent 51%,rgba(130, 130, 130,0.05) 51%, rgba(130, 130, 130,0.05) 71%,transparent 71%, transparent 100%),linear-gradient(0deg, transparent 0%, transparent 69%,rgba(130, 130, 130,0.05) 69%, rgba(130, 130, 130,0.05) 84%,transparent 84%, transparent 100%),linear-gradient(135deg, transparent 0%, transparent 37%,rgba(130, 130, 130,0.05) 37%, rgba(130, 130, 130,0.05) 73%,transparent 73%, transparent 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));
 `
 const Box = styled.div`
 width:1200px;
 display:flex;
 justify-content:center;
 margin:0 auto;
`
const HeadingTitle = styled.h1`
    font-size:60px;
    font-weight:600;
    color:#FFB703;
    text-transform:capitalize;
    display:flex;
    align-items:flex-start;
    flex-wrap:wrap;
    justify-content:center;
    gap:80px;
    @media (max-width:1150px){
       font-size:30px;
       gap:40px;
    }
    @media (max-width:768px){
       font-size:20px;
       gap:20px;
    }
    @media (max-width:576px){
       gap:20px;
       font-size:14px;
    }
`;
const Content = styled.div`
max-width:1200px;
margin:50px auto;
// min-height:100vh;
`
const ProgramsList = styled.div`
  // min-height:100vh;
  display:flex;
  // margin-top:100px;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;
  gap:60px;
`
const Programs = () => {
  const dispatch = useDispatch();
  const programs = useSelector(state=>state.program.programs);
  const status = useSelector(state=>state.program.status);
  const error = useSelector(state=>state.program.error);
  useEffect(()=>{
     window.scroll(0, 0);
     dispatch(fetchPrograms());
  },[dispatch])
  return (
    <ProgramsContainer>
        <ProgramHeading>
            <Box>
              {/* <HeadingTitle><FormatQuoteIcon style={{fontSize:"30px"}}/> Programs <FormatQuoteIcon style={{fontSize:"30px"}}/></HeadingTitle> */}
              <HeadingTitle>
              <span>Programs</span>
              </HeadingTitle>
            </Box>
        </ProgramHeading>
        <Content>
          {(status === "failed" && error !== null) && <ErrorAlert error={error}/>}
          {status === "loading" && 
           <ProgramsList>
            <ProgramSkeleton/>
            <ProgramSkeleton/>
            <ProgramSkeleton/>
           </ProgramsList>
          }
          {status === "succeded" && 
          <ProgramsList>
            {programs?.map((program)=>(
              <Program key={program.id} program={program}/>
              ))}
          </ProgramsList>
            }
        </Content>
    </ProgramsContainer>
  )
}

export default Programs











