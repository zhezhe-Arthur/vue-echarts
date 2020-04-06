<template>
  <div class="hello">
   <e-chart id="taskCompletionId" :options='taskCompletionRate' />
   <e-chart id="taskCompletionId" :options='taskMonthlyReportShow'/>
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar' // 柱状图
import 'echarts/lib/chart/line' // 折线图
import 'echarts/lib/chart/pie' // 饼图
import 'echarts/lib/component/tooltip' // 提示框component里的是组件
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/polar'
export default {
  name: 'TaskChart',
  components: {
    'e-chart': ECharts
  },
  data () {
    return {
      taskCompletionRate: null,
      taskMonthlyReport: null
    }
  },
  created: function() {
    this.taskCompletionRateShow()
    this.taskMonthlyReportShow()
  },
  methods: {
    taskMonthlyReportShow() {
      this.taskMonthlyReportShow = {
        color: ['#c23531','#2f4554', '#61a0a8', '#d48265'], // 调色盘自动获取颜色
        title: {
          text: '月度任务详情',
          subtext: '2020年5月任务',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'insideRight',
          data: ['合格任务', '进行中任务', '不合格任务']
        },
        series: [
          {
            name: '月度任务',
            type: 'pie', // 饼图模式
            radius: '70%', // 圆饼大小
            center: ['50%', '60%'],
            data: [
              {value: 36, name: '不合格任务'},
              {value: 360, name: '进行中任务'},
              {value: 989, name: '合格任务'},
            ],
            emphasis: { // 鼠标触摸事件
              itemStyle: {
                // color: 'blue', // 颜色
                shadowBlur: 10, // 阴影
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    },
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

<style scoped>
#taskCompletionId{
  width: 600px;
  height: 450px;
  display: inline-block;
  margin-left: 3%
}
</style>
