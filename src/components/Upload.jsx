import React, { useState } from 'react'
import styled from 'styled-components'

const Upload = () => {

    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [favFood, setFavFood] = useState()
    const [loves, setLoves] = useState()

    let hamster = {
        "id": 0,
        "name": name,
        "age": age,
        "favFood": favFood,
        "loves": loves,
        "games": 0,
        "wins": 0,
        "defeats": 0
    }
    
    async function postHamster(url = 'http://localhost:3005/api/hamsters/new', data = hamster) {
        
        await fetch(url, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
                'authorization': 'AIzaSyB3iRmatF29AaJzTn6TZAEyIvI4ip30GFM',
            },
            'body': JSON.stringify(data)
        })
        .then(res => res.json())
        // .then(res => res.text())
        // .then(text => console.log(text))
        .catch((error) => {
        console.error('Error:', error);
        })            
    }

    return(
        <StyledForm action="" className="dropzone">
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