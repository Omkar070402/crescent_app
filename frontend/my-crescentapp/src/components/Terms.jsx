import React from 'react'

const Terms = () => {

    const terms = [
        {
            id: 1,
            info: 'By using our money-changing and remittance services, you agree to comply with the following terms and conditions.'
        },
        {
            id: 2,
            info: 'We reserve the right to modify or terminate our services at any time without prior notice.'
        },
        {
            id: 3,
            info: 'You are responsible for providing accurate and up-to-date information during the registration and transaction process.'
        },
        {
            id: 4,
            info: 'Our services are subject to applicable laws and regulations regarding money-changing and remittance.'
        },
        {
            id: 5,
            info: ' The exchange rates provided are based on real-time market conditions and may be subject to fluctuations.'
        },
        {
            id: 6,
            info: 'We strive to ensure the security and confidentiality of your personal information as outlined in our Privacy Policy.'
        },
    ]

    return (
        <div className='mt-25'>

            <section className='terms-services'>
                <div>

                    <div className="title text-[20px] font-bold text-center">Terms of Service</div>

                    <div className="flex justify-center mt-5 ">
                        <div className="flex flex-col gap-4 max-w-[900px] w-full shadow-sm p-5 rounded-2xl">
                            {terms.map((val) => (
                                <p key={val.id} className="text-[13px] text-gray-800 text-left">
                                    {val.id}. {val.info}
                                </p>
                            ))}
                        </div>
                    </div>



                </div>
            </section>

        </div>
    )
}

export default Terms
