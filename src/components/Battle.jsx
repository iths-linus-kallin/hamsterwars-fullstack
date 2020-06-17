import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Hamster from './Hamster'

const Battle = () => {

    const [hamster1, setHamster1] = useState('')    
    const [hamster2, setHamster2] = useState('')
    // const [specHamster1, setSpecHamster1] = useState('')            
    // const [specHamster2, setSpecHamster2] = useState('')            

    useEffect(() => {

        async function fetchData() {
            const data = await fetch('http://localhost:3005/api/hamsters/random')
            const json = await data.json()
            
            setHamster1({ id: json.randomHamster.id, name: json.randomHamster.name, age: json.randomHamster.age, matches: json.randomHamster.matches, wins: json.randomHamster.wins, losses: json.randomHamster.defeats, favFood: json.randomHamster.favFood, loves: json.randomHamster.loves, imgName: json.randomHamster.imgName})
        }
        fetchData()

    }, [])

    useEffect(() => {

        async function fetchData() {
            const data = await fetch('http://localhost:3005/api/hamsters/random')
            const json = await data.json()
            
            setHamster2({ id: json.randomHamster.id, name: json.randomHamster.name, age: json.randomHamster.age, matches: json.randomHamster.matches, wins: json.randomHamster.wins, losses: json.randomHamster.defeats, favFood: json.randomHamster.favFood, loves: json.randomHamster.loves, imgName: json.randomHamster.imgName})
        }
        fetchData()

    }, [])

    // useEffect(() => {

    //     async function fetchData() {
    //         const data = await fetch(`http://localhost:3005/api/hamsters/${specHamster1.id}/${specHamster2.id}`)
    //         const json = await data.json()
            
    //         setSpecHamster1({ id: json.twoHamsters[0].id, name: json.twoHamsters[0].name, age: json.twoHamsters[0].age, matches: json.twoHamsters[0].matches, wins: json.twoHamsters[0].wins, losses: json.twoHamsters[0].defeats, favFood: json.twoHamsters[0].favFood, loves: json.twoHamsters[0].loves, imgName: json.twoHamsters[0].imgName})
    //         setSpecHamster2({ id: json.twoHamsters[1].id, name: json.twoHamsters[1].name, age: json.twoHamsters[1].age, matches: json.twoHamsters[1].matches, wins: json.twoHamsters[1].wins, losses: json.twoHamsters[1].defeats, favFood: json.twoHamsters[1].favFood, loves: json.twoHamsters[1].loves, imgName: json.twoHamsters[1].imgName})
    //     }
    //     fetchData()

    // }, [specHamster1, specHamster2])

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