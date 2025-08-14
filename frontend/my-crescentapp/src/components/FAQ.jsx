import React, { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const FAQ = () => {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const questions = [
    {
      id: 1,
      ques: 'How do I exchange currency with your retail money-changing service ?',
      ans: 'To exchange currency at our retail money-changing service, you can visit our premises with your original identification documents and the currency you wish to exchange. Our staff will assist you with the necessary procedures and provide you with the current exchange rates.'
    },
    {
      id: 2,
      ques: 'Can I pre-book currency for collection at your local premises ?',
      ans: 'Yes, you can pre-book currency for collection at our local premises through our online platform. Simply select the desired currency and amount, and choose the collection date. We will ensure that the requested currency is available for you to collect on the specified date.'
    },
    {
      id: 3,
      ques: 'How long does it take for an online remittance transfer to be completed ?',
      ans: 'The duration for an online remittance transfer can vary depending on various factors such as the destination country, recipients bank, and any intermediary banks involved. Typically, it takes 1-3 business days for the funds to reach the recipients account. However, please note that the exact time may vary and can be influenced by factors beyond our control.'
    },
    {
      id: 4,
      ques: 'What are the fees associated with your remittance services ?',
      ans: 'We strive to offer competitive and transparent fees for our remittance services. The fees can vary based on the transfer amount, destination country, and chosen transfer method. Our staff will provide you with detailed information on the fees involved before you proceed with the remittance'
    },
    {
      id: 5,
      ques: 'Can I track the status of my remittance transfer ?',
      ans: 'Yes, you can track the status of your remittance transfer through our online platform. Once your transfer is initiated, you will receive a unique transaction ID or reference number. You can use this ID to track the progress of your transfer online and stay updated on its status.'
    },
  ];

  const toggleAnswer = (id) => {
    setOpenQuestionId(prevId => (prevId === id ? null : id));
  };

  return (
    <section className='FAQ mt-15'>
      <div className='title'>
        <h4 className='text-[20px] font-bold text-center'>Frequently asked questions</h4>
      </div>

      <div className='h-auto shadow-sm p-10 w-[80%] m-auto mt-5 rounded-2xl'>
        {questions.map((val) => (

          <div key={val.id}>
            <div className='h-auto w-full bg-gray-100 mt-5 p-4 rounded-2xl flex justify-between cursor-pointer'  onClick={() => toggleAnswer(val.id)}>
              <p
                className=' font-bold text-[13px] '
               
              >
                {val.ques}
              </p>
              {
                openQuestionId ? <CiCircleMinus size={25}/> : <CiCirclePlus size={25}/>
              }
            </div>
            {openQuestionId === val.id && <p className='mt-2 text-[13px]'>{val.ans}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
