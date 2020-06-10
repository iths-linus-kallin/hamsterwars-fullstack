import React from 'react'
import styled from 'styled-components'

const Hamster = () => {

    return(
        <div>
            <HamsterDiv>
                <HamsterName>Allan</HamsterName>
            </HamsterDiv>
            <HamsterStats>
                <StatsLeft>Wins:</StatsLeft><StatsRight>51</StatsRight>
                <StatsLeft>Losses:</StatsLeft>
                <StatsLeft>Matches:</StatsLeft>
                <StatsLeft>Fav Food:</StatsLeft>
                <StatsLeft>Loves:</StatsLeft>
            </HamsterStats>
        </div>
    )

}

const HamsterDiv = styled.div`
    display: flex;
    align-items: flex-end;
    background-image: url('/images/hamster-5.jpg');
    background-size: 100%;
    height: 250px;
    border-radius: 1em;
    margin-bottom: 1em;
    padding: 1em;
    box-shadow: 3px 3px 15px white;
    transition: all .1s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`

const HamsterName = styled.h2`
    color: white;
    -webkit-text-stroke: .5px black;
`

const HamsterStats = styled.div`
    display: grid;
    grid-template-columns: 60% auto;
    grid-template-areas: "left right";
    background-color: white;
    border-radius: 1em;
    padding: 2em;
    box-shadow: 3px 3px 15px white;
`
const StatsLeft = styled.p`
    grid-area: left;
    text-align: right;
`
const StatsRight = styled.p`
    grid-area: right;
    text-align: left;
`

export default Hamster