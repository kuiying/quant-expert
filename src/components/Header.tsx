import { Activity } from "lucide-react";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-2 rounded-lg">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-white tracking-tighter">
            QUANT<span className="text-blue-500">EXPERT</span>
          </span>
        </div>
      </div>
    </header>
  );
}
