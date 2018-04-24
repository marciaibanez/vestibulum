var ctx = document.getElementById('myChart').getContext('2d');

var config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                50,
                50
            ],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
            ]
        }],
        labels: [
            "red",
            "blue"
        ]
    },
    options: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        responsive: true,
        legend: false,
        title: false,
        animation: {
            animateRotate: true
        }
    }
};

var myPieChart = new Chart(ctx, config);