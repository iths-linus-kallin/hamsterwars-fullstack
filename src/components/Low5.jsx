import React from 'react'
import styled from 'styled-components'

const Low5 = () => {

    return(
        <div>
            <H5Red>LOW 5</H5Red>
            <StyledP>Rasta <span>59</span></StyledP>
            <StyledP>Menen <span>60</span></StyledP>
            <StyledP>King-I <span>61</span></StyledP>
            <StyledP>Only I <span>62</span></StyledP>
            <StyledP>Riiight <span>63</span></StyledP>
        </div>
    )
}

const H5Red = styled.h5`
    color: red;
`
const StyledP = styled.p`
    padding-left: 0;
    margin-bottom: 1.5em;
`

export default Low5