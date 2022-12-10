import React from 'react'
import {MdHomeFilled,
        MdOutlineVideoLibrary, 
        MdHistory,
        MdSubscriptions,
        MdOutlineSlowMotionVideo,
        MdOutlineSmartDisplay,
        MdOutlineWatchLater,
        MdThumbUpAlt,
        MdOutlineSportsVolleyball,
        MdSettings,
        MdOutlinedFlag,
        MdOutlineHelpOutline,
        MdOutlineFeedback,
         } from "react-icons/md"

import {TbMusic, TbDeviceGamepad2} from 'react-icons/tb'
import {FaRegCompass} from "react-icons/fa"
import {GiFilmStrip} from 'react-icons/gi'
import { icons } from 'react-icons'
export default function Sidebar() {

    const mainLinks = [
        {
            icon:<MdHomeFilled className='text-xl' />,
            name:"Home"
        },
        {
            icon:<FaRegCompass className='text-xl' />,
            name:"Explore"
        },
        {
            icon:<MdOutlineSlowMotionVideo className='text-xl' />,
            name:"Shorts"
        },
        {
            icon:<MdSubscriptions className='text-xl' />,
            name:"Subscriptions"
        }
    ]

    const secondaryLinks =[
        {
            icon:<MdOutlineVideoLibrary className='text-xl' />,
            name:"Library"
        },
        {
            icon:<MdHistory className='text-xl' />,
            name:"History"
        },
        {
            icon:<MdOutlineSmartDisplay className='text-xl' />,
            name:"Your Videos"
        },
        {
            icon:<MdOutlineWatchLater className='text-xl' />,
            name:"Watch Later"
        },
        {
            icon:<MdThumbUpAlt className='text-xl' />,
            name:"Liked Videos "
        },
    ]

    const subscriptionsLinks = [
        {
            icon:<TbMusic className='text-xl' />,
            name:"Music"
        },
        {
            icon:<MdOutlineSportsVolleyball className='text-xl' />,
            name:"Sport"
        },
        {
            icon:<TbDeviceGamepad2 className='text-xl' />,
            name:"Gaming"
        },
        {
            icon:<GiFilmStrip className='text-xl' />,
            name:"Films"
        },
    ]
    
    const helplinks = [
        {
            icon:<MdSettings className='text-xl' />,
            name:"Settings"
        },
        {
            icon:<MdOutlinedFlag className='text-xl' />,
            name:"Report history"
        },
        {
            icon:<MdOutlineHelpOutline className='text-xl' />,
            name:"Help"
        },
        {
            icon:<MdOutlineFeedback className='text-xl' />,
            name:"Send Feedback"
        },
    ]

    const textLinks = [
        [
            "About",
            "Press",
            "Copyright",
            "Contact us",
            "Creator",
            "Advertise",
            "Developers"
        ],
        [
            "Terms",
            "Privacy",
            "Policy & Safey",
            "How Youtube works",
            "Test new features",
        ]
    ]
  return (
    <div className='w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 sidebar'>
        <ul className="flex flex-col border-b-2 border-gray-700">
            {mainLinks.map(({icon, name})=>{
                return(
                    <li key={name}
                        className={`pl-6 py-3 hover:bg-zinc-600 ${name=== "Home"?"bg-slat-600":""}`}>
                        <a href='#' className='flex items-center gap-5'>
                        {icon}
                        <span className='text-sm tracking-wider'>{name}</span>
                        </a>  
                    </li>
                )
            })}
        </ul>
        <ul className="flex flex-col border-b-2 border-gray-700">
            {secondaryLinks.map(({icon, name})=>{
                return(
                    <li key={name}
                        className={`pl-6 py-3 hover:bg-zinc-600`}>
                        <a href='#' className='flex items-center gap-5'>
                        {icon}
                        <span className='text-sm tracking-wider'>{name}</span>
                        </a>  
                    </li>
                )
            })}
        </ul>
        <ul className="flex flex-col border-b-2 border-gray-700">
            {subscriptionsLinks.map(({icon, name})=>{
                return(
                    <li key={name}
                        className={`pl-6 py-3 hover:bg-zinc-600`}>
                        <a href='#' className='flex items-center gap-5'>
                        {icon}
                        <span className='text-sm tracking-wider'>{name}</span>
                        </a>  
                    </li>
                )
            })}
        </ul>
        <ul className="flex flex-col border-b-2 border-gray-700">
            {helplinks.map(({icon, name})=>{
                return(
                    <li key={name}
                        className={`pl-6 py-3 hover:bg-zinc-600`}>
                        <a href='#' className='flex items-center gap-5'>
                        {icon}
                        <span className='text-sm tracking-wider'>{name}</span>
                        </a>  
                    </li>
                )
            })}
        </ul>
    </div>

  )
}