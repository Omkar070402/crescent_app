import React from 'react'

const PrivacyPolicy = () => {
    const policy = [
        {
            id: 1,
            info: ' We collect and process personal information necessary for the provision of money-changing and remittance services.'
        },
        {
            id: 2,
            info: 'Your personal information will be used solely for the purpose of processing your transactions and complying with legal obligations.'
        },
        {
            id: 3,
            info: 'We implement appropriate security measures to protect your personal information from unauthorized access or disclosure'
        },
        {
            id: 4,
            info: 'We do not sell, rent, or disclose your personal information to third parties for marketing purposes.'
        },
        {
            id: 5,
            info: 'By using our services, you consent to the collection, use, and storage of your personal information as described in this Privacy Policy.'
        }
    ]
    return (
        <div className='mt-25'>

            <section className='policy-privacy'>
                <div>

                    <div className="title text-[20px] font-bold text-center">Privacy Policy</div>

                    <div className="flex justify-center mt-5 ">
                        <div className="flex flex-col gap-4 max-w-[900px] w-full shadow-sm p-5 rounded-2xl">
                            {policy.map((val) => (
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

export default PrivacyPolicy
