import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

function Graphline() {
    const [graph_country, set_graph] = useState({});
    const [deta , setdeta] = useState();
    async function get_history() {
        const response = await fetch('https://covid-19.dataflowkit.com/v1');
        let dat = await response.json();
        console.log("At graph", dat[0]);
        set_graph(dat[0]);
    }
    useEffect(() => {
        get_history();
        
    }, [])
    
    //console.log(graph_country['Active Cases_text'].replace(',', '').replace(',',''))
    console.log()
    const data = {
        labels: ['Total Cases', 'Total Recovered', 'Total Deaths', 'New Cases', 'New Deaths'],
        datasets: [
            {
                data: [(parseInt(graph_country['Total Cases_text'])),
                (parseInt(graph_country['Total Recovered_text'])),
                (parseInt(graph_country['Total Deaths_text'])),
                (parseInt(graph_country['New Cases_text'])),
                (parseInt(graph_country['New Deaths_text']))
                ],

                label: 'Number of Cases',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Chart.js Horizontal Bar Chart',
            },
        },
    };
    

    return (
        <>
            <div className='header'>
                Data In MILLION
                <h1 className='title'>{graph_country['Country_text']}</h1>
                
            </div>
            <div className="denta">
                <Bar data={data} options={options} />
            </div>
        </>
    );
}

export default Graphline;