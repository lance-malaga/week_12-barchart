import { useState, useEffect } from "react"
import styles from './MultiaxisLineChart.module.css'

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function MultiaxisLineChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['March 06', 'March 07', 'March 08', 'March 09', 'March 10'],
            datasets: [
                {
                    label: 'Government of Canada marketable bonds',
                    data: [3.28, 3.24, 3.17, 3.1, 2.86],
                    borderColor: 'rgb(58,13,33)',
                    backgroundColor: 'rgba(58,13,33,0.7)',
                    yAxisID: 'y',
                },
                {
                    label: 'Real return bond - Long-term',
                    data: [1.28, 1.32, 1.28, 1.24, 1.15],
                    borderColor: 'rgb(218,221,57)',
                    backgroundColor: 'rgba(218,221,57,0.7)',
                    yAxisID: 'y1',
                },
            ]
        })

        setChartOptions({
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            stacked: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Government of Canada marketable bonds',
                },
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Average yield'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false,
                    },
                    title: {
                        display: true,
                        text: 'Average yield'
                    }
                },
            },
        })
    }, [])

    return (
        <>
            <div className={styles.container}>
                <Line data={chartData} options={chartOptions} />
            </div>
        </>
    )
}