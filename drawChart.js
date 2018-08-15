function drawChart(id,chartOption){
    var myCharts = 'myCharts'+id;
    myCharts = echarts.init(document.getElementById(id));
    myCharts.setOption(chartOption);
}