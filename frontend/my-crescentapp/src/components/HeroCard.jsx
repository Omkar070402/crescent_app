import React from 'react'
import { BiPurchaseTagAlt } from "react-icons/bi";
import { FiChrome } from "react-icons/fi";
import { MdLockPerson } from "react-icons/md";


const HeroCard = () => {

    const cards = [
        {
            id: 1,
            icon: <BiPurchaseTagAlt />,
            title: "Efficient",
            para: "Stop Queuing. Order Online. Collect Anytime"

        },
        {
            id: 2,
            icon: <FiChrome/>,
            title: "Competitive Rates",
            para: "Competitive online currency bookings (From 11 Oct 2024)"

        },
        {
            id: 3,
            icon: <MdLockPerson/>,
            title: "Secure",
            para: "Secure & Reliable online transfers (From 11 Oct 2024)"

        },

    ]

    return (
        <div className="flex gap-6 justify-center relative top-35" >

            {
                cards.map((val, index) => (

                    <div key={val.id} className="card shadow-lg bg-white w-82 h-25 mt-3 flex  gap-10 justify-around p-5 rounded-2xl">
                        <div>
                            {val.icon}
                        </div>
                        <div>
                            <h6 className='text-[13px] text-gray-600'>{val.title}</h6>
                            <p className='text-[16px] font-medium text-gray-800'>{val.para}</p>
                        </div>
                    </div>

                ))
            }


        </div>
    )
}

export default HeroCard
