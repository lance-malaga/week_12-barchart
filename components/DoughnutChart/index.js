import { useState, useEffect } from "react"
import styles from './DoughnutChart.module.css'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['Oil and Gas Extraction', 'Households: Motor Fuels and Lubricants', 'Crop and Animal Production', 'Electric Power Generation', 'Households: Electricity and Other Fules'],
            datasets: [
                {
                    label: '',
                    data: [156946, 73602, 71054, 62856, 48726],
                    backgroundColor: [
                      'rgb(232,163,157)',
                      'rgb(60,75,172)',
                      'rgb(37,15,141)',
                      'rgb(240,67,147)',
                      'rgb(252,195,74)',
                    ],
                    borderColor: 'transparent'
                },
            ]
        })

        setChartOptions({
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Top 5 Emitting Sectors in 2020, Canada',
                },
            },
        })
    }, [])

    return (
        <>
            <div className={styles.container}>
                <Doughnut data={chartData} options={chartOptions} />
            </div>
        </>
    )
}