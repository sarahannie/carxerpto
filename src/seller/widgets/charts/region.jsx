
import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const SalesRegionChart = () => {
    // Define sales data for each state in the US
    const stateSalesData = {
        'AL': 500,
        'AK': 200,
        'AZ': 700,
        'AR': 300,
        'CA': 1000,
        'CO': 400,
        'CT': 450,
        'DE': 350,
        // Add sales data for other states as necessary
    };

    const stateNameMapping = {
        'AL': 'Alabama',
        'AK': 'Alaska',
        'AZ': 'Arizona',
        'AR': 'Arkansas',
        'CA': 'California',
        'CO': 'Colorado',
        'CT': 'Connecticut',
        'DE': 'Delaware',
        // Add the rest of the states...
    };

    // Convert sales data into arrays for locations and values
    const locations = Object.keys(stateSalesData);
    const values = Object.values(stateSalesData);

    const stateFullNames = locations.map(abbr => stateNameMapping[abbr]);

    // Define the initial state
    const [chartData] = useState({
        data: [{
            type: 'choropleth',
            locationmode: 'USA-states',
            locations: locations,
            z: values,
            text: stateFullNames,
            colorscale: '#003b6d',
            colorbar: {
                title: 'Sales',
                orientation: 'horizontally' // Horizontal indication
            }
        }],
        
        layout: {
            title: 'Sales Region Chart (US States)',
            geo: {
                scope: 'usa'
            },
            height: 400, // Set the height of the map
            width: '100%',
            // Customize the color bar to be horizontal
            colorbar: {
                orientation: 'horizontally'
            },
            // Customize the position of the map on top
            margin: {
                t: 50, // Adjust top margin
                r: 0,
                b: 50,
                l: 0,
            },
        }
    });

    return (
        <div>
            <Plot
                data={chartData.data}
                layout={chartData.layout}
                style={{ width: '80%', height: '400px' }}
            />
        </div>
    );
};

export default SalesRegionChart;