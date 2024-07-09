'use client'
/* eslint-disable react/prop-types */
import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react'
export const MyResponsiveBar = () => {
    const [data, setData] = useState([])  
    const [keys, setKeys] = useState<{
        count : number,
        sector : string
    }[]>([])
    useEffect(()=>{
      const fetchData = async () => {
        const response = await fetch('https://backend-datavizz-1.vercel.app/data/summary')
        const res = await response.json()
        setData(res)
        const result = await fetch('https://backend-datavizz-1.vercel.app/data/sectors')
        const res2 = await result.json()
        setKeys(res2)
      }
      fetchData()
    },[])
    return(
    <ResponsiveBar
        data={data}
        keys={keys.map(val=>val.sector)}
        indexBy="region"
        margin={{ top: 50, right: 120, bottom: 50, left: 50 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'Energy'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Financial service'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 6,
            tickRotation: 0,
            legend: 'Region',
            legendPosition: 'middle',
            legendOffset: 36,
            truncateTickAt: 22
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Papers',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 10,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
)
}