import React, { memo } from "react";
import { networkData } from "./component/data/data";
import "./MapChart.css";

import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ setTooltipContent }) => {
  return (
    <ComposableMap data-tip=''>
      <ZoomableGroup center={[0, 0]}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geography => (
              <Geography 
                key={geography.rsmKey} 
                geography={geography}
                fill="#DDD"
                stroke="#FFF"
              />
            ))
          }
        </Geographies>

        {networkData.map((data, key) => {
          var radius;
          var fillcolor = "#bbe0f9";
          var strokeColor = "#6dc0fd"

            {
              if(data.data<100){
                radius = 7;
              }else if(data.data>=100 && data.data<300){
                radius = 10;
                fillcolor = "#99c2ff";
                strokeColor = "#5b92fe";
              } else if(data.data>=300 && data.data<500){
                radius = 14;
                fillcolor = "#9cb3e3";
                strokeColor = "#6154cb";

              }else if(data.data>500){
                radius = 20;
                fillcolor = "#8080ff";
                strokeColor = "#000099";

              }
            }

            return (
              <Marker
              key = {key}
              coordinates={data.coordinate}
              onMouseEnter={() => {
                setTooltipContent("Location: "+ data.region + " |  Data Usage: "+ data.data);
              }}
              onMouseLeave={() => {
                setTooltipContent("");
              }}
            >
              <circle
                r={radius}
                fill = {fillcolor}
                stroke = {strokeColor}            
              />
            </Marker>
            );
        })}
        
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default memo(MapChart);
