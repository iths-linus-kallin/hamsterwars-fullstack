import React from 'react'
import styled from 'styled-components'
import Hamster from './Hamster'

const Battle = () => {
    return(
        <StyledDiv>
            <Hamster />
            <StyledH1>VS</StyledH1>
            <Hamster />
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 40% auto 40%;
    grid-template-areas: "left middle right";
`

const StyledH1 = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Battle