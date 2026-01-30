import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";
import { Button } from "../../../components/ui/Button";
import type { FeedItem } from "../useFeed";

export function FeedCard({ item }: { item: FeedItem }) {
    return (
        <div className="bg-[#1f2942]/60 backdrop-blur-md border border-white/5 rounded-[2rem] overflow-hidden mb-6 shadow-xl">
            {/* Header */}
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-0.5 bg-gradient-to-br from-primary to-transparent rounded-full">
                        <img src={item.user.avatar} className="w-10 h-10 rounded-full object-cover border-2 border-[#1f2942]" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm">{item.user.name}</h4>
                        <p className="text-primary text-xs font-medium">at {item.restaurant.name}</p>
                    </div>
                </div>
                <button className="text-white/40">
                    <MoreHorizontal className="w-5 h-5" />
                </button>
            </div>

            {/* Image */}
            <div className="w-full aspect-[4/3] bg-black/20 relative">
                <img src={item.image} className="w-full h-full object-cover" loading="lazy" />
            </div>

            {/* Content */}
            <div className="p-5 pt-4 space-y-3">
                <div className="">
                    <p className="text-white text-sm leading-relaxed">
                        <span className="font-bold text-[#a00028] mr-2">{item.user.name.split(' ')[0]}:</span>
                        {item.comment}
                    </p>
                    <p className="text-white/30 text-[10px] mt-2 font-medium uppercase tracking-wide">{item.restaurant.location} • {item.timeAgo}</p>
                </div>

                <div className="h-[1px] bg-white/5 w-full my-2" />

                <div className="flex items-center justify-between pt-1">
                    <div className="flex gap-4">
                        <button className="text-white/60 hover:text-white transition-colors">
                            <Heart className="w-6 h-6" />
                        </button>
                        <button className="text-white/60 hover:text-white transition-colors">
                            <MessageCircle className="w-6 h-6" />
                        </button>
                    </div>
                    <Button variant="primary" className="h-9 px-5 rounded-xl text-xs bg-[#a00028]">
                        Vouloir tester
                    </Button>
                </div>
            </div>
        </div>
    );
}
