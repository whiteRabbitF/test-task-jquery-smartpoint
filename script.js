$(document).ready(function(){
    $.getJSON("data.json", function(data){
        $.each(data, function(key, value){
            $("#data-table").append("<tr><td>" + value.city + "</td><td>" + value.population + "</td><td>" + value.cars + "</td></tr>");
        });

        let ctx1 = document.getElementById('cityPopulationChart').getContext('2d');
        new Chart(ctx1, {
            type: 'doughnut',
            data: {
                labels: data.map(item => item.city),
                datasets: [{
                    label: 'Кол-во жителей',
                    data: data.map(item => item.population),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true
            }
        });

        let ctx2 = document.getElementById('cityRatioChart').getContext('2d');
        new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: data.map(item => item.city),
                datasets: [{
                    label: 'Соотношение жителей/авто',
                    data: data.map(item => item.population / item.cars),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)'
                    ],
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
    });
});


