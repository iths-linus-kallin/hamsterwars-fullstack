import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Hamster from './Hamster'


const Matchup = () => {
    
    const [hamster1, setHamster1] = useState()
    const [hamster2, setHamster2] = useState()
    const [id1, setId1] = useState()
    const [id2, setId2] = useState()
    
    useEffect(() => {
        async function fetchData() {
            
            const data = await fetch(`/api/hamsters/${id1}/${id2}`)
            const json = await data.json() 
            console.log(json);          
            
            setHamster1({ id: json.twoHamsters[0].id, name: json.twoHamsters[0].name, age: json.twoHamsters[0].age, matches: json.twoHamsters[0].matches, wins: json.twoHamsters[0].wins, losses: json.twoHamsters[0].defeats, favFood: json.twoHamsters[0].favFood, loves: json.twoHamsters[0].loves, imgName: json.twoHamsters[0].imgName})
            setHamster2({ id: json.twoHamsters[1].id, name: json.twoHamsters[1].name, age: json.twoHamsters[1].age, matches: json.twoHamsters[1].matches, wins: json.twoHamsters[1].wins, losses: json.twoHamsters[1].defeats, favFood: json.twoHamsters[1].favFood, loves: json.twoHamsters[1].loves, imgName: json.twoHamsters[1].imgName})

        }
        fetchData()

    }, [])
    
    return(
        <Router>
            <Route path="/matchup/:id1/:id2">
                <StyledDiv>
                    <> <Hamster hamster={hamster1}/>
                    <StyledH1>WON</StyledH1>
                    <Hamster hamster={hamster2}/> </>
                </StyledDiv>
            </Route>
        </Router>
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