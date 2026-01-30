import { Bell } from "lucide-react";
import { FeedCard } from "./components/FeedCard";
import { useFeed } from "./useFeed";

import Logo from "../../assets/EatsMate-Logo.jpeg";

export function FeedScreen() {
    const { items } = useFeed();

    return (
        <div className="flex flex-col h-full bg-[#1A2238]">
            {/* Feed Header */}
            <div className="pt-6 pb-2 px-6 flex items-center justify-between sticky top-0 z-50 bg-[#1A2238]/95 backdrop-blur-xl border-b border-white/5">
                <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg border border-white/10">
                    <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
                </div>
                <h1 className="text-lg font-bold text-white">Moments Food</h1>
                <div className="w-10 h-10 bg-[#1f2942] rounded-full flex items-center justify-center border border-white/10">
                    <Bell className="w-5 h-5 text-white/70" />
                </div>
            </div>

            {/* Filters */}
            <div className="py-4 px-6 flex gap-2 overflow-x-auto no-scrollbar">
                {["Tous", "Pasta", "Sushi", "Burgers", "Vegan"].map((f, i) => (
                    <button key={f} className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${i === 0 ? "bg-[#a00028] text-white shadow-lg shadow-red-900/40" : "bg-[#1f2942] text-white/60 border border-white/5"}`}>
                        {f}
                    </button>
                ))}
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-24">
                {items.map((item) => (
                    <FeedCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
