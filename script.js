let waterUsageChart;  

function calculateAndDisplayChart() {
    const months = [
        "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"
    ];
    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    const monthlyData = {};  

    for (let i = 0; i < months.length; i++) {
        const month = months[i];
        let a = parseFloat(document.getElementById(`${month}A`).value) || 0;
        let b = parseFloat(document.getElementById(`${month}B`).value) || 0;
        let c = parseFloat(document.getElementById(`${month}C`).value) || 0;

        a = Math.max(a, 0);
        b = Math.max(b, 0);
        c = Math.max(c, 0);

        const sum = Math.max(((a - b) * c) * -1, 0);

        if (sum !== 0) {
            monthlyData[monthNames[i]] = sum;
        }
    }

    updateChart(monthlyData);
}

function updateChart(data) {
    const ctx = document.getElementById('waterUsageChart').getContext('2d');


    if (waterUsageChart) {
        waterUsageChart.destroy();
    }

    const labels = Object.keys(data);
    const dataset = Object.values(data);


    waterUsageChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Water Usage (Currency)',
                data: dataset,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
