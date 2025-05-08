import React from 'react'
import { useParams } from 'react-router-dom'

import TeamData from '../../full_ipl_2024_teams_players.json'


const Player = () => {

    const { player, team } = useParams()

    const oneTeam = TeamData.find((team1) => team1.shortName == team)


    const finalPlayer = decodeURIComponent(player);

    const playerData = oneTeam.players.find((cricketer) => cricketer.name == finalPlayer  )

    // console.log(playerData);

    return (
        <div>
            <h1>Name: {playerData.name}</h1>
            <h1>Age: {playerData.age}</h1>
            <h1>Role: {playerData.role}</h1>
            <h1>Matches: {playerData.matches}</h1>
            <h1>Runs: {playerData.runs}</h1>
            <h1>StrikeRate: {playerData.strikeRate}</h1>
            <h1>Wickets: {playerData.wickets}</h1>
        </div>
    )
}

export default Player