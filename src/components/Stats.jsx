import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import High5 from './High5'
import Low5 from './Low5'

const Stats = () => {
    const [totalGames, setTotalGames] = useState()
    const [favFood, setFavFood] = useState()

    useEffect(() => {

        async function fetchData() {
            const data = await fetch('http://localhost:3005/api/stats/total')
            const json = await data.json()

            setTotalGames(json.totalGames)
        }
        fetchData()
    }, [])

    useEffect(() => {

        async function fetchData() {
            const data = await fetch('http://localhost:3005/api/stats/favfood')
            const json = await data.json()

            setFavFood(json.mostFavFood)
        }
        fetchData()
    }, [])

    return(
        <StyledDiv>
            <StatsLeft>
                <High5 />
            </StatsLeft>
            <StatsMiddle>
                <H5Middle>Total games played:</H5Middle>
                <PMiddle>{totalGames ? totalGames : ''}</PMiddle>
                <H5Middle>Most favourite food:</H5Middle>
                <PMiddle>{favFood ? favFood : ''}</PMiddle>
                <H5Middle>Blessed players:</H5Middle>
                <PMiddle>7</PMiddle>
            </StatsMiddle>
            <StatsRight>
                <Low5 />
            </StatsRight>
        </StyledDiv>
    )

}

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 30% auto 30%;
    grid-template-areas: "left middle right";
    background-color: white;
    padding: 2em;
    border-radius: 1em;
    text-align: left;
`
const StatsLeft = styled.section`
    grid-area: left;
`
const StatsMiddle = styled.section`
    grid-area: middle;
`
const StatsRight = styled.section`
    grid-area: right;
    text-align: right;
`
const H5Middle = styled.h5`
    margin-bottom: 0;
    text-align: center;
`
const PMiddle = styled.p`
    text-align: center;
    margin-bottom: 2em;
`

export default Stats