import React from 'react'

const Contact = () => {

    const contact = [
        {
            id: 1,
            info: "company",
            detail: "Crescent Exchange Pte. Ltd."
        },
        {
            id: 2,
            info: "Address ",
            detail: "	11 Collyer Quay, The Arcade #03-07B Singapore 049317"
        },
        {
            id: 3,
            info: "Mobile ",
            detail: "+65 8590 0090 | +65 9055 5575"
        },
        {
            id: 4,
            info: "E-mail ",
            detail: "support@crescentexchange.com"
        },
    ]

    return (
        <div>

            <section className='contact mt-25 text-center'>

                <div className="title text-[20px] font-bold">Contact Us</div>
                <div className='w-1/2  shadow-sm p-10 m-auto rounded-2xl mt-5'>
                    <div className='flex flex-col gap-5 items-start'>
                        <h6 className='text-[15px] font-medium'>Location & Contact Info</h6>
                        <p className='text-[13px] text-gray-400'>If you have any inquiries or require assistance, please don't hesitate to get in touch with us:</p>
                    </div>
                    <div >
                        {
                            contact.map((val) => (
                                <div key={val.id} className='flex justify-between mt-4'>

                                    <h5 className='text-[13px] text-gray-800 font-bold'>{val.info} :</h5>
                                    <p className='text-[13px]'>{val.detail}</p>
                                </div>
                                   

                            ))
                        }



                    </div>

                </div>

            </section>

        </div>
    )
}

export default Contact
