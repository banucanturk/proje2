/* Dark Theme*/
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#toggleDark');
var currentUrl = window.location.href;


const enableDarkMode = () => {
    darkModeToggle.classList.add('toggleDark');
    document.body.classList.add('darkmode');
    darkModeToggle.classList.add('toggleDark');
    localStorage.setItem('darkMode', 'enabled');
    if (currentUrl.includes("index.html")) {
        darkModeToggle.src = "assets/images/svg/icons/dark/moon.svg";
    } else if (currentUrl.includes("social-media.html")) {
        darkModeToggle.src = "../assets/images/svg/icons/dark/moon.svg";
    }
};

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
    darkModeToggle.classList.remove('toggleDark');
    if (currentUrl.includes("index.html")) {
        darkModeToggle.src = "assets/images/svg/icons/dark/sun.svg";
    } else if (currentUrl.includes("social-media.html")) {
        darkModeToggle.src = "../assets/images/svg/icons/dark/sun.svg";
    }
};

if (darkMode === 'enabled') {
    enableDarkMode();
};
console.log(darkMode);

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log(darkMode);
    }
});



/* Dark Theme End*/


/* Chart Bar Desktop Start */
const chartDesktop = document.getElementById('chartDesktop');

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
            backgroundColor: '#5CB1FF',
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
        plugins: {
            legend: {
                align: 'end',
                anchor: 'end',
                labels: {
                    boxWidth: 10,
                    useBorderRadius: true,
                    borderRadius: 3,
                    font: {
                        family: 'Inter',
                        size: 12,
                    },

                }
            }
        },

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
/* Chart Bar Mobile End*/



// Doughnut Charts


let data = {
    datasets: [
        {
            data: [120, 120, 120],
            backgroundColor: [
                "#437EF7",
                "#135DCB",
                "#5CB1FF"
            ]
        }
    ]
};

// Canvas elementini seçelim
let ctx = document.getElementById("chartDoughnutDesktop");

// Yeni bir doughnut grafiği oluşturalım
let myDoughnutChart = new Chart(ctx, {
    type: "doughnut",
    data: data,
    options: {
        responsive: true,
        legend: {
            position: "top"
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
});


// Doughnut Charts End







