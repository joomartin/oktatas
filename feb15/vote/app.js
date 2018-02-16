$(document).ready(function () {

    const socket = io('http://127.0.0.1:3000');

    $('.answer').click(function () {
        const id = $(this).data('id');
        
        socket.emit('new vote', id);
    });

    socket.on('vote ended', function (result) {
        $('.answer').prop('disabled', true);

        google.charts.load('current', {packages: ['corechart', 'bar']});
        google.charts.setOnLoadCallback(drawBasic(result));
    });

    const drawBasic = (result) => () => {
        var data = google.visualization.arrayToDataTable([
            ['', ''],
            ['A', result.A * 100],
            ['B', result.B * 100],
            ['C', result.C * 100],
            ['D', result.D * 100],
          ]);
    
          var options = {
            title: 'Közönség',
            chartArea: {width: '50%'},
            hAxis: {
            //   title: 'Total Population',
              minValue: 0,
              maxValue: 100
            },
            // vAxis: {
            //   title: 'City'
            // }
          };
    
          var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    
          chart.draw(data, options);
    }
});