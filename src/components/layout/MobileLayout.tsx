import React from "react";

interface MobileLayoutProps {
    children: React.ReactNode;
}

export function MobileLayout({ children }: MobileLayoutProps) {
    return (
        <div className="flex justify-center w-full h-full bg-black/90">
            <div className="w-full max-w-[430px] h-full bg-background relative flex flex-col overflow-hidden shadow-2xl sm:rounded-[3rem] sm:my-4 sm:h-[calc(100%-2rem)] sm:border-[8px] sm:border-gray-800">
                {/* Dynamic Island / Notch Placeholder */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-50 sm:block hidden" />

                {/* Status Bar Time Placeholder */}
                <div className="absolute top-2 left-6 text-white text-xs font-bold z-50 sm:block hidden">9:41</div>
                <div className="absolute top-2 right-6 flex gap-1 z-50 sm:block hidden">
                    <div className="w-4 h-3 bg-white rounded-sm" />
                    <div className="w-3 h-3 bg-white rounded-sm" />
                </div>

                {children}

                {/* Home Indicator */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-50" />
            </div>
        </div>
    );
}
