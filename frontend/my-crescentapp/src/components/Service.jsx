import React from 'react'
import { GoDotFill } from "react-icons/go";

const Service = () => {
    return (
        <div className='mt-10 bg-gray-50 p-10'>

            <div className="service-title text-center ">
                <h3 className='text-[20px] text-gray-900 font-semibold'>Services</h3>
            </div>

            <div className='flex justify-center gap-30 mt-10'>
                <div>

                    <div className='flex gap-4 text-[24px] font-bold'>
                        <h2 className='text-[56px] text-gray-400 font-medium '>01</h2>
                        <div className='mt-4 ms-4' >
                            <h2>Retail Money-Changing</h2>
                            <h2 className='text-[17px]'>(Over-the-Counter)</h2>

                        </div>
                    </div>
                    <div>
                        <p className='text-[13px] text-gray-500 font-medium'>Our retail money-changing service allows you to conveniently <br /> exchange your currency in person at our local premises. Our <br /> experienced team will provide you with competitive exchange <br /> rates and excellent customer service.</p>
                    </div>
                    <div className='text-[13px] flex flex-col gap-4 text-gray-500 font-medium mt-4'>
                        <div className='flex gap-4'>
                            <GoDotFill className='text-green-600 vertical-1' size={15} />
                            <p>Experienced team</p>

                        </div>
                        <div className='flex gap-4'>
                            <GoDotFill className='text-green-600 mt-1' size={15} />
                            <p>Competitive exchange rates</p>

                        </div>
                    </div>
                </div>
                 <div className="w-[600px] h-[400px] overflow-hidden">
                    <img src="/service.png" className="w-full h-full object-contain" alt="" />
                </div>
            </div>
            <div className='flex justify-center gap-30 mt-20'>
                <div>

                    <div className='flex gap-4 text-[24px] font-bold'>
                        <h2 className='text-[56px] text-gray-400 font-medium '>02</h2>
                        <div className='mt-4 ms-4' >
                            <h2>Online Money-Changing</h2>
                            <h2 className='text-[17px]'>(Collection at Local Premises)</h2>

                        </div>
                    </div>
                    <div>
                        <p className='text-[13px] text-gray-500 font-medium'>With our online money-changing service, you can conveniently <br /> place your currency exchange order online and collect the <br /> exchanged currency at our local premises. Enjoy the flexibility <br /> and ease of online currency exchange.</p>
                    </div>
                    <div className='text-[13px] flex flex-col gap-4 text-gray-500 font-medium mt-4'>
                        <div className='flex gap-4'>
                            <GoDotFill className='text-green-600 vertical-1' size={15} />
                            <p>Place your currency exchange order online</p>

                        </div>
                        <div className='flex gap-4'>
                            <GoDotFill className='text-green-600 mt-1' size={15} />
                            <p>Collect the exchanged currency at our local premises</p>

                        </div>
                        <div className='flex gap-4'>
                            <GoDotFill className='text-green-600 mt-1' size={15} />
                            <p>Flexibility and ease of online currency exchange</p>

                        </div>
                    </div>
                </div>
                <div className="w-[600px] h-auto overflow-hidden">
                    <img src="/service-1.png" className="w-full h-full object-contain" alt="" />
                </div>
            </div>
            <div className='flex justify-center gap-30 mt-20'>
                <div>

                    <div className='flex gap-4 text-[24px] font-bold'>
                        <h2 className='text-[56px] text-gray-400 font-medium '>03</h2>
                        <div className='mt-4 ms-4' >
                            <h2>Online Money-Changing</h2>
                            <h2 className='text-[17px]'>(Collection at Foreign Premises)</h2>

                        </div>
                    </div>
                    <div>
                        <p className='text-[13px] text-gray-500 font-medium'>Our online money-changing service also offers the option to <br /> collect your exchanged currency at foreign premises. This <br /> service is ideal for travelers who prefer to have local currency <br /> ready before reaching their destination be it locally or overseas.</p>
                    </div>
                    <div className='text-[13px] flex flex-col gap-4 text-gray-500 font-medium mt-4'>
                        <div className='flex gap-4'>
                            <GoDotFill className='text-green-600 vertical-1' size={15} />
                            <p>Experienced team</p>

                        </div>
                        <div className='flex gap-4'>
                            <GoDotFill className='text-green-600 mt-1' size={15} />
                            <p>Competitive exchange rates</p>

                        </div>
                        <div className='flex gap-4'>
                            <GoDotFill className='text-green-600 mt-1' size={15} />
                            <p>Flexibility and ease of online currency exchange</p>

                        </div>
                        <div className='flex gap-4'>
                            <GoDotFill className='text-green-600 mt-1' size={15} />
                            <p>You can have the local currency ready before reaching your destination</p>

                        </div>
                    </div>
                </div>
                <div className="w-[500px] h-auto overflow-hidden">
                    <img src="/service-2.png" className="w-full h-full object-cover " alt="" />
                </div>
            </div>
            <div className='flex justify-center gap-30 mt-20'>
                <div>

                    <div className='flex gap-4 text-[24px] font-bold'>
                        <h2 className='text-[56px] text-gray-400 font-medium '>04</h2>
                        <div className='mt-4 ms-4' >
                            <h2>Retail Money-Changing</h2>
                            <h2 className='text-[17px]'>(Over-the-Counter)</h2>

                        </div>
                    </div>
                    <div>
                        <p className='text-[13px] text-gray-500 font-medium'>Our retail money-changing service allows you to conveniently <br /> exchange your currency in person at our local premises. Our <br /> experienced team will provide you with competitive exchange <br /> rates and excellent customer service.</p>
                    </div>
                    <div className='text-[13px] text-gray-500 flex flex-col gap-4 font-medium mt-4'>
                        <div className='flex gap-4'>
                            <GoDotFill className='text-green-600 vertical-1' size={15} />
                            <p>Allows you to send money to your loved ones quickly and securely</p>

                        </div>
                        <div className='flex gap-4'>
                            <GoDotFill className='text-green-600 mt-1' size={15} />
                            <p>Initiate a remittance transaction in our premises</p>

                        </div>
                        <div className='flex gap-4'>
                            <GoDotFill className='text-green-600 mt-1' size={15} />
                            <p>Staff will assist you in transferring funds to your desired destination.</p>

                        </div>
                        <div className='flex gap-4'>
                            <GoDotFill className='text-green-600 mt-1' size={15} />
                            <p>Low fees, and fast and reliable transfers</p>

                        </div>
                    </div>
                </div>
                <div className="w-[600px] h-auto overflow-hidden">
                    <img
                        src="/service-3.png"
                        alt="example"
                        className="w-full h-full object-contain"
                    />
                </div>

            </div>
            <div className='flex justify-center gap-30 mt-20'>
                <div>

                    <div className='flex gap-4 text-[24px] font-bold'>
                        <h2 className='text-[56px] text-gray-400 font-medium '>05</h2>
                        <div className='mt-4 ms-4' >
                            <h2>Retail Money-Changing</h2>
                            {/* <h2 className='text-[17px]'>(Over-the-Counter)</h2> */}

                        </div>
                    </div>
                    <div>
                        <p className='text-[13px] text-gray-500 font-medium'>Experience the convenience of our online remittance service, <br /> exchange your currency in person at our local premises. Our <br /> experienced team will provide you with competitive exchange <br /> rates and excellent customer service.</p>
                    </div>
                    <div className='text-[13px] text-gray-500 flex flex-col gap-4 font-medium mt-4'>
                        <div className='flex gap-4'>
                            <GoDotFill className='text-green-600 vertical-1' size={15} />
                            <p>Online remittance service with just a few clicks</p>

                        </div>
                        <div className='flex gap-4'>
                            <GoDotFill className='text-green-600 mt-1' size={15} />
                            <p>Low fees, and fast and reliable transfers</p>

                        </div>
                    </div>
                </div>
                <div className="w-[600px] h-auto overflow-hidden">
                    <img
                        src="/service-4.png"
                        alt="example"
                        className="w-full h-full object-contain"
                    />
                </div>

            </div>

        </div>
    )
}

export default Service
