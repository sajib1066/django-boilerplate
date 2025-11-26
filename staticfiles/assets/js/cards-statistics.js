/**
 * Statistics Cards
 */

'use strict';

(function () {
  let cardColor,
    labelColor,
    headingColor,
    bodyColor,
    chartBgColor,
    gray700 = '#616161';
  if (isDarkStyle) {
    cardColor = config.colors_dark.cardColor;
    labelColor = config.colors_dark.textMuted;
    headingColor = config.colors_dark.headingColor;
    bodyColor = config.colors_dark.bodyColor;
    chartBgColor = config.colors_dark.chartBgColor;
  } else {
    cardColor = config.colors.cardColor;
    labelColor = config.colors.textMuted;
    headingColor = config.colors.headingColor;
    bodyColor = config.colors.bodyColor;
    chartBgColor = config.colors.chartBgColor;
  }

  // Total Sales Donut Chart
  // --------------------------------------------------------------------
  const totalSalesDonutChartEl = document.querySelector('#totalSalesDonutChart'),
    totalSalesDonutChartConfig = {
      chart: {
        height: 100,
        width: 110,
        parentHeightOffset: 0,
        type: 'donut'
      },
      labels: ['Comments', 'Replies', 'Shares'],
      series: [45, 10, 18, 27],
      colors: [config.colors.primary, config.colors.info, config.colors.warning, config.colors.danger],
      stroke: {
        width: 5,
        colors: cardColor
      },
      tooltip: {
        show: false
      },
      dataLabels: {
        enabled: false,
        formatter: function (val, opt) {
          return parseInt(val) + '%';
        }
      },
      grid: {
        padding: {
          top: -10,
          right: -10,
          left: -10,
          bottom: -5
        }
      },
      legend: {
        show: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
            labels: {
              show: true,
              value: {
                fontSize: '1.15rem',
                fontFamily: 'Inter',
                color: headingColor,
                fontWeight: 500,
                offsetY: -18,
                formatter: function (val) {
                  return parseInt(val) + '%';
                }
              },
              name: {
                offsetY: 18,
                fontFamily: 'Inter'
              },
              total: {
                label: '',
                show: true,
                fontSize: '0.75rem',
                label: '1 Quarter',
                color: bodyColor,
                fontWeight: 400,
                formatter: function (w) {
                  return '28%';
                }
              }
            }
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
  if (typeof totalSalesDonutChartEl !== undefined && totalSalesDonutChartEl !== null) {
    const totalSalesDonutChart = new ApexCharts(totalSalesDonutChartEl, totalSalesDonutChartConfig);
    totalSalesDonutChart.render();
  }

  // Total Revenue chart
  // --------------------------------------------------------------------
  const totalRevenueChartEl = document.querySelector('#totalRevenueChart'),
    totalRevenueChartConfig = {
      chart: {
        height: 100,
        type: 'line',
        parentHeightOffset: 0,
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: true,
          color: [config.colors.primary],
          top: 12,
          left: 0,
          blur: 3,
          opacity: 0.1
        }
      },
      grid: {
        show: false,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: -15,
          left: -7,
          right: 9,
          bottom: -15
        }
      },
      colors: [config.colors.primary],
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      series: [
        {
          data: [13, 30, 20, 35]
        }
      ],
      tooltip: {
        shared: false,
        intersect: true,
        x: {
          show: false
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
      tooltip: {
        enabled: false
      },
      markers: {
        size: 7,
        strokeColors: 'transparent',
        strokeWidth: 5,
        offsetX: -3,
        colors: ['transparent'],
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 3,
            fillColor: cardColor,
            strokeColor: config.colors.primary,
            size: 7,
            shape: 'circle'
          }
        ],
        hover: {
          size: 7
        }
      },
      responsive: [
        {
          breakpoint: 1350,
          options: {
            chart: {
              height: 80
            },
            markers: {
              strokeWidth: 4
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 100
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 110
            }
          }
        }
      ]
    };
  if (typeof totalRevenueChartEl !== undefined && totalRevenueChartEl !== null) {
    const totalRevenueChart = new ApexCharts(totalRevenueChartEl, totalRevenueChartConfig);
    totalRevenueChart.render();
  }

  // Sessions Group Chart
  // --------------------------------------------------------------------
  const SessionsGroupChartEl = document.querySelector('#SessionsGroupChart'),
    SessionsGroupChartConfig = {
      chart: {
        type: 'bar',
        height: 100,
        parentHeightOffset: 0,
        stacked: true,
        toolbar: {
          show: false
        }
      },
      series: [
        {
          name: 'PRODUCT A',
          data: [44, 21, 56, 34, 19]
        },
        {
          name: 'PRODUCT B',
          data: [-22, -25, -22, -17, -25]
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '28%',
          borderRadius: 5,
          startingShape: 'rounded',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 1,
        lineCap: 'round',
        colors: [cardColor]
      },
      legend: {
        show: false
      },
      colors: [gray700, config.colors.danger],
      grid: {
        show: false,
        padding: {
          top: -21,
          right: 0,
          left: 0,
          bottom: -16
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
          breakpoint: 1350,
          options: {
            chart: {
              height: 80
            },
            grid: {
              padding: {
                top: -10
              }
            },
            plotOptions: {
              bar: {
                columnWidth: '40%'
              }
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 100
            },
            plotOptions: {
              bar: {
                columnWidth: '20%'
              }
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 110
            },
            plotOptions: {
              bar: {
                columnWidth: '10%'
              }
            }
          }
        },
        {
          breakpoint: 480,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '20%'
              }
            }
          }
        }
      ]
    };
  if (typeof SessionsGroupChartEl !== undefined && SessionsGroupChartEl !== null) {
    const SessionsGroupChart = new ApexCharts(SessionsGroupChartEl, SessionsGroupChartConfig);
    SessionsGroupChart.render();
  }

  // Total Growth chart
  // --------------------------------------------------------------------
  const totalGrowthAreaChartEl = document.querySelector('#totalGrowthAreaChart'),
    totalGrowthAreaChartConfig = {
      chart: {
        height: 100,
        type: 'area',
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      grid: {
        show: false,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: -15,
          left: -7,
          right: 9,
          bottom: -15
        }
      },
      colors: [config.colors.success],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 3,
        curve: 'smooth'
      },
      series: [
        {
          data: [10, 25, 20, 40, 24, 50, 42]
        }
      ],
      tooltip: {
        shared: false,
        intersect: true,
        x: {
          show: false
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
      tooltip: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityTo: 0.7,
          opacityFrom: 0.5,
          shadeIntensity: 1,
          stops: [0, 90, 100],
          colorStops: [
            [
              {
                offset: 0,
                opacity: 0.6,
                color: config.colors.success
              },
              {
                offset: 100,
                opacity: 0.1,
                color: cardColor
              }
            ]
          ]
        }
      },
      responsive: [
        {
          breakpoint: 1350,
          options: {
            chart: {
              height: 80
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 100
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 110
            }
          }
        }
      ]
    };
  if (typeof totalGrowthAreaChartEl !== undefined && totalGrowthAreaChartEl !== null) {
    const totalGrowthAreaChart = new ApexCharts(totalGrowthAreaChartEl, totalGrowthAreaChartConfig);
    totalGrowthAreaChart.render();
  }

  // Total Sales Semi Donut chart
  // --------------------------------------------------------------------
  const totalSalesSemiDonutChartEl = document.querySelector('#totalSalesSemiDonutChart'),
    totalSalesSemiDonutChartConfig = {
      chart: {
        height: 180,
        type: 'radialBar',
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '65%'
          },
          startAngle: -90,
          endAngle: 90,
          track: {
            background: chartBgColor
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: -2,
              fontSize: '1.25rem',
              fontWeight: 500,
              fontFamily: 'Inter',
              color: bodyColor
            }
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
      series: [78],
      labels: ['Progress'],
      responsive: [
        {
          breakpoint: 1600,
          options: {
            chart: {
              height: 160
            }
          }
        },
        {
          breakpoint: 1500,
          options: {
            chart: {
              height: 120
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 180
            }
          }
        }
      ]
    };

  if (typeof totalSalesSemiDonutChartEl !== undefined && totalSalesSemiDonutChartEl !== null) {
    const totalSalesSemiDonutChart = new ApexCharts(totalSalesSemiDonutChartEl, totalSalesSemiDonutChartConfig);
    totalSalesSemiDonutChart.render();
  }

  // Sessions Column Chart
  // --------------------------------------------------------------------
  const sessionsColumnChartEl = document.querySelector('#sessionsColumnChart'),
    sessionsColumnChartConfig = {
      chart: {
        height: 100,
        parentHeightOffset: 0,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      tooltip: {
        enabled: false
      },
      plotOptions: {
        bar: {
          barHeight: '100%',
          columnWidth: '20px',
          startingShape: 'rounded',
          endingShape: 'rounded',
          borderRadius: 4,
          colors: {
            ranges: [
              {
                from: 25,
                to: 32,
                color: config.colors.danger
              },
              {
                from: 60,
                to: 75,
                color: config.colors.primary
              },
              {
                from: 45,
                to: 50,
                color: config.colors.danger
              },
              {
                from: 35,
                to: 42,
                color: config.colors.primary
              }
            ],
            backgroundBarColors: [chartBgColor, chartBgColor, chartBgColor, chartBgColor, chartBgColor],
            backgroundBarRadius: 4
          }
        }
      },
      grid: {
        show: false,
        padding: {
          top: -10,
          left: -10,
          bottom: -15
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
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
      series: [
        {
          data: [30, 70, 50, 40, 60]
        }
      ],
      responsive: [
        {
          breakpoint: 1350,
          options: {
            chart: {
              height: 80
            },
            plotOptions: {
              bar: {
                columnWidth: '40%'
              }
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 100
            },
            plotOptions: {
              bar: {
                columnWidth: '20%'
              }
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 110
            },
            plotOptions: {
              bar: {
                columnWidth: '10%'
              }
            }
          }
        },
        {
          breakpoint: 480,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '20%'
              }
            }
          }
        }
      ]
    };
  if (typeof sessionsColumnChartEl !== undefined && sessionsColumnChartEl !== null) {
    const sessionsColumnChart = new ApexCharts(sessionsColumnChartEl, sessionsColumnChartConfig);
    sessionsColumnChart.render();
  }

  // Total Profit line chart
  // --------------------------------------------------------------------
  const totalProfitLineChartEl = document.querySelector('#totalProfitLineChart'),
    totalProfitLineChartConfig = {
      chart: {
        height: 100,
        type: 'line',
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      grid: {
        borderColor: labelColor,
        strokeDashArray: 6,
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
          top: -15,
          left: -7,
          right: 9,
          bottom: -15
        }
      },
      colors: [config.colors.primary],
      stroke: {
        width: 3
      },
      series: [
        {
          data: [0, 20, 5, 30, 15, 45]
        }
      ],
      tooltip: {
        shared: false,
        intersect: true,
        x: {
          show: false
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
      tooltip: {
        enabled: false
      },
      markers: {
        size: 6,
        strokeWidth: 3,
        strokeColors: 'transparent',
        strokeWidth: 3,
        colors: ['transparent'],
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 5,
            fillColor: cardColor,
            strokeColor: config.colors.primary,
            size: 6,
            shape: 'circle'
          }
        ],
        hover: {
          size: 7
        }
      },
      responsive: [
        {
          breakpoint: 1350,
          options: {
            chart: {
              height: 80
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 100
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 110
            }
          }
        }
      ]
    };
  if (typeof totalProfitLineChartEl !== undefined && totalProfitLineChartEl !== null) {
    const totalProfitLineChart = new ApexCharts(totalProfitLineChartEl, totalProfitLineChartConfig);
    totalProfitLineChart.render();
  }
})();
