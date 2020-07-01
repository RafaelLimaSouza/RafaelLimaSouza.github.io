var ctx = document.getElementById('myChart');
var ctx2 = document.getElementById('myChart2');

var chartGraph = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Absenteismo","Assiduidade"],
        datasets: [
            {
                label: "",
                data: [28,72],
                backgroundColor: ['rgb(255,99,132)','#17a2b8']
            },
        ]
    },
    options: {
        title: {
            display: true,
            text:"NÍVEL DE PRESENÇA"
        },
        legend: {
            position: 'bottom'
        }
    }

});

var myLineChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["Jan", "Fev", "Mar","Abril","Maio","Jun"],
        datasets: [
            {   
                label: 'Valor em R$',
                data: [20345, 10789, 5346, 8756, 3546, 15432],
                borderColor: '#17a2b8',
                backgroundColor: '#17a2b823'

             }],
    },
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        },
        legend: {
            display: true,
            position: 'botttom'
        },
        title: {
            display: true,
            text: 'FATURAMENTO'
        }
    }
});
