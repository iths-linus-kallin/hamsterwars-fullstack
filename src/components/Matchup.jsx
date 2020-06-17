import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Hamster from './Hamster'

const Matchup = () => {
    
    const [hamsterId1, setHamsterId1] = useState('')
    const [hamsterId2, setHamsterId2] = useState('')
    const [hamster1, setHamster1] = useState()
    const [hamster2, setHamster2] = useState()

    let {id1,id2} = useParams()
    
    useEffect(() => {

        async function fetchData() {
            const data = await fetch('http://localhost:3005/api/games/latest')
            const json = await data.json()            

            console.log(json);
            
            setHamsterId1({ id: json.latestGame[0].winner.id})
            setHamsterId2({ id: json.latestGame[0].contestants[1].id})
            
            const data2 = await fetch(`http://localhost:3005/api/hamsters/8/9`)
            const json2 = await data.json() 
            console.log(json2);
            
            setHamster1({ id: json2.twoHamsters[0].id, name: json.twoHamsters[0].name, age: json.twoHamsters[0].age, matches: json.twoHamsters[0].matches, wins: json.twoHamsters[0].wins, losses: json.twoHamsters[0].defeats, favFood: json.twoHamsters[0].favFood, loves: json.twoHamsters[0].loves, imgName: json.twoHamsters[0].imgName})
            setHamster2({ id: json2.twoHamsters[1].id, name: json.twoHamsters[1].name, age: json.twoHamsters[1].age, matches: json.twoHamsters[1].matches, wins: json.twoHamsters[1].wins, losses: json.twoHamsters[1].defeats, favFood: json.twoHamsters[1].favFood, loves: json.twoHamsters[1].loves, imgName: json.twoHamsters[1].imgName})

        }
        fetchData()

    }, [])

    useEffect(() => {

        try{

            async function fetchData() {
                const data = await fetch(`http://localhost:3005/api/hamsters/8/9`)
                const json = await data.json() 
                console.log(json);
                
                setHamster1({ id: json.twoHamsters[0].id, name: json.twoHamsters[0].name, age: json.twoHamsters[0].age, matches: json.twoHamsters[0].matches, wins: json.twoHamsters[0].wins, losses: json.twoHamsters[0].defeats, favFood: json.twoHamsters[0].favFood, loves: json.twoHamsters[0].loves, imgName: json.twoHamsters[0].imgName})
                setHamster2({ id: json.twoHamsters[1].id, name: json.twoHamsters[1].name, age: json.twoHamsters[1].age, matches: json.twoHamsters[1].matches, wins: json.twoHamsters[1].wins, losses: json.twoHamsters[1].defeats, favFood: json.twoHamsters[1].favFood, loves: json.twoHamsters[1].loves, imgName: json.twoHamsters[1].imgName})
            }
            fetchData()

        } catch(err) {
            console.error(err);
        }

    }, [])
    
    return(
        <StyledDiv>
            <> <Hamster hamster={hamster1}/>
            <StyledH1>WON</StyledH1>
            <Hamster hamster={hamster2}/> </>
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

export default Matchup;