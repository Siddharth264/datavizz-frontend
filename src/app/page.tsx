import { MyResponsiveChoropleth } from "@/components/ui/region/Cleropeth";
import { MyResponsiveBar } from "@/components/ui/sectors/BarChart";
import { SectorsPie } from "@/components/ui/sectors/PieChart";
import { Sourceline } from "@/components/ui/sources/SourceLine";

export default function Home() {
  return (
    <div className="min-h-screen pt-2 bg-[#ffffff]">
      <div className="flex items-center">
      <div className="w-[440px] h-[400px] m-6 p-3 border border-[#b7b7a4] rounded-[14px]">
        <h1 className="text-sm font-semibold text-center mb-6">Distribution among sectors</h1>
        <SectorsPie />
      </div>
      <div className="w-[760px] h-[400px] border border-[#b7b7a4] rounded-[14px] p-4">
        <h1 className="text-sm font-semibold text-center">Distribution among regions and sectors</h1>
        <MyResponsiveBar/>
      </div>
      </div>
      <div className="flex">
        <div className="w-[750px] h-[400px] m-6 border border-[#b7b7a4] rounded-[14px] p-5">
          <MyResponsiveChoropleth/>
        </div>
        <div className="w-[400px] h-[400px] m-6 overflow-hidden">
          <Sourceline/>
        </div>
      </div>
     
    </div>
  );
}


