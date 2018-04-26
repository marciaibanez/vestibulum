const chartConfig = [
    {
        id: 'chart1',
        blueValue: 50,
        redValue: 50
    },
    {
        id: 'chart2',
        blueValue: 70,
        redValue: 30
    },
    {
        id: 'chart3',
        blueValue: 80,
        redValue: 20
    },
    {
        id: 'chart4',
        blueValue: 100,
        redValue: 0
    }
];

chartConfig.forEach(function(config, i) {
    new Chart(document.getElementById(config.id).getContext("2d"), {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [
                    config.blueValue,
                    config.redValue
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
    });
});

const portfolioButton = document.getElementById("portfolio");
const portfolioMenu = document.getElementById("portfolioMenu");
const dropdownMenuArrow = document.getElementById("dropdownMenuArrow");

let isMenuOpened = false;
portfolioButton.addEventListener("click", function() {
    if (!isMenuOpened) {
        portfolioMenu.style.display = 'block';
        dropdownMenuArrow.style.display = 'block';
        isMenuOpened = true;
    } else {
        portfolioMenu.style.display = 'none';
        dropdownMenuArrow.style.display = 'none';
        isMenuOpened = false;
    }
});