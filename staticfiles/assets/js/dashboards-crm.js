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
    PrimaryLabel = config.colors_label.primary;

  let chartColors = {
    donut: {
      series1: config.colors.primary,
      series2: '#9055fdb3',
      series3: '#9055fd80'
    }
  };

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

  // Total Sales Line Chart
  // --------------------------------------------------------------------
  const totalSalesChartEl = document.querySelector('#totalSalesChart'),
    totalSalesChartConfig = {
      chart: {
        type: 'line',
        height: 230,
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
          bottom: -15
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
        height: 240,
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
          breakpoint: 1200,
          options: {
            chart: {
              height: 280
            },
            plotOptions: {
              bar: {
                columnWidth: '20%'
              }
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
                fontFamily: 'Inter',
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
            colors: bodyColor,
            fontFamily: 'Inter'
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
              height: 170
            }
          }
        },
        {
          breakpoint: 992,
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

  // Credit Card Validation
  // --------------------------------------------------------------------

  const creditCardPayment = document.querySelector('.credit-card-payment'),
    expiryDatePayment = document.querySelector('.expiry-date-payment'),
    cvvMaskList = document.querySelectorAll('.cvv-code-payment');
  let cleave;

  // Credit Card Cleave Masking
  if (creditCardPayment) {
    cleave = new Cleave(creditCardPayment, {
      creditCard: true,
      onCreditCardTypeChanged: function (type) {
        if (type != '' && type != 'unknown') {
          document.querySelector('.card-payment-type').innerHTML =
            '<img src="' + assetsPath + 'img/icons/payments/' + type + '-cc.png" class="cc-icon-image" height="28"/>';
        } else {
          document.querySelector('.card-payment-type').innerHTML = '';
        }
      }
    });
  }

  // Expiry Date Mask
  if (expiryDatePayment) {
    new Cleave(expiryDatePayment, {
      date: true,
      delimiter: '/',
      datePattern: ['m', 'y']
    });
  }

  // All CVV field
  if (cvvMaskList) {
    cvvMaskList.forEach(function (cvvMaskEl) {
      new Cleave(cvvMaskEl, {
        numeral: true,
        numeralPositiveOnly: true
      });
    });
  }
})();
