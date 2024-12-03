import { Button } from "@/components";
import { RefreshCw } from "lucide-react";

const WeatherDashboard = () => {
  return (
    <div className="space-y-4">
      {/* Fav Cities */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          variant={"outline"}
          size={"icon"}
          // onClick={handleRefresh}
          // disabled={}
        >
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>

      {/* Current and Hourly Weather */}
    </div>
  );
};

export default WeatherDashboard;
