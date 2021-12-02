<template>
  <div id="chart"></div>
</template>

<script>

import * as echarts from 'echarts';
import {getFanData} from "network/home";

export default {
  name: "FanChart",
  props: {
    name: {
      type: String,
      default(){
        return 'bell'
      }
    }
  },
  data: ()=>({
    myChart: null,
    page: 1,
    count: 100,
    data: []
  }),
  methods:{
    getData(){
      getFanData(this.name,this.page,this.count).then(res=>{
        // console.log(res)
        if (res.data != null){
          this.data.push(...res.data)
          this.page++
          this.myChart.setOption({
            dataset: {
              source: this.data
            },
          });
        }
      })
    }
  },
  mounted(){
    this.getData()
    let that = this
    this.myChart = echarts.init(document.getElementById('chart'));
    this.myChart.setOption({
      title: {
        // left: 'center',
        text: '历史粉丝数'
      },
      dataset: {
        source: that.data
      },
      legend: {
        data: ['粉丝数', '大航海']
      },
      tooltip: {
        trigger: 'axis',
        // position: function (pt) {
        //   return [pt[0], '10%'];
        // }
      },
      toolbox: {
        // itemSize: 20,
        feature: {
          myTool: {
            show: true,
            title: '加载更多',
            icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
            onclick: function (){
              that.getData()
            }
          }
          // dataZoom: {
          //   yAxisIndex: 'none'
          // },
          // restore: {},
          // saveAsImage: {},
        }
      },
      xAxis: {
        type: 'time'
      },
      yAxis: [{
        type: 'value',
        name: '粉丝数',
        boundaryGap: [0, '100%'],
        // boundaryGap: false,
        min: function (value) {
          return value.min - 5;
        },
        max: function (value) {
          return value.max + 5;
        }
      },{
        type: 'value',
        name: '大航海',
        boundaryGap: [0, '100%'],
        min: function (value) {
          return value.min - 5;
        },
        max: function (value) {
          return value.max + 5;
        }
      }],
      dataZoom: [{
        type: 'inside',
        start: 20,
        end: 100
      }, {
        start: 0,
        end: 80
      }],
      series: [{
        name: '粉丝数',
        type: 'line',
        encode: {x: 0, y: 1},
        symbol: 'none',
        markPoint: {
          data: [
            {type: 'max', name: '最大值'}
          ]
        },
        itemStyle: {
          color: 'rgb(255, 70, 131)'
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgb(255, 158, 68)'
          }, {
            offset: 1,
            color: 'rgb(255, 70, 131)'
          }])
        },
        yAxisIndex: 0
      },{
        name: '大航海',
        type: 'line',
        symbol: 'none',
        encode: {x: 0, y: 2},
        markPoint: {
          data: [
            {type: 'max', name: '最大值'}
          ]
        },
        yAxisIndex: 1
      }]
    });
  }
}
</script>

<style scoped>
  #chart{
    height: 500px;
    width: 96%;
    margin: 20px 2%;
  }
</style>