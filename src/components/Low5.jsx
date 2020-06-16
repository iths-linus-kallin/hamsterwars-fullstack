import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Low5 = () => {
   
    const [low5, setLow5] = useState()
    const [number, setNumber] = useState()

    useEffect(() => {

        async function fetchData() {
            const data = await fetch('http://localhost:3005/api/charts/bottom')
            const json = await data.json()
            
            let object = {}
            
            object.name1 = json.bottomFiveHamsters[0].name
            object.name2 = json.bottomFiveHamsters[1].name
            object.name3 = json.bottomFiveHamsters[2].name
            object.name4 = json.bottomFiveHamsters[3].name
            object.name5 = json.bottomFiveHamsters[4].name
            object.imgName1 = json.bottomFiveHamsters[0].imgName
            object.imgName2 = json.bottomFiveHamsters[1].imgName
            object.imgName3 = json.bottomFiveHamsters[2].imgName
            object.imgName4 = json.bottomFiveHamsters[3].imgName
            object.imgName5 = json.bottomFiveHamsters[4].imgName

            setLow5(object)
        }
        fetchData()
    }, [])

    useEffect(() => {

        async function fetchData() {
            const data = await fetch('http://localhost:3005/api/hamsters')
            const json = await data.json()

            setNumber(json.allHamsters.length)
        }
        fetchData()
    }, [])

    return(
        <div>
            {low5
            ?
            <> <H5Red>LOW 5</H5Red>
                <Wrapper>
                    <StyledP>{low5.name1}</StyledP><StyledImg src={'/images/hamsters/' + low5.imgName1} alt={`"Hamster nr. " + ${number -4}`}/><StyledP><span> {number -4}</span></StyledP>
                </Wrapper>
                <Wrapper>
                    <StyledP>{low5.name2}</StyledP><StyledImg src={'/images/hamsters/' + low5.imgName2} alt={`"Hamster nr." + ${number -3}`}/><StyledP><span> {number -3}</span></StyledP>
                </Wrapper>
                <Wrapper>
                    <StyledP>{low5.name3}</StyledP><StyledImg src={'/images/hamsters/' + low5.imgName3} alt={`"Hamster nr." + ${number -2}`}/><StyledP><span> {number -2}</span></StyledP>
                </Wrapper>
                <Wrapper>                    
                    <StyledP>{low5.name4}</StyledP><StyledImg src={'/images/hamsters/' + low5.imgName4} alt={`"Hamster nr." + ${number -1}`}/><StyledP><span> {number -1}</span></StyledP>
                </Wrapper>
                <Wrapper>                    
                    <StyledP>{low5.name5}</StyledP><StyledImg src={'/images/hamsters/' + low5.imgName5} alt={`"Hamster nr." + ${number}`}/><StyledP><span> {number}</span></StyledP>
                </Wrapper> </>
            : 'no data'
            }
        </div>
    )
}

const H5Red = styled.h5`
    color: red;
`
const StyledP = styled.p`
    padding-left: 0;
    margin-bottom: 1.5em;
`
const StyledImg = styled.img`
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
    margin-left: 1em;
    margin-right: 1em;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

export default Low5