import { LineGraph } from "@/components/components/LineGraph";
import CountryDataDisplay from "@/components/ui/countries/CountryDataDisplay";
import BarChart from "@/components/ui/topics/MyBar";
import { MyResponsivePie } from "@/components/ui/topics/MyPie";

const page = () => {
  return (
    <div className="min-h-screen pt-2 bg-[#ffffff]">
      <div className="flex gap-4  items-center">
        <div className="w-[400px] h-[350px] m-2 p-3 border border-[#b7b7a4] rounded-[14px]">
          <h1 className="text-2xl font-semibold text-center mb-2">
            Distribution among topics
          </h1>
          <MyResponsivePie />
        </div>
      <div className="flex  gap-4  items-center">      
           <LineGraph/>
      </div>
        <div className="w-[400px] h-[350px] flex flex-col gap-3 items-center justify-evenly  border border-[#b7b7a4] rounded-[14px] p-4">
          <h1 className="text-2xl font-semibold text-center">
            Countrywise Summary
          </h1>
          <CountryDataDisplay />
        </div>
      </div>
      <div className="flex gap-4 max-h-[400px]  items-center overflow-hidden">
        <div className="w-[400px] h-[400px] m-2 p-3 border border-[#b7b7a4] rounded-[14px]">
          <h1 className="text-2xl font-semibold text-center mb-2">
            Hottest Topics
          </h1>
          <div className="max-w-[400px] max-h-[400px] overflow-hidden pt-3">
         <BarChart/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default page;
