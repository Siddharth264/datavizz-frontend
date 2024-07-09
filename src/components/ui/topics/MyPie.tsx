"use client"
/* eslint-disable react/prop-types */
import { ResponsivePie } from '@nivo/pie'
import { useEffect, useState } from 'react'
export const MyResponsivePie = () => { 
    const [data, setData] = useState([])  
    
    useEffect(()=>{
      const fetchData = async () => {
        const response = await fetch('https://backend-datavizz-1.vercel.app/data/topics')
        const res = await response.json()
        setData(res)
      }
      fetchData()
    },[])
    
    
    return(
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 120, left: 80 }}
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
                    id: 'Industries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Social'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Technological'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'Political'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Economic'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'Environmental'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 60,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'top-to-bottom',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)
}