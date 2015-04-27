/**
 * Created by hilson_francis on 4/26/15.
 */
google.load("visualization", "1", {
    packages: ["corechart"]
});
google.setOnLoadCallback(initChart);

$(window).on("throttledresize", function (event) {
    initChart();
});

function initChart() {
    var options = {

        pieHole: 0.2,
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        colors: ['#03F4FF', '#FF1E00', '#00E100'],
        chartArea: {
            left: "3%",
            top: "3%",
            height: "94%",
            width: "94%"
        }
    };

    var data = google.visualization.arrayToDataTable([
        ['Area', 'Percent'],
        ['Easy', 20],
        ['Intermediate', 55],
        ['Advanced', 25]
    ]);
    drawChart(data, options)
}

function drawChart(data, options) {
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}