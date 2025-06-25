"use client";
import React, { useRef } from "react";
import Highcharts from "highcharts/es-modules/masters/highcharts.src.js";
import HighchartsReact from "highcharts-react-official";
import "highcharts/es-modules/masters/modules/map.src.js";
import worldMap from "@highcharts/map-collection/custom/world.geo.json";

const BasicMap = () => {
  const chartRef = useRef<any>(null);
  const highlightedCountries = ["jo", "lb", "eg", "ru", "th", "ae"]; 

 const options: Highcharts.Options = {
  chart: {
    map: worldMap as any,
      events: {
        load: function () {
          const chart = this;
          const serviceCountries = chart.get("service-countries-series");
          if (chart.mapView && serviceCountries && serviceCountries.bounds) {
            chart.mapView.fitToBounds(serviceCountries.bounds, {
              padding: 10,
            });
          }
        },
      },
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
      [1, "#000022"],
    ],
  },
 series: [
  {
    id: "service-countries-series",
    type: "map",
    mapData: {
      ...worldMap,
      features: worldMap.features.filter((f: any) =>
        highlightedCountries.includes(f.properties["hc-key"])
      ),
    } as any,
    name: "Service Countries",
    data: highlightedCountries.map(key => [key, 1]),
    joinBy: "hc-key",
    states: {
      hover: {
        color: "#BADA55",
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function () {
        return highlightedCountries.includes(this.point["hc-key"])
          ? this.point.name
          : null;
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