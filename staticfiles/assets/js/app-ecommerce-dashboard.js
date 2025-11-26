/**
 * eCommerce Dashboards
 */

'use strict';

(function () {
  let cardColor,
    labelColor,
    headingColor,
    borderColor,
    chartBgColor,
    bodyColor,
    PrimaryLabel = config.colors_label.primary;

  if (isDarkStyle) {
    cardColor = config.colors_dark.cardColor;
    labelColor = config.colors_dark.textMuted;
    headingColor = config.colors_dark.headingColor;
    borderColor = config.colors_dark.borderColor;
    chartBgColor = config.colors_dark.chartBgColor;
    bodyColor = config.colors_dark.bodyColor;
  } else {
    cardColor = config.colors.cardColor;
    labelColor = config.colors.textMuted;
    headingColor = config.colors.headingColor;
    borderColor = config.colors.borderColor;
    chartBgColor = config.colors.chartBgColor;
    bodyColor = config.colors.bodyColor;
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
        height: 80,
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
          breakpoint: 1354,
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
          breakpoint: 840,
          options: {
            chart: {
              height: 80
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

  // Total Sales Semi Donut chart
  // --------------------------------------------------------------------
  const totalSalesSemiDonutChartEl = document.querySelector('#totalSalesSemiDonutChart'),
    totalSalesSemiDonutChartConfig = {
      chart: {
        height: 140,
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
        },
        {
          breakpoint: 840,
          options: {
            chart: {
              height: 140
            }
          }
        },
        {
          breakpoint: 768,
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

  // New Visitors Chart
  // --------------------------------------------------------------------
  const newVisitorsChartEl = document.querySelector('#newVisitorsChart'),
    newVisitorsChartConfig = {
      chart: {
        height: 164,
        type: 'bar',
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
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
          left: -10,
          top: -10
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
        show: false,
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        },
        labels: {
          show: false
        }
      },
      yaxis: { show: false },
      responsive: [
        {
          breakpoint: 1375,
          options: {
            chart: {
              height: 130
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 150
            }
          }
        }
      ]
    };
  if (typeof newVisitorsChartEl !== undefined && newVisitorsChartEl !== null) {
    const newVisitorsChart = new ApexCharts(newVisitorsChartEl, newVisitorsChartConfig);
    newVisitorsChart.render();
  }

  // Website Statistic
  const webVisitorsEl = document.querySelector('#webVisitors'),
    webVisitorsConfig = {
      chart: {
        width: 160,
        parentHeightOffset: 0,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          barHeight: '85%',
          columnWidth: '35px',
          startingShape: 'rounded',
          endingShape: 'rounded',
          borderRadius: 3,
          distributed: true
        }
      },
      colors: [config.colors.primary],
      grid: {
        padding: {
          top: -40,
          left: -12
        },
        yaxis: { lines: { show: false } }
      },
      dataLabels: {
        enabled: false
      },
      series: [
        {
          data: [50, 40, 130, 100, 75, 100, 45, 35]
        }
      ],
      tooltip: {
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
      responsive: [
        {
          breakpoint: 1300,
          options: {
            chart: {
              width: 100
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              width: 150
            }
          }
        }
      ]
    };
  if (typeof webVisitorsEl !== undefined && webVisitorsEl !== null) {
    const webVisitors = new ApexCharts(webVisitorsEl, webVisitorsConfig);
    webVisitors.render();
  }
})();
