import { Search, SlidersHorizontal } from "lucide-react";

export function MapSearchBar() {
    return (
        <div className="absolute top-14 left-4 right-4 z-[9999] flex flex-col gap-3 pointer-events-none">
            {/* Search Field */}
            <div className="flex items-center gap-3 bg-[#1f2942]/90 backdrop-blur-xl p-3 rounded-2xl shadow-xl border border-white/10 pointer-events-auto">
                <Search className="w-5 h-5 text-white/50 ml-1" />
                <input
                    placeholder="Rechercher un restaurant, un ami..."
                    className="bg-transparent flex-1 text-white placeholder:text-white/40 outline-none text-sm font-medium"
                />
                <div className="h-6 w-[1px] bg-white/10" />
                <button className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                    <SlidersHorizontal className="w-5 h-5 text-white/80" />
                </button>
            </div>

            {/* Chips */}
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar pointer-events-auto mask-gradient-r">
                {["🍔 Burgers", "🍣 Sushi", "🍝 Italion", "🥗 Healthy", "⭐ Top Rated"].map((filter) => (
                    <button
                        key={filter}
                        className="whitespace-nowrap px-4 py-2 bg-[#1f2942] border border-white/10 rounded-full text-xs font-bold text-white/90 shadow-lg hover:bg-[#2a3555] transition-colors"
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>
    );
}
