import React from 'react'
import styled from 'styled-components'

const Start = () => {

    return(
        <StyledDiv>
            <p>
            <span>Hello and welcome</span> to the final faceoff! We are here to decide which of these hamsters are the cutest.
                <br/>
                <br/>
                </p>
                <Dashes>---</Dashes>
                <p>
                <br/>
                Press <span>BATTLE</span> if you want to get straight into the fights.
                <br/>
                <br/>
                Press <span>STATS</span> if you are interested in seeing how are four-legged friends are doing in this horrible league.
                <br/>
                <br/>
                Press <span>UPLOAD</span> if you are sadistic enough to enter your own hamster into this war.
                <br/>
                <br/>
                </p>
                <Dashes>---</Dashes>
                <p>
                <br/>
                May the cutest hamster win!
                <br/>
                <br/>
                Your General,
                Linus
            </p>
        </StyledDiv>
    )

}

const StyledDiv = styled.div`
    background-color: white;
    padding: 2em;
    border-radius: 1em;
    text-align: left;
`

const Dashes = styled.p`
    text-align: center;
`

export default Start