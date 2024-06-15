import React from 'react'
import styled from "styled-components";
const PaginationContainer = styled.div`
 display:flex;
 gap:10px;
`
const Button = styled.button`
  width:40px;
  height:40px;
  background:${(props)=>props.variant ? '#ffb703':"#f1f1f1"};
`
const Pagination = ({totalEvents,
    eventsPerPage,
    setCurrentPage,
    currentPage}) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
        pages.push(i);
    }
  return (
          <PaginationContainer>
            {pages.map((page, index) => {
                return (
                    <Button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        variant={page == currentPage}>
                        {page}
                    </Button>
                );
            })}
        </PaginationContainer>
  )
}

export default Pagination