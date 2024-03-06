import React from "react";
import {Line} from "react-chartjs-2";
import "./LineChart.css";

function LineChart({chartData}) {

    const chart_style = {
        width: 240,
        marginLeft: 25,
        paddingTop: 5,
        paddingBottom: 5,
    }

    return (
        <div id={localStorage.darkTheme === "true" ? "dark" : "light"} className="chart_container">
            <Line
                data={chartData}
                style={chart_style}
                options={{
                    elements: {
                        point: {
                            radius: 0,
                        },
                    },
                    scales: {
                        x: {
                            display: false,
                        },
                        y: {
                            display: false,
                        },
                    },
                    parsing: {
                        xAxisKey: "labels",
                        yAxisKey: "data",
                    },
                    plugins: {
                        title: {
                            display: false,
                        },
                        legend: {
                            display: false,
                        },
                        colors: {
                            enabled: false,
                        },
                    },
                    cubicInterpolationMode: 'monotone',
                }}
            />
        </div>
    );
}

export default LineChart;