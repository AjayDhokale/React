import React from 'react'
import TeamData from '../../full_ipl_2024_teams_players.json'
import { Link, Outlet } from 'react-router-dom'

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


const AllTeams = () => {

    const teamsLogo = [CSKLogo, MiLogo, RCBLogo, KkrLogo, RRLogo, SRHLogo, DCLogo, PbksLogo, LsgLogo, GtLogo]



    return (
        <div  className='bg-linear-to-t from-sky-500 to-indigo-500 '>
            <ul className='flex justify-center items-center flex-wrap gap-20 py-30  h-[100%]'>
                {

                    TeamData.map((team, index) => {
                        return (
                            <li className='  border-2 h-50 bg-white  '>
                                <Link className='h-50 w-60 flex flex-col justify-center items-center' 
                                to={team.shortName}>
                                    <img src={teamsLogo[index]} alt="" className=' h-[80%] ' />
                                    {team.team}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>

            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default AllTeams
