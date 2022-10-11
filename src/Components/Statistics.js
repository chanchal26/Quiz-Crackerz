import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const quiz = useLoaderData();
    const { name, total } = quiz.data;

    return (
        <div className='flex justify-center mt-40'>

            <BarChart width={550} height={250} data={quiz.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>

        </div>
    );
};

export default Statistics;