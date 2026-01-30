import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useMap } from "./useMap";
import { MapSearchBar } from "./components/MapSearchBar";

const createCustomIcon = (url: string) =>
    L.divIcon({
        html: `
      <div class="relative group">
        <div class="w-12 h-12 rounded-full border-[3px] border-primary overflow-hidden shadow-2xl bg-[#1A2238] relative z-10 transition-transform hover:scale-110">
          <img src="${url}" class="w-full h-full object-cover"/>
        </div>
        <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rotate-45 z-0"></div>
      </div>
    `,
        className: "bg-transparent border-none",
        iconSize: [48, 54],
        iconAnchor: [24, 54],
        popupAnchor: [0, -60],
    });

export function MapScreen() {
    const { reviews, initialCenter } = useMap();

    return (
        <div className="relative w-full h-full bg-[#1A2238]">
            <MapSearchBar />

            <MapContainer
                center={initialCenter}
                zoom={14}
                style={{ width: "100%", height: "100%", zIndex: 0 }}
                zoomControl={false}
                className="map-tiles-dark"
            >
                <TileLayer
                    // Using CartoDB Dark Matter for the theme match
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                />

                {reviews.map((review) => (
                    <Marker
                        key={review.id}
                        position={[review.lat, review.lng]}
                        icon={createCustomIcon(review.avatar)}
                    >
                        <Popup className="custom-popup" closeButton={false}>
                            <div className="p-3 bg-[#1f2942] rounded-2xl min-w-[200px]">
                                <div className="h-24 w-full rounded-xl overflow-hidden mb-3 relative">
                                    <img src={review.image} className="w-full h-full object-cover" />
                                    <div className="absolute top-1 right-1 bg-black/50 px-2 py-0.5 rounded-full text-[10px] items-center flex text-white font-bold">
                                        ⭐ {review.rating}
                                    </div>
                                </div>
                                <h3 className="font-bold text-white text-base leading-none mb-1">{review.name}</h3>
                                <p className="text-xs text-white/60">Recommandé par <span className="text-primary font-bold">{review.friend}</span></p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

            {/* Floating Action Button for Location */}
            <div className="absolute bottom-24 right-6 bg-primary w-14 h-14 rounded-full flex items-center justify-center shadow-2xl z-[9000] cursor-pointer hover:bg-[#a00028] transition-colors border-4 border-[#1f2942]">
                <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                </div>
            </div>
        </div>
    );
}
