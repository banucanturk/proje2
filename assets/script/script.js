/* Chart Bar Desktop Start */
var chartDesktop = document.getElementById('chartDesktop').getContext('2d');
var img = new Image();
img.src = 'path/to/image.png';
const fillPattern = chartDesktop.createPattern(img, 'repeat');

new Chart(chartDesktop, {
    type: 'bar',
    data: {
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [{
            label: 'e-business',
            data: [20, null, 25, null, 70, 30, 80, 105, 50, 80],
            backgroundColor: '#437ef7',
            borderRadius: 2,

        }, {
            label: 'infrastructures',
            data: [null, 78, null, 20, null, null, null, null, null, null, 24],
            backgroundColor: fillPattern,
            borderRadius: 2,
        }]
    },
    options: {
        skipNull: true,
        scales: {
            y: {
                beginAtZero: true,
                afterTickToLabelConversion: (ctx) => {
                    ctx.ticks = [];
                    ctx.ticks.push({ value: 0, label: '0%' });
                    ctx.ticks.push({ value: 25, label: '25%' });
                    ctx.ticks.push({ value: 75, label: '75%' });
                    ctx.ticks.push({ value: 100, label: '100%' });
                }
            }
        },
        // Draw the image onto the canvas element after the chart is rendered
        draw: function (chart) {
            if (chart.config.type === 'bar') {
                var ctx = chart.chart.ctx;
                chartDesktop.drawImage(img, 0, 0, img.width, img.height, 0, 0, 30, 30);
            }
        }
    }
});
/* Chart Bar Desktop End */
/* Chart Bar Mobile Start*/
const chartMobile = document.getElementById('chartMobile');

new Chart(chartMobile, {
    type: 'bar',
    data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
            label: 'e-business',
            data: [20, null, 25, 50, 90, 70, null],
            backgroundColor: '#437ef7',
            borderRadius: 2,
        }, {
            label: 'infrastructures',
            data: [null, 70, null, null, null, null, 20],
            backgroundColor: '#135dcb',
            borderRadius: 2,
        }]
    },
    options: {
        skipNull: true,
        scales: {
            y: {
                beginAtZero: true,
                afterTickToLabelConversion: (ctx) => {
                    ctx.ticks = [];
                    ctx.ticks.push({ value: 0, label: '' });
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }

});