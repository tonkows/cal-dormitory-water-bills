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
        const a = parseFloat(document.getElementById(`${month}A`).value) || 0;
        const b = parseFloat(document.getElementById(`${month}B`).value) || 0;
        const c = parseFloat(document.getElementById(`${month}C`).value) || 0;

        const sum = ((a - b) * c) * -1;

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

    // Create a new chart
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
