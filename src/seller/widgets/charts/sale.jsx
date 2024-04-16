import React, { Component } from "react";
import Chart from "react-apexcharts";

class Sales extends Component {
  constructor(props) {
    super(props);

    this.state = {
        options: {
          chart: {
            id: "basic-bar",
          },
          title: {
            text: "Sales summary",
            color: '#003b6d',
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept'],
          },
          // Set colors property here
          colors: ['#003b6d'],
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '14px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 'bold',
            },
            background: {
              enabled: true,
              foreColor: '#000',
              borderRadius: 2,
              opacity: 0.9,
            },
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91, 12]
          }
        ],
      };
    }

  render() {
    return (
      <div classNamy Sales="app">
        <div className="row">
        <div className="text-center">Summary Sales</div>
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Sales;