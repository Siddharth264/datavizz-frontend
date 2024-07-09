"use client"
/* eslint-disable react/prop-types */
import { ResponsiveChoropleth } from '@nivo/geo'
import  worlddata from '@/assets/world_countries.json'
import { useEffect, useState } from 'react'

export const MyResponsiveChoropleth = () => {
    
    const [data, setData] = useState([])  
    useEffect(()=>{
      const fetchData = async () => {
        const response = await fetch('https://backend-datavizz-1.vercel.app/data/countries')
        const res = await response.json()
        setData(res)
      }
      fetchData()
    },[])
    
    
    return (
    <ResponsiveChoropleth
        data={data}
        features={worlddata.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[ 0, 200 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor={"#152538"}
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: '#444444',
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000000',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)
}