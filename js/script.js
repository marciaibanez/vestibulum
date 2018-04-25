
var ctx1 = document.getElementById("chart1").getContext("2d");
var ctx2 = document.getElementById("chart2").getContext("2d");
var ctx3 = document.getElementById("chart3").getContext("2d");
var ctx4 = document.getElementById("chart4").getContext("2d");

var config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                50,
                50
            ],
            backgroundColor: [
                '#e8665c',
                '#6ab3ac'
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

var myPieChart = new Chart(ctx1, ctx2, ctx3, ctx4, config);