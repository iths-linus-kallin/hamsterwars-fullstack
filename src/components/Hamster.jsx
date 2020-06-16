import React from 'react'
import styled from 'styled-components'
import dotenv from 'dotenv'

dotenv.config()

const Hamster = (props) => {
    
    // const backgroundImage = `url('/images/hamsters/' + ${props.hamster.imgName})`    

    function handleClick(props) {
        
        console.log(props);
        
        let object = {
            "winner": {"id": props.id},
            "contestants": [
                {"id": props.id},
                {"id": 7}
            ]
        }

        async function postData(url = 'http://localhost:3005/api/games', data=object) {
            
            await fetch(url, {
                'method': 'POST',
                'headers': {
                    'Content-Type': 'application/json'
                },
                'authorization': 'AIzaSyB3iRmatF29AaJzTn6TZAEyIvI4ip30GFM',
                'body': JSON.stringify(data)
            })
            // .then(res => res.json())
            .then(res => res.text())
            .then(text => console.log(text))
              .catch((error) => {
                console.error('Error:', error);
              })
            
            
            
        }
        postData()
    }

    return(
        <div>
            {props.hamster 
            ? <> 
            <HamsterDiv onClick={() => handleClick(props.hamster)}>
            <HamsterName>{props.hamster.name}</HamsterName>
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
                        <p>{props.hamster.wins}</p>
                        <p>{props.hamster.losses}</p>
                        <p>{props.hamster.matches ? props.hamster.matches : '0'}</p>
                        <p>{props.hamster.favFood}</p>
                        <p>{props.hamster.loves}</p>
                    </HamsterStatsRight>
                </HamsterStats> 
            </>
            : ''} 

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