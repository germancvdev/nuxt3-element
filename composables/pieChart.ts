import * as am5 from '@amcharts/amcharts5'

import * as percent from '@amcharts/amcharts5/percent'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'

import am5themes_dark from '@amcharts/amcharts5/themes/Dark'
import am5themes_material from '@amcharts/amcharts5/themes/Material'
import am5themes_responsive from '@amcharts/amcharts5/themes/Responsive'

export const usePieChart = (el: string, data: []) => {
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

    let chart = root.container.children.push(
      percent.PieChart.new(root, {
        endAngle: 270,
        paddingRight: 80,
        paddingLeft: 80,
      })
    )

    let series = chart.series.push(
      percent.PieSeries.new(root, {
        valueField: 'value',
        categoryField: 'category',
        endAngle: 270,
      })
    )

    series.labels.template.setAll({
      fontSize: 10,
    })

    series.states.create('hidden', {
      endAngle: -90,
    })

    series.data.setAll(data)

    series.appear(1000, 100)
  }
  return {
    drawing,
    changeTheme,
    dispose,
    data,
  }
}
