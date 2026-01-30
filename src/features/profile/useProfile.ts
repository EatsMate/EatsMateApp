export const PROFILE_PHOTOS = [
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=400",
    "https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=400",
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=400",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400",
    "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=400",
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=400",
    "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=400",
];

export function useProfile() {
    return {
        user: {
            name: "Julien Lefebvre",
            bio: "Sushi lover & vin enthousiaste 🍷",
            avatar: "https://i.pravatar.cc/150?u=julien",
            stats: {
                reviews: 48,
                friends: "1.2k",
                restos: 85,
            }
        },
        photos: PROFILE_PHOTOS,
    };
}
