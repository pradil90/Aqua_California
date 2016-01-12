var MainMapController= function ($scope,$http,$interval)
    {
  // Initialize the model variables
  $scope.firstName = "John";
  $scope.lastName = "Doe";


         $scope.Exhaution_Chart = function (){


             $('#ExhautionChart').highcharts({
        chart: {
            type: 'funnel',
            marginRight: 100
        },
        title: {
            text: '',
            x: -50
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f}%)',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    softConnector: true
                },
                neckWidth: '30%',
                neckHeight: '25%'

                //-- Other available options
                // height: pixels or percent
                // width: pixels or percent
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Percent',
            data: Dash_data_1
        }]
    });

         
                        

}










