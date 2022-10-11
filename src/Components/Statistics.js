import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = [
        {
            "name": "React",
            "Total Quiz": 8
        },
        {
            "name": "Javascript",
            "Total Quiz": 9
        },
        {
            "name": "CSS",
            "Total Quiz": 8
        },
        {
            "name": "Git",
            "Total Quiz": 5
        }
    ]
    return (
        <div className='flex justify-center mt-40'>

            <BarChart width={550} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Total Quiz" fill="#8884d8" />
            </BarChart>

        </div>
    );
};

export default Statistics;