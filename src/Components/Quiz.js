import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from './SingleQuiz';

const Quiz = () => {
    const allQuiz = useLoaderData();
    const { name, questions } = allQuiz.data;
    return (
        <div>
            <p className='my-5 text-3xl font-bold text-gray-500'>Quiz Of {name}</p>
            {
                questions.map(Question => <SingleQuiz key={Question.id} Question={Question} />)
            }
        </div>
    );
};

export default Quiz;