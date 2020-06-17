import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const High5 = () => {
   
    const [top5, setTop5] = useState()

    useEffect(() => {

        async function fetchData() {
            const data = await fetch('/api/charts/top')
            const json = await data.json()
            let object = {}
            
            object.name1 = json.topFiveHamsters[0].name
            object.name2 = json.topFiveHamsters[1].name
            object.name3 = json.topFiveHamsters[2].name
            object.name4 = json.topFiveHamsters[3].name
            object.name5 = json.topFiveHamsters[4].name
            object.imgName1 = json.topFiveHamsters[0].imgName
            object.imgName2 = json.topFiveHamsters[1].imgName
            object.imgName3 = json.topFiveHamsters[2].imgName
            object.imgName4 = json.topFiveHamsters[3].imgName
            object.imgName5 = json.topFiveHamsters[4].imgName

            setTop5(object)
        }
        fetchData()
    }, [])

    return(
        <div>
            {top5
            ?
            <> <H5Green>HIGH 5</H5Green>
                <Wrapper>
                    <StyledP><span>1 </span></StyledP><StyledImg src={'/images/hamsters/' + top5.imgName1} alt="Hamster nr. 1"/><StyledP>{top5.name1}</StyledP>
                </Wrapper>
                <Wrapper>
                    <StyledP><span>2 </span></StyledP><StyledImg src={'/images/hamsters/' + top5.imgName2} alt="Hamster nr. 2"/><StyledP>{top5.name2}</StyledP>
                </Wrapper>
                <Wrapper>    
                    <StyledP><span>3 </span></StyledP><StyledImg src={'/images/hamsters/' + top5.imgName3} alt="Hamster nr. 3"/><StyledP>{top5.name3}</StyledP>
                </Wrapper>
                <Wrapper>    
                    <StyledP><span>4 </span></StyledP><StyledImg src={'/images/hamsters/' + top5.imgName4} alt="Hamster nr. 4"/><StyledP>{top5.name4}</StyledP>
                </Wrapper>
                <Wrapper>    
                    <StyledP><span>5 </span></StyledP><StyledImg src={'/images/hamsters/' + top5.imgName5} alt="Hamster nr. 5"/><StyledP>{top5.name5}</StyledP>
                </Wrapper> </>
            : 'no data'
            }
        </div>
    )
}

const H5Green = styled.h5`
    color: green;
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
    justify-content: flex-start;
    transition: all .1s ease-in-out;

    &:hover {
        transform: scale(1.2);
    }
`

export default High5