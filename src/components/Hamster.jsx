import React from 'react'
import styled from 'styled-components'

const Hamster = (props) => {
    
    function handleClick(props) {
                
        let game = {
            "winner": {"id": props.hamster.id},
            "contestants": [
                {"id": props.hamster.id},
                {"id": props.otherHamster.id}
            ]
        }

        async function postGame(url = '/api/games', data=game) {
            
            await fetch(url, {
                'method': 'POST',
                'headers': {
                    'Content-Type': 'application/json',
                    'authorization': process.env.REACT_APP_APIKEY,
                },
                'body': JSON.stringify(data)
            })
            // .then(res => res.json())
            .then(res => res.text())
            .then(text => console.log(text))
            .catch((error) => {
            console.error('Error:', error);
            })            
        }

        let hamsterWinId = props.hamster.id

        let hamsterLoseId = props.otherHamster.id

        let hamsterWin = {
            "wins": 1,
            "defeats": 0
        }

        let hamsterLose = {
            "wins": 0,
            "defeats": 1
        }

        async function putHamsters(url = `/api/hamsters/${hamsterWinId}/results`, data = hamsterWin, url2 = `http://localhost:3005/api/hamsters/${hamsterLoseId}/results`, data2 = hamsterLose) {
            
            await fetch(url, {
                'method': 'PUT',
                'headers': {
                    'Content-Type': 'application/json',
                    'authorization': process.env.REACT_APP_APIKEY,
                },
                'body': JSON.stringify(data)
            })
            // .then(res => res.json())
            .then(res => res.text())
            .then(text => console.log(text))
            .catch((error) => {
            console.error('Error:', error);
            })    
            
            await fetch(url2, {
                'method': 'PUT',
                'headers': {
                    'Content-Type': 'application/json',
                    'authorization': process.env.REACT_APP_APIKEY,
                },
                'body': JSON.stringify(data2)
            })
            // .then(res => res.json())
            .then(res => res.text())
            .then(text => console.log(text))
            .catch((error) => {
            console.error('Error:', error);
            })     
        }

        postGame()
        putHamsters()
    }     

    return(
        <div>
            {props.hamster 
            ? <> 
            <HamsterDiv onClick={() => handleClick(props)} style={{backgroundImage: `url(${'/images/hamsters/' + props.hamster.imgName})`}}>
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
                        <p>{props.hamster.favFood[0].toUpperCase() + props.hamster.favFood.slice(1)}</p>
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
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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