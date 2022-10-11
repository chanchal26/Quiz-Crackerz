import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';


const SingleQuiz = ({ Question }) => {
    const { correctAnswer, options, question } = Question;

    const handleClick = (option) => {

        if (option === correctAnswer) {
            toast.success("Congrats !! Your Ans is Correct.");
        } else {
            toast.info("Your Ans is Wrong.");
        }

    };

    const [click, setClick] = useState(true);

    return (

        <div className='bg-slate-200 mb-10 lg:mx-40 lg:py-10 sm:py-5 relative'>
            <p className='lg:mx-80'>Quiz: {question}</p>
            <button className='absolute right-10 top-5' onClick={() => setClick(!click)}><EyeIcon className="h-7 w-8 text-gray-500 hover:text-gray-900" /></button>
            {
                options.map((option, idx) => <p key={idx} ><button onClick={() => handleClick(option)} className='bg-gray-400 my-3 p-2 w-80 hover:bg-gray-700 text-stone-200'>{option}</button></p>)
            }

        </div>

    );
};

export default SingleQuiz;