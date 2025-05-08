import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

import CSKLogo from '../assets/IPLTEAMS/Chennai-Super-Kings-Logo-PNG.png'
import MiLogo from '../assets/IPLTEAMS/Mumbai-Indians-Logo-PNG.png'
import RCBLogo from '../assets/IPLTEAMS/Royal-Challengers-Bangalore-Logo-PNG.png'
import KkrLogo from '../assets/IPLTEAMS/Kolkata-Knight-Riders-Logo-PNG.png'
import RRLogo from '../assets/IPLTEAMS/Rajasthan-Royals-Logo-PNG.png'
import SRHLogo from '../assets/IPLTEAMS/Sunrisers-Hydrabad-Logo-PNG.png'
import DCLogo from '../assets/IPLTEAMS/Delhi-Capitals-Logo-PNG.png'
import PbksLogo from '../assets/IPLTEAMS/Panjab Kings Logo.jpeg'
import LsgLogo from '../assets/IPLTEAMS/Lakhnou-Logo-PNG.png'
import GtLogo from '../assets/IPLTEAMS/Gujarat_Titans_Logo.svg.png'



import TeamData from '../../full_ipl_2024_teams_players.json'


const Team = () => {

    const teamsLogo = [CSKLogo, MiLogo, RCBLogo, KkrLogo, RRLogo, SRHLogo, DCLogo, PbksLogo, LsgLogo, GtLogo]


    const { team } = useParams()


    const oneTeam = TeamData.find((team1) => team1.shortName == team)




    return (
        <div>


            <br />

            <ul className='mt-10  h-100'>

                {

                    TeamData.map((team1, index) => {
                        // console.log(team.shortName);
                        if (team1.shortName === team) {
                            console.log(team1);

                            return (
                                <li className='  border-2 h-100 w-full  flex justify-start items-center px-20 gap-20  '>
                                    
                                    <Link className='h-80 w-80 flex flex-col justify-center items-center bg-white ' to={team1.shortName}>
                                        <img src={teamsLogo[index]} alt="" className=' h-[80%] ' />
                                    </Link>

                                    <div className='flex flex-col justify-center items-start gap-6 '>
                                        <h1 className='text-2xl font-bold text-yellow-300'>Captain - <span className='font-bold text-white text-2xl'>{team1.captain}</span> </h1>
                                        <h1 className='text-2xl font-bold text-yellow-300'>Tame Name - <span className='font-bold text-white text-2xl'>{team1.team}</span> </h1>
                                        <h1 className='text-2xl font-bold text-yellow-300'>Short name - <span className='font-bold text-white text-2xl'>{team1.shortName}</span> </h1>
                                    </div>

                                    <div>
                                        {
                                            team1.players.map((play) => {
                                                if (play.name === team1.captain) {
                                                    return (
                                                        <div>
                                                            <h1 className='text-2xl font-bold text-yellow-300'>Captain Name - <span className='font-bold text-white text-2xl'>{play.name}</span> </h1>
                                                            <h1 className='text-2xl font-bold text-yellow-300'>Age - <span className='font-bold text-white text-2xl'>{play.age}</span> </h1>
                                                            <h1 className='text-2xl font-bold text-yellow-300'>Matches - <span className='font-bold text-white text-2xl'>{play.matches}</span> </h1>
                                                            <h1 className='text-2xl font-bold text-yellow-300'>Role - <span className='font-bold text-white text-2xl'>{play.role}</span> </h1>
                                                            <h1 className='text-2xl font-bold text-yellow-300'>Runs - <span className='font-bold text-white text-2xl'>{play.runs}</span> </h1>
                                                            <h1 className='text-2xl font-bold text-yellow-300'>Strike Rate - <span className='font-bold text-white text-2xl'>{play.strikeRate}</span> </h1>
                                                            <h1 className='text-2xl font-bold text-yellow-300'>Wickets - <span className='font-bold text-white text-2xl'>{play.wickets}</span> </h1>
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                    </div>

                                    <div>
                                        <h1 className='text-2xl font-bold text-yellow-300'> Team Players</h1>
                                        {
                                            team1.players.map((play) => {
                                                return (
                                                    <div>
                                                        <h1 className=' font-bold '>
                                                            <Link to={play.name}>
                                                                <span className='font-bold text-white text-xl'>{play.name}</span>
                                                            </Link>
                                                        </h1>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </li>
                            )
                        }
                    })
                }



            </ul>

            <hr />
            <hr />
            <hr />
            <hr />

            <div>
                <Outlet />
            </div>

        </div>
    )
}

export default Team