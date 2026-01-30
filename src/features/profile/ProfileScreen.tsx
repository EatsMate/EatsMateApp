import { Settings, UserPlus, Pencil } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { useProfile } from "./useProfile";

export function ProfileScreen() {
    const { user, photos } = useProfile();

    return (
        <div className="flex flex-col h-full bg-[#1A2238] overflow-y-auto no-scrollbar pb-24">
            {/* Top actions */}
            <div className="flex justify-between p-6">
                <div className="text-white font-bold text-lg">9:41</div>
                <div className="flex gap-2">
                    <div className="w-10 h-1 rounded-sm bg-white" />
                    <div className="w-1 h-3 rounded-sm bg-white" />
                </div>
            </div>

            {/* Header Profile */}
            <div className="flex flex-col items-center pt-2 pb-8 px-6 relative">

                <div className="relative mb-4">
                    <div className="w-28 h-28 rounded-full border-4 border-[#a00028] p-1 bg-[#1A2238] overflow-hidden relative">
                        <div className="absolute inset-0 bg-[#FFDAB9] flex items-center justify-center">
                            <div className="w-16 h-24 bg-white rounded-xl shadow-lg border border-gray-200" />
                        </div>
                    </div>
                    <button className="absolute bottom-0 right-0 bg-[#a00028] p-2 rounded-full border-4 border-[#1A2238]">
                        <Pencil className="w-3 h-3 text-white" />
                    </button>
                </div>

                <h2 className="text-2xl font-bold text-white mb-1">{user.name}</h2>
                <p className="text-white/50 text-sm mb-6 font-medium">{user.bio}</p>

                {/* Stats */}
                <div className="flex justify-around w-full bg-[#1f2942]/50 rounded-3xl p-4 mb-8 border border-white/5 mx-4 max-w-sm">
                    {[
                        { label: "REVIEWS", value: user.stats.reviews },
                        { label: "AMIS", value: user.stats.friends, highlight: true },
                        { label: "RESTOS", value: user.stats.restos },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center px-4">
                            <div className={`text-xl font-bold ${stat.highlight ? "text-[#a00028]" : "text-white"}`}>{stat.value}</div>
                            <div className="text-[10px] text-white/40 font-bold tracking-widest mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 w-full max-w-sm px-2">
                    <Button variant="primary" className="flex-1 h-12 text-sm rounded-2xl bg-[#a00028] hover:opacity-90 shadow-lg shadow-red-900/20">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Ajouter
                    </Button>
                    <Button variant="secondary" className="flex-1 h-12 text-sm rounded-2xl bg-[#1f2942] text-white hover:bg-[#2a3555]">
                        <Settings className="w-4 h-4 mr-2" />
                        Paramètres
                    </Button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/10 mx-6 mb-1">
                {["Récents", "Favoris", "Listes"].map((tab, i) => (
                    <div key={tab} className={`flex-1 text-center pb-3 text-sm font-bold cursor-pointer relative ${i === 0 ? "text-[#a00028]" : "text-white/40"}`}>
                        {tab}
                        {i === 0 && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#a00028] rounded-t-full" />}
                    </div>
                ))}
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-3 gap-0.5">
                {photos.map((photo, i) => (
                    <div key={i} className="aspect-square bg-white/5 relative group cursor-pointer overflow-hidden">
                        <img src={photo} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        {i % 3 === 0 && <div className="absolute bottom-1 right-1 bg-black/40 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] text-white font-bold flex items-center gap-1">⭐ 4.8</div>}
                        {i === 3 && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                <div className="text-4xl font-bold text-white drop-shadow-lg">4</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Quick Nav (for screenshot match) */}
            <div className="h-20" />
        </div>
    );
}
