"use client"
import React, { useEffect, useState } from 'react';

interface CountryData {
  country: string;
  most_frequent_pestle: string;
  most_frequent_sector: string;
  most_frequent_topic: string;
  total_intensity: number;
  total_relevance: number;
}



const CountryDataDisplay = () => {
  const [data, setData] = useState<CountryData[]>([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  useEffect(()=>{
    const fetchData = async () => {
    const result = await fetch('https://backend-datavizz-1.vercel.app/data/metrics')
        const res2 = await result.json()
        setData(res2)
        setSelectedCountry(res2[0].country)
    }
    fetchData()
  },[])

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  const countryOptions = data.map((item, index) => (
    <option key={index} value={item.country}>
      {item.country}
    </option>
  ));
  const [selectedCountryData, setSelectedCountryData] = useState<CountryData>();
  useEffect(() => {
  setSelectedCountryData(data.find((item) => item.country === selectedCountry));
  },[selectedCountry, data])

  return (
    <div className="w-[364px] mx-4 p-4 bg-[#ffffff]  shadow-md rounded-[12px]">
      <select
        id="countrySelect"
        value={selectedCountry}
        onChange={handleCountryChange}
        className="w-full px-3 py-2 border border-[#434339] rounded-md focus:outline-none focus:border-[#adabf6]"
      >
        {countryOptions}
      </select>
      {selectedCountryData && (
         <div className="grid gap-6 pt-4">
         <div className="grid grid-cols-2 gap-6">
           <div className="flex flex-col gap-1">
             <div className="text-sm text-muted-foreground">Most Frequent Pestle</div>
             <div className="font-medium">{selectedCountryData.most_frequent_pestle}</div>
           </div>
           <div className="flex flex-col gap-1">
             <div className="text-sm text-muted-foreground">Hottest Topic</div>
             <div className="font-medium">{selectedCountryData.most_frequent_topic}</div>
           </div>
         </div>
         <div className="grid grid-cols-2 gap-4">
           <div className="flex flex-col gap-1">
             <div className="text-sm text-muted-foreground">Trending Sector</div>
             <div className="font-medium">{selectedCountryData.most_frequent_sector}</div>
           </div>
           <div className="flex flex-col gap-1">
             <div className="text-sm text-muted-foreground">Total Intensity</div>
             <div className="font-medium">{selectedCountryData.total_intensity}</div>
           </div>
         </div>
         <div className="flex flex-col gap-1">
           <div className="text-sm text-muted-foreground">Total Relevance</div>
           <div className="font-medium">{selectedCountryData.total_relevance}</div>
         </div>
       </div>
      )}
    </div>
  );
};

export default CountryDataDisplay;
