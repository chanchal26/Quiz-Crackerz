import React from 'react';

const SingleQuiz = ({ Question }) => {
    const { correctAnswer, options, question } = Question;
    console.log(Question);
    return (

        <div className='bg-slate-200 mb-10 lg:mx-40 lg:py-10 sm:py-5'>
            <p className='lg:mx-80'>{question}</p>
            {
                options.map((option, idx) => <p key={idx}><button onClick={() => { }} className='bg-gray-400 my-3 p-2 w-80 hover:bg-gray-700 text-stone-200'>{option}</button></p>)
            }
        </div>

    );
};

export default SingleQuiz;