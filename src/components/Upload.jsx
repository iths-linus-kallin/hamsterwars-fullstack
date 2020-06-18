import React, { useState } from 'react'
import styled from 'styled-components'

const Upload = () => {

    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [favFood, setFavFood] = useState()
    const [loves, setLoves] = useState()
    const [res, setRes] = useState()

    async function postHamster() {

        const newHamster = JSON.stringify({
            "name": name,
            "age": age,
            "favFood": favFood,
            "loves": loves
        })
        
        const myHeaders = new Headers();
        myHeaders.append("Authorization", process.env.REACT_APP_APIKEY);
        myHeaders.append("Content-Type", "application/json");
                
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: newHamster,
          redirect: 'follow'
        };
        
        fetch("/api/hamsters/new", requestOptions)
        .then(res => res.text())
        .then(res => setRes(res))
        .catch(error => console.log('error', error));
    
        //   postHamsterImage()
    }

    // async function postHamsterImage() {
        
    //     const myHeaders = new Headers();
    //     myHeaders.append("Authorization", process.env.REACT_APP_APIKEY);
    //     myHeaders.append("Content-Type", "multipart/form-data");
                
    //     const formdata = new FormData();
    //     formdata.append("file", fileInput.files[0])
    //     formdata.append("name", "image")

    //     const requestOptions = {
    //       method: 'POST',
    //       headers: myHeaders,
    //       body: formdata,
    //       redirect: 'follow'
    //     };
        
    //     fetch("/api/hamsters/newimg", requestOptions)
    //       .then(response => response.text())
    //       .then(result => console.log(result))
    //       .catch(error => console.log('error', error));
    
    // }

    return(
        <>
        <StyledForm> 
            <h5>UPLOAD YOUR HAMSTER:</h5>
            <StyledInput type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
            <StyledInput type="number" placeholder="Age" onChange={e => setAge(e.target.value)}/>
            <StyledInput type="text" placeholder="Favourite food" onChange={e => setFavFood(e.target.value)}/>
            <StyledInput type="text" placeholder="What does it love most?" onChange={e => setLoves(e.target.value)}/>
            <input type="button" onClick={postHamster} value="UPLOAD"/>
            <StyledP>{res}</StyledP>
        </StyledForm>
        {/* <StyledForm method="post" action="/api/hamster/new" encType="multipart/form-data">
            <input type="file" accept="image/*" name="image"/>
        </StyledForm> */}
        </>
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
const StyledP = styled.p`
    margin: 0.5em;
`

// const SectionLeft = styled.section`
//     grid-area: left;
// `

// const SectionRight = styled.section`
//     grid-area: right
// `