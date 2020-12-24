import React, { Component } from 'react';
import ColorBar from 'react-color-bar';
 
class Bar extends Component {
    render() {
        const data = [
              {
                  value: 100,
                  color: '#6dc0fd',
                  legendLabel: 'Less than 100',
                  legendValue: "<100",
                  tooltip: 'Data less than 100',
              }, {
                  value: 300,
                  color: '#5b92fe',
                  legendLabel: 'Between 100 and 300',
                  legendValue: "100 <= Data < 300",
                  tooltip: 'Data between 100 and 300',
              }, {
                  value: 500,
                  color: '#6154cb',
                  legendLabel: 'Between 300 and 500',
                  legendValue: "300 <= Data < 500",
                  tooltip: 'Data between 300 and 500',
              }, {
                value: 1000,
                color: '#000099',
                legendLabel: 'Above 500',
                legendValue: ">500",
                tooltip: 'Data above 500',
            },
          ];
          return (
            <div>
                <ColorBar title="Data Usage" data={data} />
            </div>
        );
    }
}
 
export default Bar;