import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip as TooltipChartJs, Legend } from 'chart.js';
ChartJS.register(ArcElement, TooltipChartJs, Legend);


const data = [
    { name: 'Jan', users: 30 },
    { name: 'Feb', users: 45 },
    { name: 'Mar', users: 70 },
    { name: 'Apr', users: 50 },
    { name: 'May', users: 80 },
    { name: 'Jun', users: 90 },
    { name: 'Jul', users: 60 },
    { name: 'Aug', users: 100 },
    { name: 'Sep', users: 110 },
    { name: 'Oct', users: 120 },
    { name: 'Nov', users: 130 },
    { name: 'Dec', users: 140 }
];



const data1 = {
    labels: ['Admin', 'User', 'Guest'],
    datasets: [
        {
            label: 'User Roles',
            data: [50, 30, 20],
            backgroundColor: ['#8884d8', '#82ca9d', '#ff7300'],
            hoverOffset: 4,
        },
    ],
};

const dataAge = {
    labels: ['18-24', '25-34', '35-44', '45+'], // Četiri starosne grupe
    datasets: [
        {
            label: 'Number of Users',
            data: [120, 300, 180, 100],  // Broj korisnika po starosnim grupama
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Boje za svaku grupu
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],  // Boje pri hoveru
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            labels: {
                color: 'white',
                font: {
                    weight: 'bold',
                    size: '12px'
                },
            },
        },
    },
};

export const AdminUsersChart = () => {
    return (
        <>
            <h1 className={"text-white text-2xl text-center mb-5"}>USER REGISTRATION ACTIVITIES</h1>
            <ResponsiveContainer height={300} className={"z-0 user-activity-graph"}>
                <AreaChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="users"
                        stroke="#82ca9d"
                        fillOpacity={1}
                        fill="url(#colorUsers)"
                    />
                </AreaChart>
            </ResponsiveContainer>
            <div className={"w-full flex flex-col sm:flex-row justify-around"}>
                <div className={"w-full sm:w-1/3 mt-5"}>
                    <Pie data={data1} options={options}/>
                </div>
                <div className={"w-full sm:w-1/3 mt-5 mb-12"}>
                    <Pie data={dataAge} options={options}/>
                </div>
            </div>
        </>
    );
}