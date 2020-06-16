import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Hamster from './Hamster'

const Battle = () => {

    const [hamster1, setHamster1] = useState('No data')    
    const [hamster2, setHamster2] = useState('No data')            

    useEffect(() => {

        async function fetchData() {
            const data = await fetch('http://localhost:3005/api/hamsters/random')
            const json = await data.json()
            
            await setHamster1({ id: json.randomHamster.id, name: json.randomHamster.name, age: json.randomHamster.age, matches: json.randomHamster.matches, wins: json.randomHamster.wins, losses: json.randomHamster.defeats, favFood: json.randomHamster.favFood, loves: json.randomHamster.loves, imgName: json.randomHamster.imgName})
        }
        fetchData()

    }, [])

    useEffect(() => {

        async function fetchData() {
            const data = await fetch('http://localhost:3005/api/hamsters/random')
            const json = await data.json()
            
            await setHamster2({ id: json.randomHamster.id, name: json.randomHamster.name, age: json.randomHamster.age, matches: json.randomHamster.matches, wins: json.randomHamster.wins, losses: json.randomHamster.defeats, favFood: json.randomHamster.favFood, loves: json.randomHamster.loves, imgName: json.randomHamster.imgName})
        }
        fetchData()

    }, [])

    return(
        <StyledDiv>
            <> <Hamster hamster={hamster1} />
            <StyledH1>VS</StyledH1>
            <Hamster hamster={hamster2} /> </>
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