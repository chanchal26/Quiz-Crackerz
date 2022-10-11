import React from 'react';
import { Link } from 'react-router-dom';

const Language = ({ quiz }) => {
    const { name, logo, id, total } = quiz;
    return (
        <div key={quiz.id} quiz={quiz} className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-slate-300">
            <div className="flex-shrink-0">
                <img className="object-cover w-full h-full" src={logo} alt="" />
            </div>
            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1 justify-between items-center">
                    <div className='mb-4 text-3xl font-bold text-purple-600'>{name}</div>
                    <div className='mb-3 text-lg font-semibold'>Total Quiz: {total}</div>
                    <div>
                        <Link to={`/topics/${id}`}>
                            <button className="px-8 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Start Quiz</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Language;