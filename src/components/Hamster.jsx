import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Hamster = () => {
    
    const [hamster, setHamster] = useState('No Hamster')

    // useEffect(() => {
    //     let response = async () => {
    //         await fetch('http://localhost:3005/api/hamsters/random')
    //         .then(response => response.json())
    //         .then(hamster => console.log(hamster))
    //     }
    //     setHamster(response)
    // }, [])


    return(
        <div>
            <HamsterDiv>
                <HamsterName>{hamster}</HamsterName>
            </HamsterDiv>
            <HamsterStats>
                <HamsterStatsLeft>
                    <p>Wins:</p>
                    <p>Losses:</p>
                    <p>Matches:</p>
                    <p>Fav Food:</p>
                    <p>Loves:</p>
                </HamsterStatsLeft>
                <HamsterStatsRight>
                    <p>{hamster}</p>
                    <p>8</p>
                    <p>32</p>
                    <p>Salad</p>
                    <p>Humping</p>
                </HamsterStatsRight>
            </HamsterStats>
        </div>
    )

}

const HamsterDiv = styled.div`
    display: flex;
    align-items: flex-end;
    background-image: url('/images/hamster-5.jpg');
    background-size: 100%;
    /* object-fit: cover; */
    height: 250px;
    border-radius: 1em;
    border: 3px solid white;
    margin-bottom: 1em;
    padding: 1em;
    transition: all .1s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
`

const HamsterName = styled.h2`
    color: white;
    -webkit-text-stroke: .5px black;
`

const HamsterStats = styled.div`
    display: flex;
    background-color: white;
    border-radius: 1em;
    padding: 2em;
    font-size: 0.8em;
`
const HamsterStatsLeft = styled.div`
    text-align: right;
    width: 50%
`
const HamsterStatsRight = styled.div`
    text-align: left;
    width: 50%;
    margin-left: .5em;
`

export default Hamster