import { useState, useEffect } from "react"
import styles from './StackedBarChart.module.css'

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function StackedBarChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['2004', '2005', '2006', '2007', '2008'],
            datasets: [
                {
                    label: 'Input',
                    data: [2464167, 2616533, 2756891, 2883581, 3030280],
                    backgroundColor: 'rgb(4,120,158)',
                },
                {
                    label: 'Outputs',
                    data: [2464167, 2616533, 2756891, 2883581, 3030280],
                    backgroundColor: 'rgb(0,168,156)',
                },
            ]
        })

        setChartOptions({
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: ' L-level aggregation and North American Industry Classification System',
                },
            },
            scales: {
                x: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Year'
                    }
                },
                y: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Total Commodities'
                    }
                },
            },
        })
    }, [])

    return (
        <>
            <div className={styles.container}>
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    )
}