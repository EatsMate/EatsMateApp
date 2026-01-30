export interface MapReview {
    id: number;
    lat: number;
    lng: number;
    name: string;
    friend: string;
    avatar: string;
    rating: number;
    image: string;
}

const MOCK_REVIEWS: MapReview[] = [
    { id: 1, lat: 48.8566, lng: 2.3522, name: "Le Petit Bain", friend: "Sophie", avatar: "https://i.pravatar.cc/150?u=sophie", rating: 5, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=200" },
    { id: 2, lat: 48.8626, lng: 2.3376, name: "Kodawari Ramen", friend: "Thomas", avatar: "https://i.pravatar.cc/150?u=thomas", rating: 4, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=200" },
    { id: 3, lat: 48.8489, lng: 2.3499, name: "Pizzeria Popolare", friend: "Julie", avatar: "https://i.pravatar.cc/150?u=julie", rating: 5, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=200" },
];

export function useMap() {
    return {
        reviews: MOCK_REVIEWS,
        initialCenter: [48.8566, 2.3522] as [number, number],
    };
}
