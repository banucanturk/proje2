const url = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';

fetch(url).then((result) => result.json()).then((datapoint) => {
    const countries = ChartGeo.topojson.feature(datapoint, datapoint.objects.countries).features;
    // console.log(countries.map(country => country.properties.name))
    // json dosyasını js için okunabilir hale getirdim, verileri çektim ve isimlendirerek topojson ile ChartGeo'ya dönüşmesini sağladım. topojson normalde hatitanın çizgilerin üzerine yerleşmesiyle şeklinin değişebileceği bir harita sistemidir.


    //Daha sonra ülkelerin üzerine gelindiğinde isimlerinin görülebilir olmasını sağladım.

    // setup 
    const data = {
        labels: countries.map(country => country.properties.name),
        datasets: [{
            label: 'United States',
            backgroundColor: '#437EF7',
            data: countries.map(country => ({ feature: country, value: Math.random() })),
        },
        {
            label: 'Europe',
            backgroundColor: '#135DCB',
            data: countries.map(country => ({ feature: country, value: Math.random() })),
        },
        {
            label: 'Australia',
            backgroundColor: '#5CB1FF',
            data: countries.map(country => ({ feature: country, value: Math.random() })),
        }]
    };

    // config 
    const config = {
        type: 'choropleth',
        data,
        options: {
            scales: {
                xy: {
                    projection: 'mercator',
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 10,
                        useBorderRadius: true,
                        borderRadius: 3,
                        font: {
                            family: 'Inter',
                            size: 12,
                        }
                    }
                }
            },
        }
    };

    // render init block
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

    // Instantly assign Chart.js version
    const chartVersion = document.getElementById('chartVersion');
    chartVersion.innerText = Chart.version;

});