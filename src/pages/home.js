import React from 'react';

import styled from 'styled-components'

const StyledDiv = styled.div`
    min-height:100vhs;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default  function Home(props){
    return (
        <StyledDiv>
            home page 
        </StyledDiv>
    )
}