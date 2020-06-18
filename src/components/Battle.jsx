import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Hamster from './Hamster'

const Battle = () => {

    const [hamster1, setHamster1] = useState('')    
    const [hamster2, setHamster2] = useState('')

    useEffect(() => {  

        try{
        async function fetchData() {
            const data = await fetch('/api/hamsters/random')
            const json = await data.json()
            
            setHamster1({ id: json.randomHamster.id, name: json.randomHamster.name, age: json.randomHamster.age, matches: json.randomHamster.matches, wins: json.randomHamster.wins, losses: json.randomHamster.defeats, favFood: json.randomHamster.favFood, loves: json.randomHamster.loves, imgName: json.randomHamster.imgName})
        
        }

        async function fetchData2() {
            const data = await fetch('/api/hamsters/random')
            const json = await data.json()
            
            setHamster2({ id: json.randomHamster.id, name: json.randomHamster.name, age: json.randomHamster.age, matches: json.randomHamster.matches, wins: json.randomHamster.wins, losses: json.randomHamster.defeats, favFood: json.randomHamster.favFood, loves: json.randomHamster.loves, imgName: json.randomHamster.imgName})
        
        }
        fetchData()
        fetchData2()
        
        }
        catch(err){
            console.error(err);
        }

    }, [])

    // if(hamster1.id === hamster2.id){
    //     fetchNewHamster()
    // }

    // async function fetchNewHamster(){

    //     const data = await fetch('/api/hamsters/random')
    //     const json = await data.json()
        
    //     setHamster2({ id: json.randomHamster.id, name: json.randomHamster.name, age: json.randomHamster.age, matches: json.randomHamster.matches, wins: json.randomHamster.wins, losses: json.randomHamster.defeats, favFood: json.randomHamster.favFood, loves: json.randomHamster.loves, imgName: json.randomHamster.imgName})
    // }

    return(
        <StyledDiv>
            <> <Hamster hamster={hamster1} otherHamster={hamster2}/>
            <StyledH1>VS</StyledH1>
            <Hamster hamster={hamster2} otherHamster={hamster1}/> </>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 40% auto 40%;
    grid-template-areas: "left middle right";
`

const StyledH1 = styled.h1`
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Battle