/**
 * Analytics Cards
 */

'use strict';

(function () {
  let cardColor,
    labelColor,
    headingColor,
    borderColor,
    chartBgColor,
    bodyColor,
    currentTheme,
    PrimaryLabel = config.colors_label.primary;

  let chartColors = {
    donut: {
      series1: config.colors.primary,
      series2: '#9055fdb3',
      series3: '#9055fd80'
    },
    donut2: {
      series1: config.colors.success,
      series2: '#56ca00cc',
      series3: '#56ca0099',
      series4: '#56ca0066'
    },
    line: {
      series1: config.colors.warning,
      series2: config.colors.primary,
      series3: '#7367f029'
    }
  };

  if (isDarkStyle) {
    cardColor = config.colors_dark.cardColor;
    labelColor = config.colors_dark.textMuted;
    headingColor = config.colors_dark.headingColor;
    borderColor = config.colors_dark.borderColor;
    chartBgColor = config.colors_dark.chartBgColor;
    bodyColor = config.colors_dark.bodyColor;
    currentTheme = 'dark';
  } else {
    cardColor = config.colors.cardColor;
    labelColor = config.colors.textMuted;
    headingColor = config.colors.headingColor;
    borderColor = config.colors.borderColor;
    chartBgColor = config.colors.chartBgColor;
    bodyColor = config.colors.bodyColor;
    currentTheme = 'light';
  }

  // Total Profit Chart
  // --------------------------------------------------------------------
  const totalProfitChartEl = document.querySelector('#totalProfitChart'),
    totalProfitChartConfig = {
      chart: {
        type: 'bar',
        height: 260,
        parentHeightOffset: 0,
        stacked: true,
        toolbar: {
          show: false
        }
      },
      series: [
        {
          name: 'Revenue',
          data: [29, 22, 25, 19, 29, 20, 35]
        },
        {
          name: 'Transactions',
          data: ['', 16, 11, 16, '', 13, 10]
        },
        {
          name: 'Total Profit',
          data: ['', '', '', 14, '', 12, 12]
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '35%',
          borderRadius: 10,
          startingShape: 'rounded',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 6,
        lineCap: 'round',
        colors: [cardColor]
      },
      legend: {
        show: false
      },
      colors: [config.colors.primary, config.colors.success, config.colors.secondary],
      grid: {
        strokeDashArray: 8,
        borderColor,
        padding: {
          top: -10,
          left: 15,
          right: -15,
          bottom: -10
        }
      },
      xaxis: {
        categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        tickPlacement: 'on',
        labels: {
          show: true,
          style: {
            fontSize: '0.75rem',
            fontFamily: 'Inter',
            colors: labelColor
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        min: 0,
        max: 60,
        show: true,
        tickAmount: 6,
        labels: {
          formatter: function (val) {
            return parseInt(val) + 'K';
          },
          style: {
            fontSize: '0.75rem',
            fontFamily: 'Inter',
            colors: labelColor
          }
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      },
      responsive: [
        {
          breakpoint: 1441,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '50%'
              }
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '35%'
              }
            }
          }
        },
        {
          breakpoint: 1025,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '45%'
              }
            }
          }
        },
        {
          breakpoint: 767,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '35%'
              }
            }
          }
        },
        {
          breakpoint: 555,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '45%'
              }
            }
          }
        },
        {
          breakpoint: 450,
          options: {
            chart: {
              height: 200,
              offsetX: -10
            },
            plotOptions: {
              bar: {
                columnWidth: '55%'
              }
            },
            xaxis: {
              labels: {
                rotate: 315,
                rotateAlways: true
              }
            }
          }
        },
        {
          breakpoint: 360,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '75%'
              }
            }
          }
        }
      ]
    };
  if (typeof totalProfitChartEl !== undefined && totalProfitChartEl !== null) {
    const totalProfitChart = new ApexCharts(totalProfitChartEl, totalProfitChartConfig);
    totalProfitChart.render();
  }

  // Total Visitors Chart
  // --------------------------------------------------------------------
  const totalVisitorsChartE1 = document.querySelector('#totalVisitorsChart'),
    totalVisitorsChartConfig = {
      chart: {
        height: 290,
        parentHeightOffset: 0,
        type: 'donut'
      },
      labels: ['FR', 'UK', 'ESP', 'USA'],
      series: [13, 25, 12, 50],
      colors: [chartColors.donut.series1, chartColors.donut.series2, chartColors.donut.series3, chartBgColor],
      stroke: {
        width: 0
      },
      dataLabels: {
        enabled: false,
        formatter: function (val, opt) {
          return parseInt(val) + '%';
        }
      },
      legend: {
        show: true,
        position: 'bottom',
        offsetY: 7,
        markers: {
          width: 10,
          height: 10,
          offsetX: -3
        },
        itemMargin: {
          horizontal: 10,
          vertical: 5
        },
        fontSize: '13px',
        fontFamily: 'Inter',
        fontWeight: 400,
        labels: {
          colors: headingColor,
          useSeriesColors: false
        }
      },
      tooltip: {
        style: {
          color: config.colors.white
        }
      },
      grid: {
        padding: {
          top: 15
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '70%',
            labels: {
              show: true,
              value: {
                fontSize: '26px',
                fontFamily: 'Inter',
                color: headingColor,
                fontWeight: 500,
                offsetY: -20,
                formatter: function (val) {
                  return parseInt(val) + '%';
                }
              },
              name: {
                offsetY: 20,
                fontFamily: 'Inter',
                color: bodyColor
              },
              total: {
                show: true,
                fontSize: '.7rem',
                label: 'Weekly Vsits',
                color: bodyColor,
                formatter: function (w) {
                  return '100%';
                }
              }
            }
          }
        }
      },
      responsive: [
        {
          breakpoint: 420,
          options: {
            chart: {
              height: 300
            }
          }
        }
      ]
    };
  if (typeof totalVisitorsChartE1 !== undefined && totalVisitorsChartE1 !== null) {
    const totalVisitorsChart = new ApexCharts(totalVisitorsChartE1, totalVisitorsChartConfig);
    totalVisitorsChart.render();
  }

  // Weekly Sales Chart
  // --------------------------------------------------------------------
  const weeklySalesChartEl = document.querySelector('#weeklySalesChart'),
    weeklySalesChartConfig = {
      chart: {
        height: 250,
        type: 'bar',
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          distributed: true,
          columnWidth: '60%',
          endingShape: 'rounded',
          startingShape: 'rounded'
        }
      },
      series: [
        {
          data: [38, 55, 48, 65, 80, 38, 48]
        }
      ],
      tooltip: {
        enabled: false
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      colors: [
        PrimaryLabel,
        PrimaryLabel,
        PrimaryLabel,
        PrimaryLabel,
        config.colors.primary,
        PrimaryLabel,
        PrimaryLabel
      ],
      grid: {
        show: false,
        padding: {
          top: -15,
          left: -7,
          right: -4
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      },
      xaxis: {
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        },
        categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        labels: {
          style: {
            colors: bodyColor
          }
        }
      },
      yaxis: { show: false },
      responsive: [
        {
          breakpoint: 1025,
          options: {
            chart: {
              height: 210
            }
          }
        }
      ]
    };
  if (typeof weeklySalesChartEl !== undefined && weeklySalesChartEl !== null) {
    const weeklySalesChart = new ApexCharts(weeklySalesChartEl, weeklySalesChartConfig);
    weeklySalesChart.render();
  }

  // Total RevenueChart Chart
  // --------------------------------------------------------------------
  const totalRevenueChartEl = document.querySelector('#totalRevenueChart'),
    totalRevenueChartConfig = {
      series: [71, 78, 86],
      chart: {
        height: 274,
        type: 'radialBar'
      },
      grid: {
        padding: {
          top: -10,
          left: -20,
          right: -20,
          bottom: -20
        }
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '45%'
          },
          track: {
            margin: 10,
            show: false
          },
          dataLabels: {
            name: {
              offsetY: 25,
              fontSize: '0.75rem',
              fontFamily: 'Inter',
              fontWeight: 400,
              color: bodyColor
            },
            value: {
              offsetY: -12,
              fontWeight: 500,
              fontSize: '2.125rem',
              fontFamily: 'Inter',
              color: headingColor,
              formatter: function (val) {
                return parseInt(val) + 'K';
              }
            },
            total: {
              show: true,
              label: '2021',
              fontSize: '0.75rem',
              fontFamily: 'Inter',
              fontWeight: 400,
              color: bodyColor,
              formatter: function (w) {
                return '89K';
              }
            }
          }
        }
      },
      stroke: {
        lineCap: 'round'
      },
      colors: [config.colors.primary, config.colors.success, config.colors.warning],
      labels: ['New User', 'Returning', 'Referrals']
    };
  if (typeof totalRevenueChartEl !== undefined && totalRevenueChartEl !== null) {
    const totalRevenueChart = new ApexCharts(totalRevenueChartEl, totalRevenueChartConfig);
    totalRevenueChart.render();
  }

  // Weekly Overview Line Chart
  // --------------------------------------------------------------------
  const weeklyOverviewChartEl = document.querySelector('#weeklyOverviewChart'),
    weeklyOverviewChartConfig = {
      chart: {
        type: 'bar',
        height: 200,
        offsetY: -9,
        offsetX: -16,
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      series: [
        {
          name: 'Sales',
          data: [32, 55, 45, 75, 55, 35, 70]
        }
      ],
      colors: [chartBgColor],
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: '30%',
          endingShape: 'rounded',
          startingShape: 'rounded',
          colors: {
            ranges: [
              {
                from: 75,
                to: 80,
                color: config.colors.primary
              },
              {
                from: 0,
                to: 73,
                color: chartBgColor
              }
            ]
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        strokeDashArray: 8,
        borderColor,
        padding: {
          bottom: -10
        }
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        tickPlacement: 'on',
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        min: 0,
        max: 90,
        show: true,
        tickAmount: 3,
        labels: {
          formatter: function (val) {
            return parseInt(val) + 'K';
          },
          style: {
            fontSize: '0.75rem',
            fontFamily: 'Inter',
            colors: labelColor
          }
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      }
    };
  if (typeof weeklyOverviewChartEl !== undefined && weeklyOverviewChartEl !== null) {
    const weeklyOverviewChart = new ApexCharts(weeklyOverviewChartEl, weeklyOverviewChartConfig);
    weeklyOverviewChart.render();
  }

  // Performance Radar Chart
  // --------------------------------------------------------------------
  const performanceChartEl = document.querySelector('#performanceChart'),
    performanceChartConfig = {
      chart: {
        height: 310,
        type: 'radar',
        offsetY: 10,
        toolbar: {
          show: false
        }
      },
      legend: {
        show: true,
        position: 'bottom',
        markers: {
          width: 10,
          height: 10,
          offsetX: -2
        },
        itemMargin: { horizontal: 10 },
        fontFamily: 'Inter',
        fontSize: '12px',
        labels: {
          colors: bodyColor,
          useSeriesColors: false
        }
      },
      plotOptions: {
        radar: {
          polygons: {
            strokeColors: borderColor,
            connectorColors: borderColor
          }
        }
      },
      yaxis: {
        show: false
      },
      series: [
        {
          name: 'Income',
          data: [70, 90, 80, 95, 75, 90]
        },
        {
          name: 'Net Worth',
          data: [110, 78, 95, 85, 95, 78]
        }
      ],
      colors: [config.colors.primary, config.colors.info],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        labels: {
          show: true,
          style: {
            colors: [labelColor, labelColor, labelColor, labelColor, labelColor, labelColor],
            fontSize: '14px',
            fontFamily: 'Inter',
            fontWeight: 400
          }
        }
      },
      fill: {
        opacity: [1, 0.9]
      },
      stroke: {
        show: false,
        width: 0
      },
      markers: {
        size: 0
      },
      grid: {
        show: false,
        padding: {
          bottom: -10
        }
      }
    };
  if (typeof performanceChartEl !== undefined && performanceChartEl !== null) {
    const performanceChart = new ApexCharts(performanceChartEl, performanceChartConfig);
    performanceChart.render();
  }

  // Analytics Bar Chart
  // --------------------------------------------------------------------
  const AnalyticsChartEl = document.querySelector('#AnalyticsChart'),
    AnalyticsChartConfig = {
      chart: {
        type: 'bar',
        height: 200,
        parentHeightOffset: 0,
        stacked: true,
        toolbar: {
          show: false
        }
      },
      series: [
        {
          name: 'Revenue',
          data: [16000, 12000, 16000, 18000, 15000, 35000, 16000]
        },
        {
          name: 'Transactions',
          data: [10000, 12000, 10000, '', 10000, 10000, 10000]
        },
        {
          name: 'Total Profit',
          data: ['', 15000, '', '', 12000, '', 10000]
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40%',
          borderRadius: 10,
          startingShape: 'rounded',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 6,
        lineCap: 'round',
        colors: [cardColor]
      },
      legend: {
        show: false
      },
      colors: [config.colors.success, config.colors.secondary, config.colors.warning],
      grid: {
        strokeDashArray: 10,
        borderColor,
        padding: {
          top: -20,
          left: -4,
          right: -5,
          bottom: 5
        }
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        show: false
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      },
      responsive: [
        {
          breakpoint: 1441,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '50%'
              }
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '35%'
              }
            }
          }
        },
        {
          breakpoint: 992,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '45%'
              }
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '35%'
              }
            }
          }
        },
        {
          breakpoint: 500,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '50%'
              }
            }
          }
        }
      ]
    };
  if (typeof AnalyticsChartEl !== undefined && AnalyticsChartEl !== null) {
    const AnalyticsChart = new ApexCharts(AnalyticsChartEl, AnalyticsChartConfig);
    AnalyticsChart.render();
  }

  // Sales State Area Chart
  // --------------------------------------------------------------------
  const salesStateChartEl = document.querySelector('#salesStateChart'),
    salesStateChartConfig = {
      chart: {
        height: 280,
        type: 'area',
        parentHeightOffset: 0,
        offsetY: -8,
        toolbar: { show: false }
      },
      tooltip: { enabled: false },
      dataLabels: { enabled: false },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      series: [
        {
          data: [35, 180, 100, 300, 220, 400]
        }
      ],
      grid: {
        show: false,
        padding: {
          left: -10,
          top: -10,
          right: 0
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
          colorStops: [
            [
              {
                offset: 10,
                opacity: 0.6,
                color: config.colors.primary
              },
              {
                offset: 150,
                opacity: 0.2,
                color: cardColor
              }
            ]
          ]
        }
      },
      theme: {
        monochrome: {
          enabled: true,
          shadeTo: 'light',
          shadeIntensity: 1,
          color: config.colors.primary
        }
      },
      xaxis: {
        type: 'numeric',
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false }
      },
      yaxis: { show: false },
      markers: {
        size: 1,
        offsetY: 2,
        offsetX: -9,
        strokeWidth: 4,
        strokeOpacity: 1,
        colors: ['transparent'],
        strokeColors: 'transparent',
        discrete: [
          {
            size: 8,
            seriesIndex: 0,
            dataPointIndex: 5,
            strokeColor: config.colors.primary,
            fillColor: cardColor
          }
        ]
      },
      responsive: [
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 255
            }
          }
        }
      ]
    };
  if (typeof salesStateChartEl !== undefined && salesStateChartEl !== null) {
    const salesStateChart = new ApexCharts(salesStateChartEl, salesStateChartConfig);
    salesStateChart.render();
  }

  // Total Profit Radial Bar Chart
  // --------------------------------------------------------------------
  const totalProfitRadialBarChartEl = document.querySelector('#totalProfitRadialBarChart'),
    totalProfitRadialBarChartConfig = {
      series: [77],
      chart: {
        height: 350,
        type: 'radialBar',
        offsetY: -30,
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '55%'
          },
          startAngle: -90,
          endAngle: 90,
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: -8,
              fontSize: '1.25rem',
              fontWeight: 500,
              fontFamily: 'Inter',
              color: headingColor,
              formatter: function (val) {
                return '28.2k';
              }
            }
          },
          track: {
            background: chartBgColor
          }
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      },
      stroke: {
        dashArray: 6
      },
      colors: [config.colors.primary],
      labels: ['New Sales'],
      responsive: [
        {
          breakpoint: 1600,
          options: {
            chart: {
              height: 250
            }
          }
        },
        {
          breakpoint: 1199,
          options: {
            chart: {
              height: 330
            }
          }
        }
      ]
    };

  if (typeof totalProfitRadialBarChartEl !== undefined && totalProfitRadialBarChartEl !== null) {
    const totalProfitRadialBarChart = new ApexCharts(totalProfitRadialBarChartEl, totalProfitRadialBarChartConfig);
    totalProfitRadialBarChart.render();
  }

  // Total Sales Line Chart
  // --------------------------------------------------------------------
  const totalSalesChartEl = document.querySelector('#totalSalesChart'),
    totalSalesChartConfig = {
      chart: {
        type: 'line',
        height: 210,
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      series: [
        {
          data: [0, 90, 10, 80, 50, 130]
        }
      ],
      tooltip: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 5,
        lineCap: 'round'
      },
      legend: {
        show: false
      },
      grid: {
        show: false,
        padding: {
          top: -15
        }
      },
      colors: [config.colors.success],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: [cardColor],
          shadeIntensity: 1,
          inverseColors: false,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        labels: {
          style: {
            colors: bodyColor,
            fontFamily: 'Inter',
            fontSize: '0.937rem',
            fontWeight: 400
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        show: false
      }
    };

  if (typeof totalSalesChartEl !== undefined && totalSalesChartEl !== null) {
    const totalSalesChart = new ApexCharts(totalSalesChartEl, totalSalesChartConfig);
    totalSalesChart.render();
  }

  // Total Visits Radial Bar Chart
  // --------------------------------------------------------------------
  const totalVisitsChartEl = document.querySelector('#totalVisitsChart'),
    totalVisitsChartConfig = {
      chart: {
        height: 200,
        type: 'radialBar',
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '60%'
          },
          startAngle: -180,
          endAngle: 180,
          dataLabels: {
            value: {
              fontSize: '1.5rem',
              fontFamily: 'Inter',
              color: headingColor,
              fontWeight: 500,
              offsetY: -20,
              formatter: function (val) {
                return parseInt(val) + '%';
              }
            },
            name: {
              offsetY: 20,
              fontSize: '0.875rem',
              fontFamily: 'Inter',
              color: bodyColor
            }
          },
          track: {
            background: chartBgColor
          }
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      },
      stroke: {
        lineCap: 'round'
      },
      colors: [config.colors.info],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: [chartBgColor],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 90, 100]
        }
      },
      grid: {
        padding: {
          top: -15
        }
      },
      series: [78],
      labels: ['Growth']
    };
  if (typeof totalVisitsChartEl !== undefined && totalVisitsChartEl !== null) {
    const totalVisitsChart = new ApexCharts(totalVisitsChartEl, totalVisitsChartConfig);
    totalVisitsChart.render();
  }

  // Revenue Report Chart
  // --------------------------------------------------------------------
  const revenueReportChartEl = document.querySelector('#revenueReportChart'),
    revenueReportChartOptions = {
      series: [
        {
          name: 'Earning',
          data: [7, 10, 18, 16, 7, 3, 10, 14, 4]
        },
        {
          name: 'Expense',
          data: [-9, -5, -3, -12, -8, -3, -5, -5, -8]
        }
      ],
      chart: {
        height: 225,
        parentHeightOffset: 0,
        stacked: true,
        type: 'bar',
        toolbar: { show: false }
      },
      tooltip: {
        enabled: false
      },
      legend: {
        show: true,
        position: 'bottom',
        offsetY: 10,
        markers: {
          width: 10,
          height: 10,
          radius: 12,
          offsetX: -3
        },
        itemMargin: {
          horizontal: 15,
          vertical: 5
        },
        fontSize: '13px',
        fontFamily: 'Inter',
        fontWeight: 400,
        labels: {
          colors: bodyColor,
          useSeriesColors: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          borderRadius: 5,
          startingShape: 'rounded',
          endingShape: 'rounded'
        }
      },
      colors: [config.colors.success, config.colors.secondary],
      dataLabels: {
        enabled: false
      },
      grid: {
        show: false,
        padding: {
          top: -20,
          left: -10
        }
      },
      xaxis: {
        labels: {
          show: false
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      responsive: [
        {
          breakpoint: 1197,
          options: {
            chart: {
              height: 280
            }
          }
        },
        {
          breakpoint: 783,
          options: {
            chart: {
              height: 250
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '20%'
              }
            }
          }
        },
        {
          breakpoint: 520,
          options: {
            chart: {
              height: 200
            }
          }
        }
      ],
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      }
    };
  if (typeof revenueReportChartEl !== undefined && revenueReportChartEl !== null) {
    const revenueReportChart = new ApexCharts(revenueReportChartEl, revenueReportChartOptions);
    revenueReportChart.render();
  }

  // Sales Overview Chart
  // --------------------------------------------------------------------
  const salesOverviewChartE1 = document.querySelector('#salesOverviewChart'),
    salesOverviewChartConfig = {
      chart: {
        height: 250,
        parentHeightOffset: 0,
        type: 'donut'
      },
      labels: ['Apparel', 'Electronics', 'FMCG', 'Other Sales'],
      series: [12, 25, 13, 50],
      colors: [chartColors.donut.series1, chartColors.donut.series2, chartColors.donut.series3, chartBgColor],
      stroke: {
        width: 0
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      tooltip: {
        style: {
          color: config.colors.white
        }
      },
      grid: {
        padding: {
          top: 15
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '70%',
            labels: {
              show: true,
              value: {
                fontSize: '26px',
                fontFamily: 'Inter',
                color: headingColor,
                fontWeight: 500,
                offsetY: -20,
                formatter: function (val) {
                  return parseInt(val) + 'k';
                }
              },
              name: {
                offsetY: 20,
                fontFamily: 'Inter',
                color: bodyColor
              },
              total: {
                show: true,
                fontSize: '.7rem',
                label: 'Weekly Vsits',
                color: bodyColor,
                formatter: function (w) {
                  return '102k';
                }
              }
            }
          }
        }
      },
      responsive: [
        {
          breakpoint: 1399,
          options: {
            chart: {
              height: 200
            }
          }
        },
        {
          breakpoint: 420,
          options: {
            chart: {
              height: 300
            }
          }
        }
      ]
    };
  if (typeof salesOverviewChartE1 !== undefined && salesOverviewChartE1 !== null) {
    const salesOverviewChart = new ApexCharts(salesOverviewChartE1, salesOverviewChartConfig);
    salesOverviewChart.render();
  }

  // datatbale bar chart

  const horizontalBarChartEl = document.querySelector('#horizontalBarChart'),
    horizontalBarChartConfig = {
      chart: {
        height: 270,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '70%',
          distributed: true,
          startingShape: 'rounded',
          borderRadius: 7
        }
      },
      grid: {
        strokeDashArray: 10,
        borderColor: borderColor,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: -35,
          bottom: -12
        }
      },

      colors: [
        config.colors.primary,
        config.colors.info,
        config.colors.success,
        config.colors.secondary,
        config.colors.danger,
        config.colors.warning
      ],
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#fff'],
          fontWeight: 200,
          fontSize: '13px',
          fontFamily: 'Inter'
        },
        formatter: function (val, opts) {
          return horizontalBarChartConfig.labels[opts.dataPointIndex];
        },
        offsetX: 0,
        dropShadow: {
          enabled: false
        }
      },
      labels: ['UI Design', 'UX Design', 'Music', 'Animation', 'React', 'SEO'],
      series: [
        {
          data: [35, 20, 14, 12, 10, 9]
        }
      ],

      xaxis: {
        categories: ['6', '5', '4', '3', '2', '1'],

        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '13px'
          },
          formatter: function (val) {
            return `${val}%`;
          }
        }
      },
      yaxis: {
        max: 35,
        labels: {
          style: {
            colors: [labelColor],
            fontFamily: 'Inter',
            fontSize: '13px'
          }
        }
      },
      tooltip: {
        enabled: true,
        style: {
          fontSize: '12px'
        },
        onDatasetHover: {
          highlightDataSeries: false
        },
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return '<div class="px-3 py-2">' + '<span>' + series[seriesIndex][dataPointIndex] + '%</span>' + '</div>';
        }
      },
      legend: {
        show: false
      }
    };
  if (typeof horizontalBarChartEl !== undefined && horizontalBarChartEl !== null) {
    const horizontalBarChart = new ApexCharts(horizontalBarChartEl, horizontalBarChartConfig);
    horizontalBarChart.render();
  }

  // Shipment statistics Chart
  // --------------------------------------------------------------------
  const shipmentEl = document.querySelector('#shipmentStatisticsChart'),
    shipmentConfig = {
      series: [
        {
          name: 'Shipment',
          type: 'column',
          data: [38, 45, 33, 38, 32, 50, 48, 40, 42, 37]
        },
        {
          name: 'Delivery',
          type: 'line',
          data: [23, 28, 23, 32, 28, 44, 32, 38, 26, 34]
        }
      ],
      chart: {
        height: 270,
        type: 'line',
        stacked: false,
        parentHeightOffset: 0,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      markers: {
        size: 4,
        colors: [config.colors.white],
        strokeColors: chartColors.line.series2,
        hover: {
          size: 6
        },
        borderRadius: 4
      },
      stroke: {
        curve: 'smooth',
        width: [0, 3],
        lineCap: 'round'
      },
      legend: {
        show: true,
        position: 'bottom',
        markers: {
          width: 8,
          height: 8,
          offsetX: -3
        },
        height: 40,
        offsetY: 10,
        itemMargin: {
          horizontal: 10,
          vertical: 0
        },
        fontSize: '15px',
        fontFamily: 'Inter',
        fontWeight: 400,
        labels: {
          colors: headingColor,
          useSeriesColors: false
        },
        offsetY: 10
      },
      grid: {
        strokeDashArray: 8
      },
      colors: [chartColors.line.series1, chartColors.line.series2],
      fill: {
        opacity: [1, 1]
      },
      plotOptions: {
        bar: {
          columnWidth: '30%',
          startingShape: 'rounded',
          endingShape: 'rounded',
          borderRadius: 4
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        tickAmount: 10,
        categories: ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan'],
        labels: {
          style: {
            colors: labelColor,
            fontSize: '13px',
            fontFamily: 'Inter',
            fontWeight: 400
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        tickAmount: 4,
        min: 10,
        max: 50,
        labels: {
          style: {
            colors: labelColor,
            fontSize: '13px',
            fontFamily: 'Inter',
            fontWeight: 400
          },
          formatter: function (val) {
            return val + '%';
          }
        }
      },
      responsive: [
        {
          breakpoint: 1400,
          options: {
            chart: {
              height: 270
            },
            xaxis: {
              labels: {
                style: {
                  fontSize: '10px'
                }
              }
            },
            legend: {
              itemMargin: {
                vertical: 0,
                horizontal: 10
              },
              fontSize: '13px',
              offsetY: 12
            }
          }
        },
        {
          breakpoint: 1025,
          options: {
            chart: {
              height: 415
            },
            plotOptions: {
              bar: {
                columnWidth: '50%'
              }
            }
          }
        },
        {
          breakpoint: 982,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '30%'
              }
            }
          }
        },
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 250
            },
            legend: {
              offsetY: 7
            }
          }
        }
      ]
    };
  if (typeof shipmentEl !== undefined && shipmentEl !== null) {
    const shipment = new ApexCharts(shipmentEl, shipmentConfig);
    shipment.render();
  }

  // Reasons for delivery exceptions Chart
  // --------------------------------------------------------------------
  const deliveryExceptionsChartE1 = document.querySelector('#deliveryExceptionsChart'),
    deliveryExceptionsChartConfig = {
      chart: {
        height: 420,
        parentHeightOffset: 0,
        type: 'donut'
      },
      labels: ['Incorrect address', 'Weather conditions', 'Federal Holidays', 'Damage during transit'],
      series: [13, 25, 22, 40],
      colors: [
        chartColors.donut2.series1,
        chartColors.donut2.series2,
        chartColors.donut2.series3,
        chartColors.donut2.series4
      ],
      stroke: {
        width: 0
      },
      dataLabels: {
        enabled: false,
        formatter: function (val, opt) {
          return parseInt(val) + '%';
        }
      },
      legend: {
        show: true,
        position: 'bottom',
        offsetY: 10,
        markers: {
          width: 8,
          height: 8,
          offsetX: -3
        },
        itemMargin: {
          horizontal: 15,
          vertical: 5
        },
        fontSize: '13px',
        fontFamily: 'Inter',
        fontWeight: 400,
        labels: {
          colors: headingColor,
          useSeriesColors: false
        }
      },
      tooltip: {
        theme: currentTheme
      },
      grid: {
        padding: {
          top: 15
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
            labels: {
              show: true,
              value: {
                fontSize: '26px',
                fontFamily: 'Inter',
                color: headingColor,
                fontWeight: 500,
                offsetY: -30,
                formatter: function (val) {
                  return parseInt(val) + '%';
                }
              },
              name: {
                offsetY: 20,
                fontFamily: 'Inter'
              },
              total: {
                show: true,
                fontSize: '0.9rem',
                label: 'AVG. Exceptions',
                color: labelColor,
                formatter: function (w) {
                  return '30%';
                }
              }
            }
          }
        }
      },
      responsive: [
        {
          breakpoint: 420,
          options: {
            chart: {
              height: 360
            }
          }
        }
      ]
    };
  if (typeof deliveryExceptionsChartE1 !== undefined && deliveryExceptionsChartE1 !== null) {
    const deliveryExceptionsChart = new ApexCharts(deliveryExceptionsChartE1, deliveryExceptionsChartConfig);
    deliveryExceptionsChart.render();
  }
})();
