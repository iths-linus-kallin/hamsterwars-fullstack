import React from 'react';
import styled from 'styled-components';

const Matchup = () => {
    return(
        <div>
            <HamsterDiv>
                <HamsterName></HamsterName>
            </HamsterDiv>
        </div>
    )
}

const HamsterDiv = styled.div`
    display: flex;
    align-items: flex-end;
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

export default Matchup;