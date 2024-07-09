'use client'
import { ResponsivePie } from '@nivo/pie'
import { useEffect, useState } from 'react'

export const SectorsPie = () => {
    
    const [data, setData] = useState([])
      
      useEffect(()=>{
        const fetchData = async () => {
          const response = await fetch('https://backend-datavizz-1.vercel.app/data/sectorspie')
          const res = await response.json()
          setData(res)
        }
        fetchData()
      },[])
console.log(data);

return (

    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 10, bottom: 80, left: 70 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
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
                    id: 'Financial services'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Manufacturing'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'Aerospace & defence'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Retail'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'Government'
                },
                id: 'lines'
            }
        ]}
        // legends={[
        //     {
        //         anchor: 'right',
        //         direction: 'column',
        //         justify: false,
        //         translateX: 20,
        //         translateY: 10,
        //         itemsSpacing: 10,
        //         itemWidth: 70,
        //         itemHeight: 18,
        //         itemTextColor: '#999',
        //         itemDirection: 'left-to-right',
        //         itemOpacity: 1,
        //         symbolSize: 18,
        //         symbolShape: 'circle',
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemTextColor: '#000'
        //                 }
        //             }
        //         ]
        //     }
        // ]}
    />
)
}