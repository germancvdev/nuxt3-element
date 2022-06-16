import * as am5 from '@amcharts/amcharts5'

import * as am5percent from '@amcharts/amcharts5/percent'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'

import am5themes_dark from '@amcharts/amcharts5/themes/Dark'
import am5themes_material from '@amcharts/amcharts5/themes/Material'
import am5themes_responsive from '@amcharts/amcharts5/themes/Responsive'

export const usedonutChart = (el: string, data: []) => {
  let root: am5.Root = null

  const colorMode = useColorMode()

  watch(colorMode, () => {
    dispose()
    drawing()
  })

  function dispose() {
    if (root) root.dispose()
  }

  onUnmounted(() => {
    dispose()
  })

  function changeTheme() {
    root.setThemes([
      am5themes_Animated.new(root),
      am5themes_responsive.new(root),
      colorMode.preference == 'dark'
        ? am5themes_dark.new(root)
        : am5themes_material.new(root),
    ])
  }

  function drawing() {
    root = am5.Root.new(el)
    changeTheme()

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        startAngle: 160,
        endAngle: 380,
      })
    )

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series

    let series0 = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: 'litres',
        categoryField: 'country',
        startAngle: 160,
        endAngle: 380,
        radius: am5.percent(70),
        innerRadius: am5.percent(65),
      })
    )

    let colorSet = am5.ColorSet.new(root, {
      colors: [series0.get('colors').getIndex(0)],
      passOptions: {
        lightness: -0.05,
        hue: 0,
      },
    })

    series0.set('colors', colorSet)

    series0.ticks.template.set('forceHidden', true)
    series0.labels.template.set('forceHidden', true)

    let series1 = chart.series.push(
      am5percent.PieSeries.new(root, {
        startAngle: 160,
        endAngle: 380,
        valueField: 'bottles',
        innerRadius: am5.percent(80),
        categoryField: 'country',
      })
    )

    series1.ticks.template.set('forceHidden', true)
    series1.labels.template.set('forceHidden', true)

    let label = chart.seriesContainer.children.push(
      am5.Label.new(root, {
        textAlign: 'center',
        centerY: am5.p100,
        centerX: am5.p50,
        text: '[fontSize:18px]total[/]:\n[bold fontSize:30px]1647.9[/]',
      })
    )

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series0.data.setAll(data)
    series1.data.setAll(data)
  }
  return {
    drawing,
    changeTheme,
    dispose,
    data,
  }
}
