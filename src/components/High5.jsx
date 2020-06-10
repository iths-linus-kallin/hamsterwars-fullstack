import React from 'react'
import styled from 'styled-components'

const High5 = () => {

    return(
        <div>
            <H5Green>HIGH 5</H5Green>
                <StyledP><span>1</span> Lasse</StyledP>
                <StyledP><span>2</span> Anita</StyledP>
                <StyledP><span>3</span> Rambo</StyledP>
                <StyledP><span>4</span> Mane</StyledP>
                <StyledP><span>5</span> Blessed</StyledP>
        </div>
    )
}

const H5Green = styled.h5`
    color: green;
`
const StyledP = styled.p`
    padding-left: 0;
    margin-bottom: 1.5em;
`

export default High5