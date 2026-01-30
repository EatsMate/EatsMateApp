import { Map, UtensilsCrossed, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "../../lib/utils";

export function BottomNav() {
    const navigate = useNavigate();
    const location = useLocation();

    const TABS = [
        { name: "Explore", icon: Map, path: "/home" },
        { name: "Feed", icon: UtensilsCrossed, path: "/feed" },
        { name: "Profil", icon: User, path: "/profile" },
    ];

    return (
        <div className="absolute bottom-6 left-6 right-6 h-16 bg-[#1f2942]/90 backdrop-blur-xl border border-white/5 rounded-3xl flex items-center justify-around shadow-2xl z-[1000] ring-1 ring-white/10">
            {TABS.map((tab) => {
                const isActive = location.pathname === tab.path;
                return (
                    <button
                        key={tab.name}
                        onClick={() => navigate(tab.path)}
                        className="flex flex-col items-center justify-center w-12 h-12 relative group"
                    >
                        {isActive && (
                            <div
                                className="absolute inset-0 bg-primary/20 rounded-2xl blur-md transition-all duration-300"
                            />
                        )}
                        <tab.icon
                            className={cn(
                                "w-6 h-6 transition-all duration-300 relative z-10",
                                isActive ? "text-primary scale-110" : "text-white/40 group-hover:text-white/60"
                            )}
                        />
                    </button>
                );
            })}
        </div>
    );
}
