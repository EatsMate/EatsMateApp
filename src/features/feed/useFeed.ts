export interface FeedItem {
    id: number;
    user: { name: string; avatar: string };
    restaurant: { name: string; location: string };
    image: string;
    comment: string;
    timeAgo: string;
}

const FEED_DATA: FeedItem[] = [
    {
        id: 1,
        user: { name: "Sarah Jenkins", avatar: "https://i.pravatar.cc/150?u=sarah" },
        restaurant: { name: "Le Petit Bistro", location: "Paris, France" },
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2000",
        comment: "Best truffle pasta ever! The aroma is just insane. 🍝",
        timeAgo: "2h ago",
    },
    {
        id: 2,
        user: { name: "Marc Dubreuil", avatar: "https://i.pravatar.cc/150?u=marc" },
        restaurant: { name: "Burger House", location: "Lyon, France" },
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2000",
        comment: "Le burger parfait existe. Il est ici.",
        timeAgo: "5h ago",
    },
];

export function useFeed() {
    return {
        items: FEED_DATA,
    };
}
