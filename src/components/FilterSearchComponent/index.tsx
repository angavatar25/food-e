import { Filter, SlidersHorizontal } from 'lucide-react';

const FilterSearchComponent = () => {
  return (
    <div className="flex items-center justify-between">
      {/* Left Text Section */}
      <div>
        <p className="text-xs font-bold uppercase text-black">Search Results</p>
        <p className="text-lg font-semibold text-orange-500 mt-1">
          Sorted: Price (Low – High)
        </p>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4 text-orange-500">
        <SlidersHorizontal className="w-6 h-6 cursor-pointer" />
        <Filter className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  )
};

export default FilterSearchComponent;