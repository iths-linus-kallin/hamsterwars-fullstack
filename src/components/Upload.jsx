import React, { useState } from 'react'
import styled from 'styled-components'
import drop

const Upload = () => {

    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [favFood, setFavFood] = useState()
    const [loves, setLoves] = useState()

    
    async function postHamster() {

        const newHamster = JSON.stringify({
            "name": name,
            "age": age,
            "favFood": favFood,
            "loves": loves
        })
        
        const myHeaders = new Headers();
        myHeaders.append("authorization", process.env.REACT_APP_APIKEY);
        myHeaders.append("Content-Type", "application/json");
                
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: newHamster,
          redirect: 'follow'
        };
        
        fetch("/api/hamsters/new", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    
    }

    return(
        <StyledForm>
            <h5>UPLOAD YOUR HAMSTER:</h5>
            <StyledInput type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
            <StyledInput type="number" placeholder="Age" onChange={e => setAge(e.target.value)}/>
            <StyledInput type="text" placeholder="Favourite food" onChange={e => setFavFood(e.target.value)}/>
            <StyledInput type="text" placeholder="What does it love most?" onChange={e => setLoves(e.target.value)}/>
            <StyledInput type="file" placeholder="Image"/>
            <button onClick={postHamster}>UPLOAD</button>
        </StyledForm>
    )
}

export default Upload

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 2em;
    border-radius: 1em;
    text-align: left;
`
const StyledInput = styled.input`
    width: 20em;
`

// const SectionLeft = styled.section`
//     grid-area: left;
// `

// const SectionRight = styled.section`
//     grid-area: right
// `