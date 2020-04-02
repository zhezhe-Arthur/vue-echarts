<template>
  <div class="hello">
   <e-chart id="taskCompletionId" :options='taskCompletionRate' />
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar' // 柱状图
import 'echarts/lib/chart/line' // 折线图
import 'echarts/lib/component/tooltip' // 提示框
export default {  
  name: 'TaskChart',
  components: {
    'e-chart': ECharts
  },
  data () {
    return {
      taskCompletionRate: null
    }
  },
  created: function() {
    this.taskCompletionRateShow()
  },
  methods: {
    taskCompletionRateShow() {
      this.taskCompletionRate = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'
          }
        },
        legend: {
          data: ['合格任务', '不合格任务', '不合格率']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'value'
        },
        xAxis: {
          type: 'category',
          data: ['2019年1月', '2019年2月', '2019年3月', '2019年4月', '2019年5月', '2019年6月', '2019年7月']
        },
        series: [
          {
            name: '合格任务',
            type: 'bar',
            stack: '总量',
            color: '#ADD8E6',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [300, 302, 301, 334, 390, 330, 320]
          },
          {
            name: '不合格任务',
            type: 'bar',
            stack: '总量',
            color: '#FFA07A',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [100, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '不合格率',
            type: 'line',
            stack: '总量',
            label: {
              show: true,
              position: 'top', // 文字位置
              formatter: '{c}%' // 显示百分比
            },
            data: [20, 18.2, 19, 24, 90, 30, 10]
          }
       ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#taskCompletionId{
  width: 750px;
  height: 450px;
}
</style>
