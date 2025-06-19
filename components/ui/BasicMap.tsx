"use client";
import React, { useRef } from "react";
import Highcharts from "highcharts/es-modules/masters/highcharts.src.js";
import HighchartsReact from "highcharts-react-official";
import "highcharts/es-modules/masters/modules/map.src.js";
import worldMap from "@highcharts/map-collection/custom/world.geo.json";

const BasicMap = () => {
  const chartRef = useRef<any>(null);

  const highlightedCountries = ["jo", "lb", "eg", "ru", "th"]; // Only show these

  const options: Highcharts.Options = {
    chart: {
      map: worldMap as any,
    },
    title: { text: "" },
    subtitle: { text: "" },
    mapNavigation: {
      enabled: true,
      buttonOptions: { verticalAlign: "bottom" },
    },
    colorAxis: {
      min: 0,
      stops: [
        [0, "#EFEFFF"],
        [0.5, "#4444FF"],
        [1, "#000022"]
      ],
    },
    series: [
      {
        type: "map",
        mapData: worldMap as any,
        name: "Service Countries",
        data: [
          ["jo", 1], // Jordan
          ["lb", 1], // Lebanon
          ["eg", 1], // Egypt
          ["ru", 1], // Russia
          ["th", 1], // Thailand
        ],
        joinBy: "hc-key",
        states: {
          hover: {
            color: "#BADA55",
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function () {
            return highlightedCountries.includes(this.point["hc-key"]) ? this.point.name : null;
          },
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <HighchartsReact
        highcharts={Highcharts}
        constructorType="mapChart"
        options={options}
        ref={chartRef}
      />
    </div>
  );
};

export default BasicMap;