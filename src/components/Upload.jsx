import React from 'react'
import styled from 'styled-components'

const Upload = () => {
    return(
        <StyledForm action="" className="dropzone">
            <SectionLeft>
                <h5>UPLOAD YOUR HAMSTER:</h5>
                <input type="text" placeholder="Name"/>
                <input type="number" placeholder="Age"/>
                <input type="text" placeholder="Favourite food"/>
                <input type="text" placeholder="What does it love most?"/>
            </SectionLeft>
            <SectionRight>
                <input type="file" placeholder="Image"/>
                <button>Upload</button>
            </SectionRight>
        </StyledForm>
    )
}

export default Upload

const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 40% auto;
    grid-template-areas: "left right";
    background-color: white;
    padding: 2em;
    border-radius: 1em;
    text-align: left;
`

const SectionLeft = styled.section`
    grid-area: left;
`

const SectionRight = styled.section`
    grid-area: right
`