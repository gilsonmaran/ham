function chart() {
    const ctx = document.getElementById('chart-ham').getContext('2d');
    const age = document.getElementById('age').value;
    let result = parseFloat(document.getElementById('result').value);

    let = result_data = [];
    for (i = 0; i < 19; i++) {
        t = 26 + i;

        result_data[i] = age == t ? result : null
            // if (age == t)
            //     result_data[i] = result
            // else
            //     result_data[i] = null
    }

    let chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',


        // The data for our dataset
        data: {
            labels: [26, '', 28, '', 30, '', 32, '', 34, '', 36, '', 38, '', 40, '', 42, '', 44],

            datasets: [{
                    label: 'Resultado',
                    backgroundColor: '#FFF',
                    borderColor: '#000',
                    pointRadius: 3,
                    lineTension: 0,
                    data: result_data
                },
                {
                    label: '< 25% | Baixa reserva ovariana',
                    backgroundColor: '#DC3545',
                    borderColor: '#000',
                    pointRadius: 0,
                    lineTension: 0,
                    spanGaps: true,
                    borderWidth: 1,
                    data: [2.52, null, 2.52, null, 1.89, null, 1.78, null, 1.67, null, 1.28, null, 1.17, null, 0.71, null, 0.53, null, 0.35]
                },
                {
                    label: '25 - 75% | Reserva ovariana normal',
                    backgroundColor: '#28A745',
                    borderColor: '#000',
                    pointRadius: 0,
                    lineTension: 0,
                    spanGaps: true,
                    borderWidth: 1,
                    data: [6.70, null, 6.33, null, 4.53, null, 4.1, null, 3.67, null, 2.80, null, 2.27, null, 1.58, null, 0.81, null, 0.00]
                },
                {
                    label: '> 75% | Provável SOP',
                    backgroundColor: 'rgb(255,193,7)',
                    borderColor: '#000',
                    pointRadius: 0,
                    lineTension: 0,
                    spanGaps: true,
                    borderWidth: 1,
                    data: [12.24, null, 12.03, null, 8.40, null, 8.12, null, 7.84, null, 5.60, null, 5.07, null, 3.53, null, 1.95, null, 0.10]
                },
            ]
        },

        // Configuration options go here
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        max: 14,
                        min: 0,
                        stepSize: 1.4
                    },
                    gridLines: {
                        display: true,
                        z: 2,
                    },
                }],
                xAxes: [{
                    stacked: false,
                    gridLines: {
                        display: true,
                        z: 100,
                    },
                    ticks: {
                        stepSize: 2
                    }
                }],
            },

            legend: {
                display: true,
                position: 'bottom',

                labels: {
                    fontSize: 9,
                    boxWidth: 10,
                }
            },



        }
    });
}